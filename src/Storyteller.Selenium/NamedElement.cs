using StoryTeller;

namespace Storyteller.Selenium
{
    // SAMPLE: using-selection-list-on-arguments
    [SelectionList(ScreenFixture.ElementsListName)]
    public class NamedElement
    {
        public string Name { get; }

        public NamedElement(string name)
        {
            Name = name;
        }
    }
    // ENDSAMPLE
}