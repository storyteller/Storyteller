using System.Collections.Generic;
using System.Linq;
using System.Text;
using ST.Docs.Topics;
using StructureMap.Util;

namespace ST.Docs.Transformation
{
    public class Transformer
    {
        private readonly LightweightCache<string, ITransformHandler> _handlers = 
            new LightweightCache<string, ITransformHandler>(); 


        public Transformer(IEnumerable<ITransformHandler> handlers)
        {
            handlers.Each(x => _handlers[x.Key] = x);
        }

        public string Transform(Topic current, string before)
        {
            var tokens = Token.FindTokens(before).ToArray();

            if (!tokens.Any()) return before;

            var builder = new StringBuilder();
            int position = 0;
            tokens.Each(token =>
            {
                if (token.FirstIndex > position)
                {
                    builder.Append(before.Substring(position, token.FirstIndex - position));
                }

                var handler = _handlers[token.Key];
                builder.Append(handler.Transform(current, token.Data));

                position = token.LastIndex + 1;
            });

            if (position < before.Length)
            {
                builder.Append(before.Substring(position));
            }

            return builder.ToString();
        }
    }
}