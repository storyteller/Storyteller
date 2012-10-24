$.fn.sentence = function(step) {
    return this.each(function(i, input) {
        ST.sentence(input, {}, step);
    });
}

qUnitTesting(function() {
    module("Sentence");

    test("creation and updating applies to all cells", function() {
        var step = { x: 1, y: 2, sum: 3 };
        var sentence = $('div.XplusYShouldBe').sentence(step).get(0);

        equals($('input.x', sentence).val(), 1, 'x cell');
        equals($('input.y', sentence).val(), 2, 'y cell');
        equals($('input.sum', sentence).val(), 3, 'sum cell');


        $('input.x', sentence).val(5);
        $('input.y', sentence).val(6);
        $('input.sum', sentence).val(7);

        sentence.update();

        equals('5', step.x, "updating x");
        equals('6', step.y, "updating y");
        equals('7', step.sum, "updating sum");
    });



});