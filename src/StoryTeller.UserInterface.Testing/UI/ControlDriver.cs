using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace StoryTeller.UserInterface.Testing.UI
{
    public class ControlDriver
    {
        public static void ExecuteMouseGestureCommand(Control control, MouseGesture gesture)
        {
            var foo = new List<InputBinding>(control.InputBindings.Cast<InputBinding>());
            var binding = foo.Where(x => x.Gesture is MouseGesture && (x.Gesture as MouseGesture).MouseAction == gesture.MouseAction && (x.Gesture as MouseGesture).Modifiers == gesture.Modifiers).FirstOrDefault();
            binding.Command.Execute(null);
        }

        public static void FireEvent(object control, string eventName, params object[] args)
        {            
            MethodInfo minfo =
                control.GetType().GetMethod("On" + eventName,
                                            BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
            ParameterInfo[] param = minfo.GetParameters();

            if (param.Length == 0)
            {
                minfo.Invoke(control, null);
                return;
            }

            var parameters = new object[param.Length];
            for (int i = 0; i < param.Length; i++)
            {
                //Thanks M$.
                var parameterType = param[i].ParameterType;
                if (parameterType.Name == "MouseButtonEventArgs")
                {
                    parameters[i] = StubMouseEventArgs();
                }
                else
                {
                    parameters[i] = Activator.CreateInstance(param[i].ParameterType);
                }
                var argument = parameters[i] as RoutedEventArgs;
                if (argument != null)
                {
                    RoutedEvent[] events = EventManager.GetRoutedEventsForOwner(typeof (Control));
                    argument.RoutedEvent = Array.Find(events, e => e.Name == eventName);
                }
            }

            minfo.Invoke(control, parameters);
        }

        private static MouseButtonEventArgs StubMouseEventArgs()
        {
            return new MouseButtonEventArgs(Mouse.PrimaryDevice, 0, MouseButton.Left);
        }

        public static void ClickOn(object control)
        {
            FireEvent(control, "Click");
        }
    }
}