using System;
using System.Collections.Generic;
using System.Linq;

namespace StoryTeller.Domain
{
    public interface IPartHolder
    {
        IList<ITestPart> Parts { get; }
    }

    public static class PartHolderExtensions
    {
        public static IList<IStep> AllSteps(this IPartHolder holder)
        {
            return holder.Parts.Where(x => x is IStep).Cast<IStep>().ToList();
        }

        public static void MoveUp(this IPartHolder holder, ITestPart part)
        {
            holder.Parts.MoveUp(part);
        }

        public static void MoveDown(this IPartHolder holder, ITestPart part)
        {
            holder.Parts.MoveDown(part);
        }

        public static void MoveToTop(this IPartHolder holder, ITestPart part)
        {
            holder.Parts.MoveToTop(part);
        }

        public static void MoveToBottom(this IPartHolder holder, ITestPart part)
        {
            holder.Parts.MoveToBottom(part);
        }

        public static Step AddStep(this IPartHolder holder, string grammarKey)
        {
            var step = new Step(grammarKey);
            holder.Parts.Add(step);

            return step;
        }

        public static void Remove(this IPartHolder holder, ITestPart part)
        {
            holder.Parts.Remove(part);
        }

        public static void RemoveParts(this IPartHolder holder, Func<ITestPart, bool> filter)
        {
            holder.Parts.RemoveAll(filter);
        }

        public static Section AddSection(this IPartHolder holder, string fixtureName)
        {
            var section = new Section(fixtureName);
            holder.Add(section);

            return section;
        }

        public static Comment AddComment(this IPartHolder holder)
        {
            var comment = new Comment();
            holder.Add(comment);

            return comment;
        }

        public static void Add(this IPartHolder holder, ITestPart part)
        {
            holder.Parts.Add(part);
        }
    }
}