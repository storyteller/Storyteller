using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using NUnit.Framework;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Exploring;

namespace StoryTeller.UserInterface.Testing.UI.Exploring
{
    public class TreeNodeSpecification
    {
        private readonly List<TreeNodeToken> _tokens = new List<TreeNodeToken>();

        public TreeNodeSpecification(string text)
        {
            var reader = new StringReader(text);
            string lineText;
            while ((lineText = reader.ReadLine()) != null)
            {
                if (lineText.Trim() == string.Empty) continue;

                addToken(lineText.Trim());
            }
        }

        private void addToken(string text)
        {
            string[] parts = text.Split(':');
            var token = new TreeNodeToken
            {
                Type = parts[0].ToLower(),
                Path = parts[1]
            };
            _tokens.Add(token);
        }

        public void AssertMatch(TreeNode hierarchyNode)
        {
            List<TreeNodeToken> actual = getActual(hierarchyNode);

            try
            {
                Assert.AreEqual(_tokens.Count, actual.Count, "the count");
                actual.ShouldHaveTheSameElementsAs((IList) _tokens);
            }
            catch (Exception)
            {
                actual.ForEach(x => Debug.WriteLine(x));

                throw;
            }
        }

        private static List<TreeNodeToken> getActual(TreeNode hierarchyNode)
        {
            var actual = new List<TreeNodeToken>();
            addChildren(hierarchyNode, actual);
            return actual;
        }

        public static void Show(TreeNode hierarchyNode)
        {
            List<TreeNodeToken> list = getActual(hierarchyNode);
            foreach (TreeNodeToken token in list)
            {
                Debug.WriteLine(token);
            }
        }

        private static void addChildren(TreeNode node, List<TreeNodeToken> actual)
        {
            foreach (TreeNode child in node.Items)
            {
                addToken(child, actual);
                addChildren(child, actual);
            }
        }

        private static void addToken(TreeNode node, List<TreeNodeToken> actual)
        {
            string locator = node.Subject.GetPath().Locator;
            string typeName = node.Subject.GetType().Name.ToLower();
            var token = new TreeNodeToken
            {
                Path = locator,
                Type = typeName
            };

            actual.Add(token);
        }
    }

    public class TreeNodeToken
    {
        public string Type { get; set; }
        public string Path { get; set; }

        public bool Equals(TreeNodeToken obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj.Type, Type) && Equals(obj.Path, Path);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (TreeNodeToken)) return false;
            return Equals((TreeNodeToken) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((Type != null ? Type.GetHashCode() : 0)*397) ^ (Path != null ? Path.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("{0}:{1}", Type, Path);
        }
    }
}