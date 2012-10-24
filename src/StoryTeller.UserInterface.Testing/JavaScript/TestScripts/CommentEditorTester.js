qUnitTesting(function() {
    module("Comments");

    test("bind a comment editor to an existing Comment", function() {
        var comment = new Step('Comment');
        comment.text('the comment text');

        var editor = $('#comment1').commentEditor(comment).get(0);

        equals(editor.editorHolder.is(':visible'), false, 'textbox should be hidden by default');
        equals(editor.textbox.val(), comment.text(), 'textbox should have the comment text');

        equals(editor.previewHolder.is(':visible'), true, 'preview holder should be visible');
        equals(editor.preview.html(), comment.text(), 'preview should have the text');
    });

    test("bind a comment editor to a new Comment", function() {
        var comment = new Step('Comment');

        var editor = $('#comment4').commentEditor(comment).get(0);

        equals(editor.editorHolder.is(':visible'), true, 'textbox should be displayed');
        equals(editor.previewHolder.is(':visible'), false, 'preview holder should be hidden');
    });

    test("switch from preview to editor mode", function() {
        var comment = new Step('Comment');
        comment.text('the comment text');

        var editor = $('#comment2').commentEditor(comment).get(0);

        $('.comment-editor', editor).click();

        equals(editor.editorHolder.is(':visible'), true, 'textbox should be displayed');
        equals(editor.previewHolder.is(':visible'), false, 'preview holder should be hidden');

        editor.textbox.val('the new text');
        editor.textbox.change();

        equals(editor.textbox.val(), comment.text(), 'after changing the text of the textbox the step.InnerText should be changed to reflect the changes');
        equals(editor.preview.html(), editor.textbox.val(), 'after changing the text of the textbox the preview.InnerHtml is changed to match');
    });

    test("switch from editor to preview mode", function() {
        var comment = new Step('Comment');
        comment.text('the comment text');

        var editor = $('#comment3').commentEditor(comment).get(0);

        $('.comment-editor', editor).click();
        $('.comment-closer', editor).click();

        equals(editor.editorHolder.is(':visible'), false, 'textbox should be hidden by default');
        equals(editor.previewHolder.is(':visible'), true, 'preview holder should be visible');
    });

});