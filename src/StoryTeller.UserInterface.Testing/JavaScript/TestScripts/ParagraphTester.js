$.fn.paragraph = function(step) {
    return this.each(function(i, element) {
        ST.paragraph(element, {}, step);
    });
}

qUnitTesting(function() {
    module("Paragraph");

    test("creating and binding a paragraph updates each child grammar", function() {
        var step = { x: 1, y: 2, returnValue: 3 }

        var paragraph = $('.Sum1').paragraph(step).get(0);

        equals($('.x', paragraph).val(), 1, "x cell in first child");
        equals($('.y', paragraph).val(), 2, "y cell in first child");
        equals($('.returnValue', paragraph).val(), 3, "returnValue cell in first child");

        $('.x', paragraph).val(5);
        $('.y', paragraph).val(6);
        $('.returnValue', paragraph).val(7);

        paragraph.update();

        equals(step.x, 5, "updated first child");
        equals(step.y, 6, "updated second child");
        equals(step.returnValue, 7, "updated third child");
    });



});