using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using NUnit.Framework;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Projects;
using StructureMap;
using FubuCore;

namespace StoryTeller.UserInterface.Testing
{
    [TestFixture, Explicit]
    public class Diagnostics
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            Bootstrapper.BootstrapShell(false);
        }

        #endregion

        private void line()
        {
            Debug.WriteLine("=================================================================");
        }

        [Test]
        public void what_is_running_on_start_up()
        {
            line();
            Debug.WriteLine("On startup:");
            line();
            ObjectFactory.Model.GetAllPossible<IStartable>()
                .Each(x => Debug.WriteLine(x));
            line();
        }

        [Test]
        public void who_is_listening()
        {
            typeof(ProjectLoadFailureHandler).Closes(typeof(IListener<>)).ShouldBeTrue();
            Debug.WriteLine(findListeners().Count());

            findListeners().GroupBy(x => x.MessageType).OrderBy(x => x.Key.FullName).Each(x =>
            {
                line();
                Debug.WriteLine("Message:  " + x.Key.Name);
                line();

                foreach (Listener listener in x)
                {
                    Debug.WriteLine(listener.ListenerType.FullName);
                }

                Debug.WriteLine("");
                Debug.WriteLine("");
            });
        }

        private IEnumerable<Listener> findListeners()
        {
            return ObjectFactory.Model
                .AllInstances.Where(x => x.ConcreteType.Closes(typeof(IListener<>)))
                .SelectMany(x => listenersFor(x.ConcreteType));
        }

        private IEnumerable<Listener> listenersFor(Type type)
        {
            foreach (var @interface in type.GetInterfaces())
            {
                if (@interface.Closes(typeof(IListener<>)))
                {
                    Debug.WriteLine(@interface.FullName);
                    Type closingInterface = @interface.FindInterfaceThatCloses(typeof(IListener<>));
                    Debug.WriteLine(closingInterface);
                    yield return new Listener
                    {
                        ListenerType = type,
                        MessageType = closingInterface.GetGenericArguments()[0]
                    };
                }
            }
        }

        public class Listener
        {
            public Type ListenerType { get; set; }
            public Type MessageType { get; set; }
        }
    }
}