using System;
using System.Runtime.Serialization;
using FubuCore;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core
{
    public interface IGrammar
    {
        IExecutionPlan CreatePlan(Step step);

        GrammarModel Compile(Conversions conversions);
    }

    public interface IFixture
    {
        bool IsHidden();

        FixtureModel Compile(Conversions conversions);

        IGrammar GrammarFor(string key);

        string Key { get; }
        ISpecContext Context { get; set; }
        void SetUp();
        void TearDown();
    }

    public interface IExecutionPlan
    {
        void Execute(ISpecContext context);
    }

    /// <summary>
    /// Means that the current spec fun is invalid and should be 
    /// stopped immediately
    /// </summary>
    [Serializable]
    public class StorytellerCriticalException : Exception
    {
        public StorytellerCriticalException()
        {
        }

        public StorytellerCriticalException(string message) : base(message)
        {
        }

        public StorytellerCriticalException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected StorytellerCriticalException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }

    /// <summary>
    /// Means that the entire system under test is invalid and
    /// no more specs should be executed
    /// </summary>
    [Serializable]
    public class StorytellerCatastrophicException : Exception
    {
        public StorytellerCatastrophicException()
        {
        }

        public StorytellerCatastrophicException(string message) : base(message)
        {
        }

        public StorytellerCatastrophicException(string message, Exception innerException) : base(message, innerException)
        {
        }

        protected StorytellerCatastrophicException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }

    [Serializable]
    public class StorytellerAssertionException : ApplicationException
    {
        public StorytellerAssertionException()
        {
        }

        protected StorytellerAssertionException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }

        public StorytellerAssertionException(string message)
            : base(message)
        {
        }

        public override string ToString()
        {
            return Message;
        }
    }

    public static class StoryTellerAssert
    {
        public static void Fail(string message)
        {
            throw new StorytellerAssertionException(message);
        }

        public static void Fail(Func<bool> condition, string message)
        {
            if (condition())
            {
                Fail(message);
            }
        }

        public static void Fail(Func<bool> condition, string message, params object[] args)
        {
            if (condition())
            {
                Fail(message.ToFormat(args));
            }
        }

        public static void Fail(bool condition, string message)
        {
            if (condition)
            {
                Fail(message);
            }
        }

        public static void Fail(bool condition, Func<string> message)
        {
            if (condition)
            {
                Fail(message());
            }
        }
    }
}