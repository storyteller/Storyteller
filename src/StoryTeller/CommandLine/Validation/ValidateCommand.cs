using System;
using System.Collections.Generic;
using FubuCore;
using FubuCore.CommandLine;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Model;
using StoryTeller.ProjectUtils;

namespace StoryTeller.CommandLine.Validation
{
    [CommandDescription("Validate that all usages of fixtures and grammars are valid within a suite of StoryTeller tests.")]
    public class ValidateCommand : FubuCommand<ValidateInput>
    {
        public override bool Execute(ValidateInput input)
        {
            var project = ProjectLoader.Load(input.Path, input.CompileFlag, null);
            Console.WriteLine("Verifying Fixture and Grammar usages for project {0}", project.Name);

            var runner = new ProjectTestRunner(project);

            var tests = runner.Hierarchy.GetAllTests();
            var hasFailures = false;

            tests.Each(test =>
            {
                var errorStream = new ErrorStream();
                new TestParser(test, errorStream, runner.GetLibary()).Parse();

                if (errorStream.HasErrors)
                {
                    hasFailures = true;

                    Console.WriteLine("** {0}/{1}", errorStream.Test.SuiteName, errorStream.Test.Name);
                    errorStream.Errors.Each(error => Console.WriteLine("    {0}", error));
                }
            });

            if (!hasFailures)
            {
                Console.WriteLine("All Fixture and Grammar usages are valid");
            }

            return !hasFailures;
        }
    }

    public class ErrorStream : ITestStream
    {
        public Test Test { get; private set; }

        public bool HasErrors { get { return _errors.Count > 0; } }

        private readonly List<string> _errors;
        public IList<string> Errors { get { return _errors.AsReadOnly(); } }

        public ErrorStream()
        {
            _errors = new List<string>();
        }

        void ITestStream.StartTest(Test test)
        {
            Test = test;
        }

        void ITestStream.InvalidSection(Section section)
        {
            _errors.Add("Invalid Fixture '{0}'".ToFormat(section.FixtureName));
        }

        void ITestStream.InvalidGrammar(string grammarKey, IStep step)
        {
            _errors.Add("Invalid Grammar '{0}'".ToFormat(grammarKey));
        }

        #region NO-OP

        void ITestStream.Tags(Tags tags)
        {
            // NO-OP
        }

        void ITestStream.Comment(Comment comment)
        {
            // NO-OP
        }

        void ITestStream.StartSection(Section section, FixtureStructure fixture)
        {
            // NO-OP
        }

        void ITestStream.EndSection(Section section)
        {
            // NO-OP
        }

        void ITestStream.Sentence(Sentence sentence, IStep step)
        {
            // NO-OP
        }

        void ITestStream.Table(Table table, IStep step)
        {
            // NO-OP
        }

        void ITestStream.SetVerification(SetVerification verification, IStep step)
        {
            // NO-OP
        }

        void ITestStream.StartParagraph(Paragraph paragraph, IStep step)
        {
            // NO-OP
        }

        void ITestStream.EndParagraph(Paragraph paragraph, IStep step)
        {
            // NO-OP
        }

        void ITestStream.StartEmbeddedSection(EmbeddedSection section, IStep step)
        {
            // NO-OP
        }

        void ITestStream.EndEmbeddedSection(EmbeddedSection section, IStep step)
        {
            // NO-OP
        }

        void ITestStream.EndTest(Test test)
        {
            // NO-OP
        }

        void ITestStream.IncrementParagraphGrammar()
        {
            // NO-OP
        }

        void ITestStream.Do(DoGrammarStructure structure, IStep step)
        {
            // NO-OP
        }

        #endregion
    }

}