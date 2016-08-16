using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Model;

namespace StoryTeller.Testing.Grammars.ObjectBuilding
{
    /*
     * do from Fixture.CreateNewObject
     * do from Fixture.CreateObject<T>
     * 
     * 
     */

    
    public class Creating_object_data_specs : SpecRunningContext
    {
        [Fact]
        public void create_object_with_another_grammar()
        {
            execute(@"
=> CreateLocation
* UsingLoadObjectBy: X=1, Y=2
* X#1: X=1
* Y#2: Y=2
");

            CountsShouldBe(2, 0, 0, 0);

            Step("1").Cell("X").Succeeded();
            Step("2").Cell("Y").Succeeded();
        }

        [Fact]
        public void create_object_with_object_is()
        {
            execute(@"
=> CreateLocation
* PreSetTheX: x=11
* UsingObjectIs: Y=13
* X#1: X=11
* Y#2: Y=13

");

            CountsShouldBe(2, 0, 0, 0);

            Step("1").Cell("X").Succeeded();
            Step("2").Cell("Y").Succeeded();
        }

        [Fact]
        public void set_the_default_value_with_SetProperty()
        {
            var cell = ModelFor<Paragraph>("CreateLocation", "UsingLoadObjectBy")
                .cells.FirstOrDefault(x => x.Key == "X");

            cell.DefaultValue.ShouldBe("23");
        }

        [Fact]
        public void set_the_default_value_on_with_input()
        {
            var cell = ModelFor<Paragraph>("CreateLocation", "UsingWithInput")
                .cells.FirstOrDefault(x => x.Key == "data");

            cell.DefaultValue.ShouldBe("1;2");
        }

        [Fact]
        public void set_all_primitive_properties()
        {
            execute(@"
=> CreateLocation
* AllProps: X=7, Y=8, Description=What?
* X: X=7
* Y: Y=8
* Description: Description=What?
");

            CountsShouldBe(3, 0, 0, 0);
        }

        [Fact]
        public void use_with_input()
        {
            execute(@"
=> CreateLocation
* UsingWithInput: data=3;4
* X: X=3
* Y: Y=4
");

            CountsShouldBe(2, 0, 0, 0);
        }
    }

    public class CreateLocationFixture : Fixture
    {
        private Location _location;

        
        public IGrammar UsingWithInput()
        {
            return CreateNewObject<Location>("The location is", _ =>
            {
                _.WithInput<string>("data is {data}").Configure((location, data) =>
                {
                    var parts = data.Split(';');

                    location.X = int.Parse(parts.First());
                    location.Y = int.Parse(parts.Last());
                }).DefaultValue("1;2");

                _.Do(x => _location = x);
            });
        }
         

        public void LoadLocation()
        {
            _location = new Location();
            Context.State.CurrentObject = _location;
        }

        
        public IGrammar AllProps()
        {
            return CreateNewObject<Location>("The location is", _ =>
            {
                _.SetAllPrimitivePropertiesSpecificToThisType();
                _.Do(x => _location = x);
            });
        }

        
        public IGrammar UsingLoadObjectBy()
        {
            return CreateObject<Location>("The location is",_ =>
            {
                _.LoadObjectBy = this["LoadLocation"];
                _.SetProperty(x => x.X).DefaultValue("23");
                _.SetProperty(x => x.Y);
            });
        }
        


        public void PreSetTheX(int x)
        {
            Context.State.Store(x);
        }
        
        
        public IGrammar UsingObjectIs()
        {
            return CreateObject<Location>("The location is", _ =>
            {
                _.ObjectIs = c => new Location {X = Context.State.Retrieve<int>()};
                _.SetProperty(x => x.Y);
                _.Do(location => _location = location);
            });
        }
         
        
        [FormatAs("X should be {X}")]
        public int X()
        {
            return _location.X;
        }

        [FormatAs("Y should be {Y}")]
        public int Y()
        {
            return _location.Y;
        }

        [FormatAs("Description is {Description}")]
        public string Description()
        {
            return _location.Description;
        }

        
    }

    public class Location
    {
        public int X { get; set; }
        public int Y { get; set; }
        public string Description { get; set; }

    }
}