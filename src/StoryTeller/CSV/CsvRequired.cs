namespace StoryTeller.CSV
{
    public enum CsvRequired
    {
        /// <summary>
        /// The column absolutely has to be included in the CSV file and Storyteller specification
        /// </summary>
        Required,
        
        /// <summary>
        /// The CSV generation should omit the column from the CSV generation if it is not
        /// active in the Specification
        /// </summary>
        OmitIfInactive,
        
        /// <summary>
        /// The CSV generation should always include the column in the CSV generation with default
        /// values if inactive in the specification
        /// </summary>
        UseDefaultIfNotExplicitlyExpressed
    }
}