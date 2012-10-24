using System;
using System.Collections.Generic;
using FubuCore.Util;
using StoryTeller.Domain;

namespace StoryTeller.Engine
{
    [Serializable]
    public class StepResults : IStepResults
    {
        protected readonly List<string> _errorProperties = new List<string>();
        protected readonly List<string> _failedProperties = new List<string>();
        private readonly Frame _root = new Frame();
        private Frame _current;
        private readonly Cache<string, object> _results = new Cache<string, object>(key => null);
        private readonly Cache<string, object> _actuals = new Cache<string, object>(key => null);

        public StepResults()
        {
            _current = _root;
        }

        #region IErrors Members

        public string ExceptionText { get { return _current.ExceptionText; } }

        public void CaptureException(string exceptionString)
        {
            _current.AppendException(exceptionString);
        }

        public void MarkMissingValue(string key)
        {
            markExceptionField(key);
            string message = string.Format("\"{0}\" is not defined.", key);
            CaptureException(message);
        }

        public void ForExceptionText(Action<string> callback)
        {
            if (HasErrors())
            {
                callback(ExceptionText);
            }
        }

        /// <summary>
        /// Was there a syntax error or exception associated with this property in the Step?
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public bool IsInException(string key)
        {
            return _errorProperties.Contains(key);
        }

        public void MarkFormatFailure(string key)
        {
            string message = string.Format("Format exception for '{0}'", key);
            CaptureException(message);
            markExceptionField(key);
        }

        public void MarkExceptionField(string exceptionString, string key)
        {
            CaptureException(exceptionString);
            markExceptionField(key);
        }

        public void MarkFailure(string key)
        {
            _failedProperties.Add(key);
        }

        /// <summary>
        /// Was this property evaluated and determined to be wrong?
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public bool IsFailure(string key)
        {
            return _failedProperties.Contains(key);
        }

        /// <summary>
        /// Were there any exceptions related to this Step?
        /// </summary>
        /// <returns></returns>
        public bool HasErrors()
        {
            return _current.HasErrors();
        }

        public void MoveFrame()
        {
            _current = _current.Next();
        }

        public void MoveFirst()
        {
            _current = _root;
        }

        #endregion

        private void markExceptionField(string key)
        {
            _errorProperties.Add(key);
        }


        public void Clear()
        {
            _root.Clear();
            _current = _root;

            _errorProperties.Clear();
            _failedProperties.Clear();

            _results.ClearAll();
            _actuals.ClearAll();
        }

        #region Nested type: Frame

        #endregion


        public void SetActual(string key, object actual)
        {
            if (string.Empty.Equals(actual))
            {
                _actuals[key] = Step.BLANK;
            }
            else if (actual == null)
            {
                _actuals[key] = Step.NULL;
            }
            else
            {
                _actuals[key] = actual;
            }
        }


        public object GetActual(string key)
        {
            object raw = _actuals[key];
            if (raw == null) return null;
            if (raw.Equals(Step.NULL)) return null;
            if (raw.Equals(Step.BLANK)) return string.Empty;

            return raw;
        }

        public void SetResult<T>(T target, string key)
        {
            _results[key] = target;
        }

        public T GetResult<T>(string key)
        {
            return (T)_results[key];
        }

        public T ActualDisplay<T>(string key)
        {
            return (T)ActualDisplay(key);
        }

        public object ActualDisplay(string key)
        {
            return _actuals[key];
        }

        public bool HasActual(string key)
        {
            return _actuals.Has(key);
        }

        public void Collapse()
        {
            _root.Collapse();
            _current = _root;
        }
    }
}