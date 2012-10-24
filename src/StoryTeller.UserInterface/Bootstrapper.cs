
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Windows;
using StructureMap;

namespace StoryTeller.UserInterface
{
    public class Bootstrapper
    {
        private static bool _hasStarted;


        public void BootstrapStructureMap(bool showWindow)
        {
            // Initialize the Container including the main Window
            IContainer container = BuildContainer();

            // Register and enable actions
            StartupShell(container, showWindow);
        }


        public static IContainer BuildContainer()
        {
            ObjectFactory.Initialize(x => x.AddRegistry<UserInterfaceRegistry>());
            return ObjectFactory.Container;
        }

        public static void StartupShell(IContainer container, bool showWindow)
        {
            if (showWindow)
            {
                container.GetInstance<Window>().Show();
            }

            var shell = container.GetInstance<Shell>();

            container.GetInstance<SystemActions>().Register();

            // Find all the possible services in the main application
            // IoC Container that implement an "IStartable" interface
            container.Model.GetAllPossible<IStartable>().ToArray().Each(x => x.Start());

            // Build up
            container.Model.GetAllPossible<INeedBuildUp>().ToArray().Each(x => container.BuildUp(x));

            // Wire up the event bubbling to the event aggregator
            
            var events = container.GetInstance<IEventAggregator>();
            shell.MessageSent += (sender, request) => request.Action(events);
        }

        public static void Restart()
        {
            if (_hasStarted)
            {
                ObjectFactory.ResetDefaults();
            }
            else
            {
                new Bootstrapper().BootstrapStructureMap(false);
                Debug.WriteLine(ObjectFactory.WhatDoIHave());
                ObjectFactory.AssertConfigurationIsValid();
                _hasStarted = true;
            }
        }

        public static void ForceRestart()
        {
            new Bootstrapper().BootstrapStructureMap(false);
            _hasStarted = true;
        }


        public static Window BootstrapShell(bool showWindow)
        {
            new Bootstrapper().BootstrapStructureMap(showWindow);
            return ObjectFactory.GetInstance<Window>();
        }
    }
}