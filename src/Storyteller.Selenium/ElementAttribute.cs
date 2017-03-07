using StoryTeller;

namespace Storyteller.Selenium
{
    public class ElementAttribute : SelectionListAttribute
    {
        public ElementAttribute() : base(ScreenFixture.ElementsListName)
        {
        }
    }
}