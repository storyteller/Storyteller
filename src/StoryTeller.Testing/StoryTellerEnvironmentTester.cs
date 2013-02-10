using System;
using NUnit.Framework;

namespace StoryTeller.Testing
{
	[TestFixture]
	public class StoryTellerEnvironmentTester
	{
		[TearDown]
		public void TearDown()
		{
			StoryTellerEnvironment.Reset();
		}

		[Test]
		public void gets_the_default_instance()
		{
			StoryTellerEnvironment.Get<SampleSettings>().ShouldNotBeNull();
		}

		[Test]
		public void gets_the_value()
		{
			var settings = new SampleSettings();
			StoryTellerEnvironment.Set(settings);

			StoryTellerEnvironment.Get<SampleSettings>().ShouldBeTheSameAs(settings);
		}

		[Test]
		public void imports_the_values()
		{
			var settings = new SampleSettings();
			var variable = new StoryTellerEnvironmentVariable(typeof (SampleSettings), settings);

			StoryTellerEnvironment.Import(new[] { variable });

			StoryTellerEnvironment.Get<SampleSettings>().ShouldBeTheSameAs(settings);
		}

		[Test]
		public void serialize_variables_across_AppDomains()
		{
			// I know. This is brittle but it's a good smoke test to make sure we can pull it off

			var setup = new AppDomainSetup
			{
				ApplicationName = "AppDomain-Testing-" + Guid.NewGuid(),
				ShadowCopyFiles = "true",
				ApplicationBase = AppDomain.CurrentDomain.BaseDirectory,
			};

			var domain = AppDomain.CreateDomain("AppDomain-Testing", null, setup);

			StoryTellerEnvironment.Set(new SampleSettings { Message = SampleProxy.Message });

			Type proxyType = typeof(SampleProxy);
			var proxy = (SampleProxy)domain.CreateInstanceAndUnwrap(proxyType.Assembly.FullName, proxyType.FullName);

			proxy.Initialize(StoryTellerEnvironment.Variables());
			proxy.AssertIsValid();
		}

		
	}

	public class SampleProxy : MarshalByRefObject
	{
		public const string Message = "Test";

		public void Initialize(StoryTellerEnvironmentVariable[] variables)
		{
			StoryTellerEnvironment.Import(variables);
		}

		public void AssertIsValid()
		{
			var settings = StoryTellerEnvironment.Get<SampleSettings>();
			settings.Message.ShouldEqual(Message);
		}
	}

	public class SampleSettings : MarshalByRefObject
	{
		public string Message { get; set; }
	}
}