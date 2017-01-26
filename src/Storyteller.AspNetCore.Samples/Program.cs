using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
