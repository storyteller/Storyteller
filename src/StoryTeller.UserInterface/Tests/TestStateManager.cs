using System;
using System.Collections.Generic;
using System.Xml;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Actions;
using System.Linq;
using StoryTeller.UserInterface.Editing;

namespace StoryTeller.UserInterface.Tests
{
    public interface ITestStateListener
    {
        void Update(object source);
    }

    public interface ITestStateManager
    {
        void RegisterListener(ITestStateListener listener);
        ActionCommand Undo { get; }
        ActionCommand Redo { get; }
        string CurrentJson { get; }
        string CurrentXml { get; }
        bool IsDirty();
        void StoreXml(string xml, object source);
        void StoreJson(string json, object source);
        void Version(object source);
        void RecordSnapshot();
    }

    public class TestStateManager : ITestStateManager
    {
        private readonly Test _test;
        private readonly IList<ITestStateListener> _listeners = new List<ITestStateListener>();
        private readonly ActionCommand _undoCommand;
        private readonly ActionCommand _redoCommand;
        private string _lastSavedVersion;
        private readonly VersionHistory _history;
        private ITestConverter _converter;

        public TestStateManager(ITestConverter converter, Test test)
        {
            _converter = converter;
            _test = test;
            _history = new VersionHistory();

            _undoCommand = new ActionCommand(undo);
            _redoCommand = new ActionCommand(redo);

            Version(null);
            RecordSnapshot();
        }

        private void enableUndoRedo()
        {
            _undoCommand.Enabled = _history.CanGoBack;
            _redoCommand.Enabled = _history.CanGoForward;
        }

        public void RecordSnapshot()
        {
            _lastSavedVersion = _history.Current;
        }

        public void RegisterListener(ITestStateListener listener)
        {
            _listeners.Add(listener);
        }

        private void undo()
        {
            if (!_history.CanGoBack) return;

            _history.Revert();
            _converter.ApplyJsonChanges(_test, _history.Current);
            enableUndoRedo();
            publish(null);
        }

        private void redo()
        {
            if (!_history.CanGoForward) return;

            _history.Forward();
            _converter.ApplyJsonChanges(_test, _history.Current);
            enableUndoRedo();
            publish(null);
        }

        public ActionCommand Undo
        {
            get
            {
                return _undoCommand;
            }
        }

        public ActionCommand Redo
        {
            get
            {
                return _redoCommand;
            }
        }

        public bool IsDirty()
        {
            return _lastSavedVersion != _history.Current;
        }

        // TODO -- Harden!
        public void StoreXml(string xml, object source)
        {
            _converter.ApplyXmlChanges(_test, xml);
            Version(source);
        }

        // TODO -- Harden!
        public void StoreJson(string json, object source)
        {
            _converter.ApplyJsonChanges(_test, json);
            recordJson(json, source);
        }

        private void recordJson(string json, object source)
        {
            _history.Record(json);
            enableUndoRedo();
            publish(source);
        }

        public void Version(object source)
        {
            string json = _converter.ToJson(_test);
            recordJson(json, source);
            
        }

        public string CurrentJson
        {
            get
            {
                return _history.Current;
            }
        }

        public string CurrentXml
        {
            get
            {
                return _converter.ToXml(_test);
            }
        }

        private void publish(object source)
        {
            _listeners
                .Where(x => !ReferenceEquals(x, source))
                .Each(x => x.Update(source));
        }

    }
}