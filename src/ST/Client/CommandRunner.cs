using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Baseline;
using StoryTeller.Commands;

namespace ST.Client
{
    public class CommandRunner
    {
        private readonly IRemoteController _remote;
        private readonly IList<ICommand> _commands = new List<ICommand>();

        public CommandRunner(IRemoteController remote)
        {
            _remote = remote;
            GetType().GetTypeInfo().Assembly.GetExportedTypes().Where(x => x.IsConcreteTypeOf<ICommand>())
                .Each(type =>
                {
                    var cmd = Activator.CreateInstance(type).As<ICommand>();

                    _commands.Add(cmd);
                });
        }

        public CommandRunner(IRemoteController remote, ICommand[] commands)
        {
            throw new NotImplementedException();
        }


        public void HandleJson(string json)
        {
            try
            {
                var command = _commands.FirstOrDefault(x => x.Matches(json));
                if (command == null)
                    _remote.SendJsonMessage(json);
                else
                    command.HandleJson(json);
            }
            catch (Exception ex)
            {
                Logger.Error("Json message: " + json, ex);
            }
        }
    }
}