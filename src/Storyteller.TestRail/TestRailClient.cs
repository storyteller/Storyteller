using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using StoryTeller.TestRail.Models.Runs;
using StoryTeller.TestRail.Results;
using StoryTeller.TestRail.Runs;

namespace StoryTeller.TestRail
{
    public class TestRailClient : ITestRailClient
    {
        private readonly string _url;
        private readonly string _username;
        private readonly string _password;
        private const string _v2 = "index.php?/api/v2/";

        public TestRailClient(string url, string username, string password)
        {
            _url = url;
            _username = username;
            _password = password;

            if (!_url.EndsWith("/"))
            {
                _url += "/";
            }
        }

        #region ITestRailClient

        public AddRunResponse AddTestRun(AddRunRequest addRunRequest)
        {
            HttpResponseMessage response = UsingDefaultHttpClient(client =>
                client.PostAsync($"{_v2}add_run/{addRunRequest.project_id}", CreatePostContent(addRunRequest)).Result);

            return OkResultOrThrow<AddRunResponse>(response);
        }

        public AddResultResponse AddTestCaseTestRunResult(AddResultRequest addResultRequest)
        {
            HttpResponseMessage response = UsingDefaultHttpClient(client =>
                client.PostAsync($"{_v2}add_result_for_case/{addResultRequest.run_id}/{addResultRequest.case_id}",
                        CreatePostContent(addResultRequest))
                    .Result);

            return OkResultOrThrow<AddResultResponse>(response);
        }

        #endregion

        #region Private

        TResult OkResultOrThrow<TResult>(HttpResponseMessage response) where TResult : class
        {
            if (response.StatusCode != HttpStatusCode.OK)
            {
                throw new Exception(response.Content?.ReadAsStringAsync().Result);
            }

            if (response.Content == null)
                return null;

            return JsonConvert.DeserializeObject<TResult>(response.Content.ReadAsStringAsync().Result);
        }

        StringContent CreatePostContent(object data)
        {
            string postData = JsonConvert.SerializeObject(data);
            return new StringContent(postData, Encoding.UTF8, "application/json");
        }

        TResult UsingDefaultHttpClient<TResult>(Func<HttpClient, TResult> action)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(_url);
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                string auth = Convert.ToBase64String(Encoding.ASCII.GetBytes($"{_username}:{_password}"));
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", auth);

                return action.Invoke(client);
            }
        }

        #endregion
    }
}