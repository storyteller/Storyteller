using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using StoryTeller.Domain;

namespace StoryTeller.Engine
{
    public interface IBeforeAndAfter
    {
        void BeforeLine();
        void AfterLine();
    }

    public abstract class DecisionTableGrammar : TableGrammar, IBeforeAndAfter
    {
        public DecisionTableGrammar()
            : this("table")
        {
        }

        public DecisionTableGrammar(string label)
            : base("table")
        {
            LabelName = label;
            InnerGrammar = new TableLineGrammar(this);
        }

        #region IBeforeAndAfter Members

        void IBeforeAndAfter.BeforeLine()
        {
            beforeLine();
        }

        void IBeforeAndAfter.AfterLine()
        {
            afterLine();
        }

        #endregion

        protected virtual void beforeLine()
        {
        }

        protected virtual void afterLine()
        {
        }
    }

    public class TableLineGrammar : LineGrammar
    {
        private readonly List<IProperty> _properties = new List<IProperty>();
        private readonly IBeforeAndAfter _target;

        public TableLineGrammar(IBeforeAndAfter target)
        {
            _target = target;
            foreach (PropertyInfo property in target.GetType().GetProperties())
            {
                if (property.DeclaringType == typeof (object) || property.DeclaringType.Assembly == GetType().Assembly)
                {
                    continue;
                }

                if (property.CanRead)
                {
                    _properties.Add(new GetterProperty(property));
                }
                else if (property.CanWrite)
                {
                    _properties.Add(new SetterProperty(property));
                }
            }
        }

        public override string Description { get { return GetType().Name; } }

        public override void Execute(IStep containerStep, ITestContext context)
        {
            context.PerformAction(containerStep, (x, y) => _target.BeforeLine());

            _properties.Each(x => x.ProcessStep(containerStep, context, _target));

            context.PerformAction(containerStep, (x, y) => _target.AfterLine());
        }

        public override IList<Cell> GetCells()
        {
            return _properties.Select(x => x.Cell).ToList();
        }

        #region Nested type: GetterProperty

        public class GetterProperty : IProperty
        {
            private readonly Cell _cell;
            private readonly PropertyInfo _property;

            public GetterProperty(PropertyInfo property)
            {
                _property = property;
                _cell = new Cell(property);
            }

            #region IProperty Members

            public Cell Cell { get { return _cell; } }

            public void ProcessStep(IStep step, ITestContext context, object target)
            {
                object actual = _property.GetValue(target, null);
                _cell.RecordActual(actual, step, context);
            }

            #endregion
        }

        #endregion

        #region Nested type: IProperty

        public interface IProperty
        {
            Cell Cell { get; }
            void ProcessStep(IStep step, ITestContext context, object target);
        }

        #endregion

        #region Nested type: SetterProperty

        public class SetterProperty : IProperty
        {
            private readonly Cell _cell;
            private readonly PropertyInfo _property;

            public SetterProperty(PropertyInfo property)
            {
                _property = property;
                _cell = new Cell(property);
            }

            #region IProperty Members

            public Cell Cell { get { return _cell; } }

            public void ProcessStep(IStep step, ITestContext context, object target)
            {
                _cell.ReadArgument(context, step, x => _property.SetValue(target, x, null));
            }

            #endregion
        }

        #endregion
    }
}