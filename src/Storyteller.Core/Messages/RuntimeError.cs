using System;

namespace Storyteller.Core.Messages
{
    public class RuntimeError : ClientMessage
    {
        public string error { get; set; }

        public RuntimeError()
            : base("runtime-error")
        {
        }

        public RuntimeError(string error) : this()
        {
            this.error = error;
        }

        public RuntimeError(Exception ex) : this(ex.ToString())
        {
            
        }
    }
}