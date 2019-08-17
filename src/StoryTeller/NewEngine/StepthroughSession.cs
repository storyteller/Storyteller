using System.Threading.Tasks;
using StoryTeller.Model;

namespace StoryTeller.NewEngine
{
    public class StepthroughSession
    {
        private readonly IProject _project;
        private readonly ISystemUnderTest _system;
        private readonly ISpecificationObserver _observer;
        private readonly ExecutionPlan _plan;
        private IExecutionContext _context;
        private readonly TaskCompletionSource<bool> _completion = new TaskCompletionSource<bool>();
        private readonly TaskCompletionSource<bool> _hasStarted = new TaskCompletionSource<bool>();

        private int _position = -1;

        public StepthroughSession(IProject project, ISystemUnderTest system, ISpecificationObserver observer, ExecutionPlan plan)
        {
            _project = project;
            _system = system;
            _observer = observer;
            _plan = plan;
            
        }

        public async Task Start()
        {
            // Do start and finish too!
            _observer.Starting(_plan);
            
            // TODO -- if it fails, bail out with a failed result
            
            _hasStarted.SetResult(true);
        }
        
        // TODO -- these need to be tested
        public LineExecution Current => _position == -1 || _position == _plan.Lines.Count ? null : _plan.Lines[_position];

        public LineExecution Next => (_position + 1) >= _plan.Lines.Count ? null : _plan.Lines[_position + 1];

        private void moveNext()
        {
            _position++;
        }
        
        private void finish()
        {
            _completion.SetResult(true);
        }

        private async Task executeCurrentStep()
        {
            var result = await Current.Execute(_context);
            
            // TODO -- maybe merge the next couple calls
            _observer.Completed(_plan, Current, result);
        }
        
        public async Task RunNext()
        {
            moveNext();
            if (Current == null)
            {
                finish();
                return;
            }
            else
            {
                await executeCurrentStep();
            }

            if (_position == _plan.Lines.Count - 1)
            {
                finish();
                return;
            }
        }
        
        private bool isAtBreakpoint()
        {
            if (Next == null) return false;

            return _plan.Specification.MatchesBreakpoint(Next.Id, Next.Position);
        }
        
        public void SetBreakpoints(Breakpoint[] breakpoints)
        {
            _plan.Specification.Breakpoints = breakpoints;
        }

        
        public async Task RunToBreakpoint()
        {
            if (isAtBreakpoint())
            {
                moveNext();
                await executeCurrentStep();

                if (!isAtBreakpoint())
                {
                    await RunToBreakpoint();
                }
                else
                {
                    if (Next == null)
                    {
                        finish();
                    }
                }

                return;
            }

            while (Next != null && !isAtBreakpoint())
            {
                moveNext();
                await executeCurrentStep();
            }

            if (Next == null)
            {
                finish();
            }
        }
    }
}
