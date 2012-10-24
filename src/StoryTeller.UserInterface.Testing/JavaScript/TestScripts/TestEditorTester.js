$.fn.testLink = function() {
    return this.each(function(i, tag) {
        $(tag).click(function() {
            eval('var test = ' + tag.title + ';');
            $('#testEditor').testEditor(test);

            return false;
        });
    });
}

$(document).ready(function() {
    //    for (tag in $.fn) {
    //        $('<div><div>').html(tag).appendTo('#testEditor');
    //    }
    $('#fixture-selector').hide();
    $('.test-link').testLink();
    $('#testEditor').testEditor(Sentences);
});





qUnitTesting(function() {
    module("Test Editor Tester");

    test("load the sentence test", function() {
        var editor = $('#testEditor').testEditor(Sentences).get(0);

        var section = $('div.Sentence', editor).get(0);


        var stepNames = section.getStepNames();
        equals(stepNames.length, 9, 'total number of non-Comment steps');
        equals(stepNames[0], 'StartWithTheNumber');
        equals(stepNames[1], 'StartWithTheNumber');
        equals(stepNames[2], 'MultiplyThenAdd');
        equals(stepNames[3], 'Subtract');
        equals(stepNames[4], 'TheValueShouldBe');
        equals(stepNames[5], 'TheSumOf');
        equals(stepNames[6], 'ThisLineIsAlwaysTrue');
        equals(stepNames[7], 'ThisLineIsAlwaysFalse');
        equals(stepNames[8], 'ThisLineAlwaysThrowsExceptions');

        equals($(section.holder).children('.step').size(), 14, "14 total children of the Sentences section");
    });

    test("load the paragraph test", function() {
        var editor = $('#testEditor').testEditor(Simple_Composite).get(0);
        var section = $('div.Composite', editor).get(0);

        var stepNames = section.getStepNames();
        equals(stepNames.length, 3, 'total number of non-Comment steps');
        equals(stepNames[0], 'AddAndMultiply');
        equals(stepNames[1], 'AddAndMultiply');
        equals(stepNames[2], 'AddAndMultiplyTable');
    });


    test("load the embedded section test", function() {
        var editor = $('#testEditor').testEditor(Embeds).get(0);
        var embedded = $('div.Embedded', editor).get(0);

        var stepNames = embedded.getStepNames();
        equals(stepNames.length, 4, 'total number of non-Comment steps');
        equals(stepNames[0], 'ThrowAnExceptionOnTheNextEmbed');
        equals(stepNames[1], 'EmbeddedMath');
        equals(stepNames[2], 'DoNotThrowAnExceptionOnTheNextEmbed');
        equals(stepNames[3], 'EmbeddedMath');

        var math = $('div.EmbeddedMath', embedded.holder).get(1);
        stepNames = math.getStepNames();
        equals(stepNames.length, 4, 'should be 4 children in the last EmbeddedMath section of the test');
        equals(stepNames[0], 'Adding');
        equals(stepNames[1], 'Adding');
        equals(stepNames[2], 'Adding');
        equals(stepNames[3], 'Throw');

    });
});