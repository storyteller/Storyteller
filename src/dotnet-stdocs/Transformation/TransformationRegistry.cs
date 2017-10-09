using StorytellerDocGen.Alerts;
using StructureMap;

namespace StorytellerDocGen.Transformation
{
    public class TransformationRegistry : Registry
    {
        public TransformationRegistry()
        {
            For<ITransformer>().Use<Transformer>();
            ForSingletonOf<IHtmlGenerator>().Use<HtmlGenerator>();

            Scan(_ =>
            {
                _.AssemblyContainingType<TransformationRegistry>();
                _.AddAllTypesOf<ITransformHandler>();
            });

            For<ITransformHandler>().AddInstances(_ =>
            {
                _.Object(new BeginAlert("info"));
                _.Object(new BeginAlert("warning"));
                _.Object(new BeginAlert("danger"));
                
                _.Object(new EndAlert("info"));
                _.Object(new EndAlert("warning"));
                _.Object(new EndAlert("danger"));
            });
        }
    }
}