using Xunit;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Testing.EndToEndExecution
{
    
    public class fixture_fact_methods_specs : SpecRunningContext
    {
        [Fact]
        public void execute_simple_fact_positive()
        {
            FactFixture.IsSo = true;
            
            execute(@"
Name: whatever
=> Fact
* CheckIsSo#1
* CheckIsNotSo#2
");

            Step("1").StatusWas(ResultStatus.success);
            Step("2").StatusWas(ResultStatus.failed);
        }

        [Fact]
        public void execute_fact_by_context()
        {
            execute(@"
Name: whatever
=> Fact
* SetState: state=Texas
* StateIsTexas#1
* SetState: state=Missouri
* StateIsTexas#2
");

            Step("1").StatusWas(ResultStatus.success);
            Step("2").StatusWas(ResultStatus.failed);
        }

        [Fact]
        public void execute_fact_by_service()
        {
            Services.Add(new CheckService{On = true});

            execute(@"
Name: whatever
=> Fact
* ServiceIsOn#1
* ServiceIsOff#2
");

            Step("1").StatusWas(ResultStatus.success);
            Step("2").StatusWas(ResultStatus.failed);
        }

        [Fact]
        public void build_the_cell_model()
        {
            var sentence = ModelFor<Sentence>("Fact", "CheckIsSo");
            sentence.format.ShouldBe("Check is so");

        }
    }

    public class CheckService
    {
        public bool On;
    }

    // SAMPLE: FactFixture
    public class FactFixture : Fixture
    {
        public static bool IsSo = false;

        public FactFixture()
        {
            this["CheckIsSo"] = Fact("Check is so")
                .VerifiedBy(() => IsSo);

            this["CheckIsNotSo"] = Fact("Check is not so")
                .VerifiedBy(() => !IsSo);

            this["SetState"] 
                = Do<string>("Set state to {state}", (text, c) => c.State.Store("state", text));


            this["StateIsTexas"] =
                Fact("Check that the state is Texas")
                .VerifiedBy(c => c.State.Retrieve<string>("state") == "Texas");


            this["ServiceIsOn"] = Fact("Check service is on")
                .VerifiedBy<CheckService>(s => s.On);

            this["ServiceIsOff"] = Fact("Check service is off")
                .VerifiedBy<CheckService>(s => !s.On);
        }
    }
    // ENDSAMPLE

}