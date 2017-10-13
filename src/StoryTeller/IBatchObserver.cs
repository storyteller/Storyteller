using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller
{
    public interface IBatchObserver 
    {
        void SpecRequeued(SpecExecutionRequest request);
        void SpecHandled(SpecExecutionRequest request, SpecResults results);
    }
}