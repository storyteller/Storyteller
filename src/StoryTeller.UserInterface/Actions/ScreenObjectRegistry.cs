using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Input;
using StoryTeller.UserInterface.Dialogs;
using StoryTeller.UserInterface.Screens;
using StructureMap;

namespace StoryTeller.UserInterface.Actions
{
    public class ScreenObjectRegistry : IScreenObjectRegistry
    {
        private readonly List<ScreenAction> _actions = new List<ScreenAction>();
        private readonly IContainer _container;
        private readonly ArrayList _explorerObjects = new ArrayList();
        private readonly IApplicationShell _shell;
        private readonly Window _window;

        public ScreenObjectRegistry(Window window, IContainer container, IApplicationShell shell)
        {
            _window = window;
            _container = container;
            _shell = shell;
        }

        #region IScreenObjectRegistry Members

        public IEnumerable<ScreenAction> Actions { get { return _actions; } }

        public void ClearTransient()
        {
            _actions.Where(x => !x.IsPermanent).Each(x => _window.InputBindings.Remove(x.Binding));
            _actions.RemoveAll(x => !x.IsPermanent);

            foreach (object view in _explorerObjects)
            {
                _shell.RemoveFromExplorerPane(view);
            }

            _explorerObjects.Clear();
        }

        public IActionExpression Action(string name)
        {
            return new BindingExpression(name, this);
        }

        public IActionExpression PermanentAction(string name)
        {
            return new BindingExpression(name, this, x => x.IsPermanent = true)
            {
                ShortcutOnly = true
            };
        }

        public void PlaceInExplorerPane(object view, string header)
        {
            _explorerObjects.Add(view);
            _shell.PlaceInExplorerPane(view, header);
        }

        #endregion

        private ICommand command<T>(Action<T> action)
        {
            return new Command<T>(_container, action);
        }

        public ICommand CommandForDialog<T>()
        {
            return command<IDialogLauncher>(x => x.LaunchForCommand<T>());
        }

        public ICommand CommandForScreen<T>() where T : IScreen
        {
            Func<IScreenLocator> subject = () => _container.GetInstance<SingletonScreenSubject<T>>();
            return command<IScreenConductor>(x => x.OpenScreen(subject()));
        }

        public ICommand CommandForEvent<T>() where T : new()
        {
            return command<IEventAggregator>(x => x.SendMessage(new T()));
        }

        protected void register(ScreenAction screenAction)
        {
            _actions.Add(screenAction);
            _window.InputBindings.Add(screenAction.Binding);
        }

        #region Nested type: BindingExpression

        public class BindingExpression : IBindingExpression, IActionExpression
        {
            private readonly ScreenObjectRegistry _registry;
            private readonly ScreenAction _screenAction = new ScreenAction();
            private InputGesture _gesture;

            public BindingExpression(string name, ScreenObjectRegistry registry)
            {
                _screenAction.Name = name;
                _registry = registry;
            }

            public BindingExpression(string name, ScreenObjectRegistry registry, Action<ScreenAction> configure)
                : this(name, registry)
            {
                configure(_screenAction);
            }

            public bool ShortcutOnly { set { _screenAction.ShortcutOnly = value; } }

            #region IActionExpression Members

            public IBindingExpression Bind(Key key)
            {
                _gesture = new KeyGesture(key);
                return this;
            }

            public IBindingExpression Bind(ModifierKeys modifiers, Key key)
            {
                _gesture = new KeyGesture(key, modifiers);
                return this;
            }

            public IBindingExpression Bind(ModifierKeys modifiers, MouseAction mouseAction)
            {
                _gesture = new MouseGesture(mouseAction, modifiers);
                return this;
            }

            #endregion

            #region IBindingExpression Members

            public ScreenAction ToDialog<T>()
            {
                return buildAction(() => _registry.CommandForDialog<T>());
            }

            public ScreenAction ToScreen<T>() where T : IScreen
            {
                return buildAction(() => _registry.CommandForScreen<T>());
            }

            public ScreenAction PublishEvent<T>() where T : new()
            {
                return buildAction(() => _registry.CommandForEvent<T>());
            }

            public ScreenAction PublishEvent<T>(Func<T> func)
            {
                return buildAction(() => _registry.command<IEventAggregator>(events => events.SendMessage(func())));
            }

            public ScreenAction To(Action action)
            {
                return buildAction(() => new ActionCommand(action));
            }

            public ScreenAction To(ICommand command)
            {
                return buildAction(() => command);
            }

            #endregion

            private ScreenAction buildAction(Func<ICommand> value)
            {
                ICommand command = value();
                _screenAction.Binding = new InputBinding(command, _gesture);


                _registry.register(_screenAction);

                return _screenAction;
            }

            public BindingExpression Icon(Icon icon)
            {
                _screenAction.Icon = icon;
                return this;
            }
        }

        #endregion
    }
}