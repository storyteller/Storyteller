<!--Title: Specification Expiration-->

You can optionally set an _expiration date_ on a specification as a forceful reminder to review an existing specification for continued validity. If an 
expired specification is executed in a <[linkto:documentation/ci;title=continuous integration build at the command line]>, it will fail immediately with 
the specific message "This test has expired and needs to be updated."

After evaluating the specification, you can either choose to eliminate the specification if it is obsolete or reset or clear the expiration date to mark the specification as valid.

This feature may be useful if you support a system that has rapidly changing business rules or like us, has to change with new government regulations on a frequent basis.

See the <[linkto:documentation/ui/spec-editor]> for more information on editing specifications.