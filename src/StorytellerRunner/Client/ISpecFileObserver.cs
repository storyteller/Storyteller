namespace ST.Client
{
    public interface ISpecFileObserver
    {
        void Changed(string file);
        void Added(string file);
        void Deleted(string file);
    }
}