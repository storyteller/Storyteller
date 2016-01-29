using System;
using System.Security.AccessControl;
using FubuMVC.Core;
using StoryTeller;
using StoryTeller.Engine;
using StoryTeller.Engine.UserInterface;

namespace ST.Client.Stepthrough
{
    public class StepthroughExecutor : IStepExecutor
    {
        private readonly IUserInterfaceObserver _observer;

        public StepthroughExecutor(ISpecContext current, IUserInterfaceObserver observer)
        {
            _observer = observer;
            CurrentContext = current;
        }



        public void ClearAllBreakpoints()
        {
            throw new NotImplementedException();
        }

        public void RemoveBreakpoint(Breakpoint breakpoint)
        {
            throw new System.NotImplementedException();
        }

        public void SetBreakpoint(Breakpoint breakpoint)
        {
            throw new System.NotImplementedException();
        }

        public void Composite(ICompositeExecution execution)
        {
            throw new NotImplementedException();
        }

        public void Line(ILineExecution execution)
        {
            throw new NotImplementedException();
        }

        public ISpecContext CurrentContext { get; }
    }

    public class NextStep : ClientMessage
    {
        public string id;
        public object position;

        public NextStep(string id, object position) : base("next-step")
        {
            this.id = id;
            this.position = position;
        }
    }

    public class Breakpoint
    {
        public string id;
        public object position;

        public bool Matches(ILineExecution execution)
        {
            return execution.Position == position && execution.Id == id;
        }

        protected bool Equals(Breakpoint other)
        {
            return string.Equals(id, other.id) && Equals(position, other.position);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((Breakpoint) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((id != null ? id.GetHashCode() : 0)*397) ^ (position != null ? position.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return $"Breakpoint, Id: {id}, Position: {position}";
        }
    }
}