#if NET46
using System;
using System.Linq;
using System.Runtime.Hosting;
using Baseline;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Remotes
{
    public class RemoteDomainExpression
    {
        private static readonly FileSystem fileSystem = new FileSystem();

        private readonly AppDomainSetup _setup = new AppDomainSetup
        {
            ApplicationName = "Storyteller-SpecRunning-AppDomain",
            ShadowCopyFiles = "true",
            ConfigurationFile = "App.config",
            ApplicationBase = ".".ToFullPath()
        };

        public AppDomainSetup Setup => _setup;

        private string correctBinPath(string serviceDirectory, string binPath)
        {
            var dllFile = new FileSystem().FindFiles(serviceDirectory.AppendPath(binPath), FileSet.Deep("Storyteller.dll")).FirstOrDefault();

            if (dllFile.IsNotEmpty())
            {
                return dllFile.PathRelativeTo(serviceDirectory).ParentDirectory();
            }

            return binPath;
        }

        public int Port
        {
            set
            {
                _setup.AppDomainInitializerArguments = new []{value.ToString()};
            }
        } 

        public string ServiceDirectory
        {
            get { return _setup.ApplicationBase; }
            set
            {
                _setup.ApplicationBase = value;

                if (fileSystem.DirectoryExists(value, "bin"))
                {
                    _setup.PrivateBinPath = "bin";
                }

                // Favor Debug over release
                if (fileSystem.DirectoryExists(value, "bin", "Debug"))
                {
                    _setup.PrivateBinPath = correctBinPath(value, "bin".AppendPath("Debug"));
                }
                else if (fileSystem.DirectoryExists(value, "bin", "Release"))
                {
                    _setup.PrivateBinPath = correctBinPath(value, "bin".AppendPath("Release"));
                }

                if (fileSystem.FileExists(value.AppendPath("App.config")))
                {
                    _setup.ConfigurationFile = value.ToFullPath().AppendPath("App.config");
                }
                else if (fileSystem.FileExists(value.AppendPath("Web.config")))
                {
                    _setup.ConfigurationFile = value.ToFullPath().AppendPath("Web.config");
                }
                // Now check for other cased files for when the fs is case sensitive.
                if (fileSystem.FileExists(value.AppendPath("app.config")))
                {
                    _setup.ConfigurationFile = value.ToFullPath().AppendPath("app.config");
                }
                else if (fileSystem.FileExists(value.AppendPath("web.config")))
                {
                    _setup.ConfigurationFile = value.ToFullPath().AppendPath("web.config");
                }
            }
        }

        /// <summary>
        ///     Use to force the selection of bin/Debug or bin/Release for the private bin path of the remote AppDomain
        /// </summary>
        public string BuildProfile
        {
            set
            {
                if (fileSystem.DirectoryExists(_setup.ApplicationBase, "bin", value))
                {
                    _setup.PrivateBinPath = "bin".AppendPath(value);
                }
            }
        }

        public MessagingHub Listeners { get; } = new MessagingHub();
    }
}

#endif