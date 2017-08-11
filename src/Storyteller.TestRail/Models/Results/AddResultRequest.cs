using Newtonsoft.Json;

namespace StoryTeller.TestRail.Models.Results
{
	public class AddResultRequest
	{
		#region Request Params

		[JsonIgnore]
		public int case_id { get; set; }
		[JsonIgnore]
		public int run_id { get; set; }

		#endregion

		#region Request Body

		public int status_id { get; set; }
		public string comment { get; set; }

		#endregion
	}
}

