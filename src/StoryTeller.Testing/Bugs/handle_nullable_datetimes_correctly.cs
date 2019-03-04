using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using Baseline.Dates;
using Samples.Fixtures;
using Specifications.Fixtures.Docs;
using StoryTeller.Grammars.Sets;
using StoryTeller.Model;
using StoryTeller.Results;
using Xunit;

namespace StoryTeller.Testing.Bugs
{
    public class Bug_757_handle_nullable_datetimes_correctly : SpecRunningContext
    {


        [Fact]
        public void parse_null_as_valid_nullable_datetime()
        {
            execute(@"
Name: Testing nullable DateTimes
=> NullableDateTime
* TheApprovalDateIs#1: expected=NULL
");
            TheStepsThatExecutedWere("1");
            Step("1").StatusWas(ResultStatus.ok);

        }
    }

    public class NullableDateTimeFixture : Fixture
    {
        [FormatAs("The ApprovalDate is {expected}")]
        public DateTime? TheApprovalDateIs()
        {
            DateTime? approvalDate = null;
            return approvalDate;
        }
    }
 
}
