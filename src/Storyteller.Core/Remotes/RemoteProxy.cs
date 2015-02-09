using System;
using FubuCore;
using Storyteller.Core.Engine;
using Storyteller.Core.Remotes.Messaging;

namespace Storyteller.Core.Remotes
{
    public class RemoteProxy : MarshalByRefObject, IDisposable
    {
        private Project _project;
        private ISystem _system;
        private SpecificationEngine _engine;

        public override object InitializeLifetimeService()
        {
            return null;
        }

        public void Start(EngineMode mode, Project project, MarshalByRefObject remoteListener)
        {
            //_controller = new StorytellerController();
            //EventAggregator.Messaging.AddListener(_controller);
            EventAggregator.Start((IRemoteListener) remoteListener);

            _project = project;

            Type systemType = null;

            try
            {
                systemType = _project.DetermineSystemType();
                _system = Activator.CreateInstance(systemType).As<ISystem>();

                if (mode == EngineMode.Batch)
                {
                    var batchObserver = new BatchObserver();
                    _engine = new SpecificationEngine(_system, batchObserver, new BatchRunner(batchObserver));
                }
                else
                {
                    throw new NotImplementedException("Don't have the UserInterface engine yet");
                }

                _engine.Start(project.StopConditions);
            }
            catch (Exception e)
            {
                var message = new SystemRecycled
                {
                    error = e.ToString(),
                    success = false,
                };

                if (systemType != null)
                {
                    message.system_name = systemType.AssemblyQualifiedName;
                }

                EventAggregator.SendMessage(message);
            }
        }


        public void Dispose()
        {
            if (_engine != null) _engine.Dispose();
        }

        public void SendJson(string json)
        {
            EventAggregator.Messaging.SendJson(json);
        }
    }
}