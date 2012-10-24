using NUnit.Framework;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Projects;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Testing.UI.Projects
{
    [TestFixture]
    public class when_calling_next_on_project_history
    {
        private ProjectHistory _history;
        private ProjectToken _projectToken1;
        private ProjectToken _projectToken2;
        private ProjectToken _projectToken3;

        [SetUp]
        public void SetUp()
        {
            _history = new ProjectHistory();
            _projectToken1 = new ProjectToken
            {
                Filename = "project1.xml",
                Name = "project1"
            };
            
            _projectToken2 = new ProjectToken
            {
                Filename = "project2.xml",
                Name = "project2"
            };
            
            _projectToken3 = new ProjectToken
            {
                Filename = "project3.xml",
                Name = "project3"
            };
            _history.Store(_projectToken3);
            _history.Store(_projectToken2);
            _history.Store(_projectToken1);
        }

        [Test]
        public void calling_next_on_a_project_when_there_are_more_in_the_history_should_give_you_the_next_element()
        {
            _history.Next(_projectToken1).ShouldEqual(_projectToken2);
        }

        [Test]
        public void calling_next_on_the_last_project_in_the_history_should_return_null()
        {
            _history.Next(_projectToken3).ShouldEqual(null);
        }
    }

    [TestFixture]
    public class ProjectHistoryTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void if_storing_a_project_that_is_already_in_the_history_bring_it_to_top()
        {
            var history = new ProjectHistory();
            history.Store(new ProjectToken
            {
                Filename = "project1.xml",
                Name = "project1"
            });
            history.Store(new ProjectToken
            {
                Filename = "project2.xml",
                Name = "project2"
            });
            history.Store(new ProjectToken
            {
                Filename = "project3.xml",
                Name = "project3"
            });
            history.Store(new ProjectToken
            {
                Filename = "project4.xml",
                Name = "project4"
            });
            history.Store(new ProjectToken
            {
                Filename = "project2.xml",
                Name = "project2"
            });

            history.Projects.ShouldEqual(new[]
            {
                new ProjectToken
                {
                    Filename = "project2.xml",
                    Name = "project2"
                },
                new ProjectToken
                {
                    Filename = "project4.xml",
                    Name = "project4"
                },
                new ProjectToken
                {
                    Filename = "project3.xml",
                    Name = "project3"
                },
                new ProjectToken
                {
                    Filename = "project1.xml",
                    Name = "project1"
                }
            });
        }

        [Test]
        public void last_project_returns_null_if_there_are_no_projects()
        {
            var history = new ProjectHistory();
            history.LastAccessed.ShouldBeNull();
        }

        [Test]
        public void last_test()
        {
            var history = new ProjectHistory();
            history.Store(new ProjectToken
            {
                Filename = "project1.xml",
                Name = "project1"
            });
            history.Store(new ProjectToken
            {
                Filename = "project2.xml",
                Name = "project2"
            });
            history.Store(new ProjectToken
            {
                Filename = "project3.xml",
                Name = "project3"
            });
            history.Store(new ProjectToken
            {
                Filename = "project4.xml",
                Name = "project4"
            });

            history.LastAccessed.ShouldEqual(new ProjectToken
            {
                Filename = "project4.xml",
                Name = "project4"
            });
        }

        [Test]
        public void mark_as_last_accessed_from_empty()
        {
            var token = new ProjectToken
            {
                Filename = "project4.xml",
                Name = "project4"
            };


            var history = new ProjectHistory();
            history.MarkAsLastAccessed(token);

            history.Projects.Length.ShouldEqual(1);
            history.LastAccessed.ShouldBeTheSameAs(token);
        }

        [Test]
        public void mark_as_last_accessed_when_the_project_is_already_the_most_recent_project()
        {
            var token = new ProjectToken
            {
                Filename = "project4.xml",
                Name = "project4"
            };


            var history = new ProjectHistory();
            history.Store(token);
            history.Store(new ProjectToken
            {
                Filename = "project1.xml",
                Name = "project1"
            });
            history.Store(new ProjectToken
            {
                Filename = "project2.xml",
                Name = "project2"
            });
            history.Store(new ProjectToken
            {
                Filename = "project3.xml",
                Name = "project3"
            });


            history.MarkAsLastAccessed(token);
        }

        [Test]
        public void mark_as_last_accessed_when_the_project_is_not_the_most_recent_project()
        {
            var token = new ProjectToken
            {
                Filename = "project4.xml",
                Name = "project4"
            };


            var history = new ProjectHistory();
            history.Store(new ProjectToken
            {
                Filename = "project1.xml",
                Name = "project1"
            });
            history.Store(new ProjectToken
            {
                Filename = "project2.xml",
                Name = "project2"
            });
            history.Store(new ProjectToken
            {
                Filename = "project3.xml",
                Name = "project3"
            });

            history.Store(token);


            history.MarkAsLastAccessed(token);

            history.LastAccessed.ShouldBeTheSameAs(token);

            history.Projects.Length.ShouldEqual(4);
        }

        [Test]
        public void only_remembers_4_projects()
        {
            var history = new ProjectHistory();
            history.Store(new ProjectToken
            {
                Filename = "project1.xml",
                Name = "project1"
            });
            history.Store(new ProjectToken
            {
                Filename = "project2.xml",
                Name = "project2"
            });
            history.Store(new ProjectToken
            {
                Filename = "project3.xml",
                Name = "project3"
            });
            history.Store(new ProjectToken
            {
                Filename = "project4.xml",
                Name = "project4"
            });
            history.Store(new ProjectToken
            {
                Filename = "project5.xml",
                Name = "project5"
            });

            history.Projects.ShouldEqual(new[]
            {
                new ProjectToken
                {
                    Filename = "project5.xml",
                    Name = "project5"
                },
                new ProjectToken
                {
                    Filename = "project4.xml",
                    Name = "project4"
                },
                new ProjectToken
                {
                    Filename = "project3.xml",
                    Name = "project3"
                },
                new ProjectToken
                {
                    Filename = "project2.xml",
                    Name = "project2"
                },
            });
        }

        [Test]
        public void persist_and_load()
        {
            var system = new FileSystem();

            var history1 = new ProjectHistory();
            history1.Store(new ProjectToken
            {
                Filename = "project1.xml",
                Name = "project1"
            });
            history1.Store(new ProjectToken
            {
                Filename = "project2.xml",
                Name = "project2"
            });
            history1.Store(new ProjectToken
            {
                Filename = "project3.xml",
                Name = "project3"
            });
            history1.Store(new ProjectToken
            {
                Filename = "project4.xml",
                Name = "project4"
            });

            system.PersistToFile(history1, "history.xml");
            var history2 = system.LoadFromFile<ProjectHistory>("history.xml");

            history2.Projects.ShouldEqual(new[]
            {
                new ProjectToken
                {
                    Filename = "project4.xml",
                    Name = "project4"
                },
                new ProjectToken
                {
                    Filename = "project3.xml",
                    Name = "project3"
                },
                new ProjectToken
                {
                    Filename = "project2.xml",
                    Name = "project2"
                },
                new ProjectToken
                {
                    Filename = "project1.xml",
                    Name = "project1"
                }
            });

            history2.LastAccessed.ShouldEqual(new ProjectToken
            {
                Filename = "project4.xml",
                Name = "project4"
            });
        }

        [Test]
        public void remembers_project_history_in_most_recent_order()
        {
            var history = new ProjectHistory();
            history.Store(new ProjectToken
            {
                Filename = "project1.xml",
                Name = "project1"
            });
            history.Store(new ProjectToken
            {
                Filename = "project2.xml",
                Name = "project2"
            });
            history.Store(new ProjectToken
            {
                Filename = "project3.xml",
                Name = "project3"
            });
            history.Store(new ProjectToken
            {
                Filename = "project4.xml",
                Name = "project4"
            });

            history.Projects.ShouldEqual(new[]
            {
                new ProjectToken
                {
                    Filename = "project4.xml",
                    Name = "project4"
                },
                new ProjectToken
                {
                    Filename = "project3.xml",
                    Name = "project3"
                },
                new ProjectToken
                {
                    Filename = "project2.xml",
                    Name = "project2"
                },
                new ProjectToken
                {
                    Filename = "project1.xml",
                    Name = "project1"
                }
            });
        }
    }
}