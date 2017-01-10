using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Baseline;
using Microsoft.AspNetCore.Http;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Util;

namespace ST.Client
{
    public static class HomeEndpoint
    {
        public static readonly string[] Stylesheets = new[]{"bootstrap.min.css", "storyteller.css", "font-awesome.min.css", "fixed-data-table.min.css"};

        public static async Task BuildPage(HttpResponse response, IApplication application, OpenInput input)
        {
            var styleTags = HomeEndpoint.styleTags().Select(x => x.ToString()).Join("\n  ");


            await response.WriteAsync($@"
<html>
<head>
  <title>Storyteller 4</title>
  {styleTags}


").ConfigureAwait(false);

            await writeInitialDataIntoPage(response, application).ConfigureAwait(false);

            await response.WriteAsync($@"

</head>
<body>
  <div id=""header-container""></div>
  <div id=""body-pane"" class=""container""></div>
  <div id=""main""></div>

").ConfigureAwait(false);

            await response.WriteAsync(ScriptTag(input.DevFlag).ToString()).ConfigureAwait(false);

            await response.WriteAsync(@"
</body>
</html>

").ConfigureAwait(false);
        }


        private static IEnumerable<HtmlTag> styleTags()
        {
#if DEBUG
            foreach (var file in Stylesheets)
            {
                var path = $"/public/stylesheets/{file}";
                yield return new HtmlTag("link").Attr("rel", "stylesheet").Attr("href", path);
            }

#else
            yield return BatchResultsWriter.StyleTag();


#endif

            yield return new HtmlTag("link")
                .Attr("rel", "stylesheet")
                .Attr("href", "//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");
        }

        public static HtmlTag ScriptTag(bool devMode, string bundleName = "/bundle.js")
        {
#if DEBUG
            var bundleUrl = devMode ? "http://localhost:3001/client/public/javascript/bundle.js" : bundleName;
            return new HtmlTag("script").Attr("type", "text/javascript").Attr("src", bundleUrl);
#else
            var bundleJS = typeof(HomeEndpoint).GetTypeInfo().Assembly
                .GetManifestResourceStream("StorytellerRunner.bundle.js").ReadAllText();

            return new HtmlTag("script").Attr("type", "text/javascript").Text(bundleJS).Encoded(false);
#endif
        }


        private static async Task writeInitialDataIntoPage(HttpResponse response, IApplication application)
        {
            var model = application.BuildInitialModel();

            await response.WriteAsync($@"
<script type=""text/javascript"">
var Storyteller = {{wsAddress: '{application.Client.WebSocketsAddress}'}};

Storyteller.initialization = ").ConfigureAwait(false);

            await response.WriteAsync(JsonSerialization.ToCleanJson(model)).ConfigureAwait(false);
            await response.WriteAsync(";\n\n</script>").ConfigureAwait(false);
        }
    }
}