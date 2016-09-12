#if NET46
using System;
using StoryTeller.Engine;
using StoryTeller.Messages;

namespace StoryTeller.Remotes
{
    public class RemoteProxy : MarshalByRefObject, IDisposable
    {
        private EngineAgent _agent;

        public RemoteProxy()
        {
            AppDomain.CurrentDomain.UnhandledException += CurrentDomain_UnhandledException;
            AppDomain.CurrentDomain.DomainUnload += CurrentDomainOnDomainUnload;
        }


        public void Dispose()
        {
            _agent?.Dispose();
        }

        public override object InitializeLifetimeService()
        {
            return null;
        }

        public void Start(Project project)
        {
            _agent = new EngineAgent(project.Port);
            _agent.Start(project);
        }

        private void CurrentDomainOnDomainUnload(object sender, EventArgs eventArgs)
        {
            Dispose();
        }

        private void CurrentDomain_UnhandledException(object sender, UnhandledExceptionEventArgs e)
        {
            Console.WriteLine("Uncaught exception, shutting down.");
            Console.WriteLine(e.ExceptionObject.ToString());
            Dispose();
        }
    }
}

#endif