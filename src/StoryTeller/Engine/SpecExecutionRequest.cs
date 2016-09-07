using System;
using System.Globalization;
using System.IO;
using System.Threading;
using Baseline;
using StoryTeller.Grammars;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Engine
{
    public class SpecExecutionRequest
    {

        public static SpecExecutionRequest For(Specification spec)
        {
            return new SpecExecutionRequest(spec, new NulloResultObserver());
        }

        private readonly IResultObserver _observer;
        public Specification Specification { get; private set; }
        public SpecificationPlan Plan { get; private set; }

        public SpecExecutionRequest(Specification specification, IResultObserver observer)
        {
            _observer = observer;
            Specification = specification;
        }

        public void SpecExecutionFinished(SpecResults results)
        {
            _observer.SpecExecutionFinished(Specification, results);
        }

        private void performAction(Action action )
        {
            try
            {
                action();
            }
            catch (Exception e)
            {
                IsCancelled = true;
                EventAggregator.SendMessage(new PassthroughMessage(new RuntimeError(e)));
            }
        }

        public void ReadXml()
        {
            performAction(() =>
            {
                try
                {
                    Specification.ReadBody();
                }
                catch (ArgumentNullException e)
                {
                    if (e.Message.Contains("System.Xml.XmlTextReaderImpl"))
                    {
                        // try again
                        Specification.ReadBody();
                    }
                    else
                    {
                        throw;
                    }
                }
            });
        }

        public void CreatePlan(FixtureLibrary library)
        {
            var culture = Project.CurrentProject?.Culture;
            if (culture.IsNotEmpty())
            {
#if NET46
                Thread.CurrentThread.CurrentCulture = new CultureInfo(culture);
#else
                CultureInfo.CurrentCulture = new CultureInfo(culture);
#endif
            }

            performAction(() =>
            {
                Plan = Specification.CreatePlan(library);
            });
        }

        public string Id
        {
            get
            {
                if (Specification != null) return Specification.id;
                if (Specification != null) return Specification.id;
                return Plan.Specification.id;
            }
        }


        public void Cancel()
        {
            IsCancelled = true;
        }

        public bool IsCancelled { get; private set; }

        public IResultObserver Observer
        {
            get { return _observer; }
        }

        protected bool Equals(SpecExecutionRequest other)
        {
            return Equals(Specification.id, other.Specification.id);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((SpecExecutionRequest) obj);
        }

        public override int GetHashCode()
        {
            return (Specification != null ? Specification.GetHashCode() : 0);
        }

        public override string ToString()
        {
            return string.Format("SpecExecutionRequest for {0} ({1})", Specification.id, Specification.name);
        }

        public Timings StartNewTimings()
        {
            var timings = new Timings();
            timings.Start(Specification);

            return timings;
        }

    }

    
}