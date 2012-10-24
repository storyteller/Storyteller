using System.Windows;
using System.Windows.Controls;
using FubuCore;
using StoryTeller.Engine;
using StoryTeller.UserInterface.Commands;

namespace StoryTeller.UserInterface.Dialogs
{
    /// <summary>
    /// Interaction logic for AddTest.xaml
    /// </summary>
    public partial class AddTest : ICommandDialog<IAddTestCommand>
    {
        private readonly IAddTestCommand _command;

        public AddTest()
        {
            InitializeComponent();

            icon.SetIcon(Icon.Plus);
            enableCreate();
            name.TextChanged += (s, e) => enableCreate();
            name.Focus();

            create.Click += (s, e) =>
            {
                _command.CreateTest(name.Text);
                Parent.CallOn<Window>(x => x.DialogResult = true);
            };
        }

        public AddTest(IAddTestCommand command)
            : this()
        {
            _command = command;
        }

        public TextBox NameBox { get { return name; } }

        public Button Create { get { return create; } }

        #region ICommandDialog<IAddTestCommand> Members

        public string Title { get { return _command.Title; } }

        #endregion

        private void enableCreate()
        {
            Create.IsEnabled = name.Text.Trim().IsNotEmpty();
        }
    }
}