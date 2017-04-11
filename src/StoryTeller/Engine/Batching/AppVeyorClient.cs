using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Newtonsoft.Json;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Engine.Batching
{
    // https://github.com/xunit/xunit/blob/master/src/xunit.runner.reporters/AppVeyorClient.cs
    public class AppVeyorClient
    {
        readonly string baseUri;
        static readonly HttpClient client = new HttpClient();
        readonly MediaTypeWithQualityHeaderValue jsonMediaType = new MediaTypeWithQualityHeaderValue("application/json");

        readonly Task workTask;
        volatile bool previousErrors;

        readonly ManualResetEventSlim finished = new ManualResetEventSlim(false);
        readonly ManualResetEventSlim workEvent = new ManualResetEventSlim(false);
        volatile bool shouldExit;

        ConcurrentQueue<IDictionary<string, object>> addQueue = new ConcurrentQueue<IDictionary<string, object>>();
        ConcurrentQueue<IDictionary<string, object>> updateQueue = new ConcurrentQueue<IDictionary<string, object>>();

        public AppVeyorClient(string baseUri)
        {
            this.baseUri = $"{baseUri}/api/tests/batch";
            workTask = Task.Run(RunLoop);
        }

        public void WaitOne(CancellationToken cancellationToken)
        {
            // Free up to process any remaining work
            shouldExit = true;
            workEvent.Set();

            finished.Wait(cancellationToken);
            finished.Dispose();
        }

        async Task RunLoop()
        {
            try
            {
                while (!shouldExit || !addQueue.IsEmpty || !updateQueue.IsEmpty)
                {
                    workEvent.Wait();   // Wait for work
                    workEvent.Reset();  // Reset first to ensure any subsequent modification sets

                    // Get local copies of the queues
                    var aq = Interlocked.Exchange(ref addQueue, new ConcurrentQueue<IDictionary<string, object>>());
                    var uq = Interlocked.Exchange(ref updateQueue, new ConcurrentQueue<IDictionary<string, object>>());

                    if (previousErrors)
                        break;

                    await Task.WhenAll(
                        SendRequest(HttpMethod.Post, aq.ToArray()),
                        SendRequest(HttpMethod.Put, uq.ToArray())
                    ).ConfigureAwait(false);
                }
            }
            catch { }
            finally
            {
                finished.Set();
            }
        }


        public void AddTest(IDictionary<string, object> request)
        {
            addQueue.Enqueue(request);
            workEvent.Set();
        }

        public void UpdateTest(IDictionary<string, object> request)
        {
            updateQueue.Enqueue(request);
            workEvent.Set();
        }

        async Task SendRequest(HttpMethod method, ICollection<IDictionary<string, object>> body)
        {
            if (body.Count == 0)
                return;

            var bodyString = ToJson(body);

            try
            {
                var bodyBytes = Encoding.UTF8.GetBytes(bodyString);

                var request = new HttpRequestMessage(method, baseUri)
                {
                    Content = new ByteArrayContent(bodyBytes)
                };
                request.Content.Headers.ContentType = jsonMediaType;
                request.Headers.Accept.Add(jsonMediaType);

                using (var tcs = new CancellationTokenSource(TimeSpan.FromSeconds(30)))
                {
                    var response = await client.SendAsync(request, tcs.Token).ConfigureAwait(false);
                    if (!response.IsSuccessStatusCode)
                    {
                        LogWarning($"When sending '{method} {baseUri}', received status code '{response.StatusCode}'; request body: {bodyString}");
                        previousErrors = true;
                    }
                }
            }
            catch (Exception ex)
            {
                LogError($"When sending '{method} {baseUri}' with body '{bodyString}', exception was thrown: {ex.Message}");
            }
        }

        static string ToJson(IEnumerable<IDictionary<string, object>> data)
        {
            return JsonConvert.SerializeObject(data);
        }

        static void LogError(string message)
        {
            Console.WriteLine(message);
        }

        static void LogWarning(string message)
        {
            Console.WriteLine(message);
        }
    }
}
