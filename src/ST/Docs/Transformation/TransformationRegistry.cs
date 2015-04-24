using StructureMap.Configuration.DSL;
using StructureMap.Graph;

namespace ST.Docs.Transformation
{
    public class TransformationRegistry : Registry
    {
        public TransformationRegistry()
        {
            Scan(_ =>
            {
                _.TheCallingAssembly();
                _.AddAllTypesOf<ITransformHandler>();
            });
        }
    }
}