using System.Collections.Generic;
using System.Linq;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Exploring;

namespace StoryTeller.UserInterface.Commands
{
    public abstract class MarkLifecycleCommand : IContextualAction<Suite>
    {
        private readonly ITestExplorer _explorer;
        private readonly ITestService _service;
        private readonly Suite _suite;

        public MarkLifecycleCommand(Suite suite, ITestService service, ITestExplorer explorer)
        {
            _suite = suite;
            _service = service;
            _explorer = explorer;
        }

        #region IContextualAction<Suite> Members

        public Icon Icon { get { return Icon.Unknown; } }

        public string Description { get { return "Mark as " + lifecycle(); } }

        public bool Enabled { get { return true; } }

        public void Execute()
        {
            _explorer.TestsMatchingFilter(_suite)
                .Where(x => x.Lifecycle != lifecycle())
                .Each(x =>
                {
                    x.Lifecycle = lifecycle();
                    _service.Save(x);
                });

            _explorer.ResetFilter();
        }

        #endregion

        protected abstract Lifecycle lifecycle();
    }
}