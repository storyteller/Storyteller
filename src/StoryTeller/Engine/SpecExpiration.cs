using FubuCore.Dates;
using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public class SpecExpiration : ISpecExpiration
    {
        private readonly ISystemTime _systemTime;

        public SpecExpiration(ISystemTime systemTime)
        {
            _systemTime = systemTime;
        }

        public bool IsExpired(Specification spec)
        {
            if (spec.ExpirationPeriod <= 0)
            {
                return false;
            }
            var currentDate = _systemTime.UtcNow();
            var expiryDate = spec.LastUpdated.AddMonths(spec.ExpirationPeriod);
            return currentDate > expiryDate;
        }
    }
}