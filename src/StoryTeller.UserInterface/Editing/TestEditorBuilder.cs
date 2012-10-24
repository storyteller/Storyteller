using System;
using System.Collections.Generic;
using FubuCore;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Model;
using StoryTeller.Persistence;
using StoryTeller.UserInterface.Editing.HTML;
using StoryTeller.UserInterface.Editing.Scripts;
using System.Linq;

namespace StoryTeller.UserInterface.Editing
{
    public interface ITestEditorBuilder : IStartable
    {
        HtmlDocument BuildEditor(Test test);
    }

    public class TestEditorBuilder : ITestEditorBuilder, IListener<BinaryRecycleFinished>
    {
        private const string JQUERY = "jquery-1.3.2.js";
        private const string STORYTELLER = "StoryTeller.js";

        private FixtureLibrary _library;

        public void Start()
        {
            // no op
        }

        public HtmlDocument BuildEditor(Test test)
        {
            return BuildTestEditor(test, _library);
        }

        public void Handle(BinaryRecycleFinished message)
        {
            _library = message.Library;
        }

        public HtmlDocument BuildTestEditor(Test test, FixtureLibrary library)
        {
            var document = new HtmlDocument();

            addStyle(document);

            document.DocType += "\n\r<META http-equiv=\"X-UA-Compatible\" content=\"IE=8\">\n\r<!-- saved from url=(0016)http://localhost -->";

            addJavascriptFiles(document);

            addTest(test, document);

            addTemplates(document, library);

            addTestEditor(document, library);

            return document;
        }

        private void addTestEditor(HtmlDocument document, FixtureLibrary library)
        {
            var editor = new TestEditorTag(library);
            document.Add(editor);
        }

        private void addStyle(HtmlDocument document)
        {
            Embeds.WriteTestEditorCSS();
            document.ReferenceStyle("testEditor.css");

            //document.AddStyle(Embeds.TestEditorCSS());
        }

        private void addJavascriptFiles(HtmlDocument document)
        {
            var scripts = new string[] {JQUERY, STORYTELLER};

            Embeds.WriteFiles();
            var files = Embeds.GetFiles();

            scripts.Each(s =>
            {
                var file = files.First(x => x.FileName == s);
                document.AddJavaScript(file.Contents());
                //document.ReferenceJavaScriptFile(file.FullPath);
            });



            files.Where(x => !scripts.Contains(x.FileName)).Each(file =>
            {
                document.AddJavaScript(file.Contents());
                //document.ReferenceJavaScriptFile(file.FullPath);
            });
        }

        private void addTemplates(HtmlDocument document, FixtureLibrary library)
        {
            var writer = new GrammarWriter(library);
            HtmlTag templates = writer.Build();
            document.Add(templates);
        }

        private void addTest(Test test, HtmlDocument document)
        {
            string json = new TestWriter().WriteToJson(test);
            string script = "var test = new Step({0});".ToFormat(json);
            document.AddJavaScript(script);
        }
    }
}