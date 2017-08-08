using System;
using System.Threading.Tasks;
using StoryTeller.TestRail.Models;
using StoryTeller.TestRail.Models.Results;

namespace StoryTeller.TestRail
{
	public class TestRailCaseResultLoggingExtension : IExtension
	{
		private ITestRailClient _client;
		
		public void Dispose()
		{ 
			_client = null;
		}

		public TestRailCaseResultLoggingExtension(ITestRailClient testRailClient)
		{
			_client = testRailClient;
		}

		#region IExtension

		public Task Start()
		{
			return Task.CompletedTask;
		}

		public void BeforeEach(ISpecContext context)
		{
		}

		public void AfterEach(ISpecContext context)
		{
			SpecContext ctx = (SpecContext)context;

			if (TestRailRunContext.Current != null)
			{
				foreach (int testCaseId in TestCaseParser.ParseTestCaseIds(ctx.Specification.name))
				{
					var addResultRequest = new AddResultRequest
					{
						status_id = (int) (ctx.Counts.Exceptions > 0 || ctx.Counts.Wrongs > 0
							? TestResultStatus.Failed
							: TestResultStatus.Passed),
						case_id = testCaseId,
						run_id = TestRailRunContext.Current.RunId
					};

					try
					{
						var response = _client.AddTestCaseTestRunResult(addResultRequest);
						context.Reporting.Log("TestRail", $"<div>{response}</div>");
					}
					catch (Exception ex)
					{
						context.Reporting.Log("TestRail", $"<div>{ex}</div>");
					}
				}
			}
		}

		#endregion
	}
}
