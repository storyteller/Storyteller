using System;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Samples;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class SectionTester
    {
        [Test]
        public void accept_visitor_calls_into_steps_as_well()
        {
            var visitor = MockRepository.GenerateMock<ITestVisitor>();
            var step1 = MockRepository.GenerateMock<IStep>();
            var step2 = MockRepository.GenerateMock<IStep>();
            var step3 = MockRepository.GenerateMock<IStep>();


            var section = new Section("something");
            section.Add(step1);
            section.Add(step2);
            section.Add(step3);

            section.AcceptVisitor(visitor);

            step1.AssertWasCalled(x => x.AcceptVisitor(visitor));
            step2.AssertWasCalled(x => x.AcceptVisitor(visitor));
            step3.AssertWasCalled(x => x.AcceptVisitor(visitor));
        }

        [Test]
        public void accept_visitor_calls_the_right_method()
        {
            var visitor = MockRepository.GenerateMock<ITestVisitor>();

            var section = new Section("something");

            section.AcceptVisitor(visitor);

            visitor.AssertWasCalled(x => x.StartSection(section));
            visitor.AssertWasCalled(x => x.EndSection(section));
        }

        [Test]
        public void add_comment()
        {
            var section = new Section("fixtureName");
            section.WithComment("some text").ShouldBeTheSameAs(section);

            section.Parts[0].ShouldBeOfType<Comment>().Text.ShouldEqual("some text");
        }

        [Test]
        public void GetName_is_the_Label_if_it_exists()
        {
            var section = new Section("fixture1")
            {
                Label = "the label"
            };
            section.GetName().ShouldEqual("the label");
        }

        [Test]
        public void GetName_uses_the_fixture_name_if_it_exists()
        {
            var section = new Section("fixture1");
            section.GetName().ShouldEqual("fixture1");
        }

        [Test]
        public void GetName_uses_the_name_property_from_the_fixture_object()
        {
            Section section = Section.For<StubFixture>();
            section.GetName().ShouldEqual(typeof(StubFixture).GetFixtureAlias());
        }

        [Test]
        public void section_starts_the_new_fixture()
        {
            Section section = Section.For<StubFixture>();
            var context = MockRepository.GenerateMock<ITestContext>();

            section.StartFixture(context);

            context.AssertWasCalled(x => x.LoadFixture<StubFixture>(section));
        }

        [Test]
        public void section_starts_the_new_fixture_on_execute_by_key()
        {
            var section = new Section("fixture1");
            var context = MockRepository.GenerateMock<ITestContext>();

            section.StartFixture(context);

            context.AssertWasCalled(x => x.LoadFixture("fixture1", section));
        }

    }

}