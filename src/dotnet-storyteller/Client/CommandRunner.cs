using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using Baseline;

namespace ST.Client
{
    public class CommandRunner
    {
        private readonly IApplication _app;
        private readonly IList<ICommand> _commands = new List<ICommand>();

        public CommandRunner(IApplication app)
        {
            _app = app;
            GetType().GetTypeInfo().Assembly.GetExportedTypes().Where(x => x.IsConcreteTypeOf<ICommand>())
                .Each(type =>
                {
                    var cmd = Activator.CreateInstance(type).As<ICommand>();

                    _commands.Add(cmd);
                });
        }

        public CommandRunner(IApplication app, ICommand[] commands)
        {
            _app = app;
            _commands.AddRange(commands);
        }


        public void HandleJson(string json)
        {
            try
            {
                var command = _commands.FirstOrDefault(x => x.Matches(json));
                if (command == null)
                {
                    _app.Engine.SendJsonMessage(json);
                }
                else
                {
                    command.HandleJson(json, _app);
                }
            }
            catch (Exception ex)
            {
                Logger.Error("Json message: " + json, ex);
            }
        }
    }
}