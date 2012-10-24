using System;
using StoryTeller.Engine;

namespace StoryTeller.Domain
{
    public interface IStepResults : IExceptionTarget
    {
        string ExceptionText { get; }
        void MarkMissingValue(string key);
        bool HasErrors();
        bool IsInException(string key);
        void MarkFormatFailure(string key);
        void MarkFailure(string key);
        void MarkExceptionField(string exceptionString, string key);
        bool IsFailure(string key);
        void MoveFrame();
        void MoveFirst();


        void SetActual(string key, object actual);

        [Obsolete("Switch to using Stringifier in Fubu")]
        T ActualDisplay<T>(string key);

        [Obsolete("Switch to using Stringifier in Fubu")]
        object ActualDisplay(string key);
        object GetActual(string key);
        bool HasActual(string key);
        void SetResult<T>(T target, string key);
        T GetResult<T>(string key);
    }
}