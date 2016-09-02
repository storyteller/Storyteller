using Shouldly;
using StorytellerDocGen.Html;
using Xunit;

namespace StorytellerDocGen.Testing
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