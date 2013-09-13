ST.paragraph = function (div, metadata, step) {
    div.step = step;
    div.container = $('.section-container', div).get(0);

    $('.deleteStep', div).removable();
    $('.moveUpStep', div).moveable(true);
    $('.moveDownStep', div).moveable(false);

    ST.activateGrammars(div.container, step);

    div.update = function () {
        $(div.container).children('.step').each(function (i, child) {
            if (jQuery.isFunction(child.update)) {
                child.update();
            }
        });

        return div.step;
    };
}

ST.registerGrammar('.paragraph', ST.paragraph);