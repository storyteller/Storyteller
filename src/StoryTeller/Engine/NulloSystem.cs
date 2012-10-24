using System;
using FubuCore;
using FubuCore.Binding;

namespace StoryTeller.Engine
{
    public class NulloSystem : ISystem
    {
        #region ISystem Members

        public IExecutionContext CreateContext()
        {
            return new SimpleExecutionContext();
        }

        public void Recycle()
        {
        }

        public void Dispose()
        {
        }

        #endregion
    }


}