using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Engine
{
    public class Timings : IDisposable
    {
        private readonly Stopwatch _stopwatch = new Stopwatch();
        private readonly IList<PerfRecord> _records = new List<PerfRecord>();
        private PerfRecord _main;

        [Obsolete("Move this to ExecutionResult")]
        public void Start(Specification spec)
        {
            _main = new PerfRecord("Specification", spec.name, 0, 0);
            _records.Add(_main);
            _stopwatch.Start();
        }

        public long Duration => _stopwatch.ElapsedMilliseconds;

        public PerfRecord Subject(string type, string subject, long allowableRuntimeInMilliseconds = 0)
        {
            var record = new PerfRecord(type, subject, _stopwatch.ElapsedMilliseconds, allowableRuntimeInMilliseconds);
            _records.Add(record);

            return record;
        }

        /// <summary>
        /// Easy way to add your own timings to the performance
        /// tracking
        /// </summary>
        /// <param name="type"></param>
        /// <param name="subject"></param>
        /// <returns></returns>
        public IDisposable Record(string type, string subject)
        {
            var record = Subject(type, subject, 0);
            return new PerfRecordTracking(this, record);
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

        internal class PerfRecordTracking : IDisposable
        {
            private readonly Timings _parent;
            private readonly PerfRecord _record;

            public PerfRecordTracking(Timings parent, PerfRecord record)
            {
                _parent = parent;
                _record = record;
            }

            public void Dispose()
            {
                _parent.End(_record);
            }
        }
    }
}
