using System;
using StoryTeller.Model;

namespace StoryTeller.Engine
{
    public class SpecExpiration : ISpecExpiration
    {
        public bool IsExpired(Specification spec)
        {
            if (spec.ExpirationPeriod <= 0)
            {
                return false;
            }

            var currentDate = DateTime.UtcNow;
            var expiryDate = spec.LastUpdated.AddMonths(spec.ExpirationPeriod);
            return currentDate > expiryDate;
        }
    }
}