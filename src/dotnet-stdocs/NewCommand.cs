using System;
using System.IO;
using System.Linq;
using System.Reflection;
using Baseline;
using Oakton;

namespace StorytellerDocGen
{
    public class NewInput
    {
        [Description("The project name for display in the website")]
        public string Title { get; set; }

        [Description("The root url of the website where this will be hosted")]
        public string Website { get; set; }

        [Description("Github user name or organization for the project")]
        public string GithubOrganization { get; set; }

        [Description("Name of the GitHub repository")]
        public string GithubRepository { get; set; }

        [Description("Optional, override the base directory of the project")]
        public string DirectoryFlag { get; set; }
    }

    public class NewCommand : OaktonCommand<NewInput>
    {
        public NewCommand()
        {
            Usage("Default")
                .Arguments(x => x.Title, x => x.Website, x => x.GithubOrganization, x => x.GithubRepository);
        }

        public override bool Execute(NewInput input)
        {
            var baseDirectory = input.DirectoryFlag ?? Directory.GetCurrentDirectory();


            var docDirectory = baseDirectory.AppendPath("documentation");
            var contentPath = docDirectory.AppendPath("content");
            var docTopicsPath = docDirectory.AppendPath("documentation");

            createDirectory(docDirectory);
            createDirectory(contentPath);
            createDirectory(docTopicsPath);

            var assembly = typeof(NewCommand).GetTypeInfo().Assembly;
            var names = assembly.GetManifestResourceNames().Where(x => x.Contains("Template") && !x.Contains(".DS_Store"));
            foreach (var name in names)
            {
                string path = "";


                var parts = name.Split('.');
                if (parts.Contains("content"))
                {
                    path = contentPath.AppendPath(parts.Skip(3).Join("."));
                }
                else if (parts.Contains("documentation"))
                {
                    path = docTopicsPath.AppendPath(parts.Skip(3).Join("."));
                }
                else
                {
                    path = docDirectory.AppendPath(parts.Skip(2).Join("."));
                }

                Console.WriteLine("Creating file " + path);
                var stream = assembly.GetManifestResourceStream(name);
                using (var file = new FileStream(path, FileMode.Create))
                {
                    stream.CopyTo(file);
                }

            }


            applySubstitutes(docDirectory.AppendPath("layout.htm"), input);
            applySubstitutes(docDirectory.AppendPath("splash.htm"), input);

            ConsoleWriter.Write(ConsoleColor.Green, "Documentation Seeded");


            return true;
        }

        private void applySubstitutes(string file, NewInput input)
        {
            var githubPath = $"{input.GithubOrganization}/{input.GithubRepository}";
            var fileSystem = new FileSystem();
            var contents = fileSystem.ReadStringFromFile(file);

            contents = contents
                .Replace("%TITLE%", input.Title)
                .Replace("%GITHUBPATH%", githubPath)
                .Replace("%WEBSITE%", input.Website);

            fileSystem.WriteStringToFile(file, contents);

        }

        private static void createDirectory(string path)
        {
            if (!Directory.Exists(path))
            {
                Console.WriteLine("Created directory " + path);
                Directory.CreateDirectory(path);
            }
        }
    }
}

