using System;
using StorytellerDocGen.Topics;
using StorytellerDocGen.Transformation;

namespace StorytellerDocGen.Alerts
{
    public class EndAlert : ITransformHandler
    {
        public EndAlert(string key)
        {
            Key = "/" + key;
        }

        public string Key { get; }
        public string Transform(Topic current, string data)
        {
            return ":::";
        }
    }
    
    public class BeginAlert : ITransformHandler
    {
        public string Key { get; }

        public BeginAlert(string key)
        {
            Key = key;
        }

        public string Transform(Topic current, string data)
        {
            return $":::alert {{.alert-{Key}}}{Environment.NewLine}**Note!** ";
        }
    }
}
