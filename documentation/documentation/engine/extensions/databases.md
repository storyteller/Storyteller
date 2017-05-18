<!--title: Relational Databases -->

New for the Storyteller 4.2 release cycle is an addon library distributed via Nuget called `Storyteller.RDBMS` that adds recipes for driving
and verifying the state of relational databases within your system under test. As of now, the Storyteller.RDBMS library
comes out of the box for support for Sql Server and Postgresql, but you can add adapters for other database engines.

See also Jeremy's blog post [A Concept for Integrated Database Testing within Storyteller](https://jeremydmiller.com/2017/03/06/a-concept-for-integrated-database-testing-within-storyteller/) for more information and a contextual sample for this add on. The complete samples for this add on are in the [DatabaseSamples project within GitHub](https://github.com/storyteller/Storyteller/tree/master/src/DatabaseSamples).

To get started, just install the `Storyteller.RDBMS` library to your Storyteller specification pojrect via Nuget. The next step
is to write `DatabaseFixture` classes in your specification project to drive or check your database.

You have two varieties out of the box, the Postgresql version:

<[sample:PostgresqlFixture]>

or the Sql Server version:

<[sample:SqlServerFixture]>

As part of your effort, one way or another you need to tell the current `ISpecContext` for the currently executing specification
what the connection string is to the database you need to connect to. In the sample project, I did that with the little `DatabaseExtension`
in the `ISystem` for that project:

<[sample:DatabaseSystem]>

Alternatively, if you need to connect to different databases within a specification suite, you can also set the
connection string during tests like so:

<[sample:programmatically-connecting-to-the-database]>

Do note however that the connection string is global for the 

## Connecting to other Database Engines

To connect to another database engine, you need two pieces. First, an implementation of the `ISqlDialect` interface:

<[sample:ISqlDialect]>

You will probably need to implement a custom `ParameterCell`. Here's the version for Sql Server:

<[sample:SqlServerParameterCell]>

and the version for Postgresql is a bit more complicated:

<[sample:NpgsqlParameterCell]>


## Calling Stored Procedures

To call a stored procedure from Storyteller, there's a little helper method to declare grammars that can execute a stored procedure with parameters and optionally check the single value result of the function. It does not yet support output parameters.

As an example, let's say you have this very small Postgresql database taken from the ["Hilo" identity support
in the Marten library](http://jasperfx.github.io/marten/documentation/documents/identity/sequential/):

```
DROP TABLE IF EXISTS public.mt_hilo CASCADE;
CREATE TABLE public.mt_hilo (
	entity_name			varchar CONSTRAINT pk_mt_hilo PRIMARY KEY,
	hi_value			bigint default 0
);

CREATE OR REPLACE FUNCTION public.mt_get_next_hi(entity varchar) RETURNS int AS $$
DECLARE
	current_value bigint;
	next_value bigint;
BEGIN
	select hi_value into current_value from public.mt_hilo where entity_name = entity;
	IF current_value is null THEN
		insert into public.mt_hilo (entity_name, hi_value) values (entity, 0);
		next_value := 0;
	ELSE
		next_value := current_value + 1;
		update public.mt_hilo set hi_value = next_value where entity_name = entity;
	END IF;
```

With that, we can write a grammar within a `DatabaseFixture` to exercise the `mt_get_next_hi` function and verify the results:

<[sample:GetNextHi]>

A couple things to note because this is definitely non-idiomatic .Net:

* You definitely have to return `IGrammarSource` from the method to tell Storyteller to build the underlying
  `IGrammar` using the signature of the method
* The method is **only executed once** when the `Fixture` class is first created in order to build out the runtime `IGrammar`
* The method parameters are only used to determine the name and type of the grammar cells, and that's why you never see the 
  parameters used anywhere

Here's a specification that uses the `GetNextHi` grammar (and for the record, the CSS is a wee bit better in the real client):

<[spec-result:Hilo Objects/Read and Write]>

You can also expose that grammar above in a <[linkto:documentation/engine/grammars/tables;title=table grammar]> like this:

<[sample:GetNextHiTable]>


## Parameterized Sql

You can also use parameterized Sql instead of stored procedures in a very similar way like this:

<[sample:InsertRows]>

The only real difference between `Sql()` and `Sproc()` is the ADO.Net [CommandType](https://msdn.microsoft.com/en-us/library/system.data.commandtype(v=vs.110).aspx) on the underlying command.


## Verifying Tabular Data

You can also utilize Storyteller's <[linkto:documentation/engine/grammars/sets;title=set verification]> functionality against database results. To check the results from a Sql statement in a set verification table, use the `VerifyRows()` syntax shown below:

<[sample:CheckTheRows]>

Used in a specification, that grammar looks like this:

<[spec-result:Hilo Objects/Read and Write]>

`VerifyRows()` has additional options for calling stored procedures and forcing the set verification to consider the order of the results 
(it does not validate order by default).

If you need to pass parameters into the query, you can use the `Parameter()` method in the `VerifyRows` fluent interface like this:

<[sample:HigherThanPage]>

Behind the scenes this builds a <[linkto:documentation/engine/grammars/paragraphs;title=paragraph grammar]> that has:

1. A <[linkto:documentation/engine/grammars/sentences;title=sentence grammar]> that actually executes the Sql statement
1. A set verification grammar that validates the expected results from running the Sql statement

Used in a specification, the grammar above looks like this:

<[spec-result:Hilo Objects/Row verification with parameters]>

Finally, if you need to apply a parameter to the fetching Sql command that is not an input to the grammar, you have this syntax:

<[sample:higherthanpage-with-parameter]>

Used in a specification, it looks like this:

<[spec-result:Hilo Objects/Using an External Parameter]>


## Checking that a Sql Statement Returns No Data

For a shorthand way of asserting that a table or view returns no rows, you can use this syntax to create
a <[linkto:documentation/engine/grammars/facts;title=fact grammar]>:

<[sample:NoRows]>

That grammar is used in this specification:

<[spec-result:Hilo Objects/Read and Write]>





## Transactions




