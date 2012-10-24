namespace StoryTeller.Model
{
    public interface SentencePart
    {
        void AcceptVisitor(ISentenceVisitor visitor);
    }

    public interface ISentenceVisitor
    {
        void Label(Label label);
        void Input(TextInput input);
    }
}