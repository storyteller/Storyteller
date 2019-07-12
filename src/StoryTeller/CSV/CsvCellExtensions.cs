using System;
using Baseline;
using StoryTeller.Conversion;
using StoryTeller.Model;

namespace StoryTeller.CSV
{
    public static class CsvCellExtensions
    {
        internal static readonly string CsvRequiredKey = "CsvRequired";
        internal static readonly string CsvValueBuilderKey = "CsvValueBuilder";
        
        /// <summary>
        /// For Csv file generation grammars, mark this cell as being completely omitted
        /// from the generated file if the column is not explicitly included in the specification
        /// </summary>
        /// <param name="expression"></param>
        /// <returns></returns>
        public static ICellExpression OmitIfInactive(this ICellExpression expression)
        {
            expression.DefaultValue("NULL");
            return expression.Metadata(CsvRequiredKey, CsvRequired.OmitIfInactive);
        }

        /// <summary>
        /// For Csv file generation grammars, mark this cell as being included in the CSV file
        /// generation with a default value if the column is not explicitly included in the specification
        /// </summary>
        /// <param name="expression"></param>
        /// <param name="defaultValue"></param>
        /// <returns></returns>
        public static ICellExpression UseDefaultIfNotExplicitlyExpressed(this ICellExpression expression,
            string defaultValue)
        {
            expression.Metadata(CsvRequiredKey, CsvRequired.UseDefaultIfNotExplicitlyExpressed);
            return expression.DefaultValue(defaultValue);
        }
        
        /// <summary>
        /// For Csv file generation grammars, mark this cell as being included in the CSV file
        /// generation with a default value if the column is not explicitly included in the specification
        /// </summary>
        /// <param name="expression"></param>
        /// <param name="defaultValueSource">A lambda to build default data per row</param>
        /// <returns></returns>
        public static ICellExpression UseDefaultIfNotExplicitlyExpressed(this ICellExpression expression, Func<StepValues, string> defaultValueSource)
        {
            expression.DefaultValue("NULL");
            expression.Metadata(CsvRequiredKey, CsvRequired.UseDefaultIfNotExplicitlyExpressed);
            return expression.Metadata(CsvValueBuilderKey, defaultValueSource);
        }

        /// <summary>
        /// Used internally
        /// </summary>
        /// <param name="cell"></param>
        /// <param name="section"></param>
        /// <param name="values"></param>
        /// <returns></returns>
        public static string CsvValue(this Cell cell, Section section, StepValues values)
        {
            var requirement = cell.CsvRequirement();

            switch (requirement)
            {
                case CsvRequired.Required:
                    return (string) values.Get(cell.Key);
                
                case CsvRequired.OmitIfInactive:
                    return (string) (section.IsCellActive(cell) ? values.Get(cell.Key) : null);
                    
                case CsvRequired.UseDefaultIfNotExplicitlyExpressed:
                    if (section.IsCellActive(cell))
                    {
                        return (string) values.Get(cell.Key);
                    }
                    else if (cell.Metadata.ContainsKey(CsvValueBuilderKey))
                    {
                        var builder = cell.Metadata[CsvValueBuilderKey].As<Func<StepValues, string>>();
                        return builder(values);
                    }
                    else if (cell.HasDefault())
                    {
                        return cell.DefaultValue;
                    }
                    else
                    {
                        return string.Empty;
                    }
            }

            return null;
        }

        /// <summary>
        /// Used internally
        /// </summary>
        /// <param name="cell"></param>
        /// <returns></returns>
        public static CsvRequired CsvRequirement(this Cell cell)
        {
            if (!cell.HasDefault()) return CsvRequired.Required;

            if (cell.Metadata.ContainsKey(CsvRequiredKey))
            {
                return (CsvRequired) cell.Metadata[CsvRequiredKey];
            }

            return CsvRequired.UseDefaultIfNotExplicitlyExpressed;
        }
        

    }
}