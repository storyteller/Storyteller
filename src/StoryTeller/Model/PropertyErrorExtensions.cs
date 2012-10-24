using System.Collections.Generic;
using System.Linq;
using StoryTeller.Domain;

namespace StoryTeller.Model
{
    public static class PropertyErrorExtensions
    {
        public static bool Has(this IEnumerable<PropertyError> errors, PropertyErrorCode code)
        {
            return errors.FirstOrDefault(e => e.Code == code) != null;
        }

        public static StepValidationStatus GetStatus(this IEnumerable<PropertyError> stepErrors)
        {
            if (stepErrors.Has(PropertyErrorCode.Missing)) return StepValidationStatus.Error;
            if (stepErrors.Has(PropertyErrorCode.Unknown)) return StepValidationStatus.Warning;

            return StepValidationStatus.Valid;
        }
    }
}