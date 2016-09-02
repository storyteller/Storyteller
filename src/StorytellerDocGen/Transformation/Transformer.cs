using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using Baseline;
using CommonMark;
using StorytellerDocGen.Topics;

namespace StorytellerDocGen.Transformation
{
    public interface ITransformer
    {
        string Transform(Topic current, string before);
    }

    public class Transformer : ITransformer
    {
        private readonly LightweightCache<string, ITransformHandler> _handlers =
            new LightweightCache<string, ITransformHandler>();


        public Transformer(IEnumerable<ITransformHandler> handlers)
        {
            handlers.Each(x => _handlers[x.Key] = x);
            _handlers["inner"] = new InnerTransformHandler(this);

            _handlers.OnMissing = key =>
            {
                throw new ArgumentOutOfRangeException(nameof(key), key,
                    "No transformation handler is available for '" + key + "'");
            };
        }

        public string Transform(Topic current, string before)
        {
            var tokens = Token.FindTokens(before).ToArray();

            if (!tokens.Any()) return before;

            var builder = new StringBuilder();
            var position = 0;
            tokens.Each(token =>
            {
                if (token.FirstIndex > position)
                    builder.Append(before.Substring(position, token.FirstIndex - position));

                var handler = _handlers[token.Key];
                builder.Append(handler.Transform(current, token.Data));

                position = token.LastIndex + 1;
            });

            if (position < before.Length)
                builder.Append(before.Substring(position));

            return builder.ToString();
        }

        private class InnerTransformHandler : ITransformHandler
        {
            private readonly ITransformer _transformer;

            public InnerTransformHandler(ITransformer transformer)
            {
                _transformer = transformer;
            }

            public string Key
            {
                get { return "inner"; }
            }

            public string Transform(Topic current, string data)
            {
                var text = TopicLoader.FileSystem.ReadStringFromFile(current.File);

                text = _transformer.Transform(current, text);

                if (Path.GetExtension(current.File) == ".md")
                    text = CommonMarkConverter.Convert(text);


                return text;
            }
        }
    }
}