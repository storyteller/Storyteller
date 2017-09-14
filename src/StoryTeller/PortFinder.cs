using System;
using System.Net;
using System.Net.Sockets;
using Baseline;

namespace StoryTeller
{
    public static class PortFinder
    {
        public static int FindPort(int start)
        {
            for (int i = start; i < start + 50; i++)
            {
                if (TryPort(i)) return i;
            }

            throw new InvalidOperationException("Could not find a port to bind to");
        }

        private static bool TryPort(int port)
        {
            var isV4Free = TryPortVersion(AddressFamily.InterNetwork, IPAddress.Loopback, port);
            var isV6Free = TryPortVersion(AddressFamily.InterNetworkV6, IPAddress.IPv6Loopback, port);

            return isV4Free && isV6Free;
        }

        private static bool TryPortVersion(AddressFamily family, IPAddress address, int port)
        {
            var socket = new Socket(family, SocketType.Stream, ProtocolType.Tcp);
            var endpoint = new IPEndPoint(address, port);

            try
            {
                socket.Bind(endpoint);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
            finally
            {
                socket.SafeDispose();
            }
        }
    }
}
