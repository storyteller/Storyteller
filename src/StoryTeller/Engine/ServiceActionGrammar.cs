using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller.Engine
{
    public abstract class ServiceActionGrammar<TService, TCellType> : LineGrammar
    {
        public string DefaultValue = null;

        protected ServiceActionGrammar(string key, string template)
            : base(template)
        {
            this.key = key;
        }

        protected internal string key { get; set; }

        public override string Description { get { return DescriptionAttribute.GetDescription(GetType()); } }

        public override void Execute(IStep containerStep, ITestContext context)
        {
            var service = context.Retrieve<TService>();
            cell().ReadArgument(context, containerStep, x => execute(service, (TCellType) x));
        }

        public override IList<Cell> GetCells()
        {
            return new List<Cell>
            {
                cell()
            };
        }

        protected abstract void execute(TService service, TCellType value);

        private Cell cell()
        {
            return new Cell(key, typeof (TCellType)){
                DefaultValue = DefaultValue
            };
        }
    }
}