namespace StoryTeller.Engine.Batching
{
    public static class TeamCityExtensions
    {
        public static string Escape(this string output)
        {
            if (output == null) return null;
            return output.Replace("|", "||").Replace("'", "|'").Replace("]", "|]").Replace("\n", "|n").Replace(
                "\r", "|r");
        }
    }
}