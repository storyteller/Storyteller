using System.Threading.Tasks;
using StoryTeller.Results;

namespace StoryTeller.NewEngine
{
    public delegate Task LineExecutionDelegate(IExecutionContext context, StepResult result);
}