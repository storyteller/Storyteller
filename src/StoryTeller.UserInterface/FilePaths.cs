using System.IO;

namespace StoryTeller.UserInterface
{
    public static class FilePaths
    {
        public const string ArtifactsFolder = "st-artifacts";
        public static readonly string EditorHtml = Path.Combine(ArtifactsFolder, "editor.htm");
        public static readonly string HistoryFile = Path.Combine(ArtifactsFolder, "history.xml");
        public static readonly string TestEditorCss = Path.Combine(ArtifactsFolder, "testEditor.css");

        static FilePaths()
        {
            Directory.CreateDirectory(ArtifactsFolder);
        }
    }
}