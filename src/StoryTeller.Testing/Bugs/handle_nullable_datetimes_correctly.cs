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
* TheApprovalDateIs#2: expected=TODAY
* TheApprovalDateWithValueIs#3: expected=NULL
* TheApprovalDateWithValueIs#4: expected=TODAY
");

            Step("1").Cell("expected").Succeeded();
            Step("2").Cell("expected").FailedWithActual("NULL");
            Step("3").Cell("expected").FailedWithActual(DateTime.Now.Date.ToString());
            Step("4").Cell("expected").Succeeded();
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


        [FormatAs("The TheApprovalDateWithValueIs is {expected}")]
        public DateTime? TheApprovalDateWithValueIs()
        {
            DateTime? approvalDate = DateTime.Now.Date;
            return approvalDate;
        }
    }
 
}
