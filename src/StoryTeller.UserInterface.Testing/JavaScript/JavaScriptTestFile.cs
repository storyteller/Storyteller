using System;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using FubuCore;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Persistence;
using StoryTeller.UserInterface.Editing.HTML;
using System.Linq;

namespace StoryTeller.UserInterface.Testing.JavaScript
{
    public class JavaScriptTestFile : HtmlDocument
    {
        private const string SCRIPT_PATH = @"..\..\..\StoryTeller.UserInterface\Editing\Scripts";
        private const string TEST_PATH = @"..\..\JavaScript\TestScripts";
        protected FixtureLibrary _library;

        public JavaScriptTestFile(string title)
        {
            Title = title;

            ReferenceStyle(Path.Combine(SCRIPT_PATH, "testEditor.css"));
            linkToAllScripts("External");
            referenceFiles();


            linkToAllScripts("Core");
            linkToAllScripts("Controls");

            addChildren(title);
        }

        public string FileName { get { return getPath(); } }

        protected virtual void referenceFiles()
        {
            ReferenceStyle("JavaScript/testsuite.css");
            ReferenceJavaScriptFile("JavaScript/testrunner.js");
        }

        protected virtual void addChildren(string title)
        {
            Add("h1").Text(title);
            Add("h2").Id("banner");
            Add("ol").Id("tests");
            Add("div").Id("results");
            Add("div").Id("main");
            Add("form").Id("mainForm");
        }


        public JavaScriptTestFile AddTest(string name, Test test)
        {
            string json = new TestWriter().WriteToJson(test);

            string script = "var {0} = new Step({1});".ToFormat(name, json);
            AddJavaScript(script);


            return this;
        }

        public JavaScriptTestFile Html(Action<JavaScriptTestFile> configure)
        {
            configure(this);

            return this;
        }

        public JavaScriptTestFile TestFile(string testFile)
        {
            string path = Path.Combine(Path.GetFullPath(TEST_PATH), testFile);
            ReferenceJavaScriptFile("file:///" + path);

            return this;
        }

        public JavaScriptTestFile Fixtures(FixtureLibrary fixtureLibrary)
        {
            _library = fixtureLibrary;

            var writer = new GrammarWriter(_library);
            HtmlTag templates = writer.Build();
            Add(templates);

            return this;
        }

        public void WriteToFile()
        {
            WriteToFile(getPath());
        }

        protected override string getPath()
        {
            return Title + ".htm";
        }

        private void linkToAllScripts(string folder)
        {
            string top = Path.GetFullPath(SCRIPT_PATH);
            string path = Path.Combine(top, folder);
            Directory.GetFiles(path, "*.js").Where(x => !x.Contains("bootstrapper")).Each(x =>
            {
                ReferenceJavaScriptFile("file:///" + x);
            });
        }

        public static string GetResourceFileContents(string resourceName)
        {
            Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(typeof (JavaScriptTestFile),
                                                                                      resourceName);
            var reader = new StreamReader(stream);

            return reader.ReadToEnd();
        }
    }
}