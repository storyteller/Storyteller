using System;
using System.Reflection;
using FubuCore;
using FubuCore.Dates;
using FubuCore.Logging;
using NUnit.Framework;
using Rhino.Mocks;
using StructureMap;
using StructureMap.AutoMocking;

namespace StoryTeller.Testing
{
    public class RhinoAutoMocker<T> : StructureMap.AutoMocking.AutoMocker<T> where T : class
    {
        public RhinoAutoMocker() : base(new RhinoMocksAAAServiceLocator())
        {
        }


    }

    public class RhinoMockRepositoryProxy
    {
        private readonly Func<Type, object[], object> _DynamicMock;
        private readonly object _instance;
        private readonly Func<Type, object[], object> _PartialMock;
        private readonly Action<object> _Replay;

        public RhinoMockRepositoryProxy()
        {
            // We may consider allowing the consumer to pass in the MockRepository Type so we can avoid any possible Assembly conflict issues.
            // (The assumption being that their test project already has a reference to Rhino.Mocks.)
            // ex: var myclass = RhinoAutoMocker<MyClass>(MockMode.AAA, typeof(MockRepository)
            Assembly RhinoMocks = Assembly.Load("Rhino.Mocks");
            Type mockRepositoryType = RhinoMocks.GetType("Rhino.Mocks.MockRepository");
            if (mockRepositoryType == null)
                throw new InvalidOperationException("Unable to find Type Rhino.Mocks.MockRepository in assembly " +
                                                    RhinoMocks.Location);

            _instance = Activator.CreateInstance(mockRepositoryType);
            MethodInfo methodInfo = mockRepositoryType.GetMethod("DynamicMock", new[] { typeof(Type), typeof(object[]) });
            if (methodInfo == null)
                throw new InvalidOperationException(
                    "Unable to find method DynamicMock(Type, object[]) on MockRepository.");
            _DynamicMock =
                (Func<Type, object[], object>)
                Delegate.CreateDelegate(typeof(Func<Type, object[], object>), _instance, methodInfo);

            methodInfo = mockRepositoryType.GetMethod("PartialMock", new[] { typeof(Type), typeof(object[]) });
            if (methodInfo == null)
                throw new InvalidOperationException(
                    "Unable to find method PartialMock(Type, object[] on MockRepository.");
            _PartialMock =
                (Func<Type, object[], object>)
                Delegate.CreateDelegate(typeof(Func<Type, object[], object>), _instance, methodInfo);


            methodInfo = mockRepositoryType.GetMethod("Replay", new[] { typeof(object) });
            if (methodInfo == null)
                throw new InvalidOperationException("Unable to find method Replay(object) on MockRepository.");
            _Replay = (Action<object>)Delegate.CreateDelegate(typeof(Action<object>), _instance, methodInfo);
        }

        public object DynamicMock(Type type)
        {
            return _DynamicMock(type, null);
        }

        public object PartialMock(Type type, object[] args)
        {
            return _PartialMock(type, args);
        }

        public void Replay(object mock)
        {
            _Replay(mock);
        }
    }

        public class RhinoMocksAAAServiceLocator : ServiceLocator
        {
            private readonly RhinoMockRepositoryProxy _mocks = new RhinoMockRepositoryProxy();

            public T Service<T>() where T : class
            {
                var instance = (T)_mocks.DynamicMock(typeof(T));
                _mocks.Replay(instance);
                return instance;
            }

            public object Service(Type serviceType)
            {
                object instance = _mocks.DynamicMock(serviceType);
                _mocks.Replay(instance);
                return instance;
            }

            public T PartialMock<T>(params object[] args) where T : class
            {
                var instance = (T)_mocks.PartialMock(typeof(T), args);
                _mocks.Replay(instance);
                return instance;
            }
        }

    public class InteractionContext<T> where T : class
    {
        private SettableClock _clock;

        public IContainer Container { get { return Services.Container; } }
        public RhinoAutoMocker<T> Services { get; private set; }
        public T ClassUnderTest { get { return Services.ClassUnderTest; } }

        [SetUp]
        public void SetUp()
        {
            _clock = new SettableClock();

            Services = new RhinoAutoMocker<T>();
            Services.Inject<ISystemTime>(_clock);
            beforeEach();
        }


        // Override this for context specific setup
        protected virtual void beforeEach() {}

        public TService MockFor<TService>() where TService : class
        {
            return Services.Get<TService>();
        }

        public void VerifyCallsFor<TMock>() where TMock : class
        {
            MockFor<TMock>().VerifyAllExpectations();
        }

        public DateTime LocalSystemTime
        {
            get
            {
                return _clock.LocalTime().Time;
            }
            set
            {
                _clock.LocalNow(value);
            }
        }

        public LocalTime LocalTime
        {
            get
            {
                return _clock.LocalTime();
            }
        }

        public DateTime UtcSystemTime
        {
            get
            {
                return _clock.UtcNow();
            }
        }
    }
}