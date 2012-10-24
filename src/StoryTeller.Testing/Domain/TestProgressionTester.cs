using System.Collections.Generic;
using System.Diagnostics;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Execution;

namespace StoryTeller.Testing.Domain
{
    [TestFixture]
    public class TestProgressionTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            testProgression = new TestProgression();
            testProgression.AddToken(new Token
            {
                Part = new Step("a")
            });
            testProgression.AddToken(new Token
            {
                Part = new Step("b")
            });
            testProgression.AddToken(new Token
            {
                Part = new Step("c"),
                Description = "Math/c"
            });
            testProgression.AddToken(new Token
            {
                Part = new Step("d")
            });
            testProgression.AddToken(new Token
            {
                Part = new Step("e")
            });
            testProgression.AddToken(new Token
            {
                Part = new Section("e")
            });
            testProgression.AddToken(new Token
            {
                Part = new Step("f")
            });
            testProgression.AddToken(new Token
            {
                Part = new Step("g")
            });
        }

        #endregion

        private TestProgression testProgression;

        [Test]
        public void can_find_the_path_of_a_part()
        {
            var step = testProgression[2].Part.As<IStep>();
            testProgression.PathOf(step).ShouldEqual("Math/c");
        }

        [Test]
        public void find_index_of()
        {
            var step = testProgression[3].Part.As<IStep>();

            // Want this to be one based
            testProgression.OneBasedIndexOf(step).ShouldEqual(4);
        }

        [Test]
        public void returns_the_count()
        {
            testProgression.Count.ShouldEqual(8);
        }
    }


    [TestFixture]
    public class when_finding_all_the_tokens_from_a_test_with_sections
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            children = new[]
            {
                new Step("Add1"),
                new Step("Add2"),
                new Step("Add3"),
            };

            grandchildren = new[]
            {
                new Step("Add4-1"),
            };

            children2 = new[]
            {
                new Step("Add4").WithChildren("grandkids", grandchildren),
            };

            test = new Test("name");
            _section1 = test.Section("Math").Configure(s =>
            {
                _step1 = s.AddStep("Add").WithChildren("children", children).WithChildren("others", children2);
                _step2 = s.AddStep("Subtract");
                _step3 = s.AddStep("Multiply");
            });

            _section2 = test.Section("Arithmetic").Configure(s => { _step4 = s.AddStep("Divide"); });

            theProgression = new TestProgression(test, new Counts());
        }

        #endregion

        private Section _section1;
        private IStep _step1;
        private IStep _step2;
        private IStep _step3;
        private Section _section2;
        private IStep _step4;
        private TestProgression theProgression;
        private Step[] children;
        private Step[] grandchildren;
        private Step[] children2;
        private Test test;

        [Test]
        public void read_a_part_that_is_only_nested_one_deep()
        {
            theProgression[1].ShouldEqual(new Token
            {
                Part = _step1,
                Description = "Step:  Math/Add"
            });
        }

        [Test]
        public void read_a_section()
        {
            theProgression[0].ShouldEqual(new Token
            {
                Part = _section1,
                Description = "Section:  Math"
            });
        }

        [Test]
        public void the_expected()
        {
            var expected = new List<Token>
            {
                new Token
                {
                    Part = _section1,
                    Description = "Section:  Math"
                },
                new Token
                {
                    Part = _step1,
                    Description = "Step:  Math/Add"
                },
                new Token
                {
                    Part = children[0],
                    Description = "Step:  Math/Add/children/Add1"
                },
                new Token
                {
                    Part = children[1],
                    Description = "Step:  Math/Add/children/Add2"
                },
                new Token
                {
                    Part = children[2],
                    Description = "Step:  Math/Add/children/Add3"
                },
                new Token
                {
                    Part = children2[0],
                    Description = "Step:  Math/Add/others/Add4"
                },
                new Token
                {
                    Part = grandchildren[0],
                    Description = "Step:  Math/Add/others/Add4/grandkids/Add4-1"
                },
                new Token
                {
                    Part = _step2,
                    Description = "Step:  Math/Subtract"
                },
                new Token
                {
                    Part = _step3,
                    Description = "Step:  Math/Multiply"
                },
                new Token
                {
                    Part = _section2,
                    Description = "Section:  Arithmetic"
                },
                new Token
                {
                    Part = _step4,
                    Description = "Step:  Arithmetic/Divide"
                },
            };

            theProgression.Each(t => Debug.WriteLine(t));

            theProgression.ShouldHaveTheSameElementsAs(expected);
        }

        [Test]
        public void the_initial_status_should_be_the_test()
        {
            theProgression.BuildStatus().CurrentActivity.ShouldEqual("Test:  " + test.LocatorPath());
        }
    }

    [TestFixture]
    public class when_building_a_status_for_the_first_section
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test = new Test("some test",
                            x => { section = x.Section("Math").WithStep("Add").WithStep("Subtract").WithStep("Minus"); });

            progression = new TestProgression(test, new Counts());

            progression.Start(section);
            status = progression.BuildStatus();
        }

        #endregion

        private Test test;
        private Section section;
        private TestProgression progression;
        private TestStatusMessage status;

        [Test]
        public void has_the_test_path()
        {
            status.TestPath.ShouldEqual(test.LocatorPath());
        }

        [Test]
        public void should_have_the_text_of_the_section_running()
        {
            status.CurrentActivity.ShouldEqual("Section:  Math");
        }

        [Test]
        public void the_progress_count_is_just_zero_cause_nothing_has_been_completed()
        {
            status.CompletedSteps.ShouldEqual(0);
        }

        [Test]
        public void the_total_count_should_be_the_total_count()
        {
            status.TotalSteps.ShouldEqual(progression.Count);
        }
    }

    [TestFixture]
    public class when_building_the_status_after_incrementing_a_part
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test = new Test("some test",
                            x => { section = x.Section("Math").WithStep("Add").WithStep("Subtract").WithStep("Minus"); });

            counts = new Counts();
            progression = new TestProgression(test, counts);

            progression.Start(section);
            progression.Start(section.Parts[0]);

            counts.IncrementRights();
            progression.IncrementProgress(section.Parts[0]);
            counts.IncrementWrongs();

            status = progression.BuildStatus();
        }

        #endregion

        private Test test;
        private Section section;
        private TestProgression progression;
        private TestStatusMessage status;
        private Counts counts;

        [Test]
        public void has_the_test_path()
        {
            status.TestPath.ShouldEqual(test.LocatorPath());
        }

        [Test]
        public void should_have_the_text_of_the_last_step_running()
        {
            status.CurrentActivity.ShouldEqual("Step:  Math/Add");
        }

        [Test]
        public void the_progress_count_is_one()
        {
            status.CompletedSteps.ShouldEqual(1);
        }

        [Test]
        public void the_total_count_should_be_the_total_count()
        {
            status.TotalSteps.ShouldEqual(progression.Count);
        }
    }

    [TestFixture]
    public class when_building_a_status_after_starting_the_second_or_later_step
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test = new Test("some test",
                            x => { section = x.Section("Math").WithStep("Add").WithStep("Subtract").WithStep("Minus"); });

            counts = new Counts();
            progression = new TestProgression(test, counts);

            progression.Start(section);
            progression.Start(section.Parts[0]);

            counts.IncrementRights();
            progression.IncrementProgress(section.Parts[0]);
            counts.IncrementWrongs();

            progression.Start(section.Parts[1]);

            status = progression.BuildStatus();
        }

        #endregion

        private Test test;
        private Section section;
        private TestProgression progression;
        private TestStatusMessage status;
        private Counts counts;

        [Test]
        public void should_have_the_text_of_the_last_step_running()
        {
            status.CurrentActivity.ShouldEqual("Step:  Math/Subtract");
        }

        [Test]
        public void the_progress_count_is_one()
        {
            status.CompletedSteps.ShouldEqual(1);
        }

        [Test]
        public void the_total_count_should_be_the_total_count()
        {
            status.TotalSteps.ShouldEqual(progression.Count);
        }
    }

    [TestFixture]
    public class when_building_the_second_completed_step
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test = new Test("some test",
                            x => { section = x.Section("Math").WithStep("Add").WithStep("Subtract").WithStep("Minus"); });

            counts = new Counts();
            progression = new TestProgression(test, counts);

            progression.Start(section);
            progression.Start(section.Parts[0]);

            counts.IncrementRights();
            progression.IncrementProgress(section.Parts[0]);
            counts.IncrementWrongs();

            progression.Start(section.Parts[1]);

            counts.IncrementWrongs();
            progression.IncrementProgress(section.Parts[1]);

            status = progression.BuildStatus();
        }

        #endregion

        private Test test;
        private Section section;
        private TestProgression progression;
        private TestStatusMessage status;
        private Counts counts;

        [Test]
        public void should_have_the_text_of_the_last_step_running()
        {
            status.CurrentActivity.ShouldEqual("Step:  Math/Subtract");
        }

        [Test]
        public void the_progress_count_is_two_now()
        {
            status.CompletedSteps.ShouldEqual(2);
        }
    }
}