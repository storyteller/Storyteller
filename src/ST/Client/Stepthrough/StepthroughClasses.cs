using System;
using System.Collections;
using System.Collections.Generic;
using System.Security.AccessControl;
using FubuMVC.Core;
using StoryTeller;
using StoryTeller.Engine;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Grammars;

namespace ST.Client.Stepthrough
{
    /*
    What if we put breakpoints directly on the ILineExecution?



    */


    public class BreakpointCollection
    {
        private readonly IList<Breakpoint> _breakpoints = new List<Breakpoint>();

        public void Set(Breakpoint breakpoint)
        {
            throw new NotImplementedException();
        }

        public void Remove(Breakpoint breakpoint)
        {
            throw new NotImplementedException();
        }

        public void ClearAll()
        {
            _breakpoints.Clear();
        }

        public bool Matches(ILineExecution line)
        {
            throw new NotImplementedException();
        }
    }

    public class StepthroughExecutor : IStepExecutor
    {
        private readonly IUserInterfaceObserver _observer;
        private readonly IList<ILineExecution> _lines = new List<ILineExecution>();
        private readonly SpecContext _context;




        public StepthroughExecutor(SpecContext context, SpecificationPlan plan, IUserInterfaceObserver observer)
        {
            _observer = observer;
            _context = context;
            plan.AcceptVisitor(this);
        }

        ISpecContext IStepExecutor.CurrentContext => _context;

        void IStepExecutor.Line(ILineExecution execution)
        {
            _lines.Add(execution);
        }

        void IStepExecutor.Composite(ICompositeExecution execution)
        {
            foreach (var executionStep in execution.Steps)
            {
                executionStep.AcceptVisitor(this);
            }
        }





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