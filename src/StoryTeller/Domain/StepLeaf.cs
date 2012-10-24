using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using StoryTeller.Engine;

namespace StoryTeller.Domain
{
    public class StepLeaf : IEnumerable<IStep>, IPartHolder
    {
        private readonly List<ITestPart> _parts = new List<ITestPart>();
        private string _defaultChildStepName = "row";
        public string DefaultChildStepName { get { return _defaultChildStepName; } set { _defaultChildStepName = value; } }

        #region IEnumerable<IStep> Members

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        public IEnumerator<IStep> GetEnumerator()
        {
            return this.AllSteps().GetEnumerator();
        }

        #endregion

        #region IStepHolder Members

        public void AcceptVisitor(ITestVisitor visitor)
        {
            _parts.ForEach(p => p.AcceptVisitor(visitor));
        }


        #endregion

        public virtual void MoveUp(IStep step)
        {
            _parts.MoveUp(step);
        }

        public virtual void MoveToTop(IStep step)
        {
            _parts.MoveToTop(step);
        }

        public virtual void MoveDown(IStep step)
        {
            _parts.MoveDown(step);
        }

        public virtual void MoveToBottom(IStep step)
        {
            _parts.MoveToBottom(step);
        }

        public void AddParts(IEnumerable<ITestPart> parts)
        {
            _parts.AddRange(parts);
        }

        public void AddParts(params ITestPart[] parts)
        {
            _parts.AddRange(parts);
        }

        public void Add(ITestPart part)
        {
            _parts.Add(part);
        }

        public IEnumerable<IStep> StepsWhere(Func<IStep, bool> predicate)
        {
            return this.AllSteps().Where(predicate);
        }

        public StepLeaf WithStep(string atts)
        {
            Step step = new Step(_defaultChildStepName).With(atts);
            Add((ITestPart)step);
            return this;
        }

        public int StepCount()
        {
            return _parts.Sum(p => p.StepCount());
        }

        public virtual IStep CloneLastStep()
        {
            IStep last = this.AllSteps().LastOrDefault();
            if (last == null) return null;

            return last.ShallowClone();
        }

        public IEnumerable<string> GetAllUniqueAttributes()
        {
            var hashedSet = new HashSet<string>();
            _parts.Each(x => x.CallOn<IStep>(s => { s.Attributes.Each(a => hashedSet.Add(a)); }));

            return hashedSet;
        }

        public virtual void ClearAttribute(string key)
        {
            _parts.Each(x => x.CallOn<IStep>(s => s.Remove(key)));
        }

        public virtual IStep AddNewStep()
        {
            var step = new Step(DefaultChildStepName);
            Add(step);

            return step;
        }

        public IStep AddNewStep(string data)
        {
            var step = new Step(DefaultChildStepName).With(data);
            Add(step);

            return step;
        }

        public virtual void SetStepValue(string key, string value)
        {
            this.AllSteps().Each(x => x.Set(key, value));
        }

        public IList<ITestPart> Parts
        {
            get { return _parts; }
        }
    }
}