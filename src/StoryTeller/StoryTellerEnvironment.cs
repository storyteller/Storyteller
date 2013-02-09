using System;
using System.Collections.Generic;
using FubuCore.Util;

namespace StoryTeller
{
	public static class StoryTellerEnvironment
	{
		private static readonly Cache<string, object> _variables = new Cache<string, object>();

		public static void Set(string key, object value)
		{
			_variables.Fill(key, value);
		}

		public static void Set<T>(T variable)
			where T : MarshalByRefObject
		{
			_variables.Fill(typeof(T).Name, variable);
		}

		public static T Get<T>()
			where T : MarshalByRefObject
		{
			return _variables[typeof(T).Name] as T;
		}

		public static void Import(StoryTellerEnvironmentVariable[] variables)
		{
			variables.Each(x => Set(x.Key, x.Value));
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

		public StoryTellerEnvironmentVariable(string key, object value)
		{
			Key = key;
			Value = value;
		}

		public string Key { get; set; }
		public object Value { get; set; }
	}
}