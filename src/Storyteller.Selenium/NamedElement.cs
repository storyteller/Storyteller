using StoryTeller;

namespace Storyteller.Selenium
{
    [SelectionList(ScreenFixture.ElementsListName)]
    public class NamedElement
    {
        public string Name { get; }

        public NamedElement(string name)
        {
            Name = name;
        }
    }
}