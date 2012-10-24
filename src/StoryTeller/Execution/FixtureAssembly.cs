using System;
using System.Reflection;
using StoryTeller.Engine;
using StoryTeller.Workspace;
using FubuCore;

namespace StoryTeller.Execution
{
    [Serializable]
    public class FixtureAssembly
    {
        private string _systemTypeName;
        private bool _hasFound = false;

        [NonSerialized] private ISystem _system;

        // For serialization
        public FixtureAssembly(){}

        public FixtureAssembly(string systemTypeName)
        {
            _systemTypeName = systemTypeName;
        }

        public FixtureAssembly(IProject project)
        {
            _systemTypeName = project.SystemTypeName;
        }

        private void find()
        {
            if (_hasFound) return;

            if (_systemTypeName.IsEmpty())
            {
                _system = new NulloSystem();
            }
            else
            {
                Type type = Type.GetType(_systemTypeName);
                _system = (ISystem)Activator.CreateInstance(type);
            }

            _hasFound = true;
        }

        public ISystem System
        {
            get
            {
                find();
                return _system;
            }
        }
    }
}