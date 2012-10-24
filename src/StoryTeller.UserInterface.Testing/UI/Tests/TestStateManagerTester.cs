using System;
using System.Xml;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Model;
using StoryTeller.Persistence;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Tests;

namespace StoryTeller.UserInterface.Testing.UI.Tests
{
    [TestFixture]
    public class when_storing_xml
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test = new Test("my test");
            service = MockRepository.GenerateMock<ITestConverter>();

            listener1 = MockRepository.GenerateMock<ITestStateListener>();
            source = MockRepository.GenerateMock<ITestStateListener>();
            listener3 = MockRepository.GenerateMock<ITestStateListener>();

            manager = new TestStateManager(service, test);

            manager.RegisterListener(listener1);
            manager.RegisterListener(source);
            manager.RegisterListener(listener3);

            theNewJson = "{new: 'json'}";

            service.Expect(x => x.ToJson(test)).Return(theNewJson);

            theNewXml = "<xml />";

            manager.StoreXml(theNewXml, source);
        }

        #endregion

        private Test test;
        private ITestConverter service;
        private TestStateManager manager;
        private ITestStateListener listener1;
        private ITestStateListener source;
        private ITestStateListener listener3;
        private string theNewJson;
        private string theNewXml;


        [Test]
        public void all_listeners_except_the_source_should_be_updated()
        {
            listener1.AssertWasCalled(x => x.Update(source));
            source.AssertWasNotCalled(x => x.Update(source));
            listener3.AssertWasCalled(x => x.Update(source));
        }

        [Test]
        public void redo_should_be_disabled()
        {
            manager.Redo.Enabled.ShouldBeFalse();
        }


        [Test]
        public void should_be_dirty()
        {
            manager.IsDirty().ShouldBeTrue();
        }

        [Test]
        public void should_have_applied_the_xml_changes_to_the_test()
        {
            service.AssertWasCalled(x => x.ApplyXmlChanges(test, theNewXml));
        }

        [Test]
        public void should_not_have_re_applied_the_json_changes()
        {
            service.AssertWasNotCalled(x => x.ApplyJsonChanges(test, theNewJson));
        }

        [Test]
        public void the_new_json_is_stored_in_history()
        {
            manager.CurrentJson.ShouldEqual(theNewJson);
        }

        [Test]
        public void undo_should_be_enabled()
        {
            manager.Undo.Enabled.ShouldBeTrue();
        }
    }


    [TestFixture]
    public class version_then_save_changes
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test = new Test("my test");
            service = MockRepository.GenerateMock<ITestConverter>();

            listener1 = MockRepository.GenerateMock<ITestStateListener>();
            source = MockRepository.GenerateMock<ITestStateListener>();
            listener3 = MockRepository.GenerateMock<ITestStateListener>();

            manager = new TestStateManager(service, test);

            manager.RegisterListener(listener1);
            manager.RegisterListener(source);
            manager.RegisterListener(listener3);

            theNewJson = "{new: 'json'}";

            service.Expect(x => x.ToJson(test)).Return(theNewJson);

            manager.Version(source);
            manager.RecordSnapshot();
        }

        #endregion

        private Test test;
        private ITestConverter service;
        private TestStateManager manager;
        private ITestStateListener listener1;
        private ITestStateListener source;
        private ITestStateListener listener3;
        private string theNewJson;


        [Test]
        public void the_test_is_no_longer_dirty()
        {
            manager.IsDirty().ShouldBeFalse();
        }
    }

    public class FakeConverter : ITestConverter
    {
        public Test Clone(Test test)
        {
            throw new NotImplementedException();
        }

        public Test TestFromXml(string xml)
        {
            throw new NotImplementedException();
        }

        public string ToXml(Test test)
        {
            throw new NotImplementedException();
        }

        public void ApplyXmlChanges(Test test, XmlDocument xml)
        {
            throw new NotImplementedException();
        }

        public string ToPreview(FixtureLibrary library, Test test)
        {
            throw new NotImplementedException();
        }

        public string TheJson;

        public string ToJson(Test test)
        {
            return TheJson;
        }

        public void ApplyJsonChanges(Test test, string json)
        {
            
        }

        public void ApplyXmlChanges(Test test, string xml)
        {
            throw new NotImplementedException();
        }
    }

    [TestFixture]
    public class when_reverting_the_test
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test = new Test("my test");
            

            listener1 = MockRepository.GenerateMock<ITestStateListener>();
            listener2 = MockRepository.GenerateMock<ITestStateListener>();
            listener3 = MockRepository.GenerateMock<ITestStateListener>();

            theOriginalJson = "{old: 'json'}";
            theNewJson = "{new: 'json'}";

            theConverter = new FakeConverter() { TheJson = theOriginalJson };
            manager = new TestStateManager(theConverter, test);

            manager.RegisterListener(listener1);
            manager.RegisterListener(listener2);
            manager.RegisterListener(listener3);



            

            manager = new TestStateManager(theConverter, test);
            // setting the pre-condition here
            manager.CurrentJson.ShouldEqual(theOriginalJson);

            theConverter.TheJson = theNewJson;
            manager.Version(null);
            // second version of the JSON
            manager.CurrentJson.ShouldEqual(theNewJson);

            manager.RecordSnapshot();
            manager.IsDirty().ShouldBeFalse();

            manager.RegisterListener(listener1);
            manager.RegisterListener(listener2);
            manager.RegisterListener(listener3);

            // After all that, undo
            manager.Undo.Execute(null);
        }

        #endregion

        private Test test;
        private FakeConverter theConverter;
        private TestStateManager manager;
        private ITestStateListener listener1;
        private ITestStateListener listener2;
        private ITestStateListener listener3;
        private string theNewJson;
        private string theOriginalJson;

        [Test]
        public void can_no_go_backwards()
        {
            manager.Undo.Enabled.ShouldBeFalse();
        }

        [Test]
        public void go_forward()
        {
            var listener = MockRepository.GenerateMock<ITestStateListener>();
            manager.RegisterListener(listener);


            manager.Redo.Execute(null);

            manager.IsDirty().ShouldBeFalse();
            manager.CurrentJson.ShouldEqual(theNewJson);
            manager.Redo.Enabled.ShouldBeFalse();
            manager.Undo.Enabled.ShouldBeTrue();
        }


        [Test]
        public void should_alert_all_the_registered_listeners_to_update()
        {
            listener1.AssertWasCalled(x => x.Update(null));
            listener2.AssertWasCalled(x => x.Update(null));
            listener3.AssertWasCalled(x => x.Update(null));
        }

        [Test]
        public void should_be_able_to_go_forward()
        {
            manager.Redo.Enabled.ShouldBeTrue();
        }

        [Test]
        public void should_definitely_be_dirty_since_it_is_no_longer_the_last_saved_version()
        {
            manager.IsDirty().ShouldBeTrue();
        }

        [Test]
        public void the_current_json_is_the_original_json_after_going_back()
        {
            manager.CurrentJson.ShouldEqual(theOriginalJson);
        }
    }


    [TestFixture]
    public class when_versioning_the_test
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test = new Test("my test");
            service = MockRepository.GenerateMock<ITestConverter>();

            listener1 = MockRepository.GenerateMock<ITestStateListener>();
            source = MockRepository.GenerateMock<ITestStateListener>();
            listener3 = MockRepository.GenerateMock<ITestStateListener>();

            manager = new TestStateManager(service, test);

            manager.RegisterListener(listener1);
            manager.RegisterListener(source);
            manager.RegisterListener(listener3);

            theNewJson = "{new: 'json'}";

            service.Expect(x => x.ToJson(test)).Return(theNewJson);

            manager.Version(source);
        }

        #endregion

        private Test test;
        private ITestConverter service;
        private TestStateManager manager;
        private ITestStateListener listener1;
        private ITestStateListener source;
        private ITestStateListener listener3;
        private string theNewJson;


        [Test]
        public void all_listeners_except_the_source_should_be_updated()
        {
            listener1.AssertWasCalled(x => x.Update(source));
            source.AssertWasNotCalled(x => x.Update(source));
            listener3.AssertWasCalled(x => x.Update(source));
        }

        [Test]
        public void redo_should_be_disabled()
        {
            manager.Redo.Enabled.ShouldBeFalse();
        }


        [Test]
        public void should_be_dirty()
        {
            manager.IsDirty().ShouldBeTrue();
        }

        [Test]
        public void should_not_have_re_applied_the_json_changes()
        {
            service.AssertWasNotCalled(x => x.ApplyJsonChanges(test, theNewJson));
        }

        [Test]
        public void the_new_json_is_stored_in_history()
        {
            manager.CurrentJson.ShouldEqual(theNewJson);
        }

        [Test]
        public void undo_should_be_enabled()
        {
            manager.Undo.Enabled.ShouldBeTrue();
        }
    }


    [TestFixture]
    public class when_storing_a_new_json_version
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test = new Test("my test");
            service = MockRepository.GenerateMock<ITestConverter>();

            listener1 = MockRepository.GenerateMock<ITestStateListener>();
            source = MockRepository.GenerateMock<ITestStateListener>();
            listener3 = MockRepository.GenerateMock<ITestStateListener>();

            manager = new TestStateManager(service, test);

            manager.RegisterListener(listener1);
            manager.RegisterListener(source);
            manager.RegisterListener(listener3);

            theNewJson = "{new: 'json'}";

            manager.StoreJson(theNewJson, source);
        }

        #endregion

        private Test test;
        private ITestConverter service;
        private TestStateManager manager;
        private ITestStateListener listener1;
        private ITestStateListener source;
        private ITestStateListener listener3;
        private string theNewJson;

        [Test]
        public void all_listeners_except_the_source_should_be_updated()
        {
            listener1.AssertWasCalled(x => x.Update(source));
            source.AssertWasNotCalled(x => x.Update(source));
            listener3.AssertWasCalled(x => x.Update(source));
        }

        [Test]
        public void redo_should_be_disabled()
        {
            manager.Redo.Enabled.ShouldBeFalse();
        }


        [Test]
        public void should_be_dirty()
        {
            manager.IsDirty().ShouldBeTrue();
        }

        [Test]
        public void should_have_applied_the_json_changes()
        {
            service.AssertWasCalled(x => x.ApplyJsonChanges(test, theNewJson));
        }

        [Test]
        public void undo_should_be_enabled()
        {
            manager.Undo.Enabled.ShouldBeTrue();
        }
    }


    [TestFixture]
    public class the_initial_state_of_the_test_state_manager
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test = new Test("my test");
            service = new TestConverter();

            listener1 = MockRepository.GenerateMock<ITestStateListener>();
            listener2 = MockRepository.GenerateMock<ITestStateListener>();
            listener3 = MockRepository.GenerateMock<ITestStateListener>();

            manager = new TestStateManager(service, test);

            manager.RegisterListener(listener1);
            manager.RegisterListener(listener2);
            manager.RegisterListener(listener3);
        }

        #endregion

        private Test test;
        private ITestConverter service;
        private TestStateManager manager;
        private ITestStateListener listener1;
        private ITestStateListener listener2;
        private ITestStateListener listener3;

        [Test]
        public void is_dirty_is_false_in_the_inital_state()
        {
            manager.IsDirty().ShouldBeFalse();
        }

        [Test]
        public void redo_is_disabled_in_the_initial_state()
        {
            manager.Redo.Enabled.ShouldBeFalse();
        }

        [Test]
        public void the_initial_json()
        {
            string json = new TestWriter().WriteToJson(test);
            manager.CurrentJson.ShouldEqual(json);
        }

        [Test]
        public void the_initial_xml()
        {
            string xml = new TestWriter().Write(test).OuterXml;
            manager.CurrentXml.ShouldEqual(xml);
        }

        [Test]
        public void undo_is_disabled_in_the_initial_state()
        {
            manager.Undo.Enabled.ShouldBeFalse();
        }
    }
}