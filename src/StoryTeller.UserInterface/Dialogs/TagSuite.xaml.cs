using System.Windows;
using System.Windows.Controls;
using FubuCore;
using StoryTeller.Engine;
using StoryTeller.UserInterface.Commands;

namespace StoryTeller.UserInterface.Dialogs
{
    /// <summary>
    /// Interaction logic for TagTests.xaml
    /// </summary>
    public partial class TagSuite : ICommandDialog<ITagTestsCommand>
    {
        private readonly ITagTestsCommand _command;

        public TagSuite()
        {
            InitializeComponent();

            icon.SetIcon(Icon.Plus);
            enableCreate();
            name.TextChanged += (s, e) => enableCreate();
            name.Focus();

            create.Click += (s, e) =>
            {
                _command.TagTests(name.Text);
                Parent.CallOn<Window>(x => x.DialogResult = true);
            };
        }

        public TagSuite(ITagTestsCommand command)
            : this()
        {
            _command = command;
        }

        public TextBox NameBox { get { return name; } }

        public Button Create { get { return create; } }


        public string Title { get { return _command.Title; } }

        
        private void enableCreate()
        {
            Create.IsEnabled = name.Text.Trim().IsNotEmpty();
        }
    }
}