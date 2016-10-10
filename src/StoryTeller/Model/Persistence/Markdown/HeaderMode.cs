using System;
using Baseline;

namespace StoryTeller.Model.Persistence.Markdown
{
    public class HeaderMode : IReaderMode
    {
        private readonly Specification _spec;

        public HeaderMode(Specification spec)
        {
            _spec = spec;
        }

        public IReaderMode Read(int indention, string line)
        {
            if (line.IsEmpty()) return this;

            if (line.IsMetadata())
            {
                parseMetadata(line);
                return this;
            }

            if (line.IsHeaderOne() && _spec.name.IsEmpty())
            {
                _spec.name = line.Trim().TrimStart('#').Trim();
                return this;
            }

            if (line.IsSectionHeader())
            {
                var key = line.SectionName();
                var section = new Section(key);
                _spec.Children.Add(section);

                return new SectionMode(section);
            }

            var mode = new CommentMode(_spec);
            mode.Read(indention, line);

            return mode;
        }

        private void parseMetadata(string line)
        {
            string key;
            string value;

            line.ParseMetadata(out key, out value);

            if (value.IsEmpty()) return;

            switch (key)
            {
                case nameof(Node.id):
                    _spec.id = value;
                    break;

                case SpecConstants.Lifecycle:
                    var lifecycle = (Lifecycle)Enum.Parse(typeof(Lifecycle), value, true);
                    _spec.Lifecycle = lifecycle;
                    break;

                case SpecConstants.MaxRetries:
                    _spec.MaxRetries = int.Parse(value);
                    break;

                case SpecConstants.ExpirationPeriod:
                    _spec.ExpirationPeriod = int.Parse(value);
                    break;

                case SpecConstants.LastUpdated:
                    _spec.LastUpdated = DateTime.ParseExact(value, "O", null);
                    break;

                case SpecConstants.Tags:
                    var tags = value.ToDelimitedArray();
                    _spec.Tags.AddRange(tags);
                    break;

            }
        }

        public int Indention { get; set; } = 0;
    }
}