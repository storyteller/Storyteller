namespace StoryTeller.NewEngine
{
    public enum LineFailureMode
    {
        /// <summary>
        /// Report a failure, but carry on
        /// </summary>
        Continue,
        
        /// <summary>
        /// Stop all specification executions until the system is rebooted
        /// </summary>
        Catastrophic,
        
        /// <summary>
        /// Stop the current specification execution on failures
        /// </summary>
        Critical,
    }
}