using Xunit;
using Shouldly;
using ST.Docs;
using ST.Docs.Html;

namespace StoryTeller.Testing.ST.Docs
{
    
    public class DocSettingsTester
    {
        [Fact]
        public void default_url_style_is_absolute()
        {
            new DocSettings().UrlStyle.ShouldBe(UrlStyle.Live);
        }

        [Fact]
        public void select_the_absolute_url_transformer_type()
        {
            new DocSettings {UrlStyle = UrlStyle.Live}
                .UrlResolverType().ShouldBe(typeof (LiveUrlResolver));
        }

        [Fact]
        public void select_the_relative_url_transformer_type()
        {
            new DocSettings { UrlStyle = UrlStyle.WebsiteExport }
                .UrlResolverType().ShouldBe(typeof(LiveUrlResolver));
        }

        [Fact]
        public void select_the_export_url_transformer_type()
        {
            new DocSettings { UrlStyle = UrlStyle.FileExport }
                .UrlResolverType().ShouldBe(typeof(FileExportUrlResolver));
        }
    }
}