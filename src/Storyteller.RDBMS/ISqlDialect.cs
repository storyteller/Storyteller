using System.Data;
using StoryTeller.Model;

namespace StoryTeller.RDBMS
{
    // SAMPLE: ISqlDialect
    /// <summary>
    /// Used to connect Storyteller.RDBMS to a relational database
    /// </summary>
    public interface ISqlDialect
    {
        /// <summary>
        /// Create a new connection object
        /// </summary>
        /// <returns></returns>
        IDbConnection NewConnection();

        /// <summary>
        /// Create a strategy for applying .Net values to the underlying
        /// database parameters
        /// </summary>
        /// <param name="cell"></param>
        /// <param name="direction"></param>
        /// <returns></returns>
        ParameterCell ToParameterCell(Cell cell, ParameterDirection direction);

        /// <summary>
        /// Check the row count of a giving database object -- and this
        /// behavior *does* vary by database engine
        /// </summary>
        /// <param name="conn"></param>
        /// <param name="dbObject"></param>
        /// <returns></returns>
        long RowCount(IDbConnection conn, string dbObject);
    }
    // ENDSAMPLE
}
