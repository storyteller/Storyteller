using System;


namespace StoryTeller.Engine
{
    public interface ISystem : IDisposable
    {
        IExecutionContext CreateContext();
        void Recycle();
    }
}