$(document).ready(function () {
    $('#testName').change(function () {
        eval('var test = ' + $('#testName').val() + ';');
        $('#testEditor').testEditor(test);
    });

    $('#testName').change();


    $("#nextButton").click(function () {
        $('#testName').get(0).selectedIndex++;
        $('#testName').change();
    });
});