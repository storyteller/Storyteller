using System.Threading;
using WebApp;

namespace Storyteller.AspNetCore.Samples
{
    public class Program
    {
        public static void Main(string[] args)
        {
            AspNetCoreSystem.Run<Startup>(args);
        }
    }
}