using System;
using StoryTeller.Model;

namespace StoryTeller.CSV
{
    public interface IWriteCsvGrammarBuilder
    {
        /// <summary>
        ///     Access to the columns to
        /// </summary>
        /// <param name="index"></param>
        ICellExpression this[int index] { get; }

        /// <summary>
        ///     Action that should be executed on the newly generated CSV file after the
        ///     CSV table has executed
        /// </summary>
        Action<CsvFile> FileAction { get; set; }

        /// <summary>
        ///     Add a new column to the CSV file format with optional header and default values
        /// </summary>
        /// <param name="key"></param>
        /// <param name="header"></param>
        /// <param name="defaultValue"></param>
        /// <returns></returns>
        ICellExpression AddColumn(string key = null, string header = null, string defaultValue = null);
    }
}