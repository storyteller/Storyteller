using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller.Engine
{
    public abstract class ServiceAssertionGrammar<TService, TCellType> : LineGrammar
    {
        public ServiceAssertionGrammar(string key, string template)
            : base(template)
        {
            this.key = key;
        }

        protected internal string key { get; set; }

        public override string Description { get { return DescriptionAttribute.GetDescription(GetType()); } }

        public override void Execute(IStep containerStep, ITestContext context)
        {
            var service = context.Retrieve<TService>();
            object actualValue = getActualValue(service);

            cell().RecordActual(actualValue, containerStep, context);
        }

        public override IList<Cell> GetCells()
        {
            return new List<Cell>
            {
                cell()
            };
        }

        protected abstract object getActualValue(TService service);

        private Cell cell()
        {
            return new Cell(key, typeof (TCellType))
            {
                IsResult = true
            };
        }
    }
}