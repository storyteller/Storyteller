using System;
using System.Collections.Generic;
using System.Windows;
using StoryTeller.Codegen;
using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Handlers
{
    public class TestHarnessFileRequested
    {
        public TestHarnessFileRequested(Test test)
        {
            Tests = new Test[] {test};
        }

        public IEnumerable<Test> Tests
        {
            get; set;
        }
    }

    public class TestHarnessToClipboardRequested
    {
        public TestHarnessToClipboardRequested(Test test)
        {
            Tests = new Test[] { test };
        }

        public IEnumerable<Test> Tests
        {
            get;
            set;
        }
    }

    public class CodegenHandler : IHandler, IListener<TestHarnessToClipboardRequested>, IListener<TestHarnessFileRequested>
    {
        private readonly Func<ProjectContext> _context;

        public CodegenHandler(Func<ProjectContext> context)
        {
            _context = context;
        }

        private ProjectRunnerCodegenService service
        {
            get
            {
                return new ProjectRunnerCodegenService(_context().Project);
            }
        }

        public void Handle(TestHarnessToClipboardRequested message)
        {
            string harnessText = service.GenerateClass(message.Tests);
            Clipboard.SetText(harnessText);
        }

        public void Handle(TestHarnessFileRequested message)
        {
            service.GenerateFile(message.Tests);
        }
    }
}