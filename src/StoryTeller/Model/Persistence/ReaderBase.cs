using System;
using System.Collections.Generic;
using System.IO;
using Baseline;

namespace StoryTeller.Model.Persistence
{
    public abstract class ReaderBase<T> : IDisposable
    {
        private readonly TextReader _reader;
        private readonly Stack<IReaderMode> _modes = new Stack<IReaderMode>();

        protected ReaderBase(TextReader reader)
        {
            _reader = reader;
        }

        protected T Target { get; set; }

        public T Read()
        {
            var lineNumber = 0;
            string line = null;
            while ((line = _reader.ReadLine()) != null)
            {
                lineNumber++;

                try
                {
                    var indention = line.LeadingSpaces();
                    parseLine(indention, line.Trim());
                }
                catch (Exception e)
                {
                    stoppedWithError(lineNumber, e);
                    break;
                }
            }

            // Just to kick off any hanging work
            parseLine(0, string.Empty);

            return Target;
        }

        protected abstract void stoppedWithError(int lineNumber, Exception exception);

        protected virtual void finish()
        {
            // nothing
        }

        protected IReaderMode current => _modes.Peek();

        protected void push(IReaderMode mode)
        {
            _modes.Push(mode);
        }

        private void parseLine(int indention, string line)
        {
            var mode = current.Read(indention, line);
            if (mode == null)
            {
                _modes.Pop();

                if (line.IsEmpty())
                {
                    return;
                }

                startNewMode(indention, line);
            }
            else if (!ReferenceEquals(mode, current))
            {
                _modes.Push(mode);
                startNewMode(indention, line);
            }
        }

        private void startNewMode(int indention, string line)
        {
            if (_modes.Count == 0) return;

            var next = current.Read(indention, line);
            if (next == null)
            {
                _modes.Pop();
                startNewMode(indention, line);
            }
            else
            {
                next.Indention = indention;

                if (!ReferenceEquals(next, current))
                {
                    _modes.Push(next);
                }
            }
        }

        public void Dispose()
        {
            _reader?.SafeDispose();
        }
    }
}
