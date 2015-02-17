using System;

namespace Storyteller.Core.Messages
{
    public class RuntimeError : ClientMessage
    {
        public string error { get; set; }

        public RuntimeError(string error) : base("runtime-error")
        {
            this.error = error;
        }

        public RuntimeError(Exception ex) : this(ex.ToString())
        {
            
        }
    }
}