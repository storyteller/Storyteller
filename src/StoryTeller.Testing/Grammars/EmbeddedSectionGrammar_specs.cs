using System.Collections.Generic;
using NUnit.Framework;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Testing.Grammars
{
    [TestFixture]
    public class EmbeddedSectionGrammar_specs : SpecRunningContext
    {
        [SetUp]
        public void SetUp()
        {
            RecordingFixture.Traced.Clear();
        }

        [Test]
        public void runs_all_nested_steps_setup_and_teardown()
        {
            execute(@"
Name: Embedded
=> EmbeddedGrammar
* Colors
  -> Recording
  * Blue#1
  * Green#2
  * Red#3

");

            RecordingFixture.Traced.ShouldHaveTheSameElementsAs("SetUp", "Blue", "Green", "Red", "TearDown");
            Step("1").StatusWas(ResultStatus.ok);
            Step("2").StatusWas(ResultStatus.ok);
            Step("3").StatusWas(ResultStatus.ok);
        }

        [Test]
        public void runs_all_nested_steps_setup_and_teardown_with_a_before_action()
        {
            execute(@"
Name: Embedded
=> EmbeddedGrammar
* BeforeColors
  -> Recording
  * Blue#1
  * Green#2
  * Red#3

");

            RecordingFixture.Traced.ShouldHaveTheSameElementsAs("Before", "SetUp", "Blue", "Green", "Red", "TearDown");
            Step("1").StatusWas(ResultStatus.ok);
            Step("2").StatusWas(ResultStatus.ok);
            Step("3").StatusWas(ResultStatus.ok);
        }

        [Test]
        public void builds_the_model()
        {
            var section = ModelFor<EmbeddedSection>("EmbeddedGrammar", "Colors");
            section.title.ShouldBe("In the recording fixture");
            section.fixture.key.ShouldBe("Recording");
            section.fixture.FindGrammar("Red").ShouldNotBeNull();
        }
    }

    public class EmbeddedGrammarFixture : Fixture
    {
        public EmbeddedGrammarFixture()
        {
            this["Colors"] = Embed<RecordingFixture>("In the recording fixture");
            this["BeforeColors"] = Embed<RecordingFixture>("In the recording fixture")
                .Before(c =>
                {
                    RecordingFixture.Traced.Add("Before");
                });
        }
    }

    public class RecordingFixture : Fixture
    {
        public static readonly IList<string> Traced = new List<string>();

        public override void SetUp()
        {
            Traced.Add("SetUp");
        }

        public void Blue()
        {
            Traced.Add("Blue");
        }

        public void Green()
        {
            Traced.Add("Green");
        }

        public void Red()
        {
            Traced.Add("Red");
        }

        public override void TearDown()
        {
            Traced.Add("TearDown");
        }
    }
}