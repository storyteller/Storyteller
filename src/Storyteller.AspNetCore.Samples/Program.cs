using System;
using Alba;
using WebApp;

namespace StoryTeller.AspNetCore.Samples
{
    public class Program
    {
        public static void Main(string[] args)
        {
            AspNetCoreSystem.Run<Startup>(args);
        }
    }
}