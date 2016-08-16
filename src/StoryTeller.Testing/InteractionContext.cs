using System;
using System.Reflection;
using FubuCore.Dates;
using NSubstitute;
using StructureMap;
using StructureMap.AutoMocking;

namespace StoryTeller.Testing
{

    public class InteractionContext<T> where T : class
    {
        private readonly SettableClock _clock;

        public InteractionContext()
        {
            _clock = new SettableClock();

            Services = new AutoMocker<T>(new NSubstituteServiceLocator());
            Services.Inject<ISystemTime>(_clock);
        }

        public IContainer Container => Services.Container;
        public AutoMocker<T> Services { get; }
        public T ClassUnderTest => Services.ClassUnderTest;


        public DateTime LocalSystemTime
        {
            get { return _clock.LocalTime().Time; }
            set { _clock.LocalNow(value); }
        }

        public LocalTime LocalTime => _clock.LocalTime();

        public DateTime UtcSystemTime => _clock.UtcNow();

        public TService MockFor<TService>() where TService : class
        {
            return Services.Get<TService>();
        }
    }

    public class NSubstituteServiceLocator : ServiceLocator
    {
        public T Service<T>() where T : class
        {
            return Substitute.For<T>();
        }

        public object Service(Type serviceType)
        {
            return Substitute.For(new[] {serviceType}, new object[0]);
        }

        public T PartialMock<T>(params object[] args) where T : class
        {
            return Substitute.For<T>(args);
        }
    }
}