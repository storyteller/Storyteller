using System;
using Baseline;
using Oakton;
using StoryTeller;
using StoryTeller.Commands;
using StoryTeller.Engine;
using StoryTeller.Messages;
using StoryTeller.Remotes;

namespace ST.Client
{
    public interface ISystemLauncher
    {
        void AssertValid();
        void Teardown();

        // TODO -- make this return a Task<SystemRecycled>
        void Start(IEngineController remoteController);
    }



}
