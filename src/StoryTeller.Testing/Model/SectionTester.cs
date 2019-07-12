using System;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Model
{
    public class SectionTester
    {
        [Fact]
        public void is_cell_active_with_no_information_assume_yes()
        {
            var cell = Cell.For<string>("one");
            var section = new Section("foo");

            section.IsCellActive(cell).ShouldBeTrue();
        }
        
        [Fact]
        public void is_cell_active_with_positive()
        {
            var cell = Cell.For<string>("one");
            var section = new Section("foo");
            section.ActiveCells.Add("one", true);

            section.IsCellActive(cell).ShouldBeTrue();
        }
        
        [Fact]
        public void is_cell_active_with_negative()
        {
            var cell = Cell.For<string>("one");
            var section = new Section("foo");
            section.ActiveCells.Add("one", false);

            section.IsCellActive(cell).ShouldBeFalse();
        }
    }
}
