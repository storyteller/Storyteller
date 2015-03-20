using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Testing.EndToEndExecution
{
    [TestFixture]
    public class fixture_do_method_specs : SpecRunningContext
    {
        [Test]
        public void run_do_with_argument()
        {
            DoActionsFixture.RecordedText = null;

            execute(@"
Name: Do
=> DoActions
* SetText#1: text=Hello!
");

            Step("1").StatusWas(ResultStatus.ok);

            DoActionsFixture.RecordedText.ShouldEqual("Hello!");
        }

        [Test]
        public void run_do_with_argument_against_context()
        {
            execute(@"
Name: Do
=> DoActions
* SetState#1: number=13
");

            Step("1").StatusWas(ResultStatus.ok);
            SpecContextState.Retrieve<int>("number")
                .ShouldEqual(13);
        }

        [Test]
        public void run_do_with_argument_and_service()
        {
            var service = new RecordingService();
            Services.Add(service);

            execute(@"
Name: Do
=> DoActions
* CallService#1: number=13.2
");

            Step("1").StatusWas(ResultStatus.ok);

            service.Number.ShouldEqual(13.2);
        }

        [Test]
        public void action_grammar_of_T_can_build_grammar_model()
        {
            var model = ModelFor<Sentence>("DoActions", "CallService");
            model.format.ShouldEqual("Set the number in the service to {number}");
            var cell = model.cells.Single();

            cell.Key.ShouldEqual("number");
            cell.Type.ShouldEqual(typeof (double));
        }
    }

    public class RecordingService
    {
        public double Number;
    }

    public class DoActionsFixture : Fixture
    {
        public static string RecordedText;

        public DoActionsFixture()
        {
            this["SetText"] = Do<string>("Set the text to {text}", x => RecordedText = x);
            this["SetState"] = Do<int>("Set the stored number to {number}", (x, context) =>
            {
                context.State.Store<int>("number", x);
            });

            this["CallService"] = Do<double, RecordingService>("Set the number in the service to {number}",
                (number, service) =>
                {
                    service.Number = number;
                });
        }
    }
}