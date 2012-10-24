using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore.Util;
using StoryTeller.Engine;
using FubuCore;

namespace StoryTeller.Domain
{
    public interface IResult
    {
        string Key { get; set; }
    }

    [Serializable]
    public class Step : IStep
    {
        public static readonly string BLANK = "BLANK";
        public static readonly string NULL = "NULL";

        private readonly Cache<string, StepLeaf> _leaves =
            new Cache<string, StepLeaf>(key => new StepLeaf());


        private readonly Cache<string, string> _values = new Cache<string, string>(key => null);

        public Guid Id { get; private set; }

        public Step()
        {
            Id = Guid.NewGuid();
        }

        public Step(string grammarKey)
            : this()
        {
            GrammarKey = grammarKey;
        }

        public Step(string grammarKey, Action<Step> action)
            : this(grammarKey)
        {
            GrammarKey = grammarKey;
            action(this);
        }

        #region IStep Members

        public IList<PropertyError> Validate(IEnumerable<Cell> cells)
        {
            var list = new List<PropertyError>();
            cells.Where(c => !c.HasDefault()).Each(c =>
            {
                if (!_values.Has(c.Key))
                {
                    list.Add(new PropertyError
                    {
                        Attribute = c.Key,
                        Code = PropertyErrorCode.Missing
                    });
                }
            });

            _values.Each((key, v) =>
            {
                if (cells.FirstOrDefault(c => c.Key == key) == null)
                {
                    list.Add(new PropertyError
                    {
                        Attribute = key,
                        Code = PropertyErrorCode.Unknown
                    });
                }
            });

            return list;
        }

        public string GrammarKey { get; set; }



        public IStep ShallowClone()
        {
            var clone = new Step(GrammarKey);

            _values.Each((key, value) => clone.Set(key, value));

            return clone;
        }

        public IEnumerable<string> Attributes { get { return _values.GetAllKeys(); } }

        public string Description { get; set; }



        public Cache<string, string> Values { get { return _values; } }

        public void Set(string key, object value)
        {
            if (value == null)
            {
                _values[key] = null;
                return;
            }

            _values[key] = value.ToString();
        }

        public void Remove(string key)
        {
            _values.Remove(key);
        }

        public string Get(string key)
        {
            return !_values.Has(key) ? null : _values[key];
        }

        public bool Has(string key)
        {
            return _values.Has(key);
        }

        public bool HasLeaf(string name)
        {
            return _leaves.Has(name);
        }

        public StepLeaf LeafFor(string name)
        {
            return _leaves[name];
        }

        public void AcceptVisitor(ITestVisitor visitor)
        {
            visitor.RunStep(this);
        }

        public int StepCount()
        {
            return _leaves.GetAll().Sum(l => l.StepCount()) + 1;
        }

        public void EachLeaf(Action<string, StepLeaf> action)
        {
            _leaves.Each(action);
        }

        public IEnumerable<ITestPart> Children
        {
            get
            {
                foreach (StepLeaf leaf in _leaves)
                {
                    foreach (IStep step in leaf)
                    {
                        yield return step;

                        foreach (ITestPart part in step.Children)
                        {
                            yield return part;
                        }
                    }
                }
            }
        }

        #endregion


        public Step With(string key, object value)
        {
            Set(key, value);
            return this;
        }

        /// <summary>
        /// Only useful for testing:  "key1:value1, key2:value2, key3:value3"
        /// </summary>
        /// <param name="text"></param>
        /// <returns></returns>
        public Step With(string text)
        {
            if (string.IsNullOrEmpty(text)) return this;

            ParseValues(text).Each(x => With(x.Key, x.Value));

            return this;
        }

        public Step WithChildren(string childKey, params Step[] steps)
        {
            StepLeaf leaf = LeafFor(childKey);
            steps.Each(leaf.Add);
            return this;
        }

        public override string ToString()
        {
            return string.Format("Step: {0}", GrammarKey);
        }

        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }

        public static IDictionary<string, string> ParseValues(string text)
        {
            var dict = new Dictionary<string, string>();
            if (text.IsEmpty()) return dict;

            string[] data = text.Split(',');
            foreach (string property in data)
            {
                string[] parts = property.Split(':');
                dict.Add(parts[0].Trim(), parts[1].Trim());
            }

            return dict;
        }
    }
}