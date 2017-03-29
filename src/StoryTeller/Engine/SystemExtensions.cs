using System;
using System.IO;
using System.Linq;
using StoryTeller.Model;
using StoryTeller.Remotes;

namespace StoryTeller.Engine
{
    public static class SystemExtensions
    {
        public static SystemRecycled Initialize(this ISystem system, Action<FixtureLibrary> onStarted)
        {
            CellHandling cellHandling = null;

            try
            {
                cellHandling = system.Start() ?? CellHandling.Basic();
            }
            catch (Exception ex)
            {
                ConsoleWriter.Write(ConsoleColor.Red, ex.ToString());

                var message = new SystemRecycled
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

                return message;
            }


            var library = FixtureLibrary.CreateForAppDomain(cellHandling);

            onStarted(library);

            return new SystemRecycled
            {
                success = true,
                fixtures = library.Models.GetAll().ToArray(),
                system_name = system.ToString(),
#if NET46
                name = Path.GetFileName(AppDomain.CurrentDomain.BaseDirectory)
#else
                name = Path.GetFileName(AppContext.BaseDirectory)
#endif
            };
        }
    }
}