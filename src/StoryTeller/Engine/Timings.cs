using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Newtonsoft.Json;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Engine
{
    public class Timings : IDisposable
    {
        private readonly Stopwatch _stopwatch = new Stopwatch();
        private readonly IList<PerfRecord> _records = new List<PerfRecord>();
        private PerfRecord _main;

        public void Start(Specification spec)
        {
            _main = new PerfRecord("Specification", spec.name, 0, 0);
            _records.Add(_main);
            _stopwatch.Start();
        }

        public long Duration => _stopwatch.ElapsedMilliseconds;

        public PerfRecord Subject(string type, string subject, long allowableRuntimeInMilliseconds)
        {
            var record = new PerfRecord(type, subject, _stopwatch.ElapsedMilliseconds, allowableRuntimeInMilliseconds);
            _records.Add(record);

            return record;
        }

        public void End(PerfRecord record, IResultMessage result = null)
        {
            if (record == null) throw new ArgumentNullException(nameof(record));

            record.MarkEnd(_stopwatch.ElapsedMilliseconds);

            result?.MarkPerformance(record);
        }

        public IEnumerable<PerfRecord> AllRecords
        {
            get
            {
                return _records.OrderBy(x => x.Start).ToArray();
            }
        } 

        public IEnumerable<PerfRecord> Finish()
        {
            _main?.MarkEnd(_stopwatch.ElapsedMilliseconds);
            _stopwatch.Stop();

            return _records.OrderBy(x => x.Start).ToArray();
        }



        public void Dispose()
        {
            if (_stopwatch.IsRunning) _stopwatch.Stop();
        }
    }

    public class PerfRecord
    {
        public PerfRecord(string type, string subject, long start, long threshold)
        {
            Type = type;
            Subject = subject;
            Start = start;
            Threshold = threshold;
        }

        public void MarkEnd(long end)
        {
            End = end;
        }

        [JsonProperty("type")]
        public string Type { get; }

        [JsonProperty("subject")]
        public string Subject { get; }

        [JsonProperty("start")]
        public long Start { get; }

        [JsonProperty("end")]
        public long End { get; private set; }

        [JsonProperty("duration")]
        public long Duration => End - Start;

        [JsonProperty("perfFailure")]
        public bool PerfViolation {
            get
            {
                if (Threshold <= 0) return false;

                return Duration > Threshold;
            }
        }

        [JsonProperty("threshold")]
        public long Threshold { get; set; }
    }
}