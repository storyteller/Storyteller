using System;

namespace StoryTeller
{
    public enum EmbedStyle
    {
        Inline,
        TitledAndIndented,
        Indented,
        InlineAndPadded
    }


    public enum SelectionMode
    {
        Any,
        Single,
        OneOrMore,
        MandatoryAutoSelect
    }
}