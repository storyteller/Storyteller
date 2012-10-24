using System.IO;
using System.Reflection;

namespace StoryTeller.UserInterface.Icons
{
    public class IconMarker
    {
        private static readonly Assembly _assembly = Assembly.GetExecutingAssembly();

        public static Stream GetImage(string path)
        {
            return _assembly.GetManifestResourceStream(typeof (IconMarker), path);
        }
    }
}