using System;

namespace ST.Docs.Runner
{
    public interface IBrowserRefresher
    {
        void RefreshPage();
    }

    public class NulloBrowserRefresher : IBrowserRefresher
    {
        public void RefreshPage()
        {
            // nothing
        }
    }

    public class BrowserRefresher : IDisposable, IBrowserRefresher
    {
        private readonly WebSocketsHandler _handler;

        public BrowserRefresher(WebSocketsHandler handler)
        {
            _handler = handler;
        }


        public void RefreshPage()
        {
#pragma warning disable 4014
            _handler.Send("REFRESH");
#pragma warning restore 4014
        }

        public void Dispose()
        {
            _handler.Dispose();
        }
    }
}