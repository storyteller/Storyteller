using System;
using System.IO;
using System.Linq;
using Oakton;
using StoryTeller.Model;
using StoryTeller.Remotes;

namespace StoryTeller.Engine
{
    public class RunningSystem
    {
        public static RunningSystem Create(ISystem inner)
        {
            return new RunningSystem(inner);
        }

        private RunningSystem(ISystem system)
        {
            CellHandling cellHandling = null;

            try
            {
                cellHandling = system.Start() ?? CellHandling.Basic();

                System = cellHandling.Extensions.Any() ? new CompositeSystem(system, cellHandling) : system;
            }
            catch (Exception ex)
            {
                ConsoleWriter.Write(ConsoleColor.Red, ex.ToString());

                RecycledMessage = new SystemRecycled
                {
                    success = false,
                    fixtures = new FixtureModel[0],
                    system_name = system.ToString(),
                    system_full_name = system.GetType().FullName,
#if NET46
                    name = Path.GetFileName(AppDomain.CurrentDomain.BaseDirectory),
#else
                    name = Path.GetFileName(AppContext.BaseDirectory),
#endif

                    error = ex.ToString()
                };
            }


            Fixtures = FixtureLibrary.CreateForAppDomain(cellHandling);

            RecycledMessage = new SystemRecycled
            {
                success = true,
                fixtures = Fixtures.Models.GetAll().ToArray(),
                system_name = system.ToString(),
#if NET46
                name = Path.GetFileName(AppDomain.CurrentDomain.BaseDirectory)
#else
                name = Path.GetFileName(AppContext.BaseDirectory)
#endif
            };
        }

        public FixtureLibrary Fixtures { get; }

        public SystemRecycled RecycledMessage { get; }

        public ISystem System { get; }
    }
}