using System.Collections.Generic;
using System.Windows.Controls;
using NUnit.Framework;
using StoryTeller.UserInterface.Testing.UI;

namespace StoryTeller.UserInterface.Testing
{
    public static class TestingExtensions
    {
        public static IEnumerable<string> GetMenus(this ContextMenu menu)
        {
            var list = new List<string>();
            foreach (MenuItem item in menu.Items)
            {
                list.Add(item.Header.As<string>());
            }

            return list;
        }

        public static void ClickMenu(this ContextMenu menu, string text)
        {
            foreach (MenuItem item in menu.Items)
            {
                if (item.Header.Equals(text))
                {
                    ControlDriver.ClickOn(item);
                    return;
                }
            }

            Assert.Fail("Did not find the menu item");
        }
    }
}
