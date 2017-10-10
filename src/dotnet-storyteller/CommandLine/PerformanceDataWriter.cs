using System.Collections.Generic;
using System.IO;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Remotes.Messaging;

namespace ST.CommandLine
{
    public static class PerformanceDataWriter
    {
        public static void WriteCSV(BatchRunResponse results, string file)
        {
            using (var stream = new FileStream(file, FileMode.Create))
            {
                using (var writer = new StreamWriter(stream))
                {

                    results.records.Each(record =>
                    {
                        var suite = record.specification.SuitePath();
                        var name = record.specification.name.Replace(',', ' ');
                        var id = record.specification.id;

                        record.results.Performance.Each(x =>
                        {
                            writer.WriteLine("{0},{1},{2},{3},{4},{5},{6},{7}",
                                id,
                                suite,
                                name,
                                x.Type,
                                x.Subject,
                                x.Duration,
                                x.Start,
                                x.End
                            );

                        });
                    });
                }
            }
        }

        public static void WriteJSON(BatchRunResponse results, string file)
        {
            new FileSystem().WriteStringToFile(file, JsonSerialization.ToIndentedJson(results.records));
        }


    }
}