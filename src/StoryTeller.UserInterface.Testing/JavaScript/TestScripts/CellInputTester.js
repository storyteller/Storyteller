$.fn.cellInput = function(metadata) {
    return this.each(function(i, input) {
        ST.cellInput(input, metadata);
    });
}


qUnitTesting(function() {

    module("cell input");

    test("When a textbox is bound to a step", function() {
        var step = { name: 'Jeremy' }

        var tbox = $('input.x').cellInput({ key: 'name' }).get(0);

        tbox.bindTo(step);

        equals($(tbox).val(), step.name, "bindTo should set the value of the textbox to the step value");

        $(tbox).val('Josh');
        step = {};
        tbox.update(step);

        equals(step.name, 'Josh', "update() should set the value of the step to the textbox value");
    });

    test("When a textbox is bound to a step with no existing value", function() {
        var step = {}

        var tbox = $('input.y').cellInput({ key: 'name' }).get(0);

        tbox.bindTo(step);

        equals($(tbox).val(), '', "bindTo should set the value of the textbox to the empty string if there is no preexisting value");


    });


    test('When a textbox is bound with a default value defined', function() {
        var step = {}


        var tbox = $('input.sum').cellInput({ key: 'name', defaultValue: 'Jeremy' }).get(0);

        tbox.bindTo(step);

        equals($(tbox).val(), 'Jeremy', "bindTo should set the value of the textbox to the default value if the step value is null or blank");
    });

    test("When a select is bound to a step", function() {
        var step = { name: 'Jeremy' }

        var select = $('.TheNameIs1 > select.cell').cellInput({ key: 'name' }).get(0);
        select.bindTo(step);
        equals($(select).val(), step.name, "bindTo should set the value of the select to the step value");

        $(select).val('Josh');
        step = {};
        select.update(step);
        equals(step.name, 'Josh', "update() should set the value of the step to the select value");
    });


    test("When a select with a default is bound to a step", function() {
        var step = {}

        var select = $('.TheNameIs2 > select.cell').cellInput({key: 'name', defaultValue: 'Chad'}).get(0);
        select.bindTo(step);
        equals($(select).val(), 'Chad', "bindTo should set the value of the select to the step value");
    });


});