using System;
using System.Collections.Generic;
using FubuCore.Util;

namespace StoryTeller
{
	public static class StoryTellerEnvironment
	{
		private static readonly Cache<Type, object> _variables = new Cache<Type, object>(x => Activator.CreateInstance(x));

		public static void Reset()
		{
			_variables.ClearAll();
		}

		public static void Set(Type type, object value)
		{
			_variables.Fill(type, value);
		}

		public static void Set<T>(T variable)
			where T : MarshalByRefObject
		{
			Set(typeof(T), variable);
		}

		public static T Get<T>()
			where T : MarshalByRefObject
		{
			return _variables[typeof(T)] as T;
		}

		public static void Import(StoryTellerEnvironmentVariable[] variables)
		{
			variables.Each(x => Set(x.Type, x.Value));
		}

		public static StoryTellerEnvironmentVariable[] Variables()
		{
			var variables = new List<StoryTellerEnvironmentVariable>();
			_variables.Each((type, value) => variables.Add(new StoryTellerEnvironmentVariable(type, value)));
			return variables.ToArray();
		}
	}

	public class StoryTellerEnvironmentVariable : MarshalByRefObject
	{
		public StoryTellerEnvironmentVariable()
		{
		}

		public StoryTellerEnvironmentVariable(Type type, object value)
		{
			Type = type;
			Value = value;
		}

		public Type Type { get; set; }
		public object Value { get; set; }
	}
}