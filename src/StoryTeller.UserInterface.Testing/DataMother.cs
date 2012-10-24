using System.Windows;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Projects;
using StructureMap;

namespace StoryTeller.UserInterface.Testing
{
    public static class DataMother
    {
        public static IScreenObjectRegistry ScreenObjectRegistry()
        {
            return new ScreenObjectRegistry(new Window(), new Container(), new Shell());
        }

        public static ProjectHistory HistoryPointingToMathProject()
        {
            var history = new ProjectHistory();
            history.Store(new ProjectToken
            {
                Name = "Math",
                Filename = StoryTeller.Testing.DataMother.MathProjectFile()
            });

            return history;
        }

        public static void LoadMathProject()
        {
            ObjectFactory.GetInstance<IProjectController>().LoadProject(new ProjectToken
            {
                Filename = StoryTeller.Testing.DataMother.MathProjectFile()
            });
        }
    }
}