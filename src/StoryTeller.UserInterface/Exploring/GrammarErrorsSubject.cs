using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface.Exploring
{
    public class GrammarErrorsSubject : SingletonScreenSubject<GrammarErrorPresenter>
    {
        public bool Equals(GrammarErrorsSubject obj)
        {
            return !ReferenceEquals(null, obj);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (GrammarErrorsSubject)) return false;
            return Equals((GrammarErrorsSubject) obj);
        }

        public override int GetHashCode()
        {
            return 0;
        }
    }
}