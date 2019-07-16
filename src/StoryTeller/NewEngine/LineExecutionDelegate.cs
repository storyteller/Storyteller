using System.Threading.Tasks;
using StoryTeller;
using StoryTeller.Results;

namespace Storyteller
{
    public delegate Task LineExecutionDelegate(ISpecContext context, StepResult result);
}