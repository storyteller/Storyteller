using System;
using System.Collections.Generic;
using System.Reflection;
using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public abstract class SingleLineGrammar : IGrammar
    {
        private readonly LineGrammar _inner;

        protected SingleLineGrammar()
        {
            var types = new List<Type>
            {
                typeof (object),
                typeof (SingleLineGrammar)
            };

            foreach (MethodInfo method in GetType().GetMethods())
            {
                if (types.Contains(method.DeclaringType))
                {
                    continue;
                }

                _inner = GrammarBuilder.BuildGrammar(method, this).As<LineGrammar>();
                break;
            }

            if (_inner == null)
            {
                throw new ApplicationException("There is no suitable public method for this Grammar");
            }
        }

        protected SingleLineGrammar(string format)
            : this()
        {
            replaceFormat(format);
        }

        #region IGrammar Members

        public void Execute(IStep containerStep, ITestContext context)
        {
            beforeExecute();
            _inner.Execute(containerStep, context);
            afterExecute();
        }

        public GrammarStructure ToStructure(FixtureLibrary library)
        {
            return _inner.ToStructure(library);
        }

        public string Description { get { return _inner.Description; } }

        #endregion

        public IList<Cell> GetCells()
        {
            return _inner.GetCells();
        }

        protected void replaceFormat(string format)
        {
            _inner.CallOn<ReflectionGrammar>(x => x.Template = format);
        }

        protected virtual void afterExecute()
        {
        }

        protected virtual void beforeExecute()
        {
        }
    }
}