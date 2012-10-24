using System;
using System.Collections.Generic;
using System.Linq;
using StoryTeller.Domain;
using StoryTeller.Model;
using StoryTeller.UserInterface.Commands;
using StoryTeller.UserInterface.Examples;
using StoryTeller.UserInterface.Screens;
using StructureMap;

namespace StoryTeller.UserInterface
{
    public interface IScreenObjectLocator
    {
        IScreenLocator BuildSubject(object subject);
        IEnumerable<IContextualAction> BuildActions(object subject);
        IScreenLocator BuildSubject<T>() where T : IScreenLocator;
        IContextualAction CommandForSubject<COMMAND, SUBJECT>(object subject) where COMMAND : IContextualAction<SUBJECT> where SUBJECT : class;
    }

    public class ScreenObjectLocator : IScreenObjectLocator
    {
        private readonly IContainer _container;

        public ScreenObjectLocator(IContainer container)
        {
            _container = container;
        }

        #region IScreenObjectLocator Members

        [Obsolete("No longer desirable")]
        public IScreenLocator BuildSubject(object subject)
        {
            var node = subject as IFixtureNode;
            if (node != null)
            {
                return _container.With(node).GetInstance<FixtureNodeSubject>();
            }


            return _container
                .ForObject(subject)
                .GetClosedTypeOf(typeof (IScreenLocator<>))
                .As<IScreenLocator>();
        }

        // TODO -- need test here
        public IEnumerable<IContextualAction> BuildActions(object subject)
        {
            return _container
                .ForObject(subject)
                .GetAllClosedTypesOf(typeof (IContextualAction<>))
                .As<IContextualAction>();
        }

        public IContextualAction CommandForSubject<COMMAND, SUBJECT>(object subject) where COMMAND : IContextualAction<SUBJECT> where SUBJECT : class
        {
            return _container.With(subject as SUBJECT).GetInstance<COMMAND>();
        }

        public IScreenLocator BuildSubject<T>() where T : IScreenLocator
        {
            return _container.GetInstance<T>();
        }

        #endregion
    }
}