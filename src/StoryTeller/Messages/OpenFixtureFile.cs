namespace StoryTeller.Messages
{
    public class OpenFixtureFile : ClientMessage
    {
        public OpenFixtureFile() : base("open-fixture-file")
        {
        }

        public string key { get; set; }
        public bool export { get; set; }
    }


}