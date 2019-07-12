using System;
using Baseline;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.CSV;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Csv
{
    public class CsvCellExtensionsTester
    {
        [Fact]
        public void mark_as_omit_if_inactive()
        {
            var cell = Cell.For<string>("foo");
            cell.As<ICellExpression>().OmitIfInactive();
            
            cell.CsvRequirement().ShouldBe(CsvRequired.OmitIfInactive);
        }

        [Fact]
        public void is_required_by_default()
        {
            var cell = Cell.For<string>("foo");
            cell.CsvRequirement().ShouldBe(CsvRequired.Required);
        }

        [Fact]
        public void is_not_required_with_default_value()
        {
            var cell = Cell.For<string>("foo");
            cell.DefaultValue = "BLANK";
            cell.CsvRequirement().ShouldBe(CsvRequired.UseDefaultIfNotExplicitlyExpressed);
        }

        [Fact]
        public void mark_as_use_default_with_explicit_value()
        {
            var cell = Cell.For<string>("foo");
            cell.As<ICellExpression>().UseDefaultIfNotExplicitlyExpressed("bar");
            
            cell.CsvRequirement().ShouldBe(CsvRequired.UseDefaultIfNotExplicitlyExpressed);
            cell.DefaultValue.ShouldBe("bar");
        }
        
        [Fact]
        public void mark_as_use_default_with_value_builder()
        {
            var cell = Cell.For<string>("foo");
            cell.As<ICellExpression>().UseDefaultIfNotExplicitlyExpressed(v => "bar");
            
            cell.CsvRequirement().ShouldBe(CsvRequired.UseDefaultIfNotExplicitlyExpressed);
        }

        [Fact]
        public void csv_value_if_explicit()
        {
            var cell = Cell.For<string>("foo");
            var values = new StepValues(Guid.NewGuid().ToString());
            values.Store(cell.Key, "bar");
            
            cell.CsvValue(new Section("container"), values)
                .ShouldBe("bar");
        }
        
        [Fact]
        public void csv_value_if_omit_when_inactive_and_inactive()
        {
            var cell = Cell.For<string>("foo");
            cell.As<ICellExpression>().OmitIfInactive();
            
            var values = new StepValues(Guid.NewGuid().ToString());

            var section = new Section("container");
            section.ActiveCells.Add("foo", false);
            section.IsCellActive(cell).ShouldBeFalse();
            
            cell.CsvValue(section, values)
                .ShouldBeNull();
        }
        
        [Fact]
        public void csv_value_if_omit_when_inactive_and_is_active()
        {
            var cell = Cell.For<string>("foo");
            cell.As<ICellExpression>().OmitIfInactive();
            
            var values = new StepValues(Guid.NewGuid().ToString());
            values.Store(cell.Key, "bar");

            var section = new Section("container");
            section.IsCellActive(cell).ShouldBeTrue();
            
            cell.CsvValue(section, values)
                .ShouldBe("bar");
        }
        
        [Fact]
        public void use_explicit_value_if_column_is_optional_and_active()
        {
            var cell = Cell.For<string>("foo");
            cell.As<ICellExpression>().UseDefaultIfNotExplicitlyExpressed("the default");
            
            var values = new StepValues(Guid.NewGuid().ToString());
            values.Store(cell.Key, "bar");
            
            var section = new Section("container");

            cell.CsvValue(section, values)
                .ShouldBe("bar");
        }

        [Fact]
        public void use_default_value_when_column_is_inactive()
        {
            var cell = Cell.For<string>("foo");
            cell.As<ICellExpression>().UseDefaultIfNotExplicitlyExpressed("the default");
            
            var values = new StepValues(Guid.NewGuid().ToString());
            var section = new Section("container");
            section.ActiveCells.Add("foo", false);
            section.IsCellActive(cell).ShouldBeFalse();
            
            
            cell.CsvValue(section, values)
                .ShouldBe("the default");
        }
        
        [Fact]
        public void use_default_builder_when_column_is_inactive()
        {
            var cell = Cell.For<string>("foo");
            cell.As<ICellExpression>().UseDefaultIfNotExplicitlyExpressed(s => "Column " + s.Order);
            
            var values = new StepValues(Guid.NewGuid().ToString())
            {
                Order = 5
            };
            
            var section = new Section("container");
            section.ActiveCells.Add("foo", false);
            section.IsCellActive(cell).ShouldBeFalse();
            
            
            cell.CsvValue(section, values)
                .ShouldBe("Column 5");
        }
        
        
        
        
    }
}
