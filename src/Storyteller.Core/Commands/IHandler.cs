namespace Storyteller.Core.Commands
{
    public interface IHandler
    {
         
    }

    public interface IHandler<T> : IHandler
    {
        void Handle(T message);
    }
}