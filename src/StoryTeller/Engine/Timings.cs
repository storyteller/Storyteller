using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Newtonsoft.Json;
using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public class Timings
    {
        private readonly Stopwatch _stopwatch = new Stopwatch();
        private readonly IList<PerfRecord> _records = new List<PerfRecord>();
        private PerfRecord _main;

        public void Start(Specification spec)
        {
            _main = new PerfRecord("Specification", spec.Name, 0);
            _records.Add(_main);
            _stopwatch.Start();
        }

        public long Duration
        {
            get { return _stopwatch.ElapsedMilliseconds; }
        }

        public IDisposable Subject(string type, string subject)
        {
            var record = new PerfRecord(type, subject, _stopwatch.ElapsedMilliseconds);
            _records.Add(record);

            return new Marker(record, _stopwatch);
        }

        public IEnumerable<PerfRecord> Finish()
        {
            if (_main != null) _main.MarkEnd(_stopwatch.ElapsedMilliseconds);
            _stopwatch.Stop();

            return _records.OrderBy(x => x.Start).ToArray();
        }

        public class Marker : IDisposable
        {
            private readonly PerfRecord _record;
            private readonly Stopwatch _stopwatch;

            public Marker(PerfRecord record, Stopwatch stopwatch)
            {
                _record = record;
                _stopwatch = stopwatch;
            }

            public void Dispose()
            {
                _record.MarkEnd(_stopwatch.ElapsedMilliseconds);
            }
        }
    }

    public class PerfRecord
    {
        public PerfRecord(string type, string subject, long start)
        {
            Type = type;
            Subject = subject;
            Start = start;
        }

        public void MarkEnd(long end)
        {
            End = end;
        }

        [JsonProperty("type")]
        public string Type { get; private set; }

        [JsonProperty("subject")]
        public string Subject { get; private set; }

        [JsonProperty("start")]
        public long Start { get; private set; }

        [JsonProperty("end")]
        public long End { get; private set; }

        [JsonProperty("duration")]
        public long Duration
        {
            get { return End - Start; }
        }
    }
}