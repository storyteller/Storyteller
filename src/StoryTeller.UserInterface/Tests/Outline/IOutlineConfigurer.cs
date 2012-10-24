using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Tests.Outline
{
    public interface IOutlineConfigurer
    {
        // Dunno how this is going to work just yet
        // Column selector
        void ConfigureTableColumnSelector(OutlineNode node, Table table, IStep step);

        // Remove, MoveUp, MoveDown
        void ConfigureRearrangeCommands(OutlineNode node, IPartHolder holder, ITestPart part);
        
        // ALT-INS opens the add step / comment dialog -- just let it stay open until closed
        void ConfigurePartAdders(OutlineNode node, FixtureStructure fixture, IPartHolder holder);
        void WriteSentenceText(OutlineNode node, Sentence sentence, IStep step);
        void ConfigureSectionAdder(OutlineNode node, FixtureLibrary library, Test test);
    }
}