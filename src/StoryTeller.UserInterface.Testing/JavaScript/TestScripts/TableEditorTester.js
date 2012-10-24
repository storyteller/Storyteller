function getLeaf(test) {
    return test.childFor('SampleTable').children[0].childFor('rows');
}

function getTableColumns(test) {
    var table = $('#templateTable').tableColumns().get(0);
    table.chooseColumns(getLeaf(test));

    return table;
}

function getTable(test) {
    var table = $('#templateTable').tableColumns().get(0);

    return table;
}

qUnitTesting(function () {
    module("Table Columns");

    test("when determining the active columns from a blank leaf", function () {
        var table = getTableColumns(blank);
        ok(table.columns['a'], "Mandatory column 'a' is shown");
        ok(!table.columns['b'], "Optional column 'b' is hidden");
        ok(table.columns['c'], "Mandatory column 'c' is shown");
        ok(!table.columns['d'], "Optional column 'b' is hidden");
        ok(!table.columns['e'], "Optional column 'b' is hidden");
        ok(!table.columns['f'], "Optional column 'b' is hidden");

    });

    test("the table headers contain a cell for each active column", function () {
        var table = getTableColumns(blank);

        var header = table.headerRow();

        ok(header.getCell('a'), "Mandatory column 'a' is shown");
        ok(!header.getCell('b'), "Optional column 'b' is hidden");
        ok(header.getCell('c'), "Mandatory column 'c' is shown");
        ok(!header.getCell('d'), "Optional column 'b' is hidden");
        ok(!header.getCell('e'), "Optional column 'b' is hidden");
        ok(!header.getCell('f'), "Optional column 'b' is hidden");
    });

    test("the table body rows contain a cell for each active column", function () {
        var table = getTableColumns(blank);

        var body = table.bodyRow(new Step('row'));

        ok(body.getCell('a'), "Mandatory column 'a' is shown");
        ok(!body.getCell('b'), "Optional column 'b' is hidden");
        ok(body.getCell('c'), "Mandatory column 'c' is shown");
        ok(!body.getCell('d'), "Optional column 'b' is hidden");
        ok(!body.getCell('e'), "Optional column 'b' is hidden");
        ok(!body.getCell('f'), "Optional column 'b' is hidden");
    });

    test("when determining the active columns from a leaf with rows", function () {
        var table = getTableColumns(test1);

        ok(table.columns['a'], "Mandatory column 'a' is shown");
        ok(table.columns['b'], "Optional column 'b' is shown because there is a value");
        ok(table.columns['c'], "Mandatory column 'c' is shown");
        ok(!table.columns['d'], "Optional column 'd' is hidden because it has no values");
        ok(table.columns['e'], "Optional column 'e' is shown because it has values");
        ok(!table.columns['f'], "Optional column 'b' is hidden");
    });

    test("add a column and recalculate", function () {
        var table = getTableColumns(test1);
        table.addColumn('d');

        ok(table.columns['d'], "Optional column 'd' is now shown");
    });

    test("remove a column and recalculate columns", function () {
        var table = getTableColumns(test1);
        table.removeColumn('b');

        ok(!table.columns['b'], "Optional column 'b' is now hidden");
    });

    test("TableColumn knows when there are inactive columns", function () {
        var table = getTableColumns(test1);

        equals(table.hasInactiveColumns(), true, "in the initial state with a table that has optional columns omitted");

        table.addColumn('b');
        table.addColumn('d');
        table.addColumn('e');
        table.addColumn('f');

        equals(table.hasInactiveColumns(), false, "show all the optional columns and check that the inactive column is now false");

        table.removeColumn('b');
        equals(table.hasInactiveColumns(), true, "hide one column and now there should be inactive columns");

    });


    test("open up a test with a blank table and add and remove columns", function () {
        var editor = $("#testEditor2").testEditor(blank);
        $(editor).show();
        editor.backgroundColor = 'red';

        equals($('.addb', editor).is(':visible'), true, "link for optional column 'b' is shown");
        equals($('.addd', editor).is(':visible'), true, "link for optional column 'd' is shown");
        equals($('.adde', editor).is(':visible'), true, "link for optional column 'e' is shown");
        equals($('.addf', editor).is(':visible'), true, "link for optional column 'f' is shown");

        equals($('.grid th.a', editor).is(':visible'), true, "mandatory a column is shown");
        equals($('.grid th.c', editor).is(':visible'), true, "mandatory c column is shown");
        equals($('.grid th.b', editor).is(':visible'), false, "optional b column is not shown");

        ok(true, 'add column b');
        $('.addb', editor).click();

        ok(true, 'click the link to remove column b');
        $('th.b > a.column-remover', editor).click();
        equals($('.addb', editor).is(':visible'), true, "link for optional column 'b' is shown");
        equals($('table.editor th.b', editor).length, 0, 'the column for optional column "b" should be hidden');

        ok(true, 'click the link to add column b');
        $('.addb', editor).click();
        equals($('.addb', editor).is(':visible'), false, "link for optional column 'b' is now hidden");
        equals($('table.editor th.b', editor).length, 1, 'the column for optional column "b" should be visible');
    });


});