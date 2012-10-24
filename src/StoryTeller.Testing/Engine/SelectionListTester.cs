using System.Collections.Generic;
using NUnit.Framework;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class SelectionListTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            fixture = new SelectionValuesFixture();
        }

        #endregion

        private SelectionValuesFixture fixture;

        private IList<string> CellSelectionValuesFor(string grammarKey, string cellKey)
        {
            IGrammar grammar = fixture[grammarKey];
            return grammar.As<IGrammarWithCells>().FindCell(cellKey).SelectionValues;
        }

        [Test]
        public void read_explicit_selection_values_on_return_value()
        {
            CellSelectionValuesFor("WhatIsHisName", "name").ShouldHaveTheSameElementsAs("Trevor", "Tommy");
        }

        [Test]
        public void read_on_sentence_by_explicit_list()
        {
            CellSelectionValuesFor("DoSomething", "name").ShouldHaveTheSameElementsAs("Tom", "Todd");
        }

        [Test]
        public void read_on_sentence_by_key()
        {
            CellSelectionValuesFor("DoAnotherThing", "name").ShouldHaveTheSameElementsAs("Jeremy", "Monte", "Max");
        }

        [Test]
        public void read_on_table()
        {
            CellSelectionValuesFor("AddPerson", "name").ShouldHaveTheSameElementsAs("Chad", "Josh");
        }

        [Test]
        public void read_values_on_return_value_by_key()
        {
            CellSelectionValuesFor("WhatIsHerName", "name").ShouldHaveTheSameElementsAs("Jeremy", "Monte", "Max");
        }
    }


    public class SelectionValuesFixture : Fixture
    {
        public SelectionValuesFixture()
        {
            AddSelectionValues("Names", "Jeremy", "Monte", "Max");
        }

        [ExposeAsTable("Add some people")]
        public void AddPerson([SelectionValues("Chad", "Josh")] string name)
        {
        }

        public void DoSomething([SelectionValues("Tom", "Todd")] string name, int x, int y)
        {
        }

        public void DoAnotherThing([SelectionValues("Names")] string name, int x, int y)
        {
        }

        [return: SelectionValues("Trevor", "Tommy"), AliasAs("name")]
        public string WhatIsHisName()
        {
            return null;
        }

        [return: SelectionValues("Names"), AliasAs("name")]
        public string WhatIsHerName()
        {
            return null;
        }
    }
}