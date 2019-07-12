using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Grammars.Tables;
using StoryTeller.Model;
using StoryTeller.Results;
using StoryTeller.Util;

namespace StoryTeller.CSV
{
    public class WriteCsvGrammar : LineGrammar, IWriteCsvGrammarBuilder
    {
        private readonly string _title;

        public WriteCsvGrammar(string title)
        {
            _title = title;
        }

        public WriteCsvGrammar(int columnCount, string title)
        {
            _title = title;

            for (var i = 0; i < columnCount; i++)
            {
                var cell = Cell.For<string>($"col{i + 1}");
                cell.header = $"Column {i + 1}";

                CsvCells.Add(cell);
            }
        }

        public WriteCsvGrammar(string title, params string[] headers) : this(headers.Length, title)
        {
            WriteCellHeadersInFirstLine = true;

            for (var i = 0; i < headers.Length; i++)
            {
                var key = headers[i].Replace(" ", "_");

                var cell = Cell.For<string>(key);

                cell.header = headers[i];

                CsvCells.Add(cell);
            }
        }

        public bool WriteCellHeadersInFirstLine { get; set; }

        public List<Cell> CsvCells { get; } = new List<Cell>();

        public ICellExpression AddColumn(string key = null, string header = null, string defaultValue = null)
        {
            var cell = Cell.For<string>(key ?? $"col{CsvCells.Count + 1}");
            cell.header = header.IsEmpty() ? cell.Key : header;

            if (defaultValue.IsNotEmpty()) cell.DefaultValue = defaultValue;

            CsvCells.Add(cell);

            return cell;
        }

        /// <summary>
        ///     Access to the columns to
        /// </summary>
        /// <param name="index"></param>
        public ICellExpression this[int index] => CsvCells[index];

        /// <summary>
        ///     Action that should be executed on the newly generated CSV file after the
        ///     CSV table has executed
        /// </summary>
        public Action<CsvFile> FileAction { get; set; } = f => { };

        protected override IEnumerable<Cell> buildCells(CellHandling cellHandling, Fixture fixture)
        {
            return CsvCells;
        }

        public override IEnumerable<CellResult> Execute(StepValues values, ISpecContext context)
        {
            var file = context.State.Retrieve<CsvFile>();

            var section = context.State.Retrieve<Section>();

            var data = _cells.Select(x => x.CsvValue(section, values)).Where(x => x != null).ToArray();
            file.WriteValues(data);

            return values.Errors;
        }

        protected override string format()
        {
            return _title;
        }

        private bool shouldCellBeIncluded(Cell cell, Section section)
        {
            return section.IsCellActive(cell) ||
                   cell.CsvRequirement() == CsvRequired.UseDefaultIfNotExplicitlyExpressed;
        }

        public IGrammar WrapInTable()
        {
            return this.AsTable(_title)
                .Before(c =>
                {
                    var f = new CsvFile();

                    var section = c.State.Retrieve<Section>();

                    if (WriteCellHeadersInFirstLine)
                    {
                        var data = _cells
                            .Where(x => shouldCellBeIncluded(x, section))
                            .Select(x => x.header)
                            .ToArray();
                        
                        f.WriteValues(data);
                    }
                    
                    c.State.Store(f);
                })
                .After(c =>
                {
                    var file = c.State.Retrieve<CsvFile>();
                    
                    c.Reporting.Log("Csv File", new HtmlTag("pre").Text(file.ToString()).ToString());
                    
                    FileAction(file);
                });
        }
    }
}