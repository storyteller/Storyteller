#if NET46
namespace System
{
    public static class AppContext
    {
        public static string BaseDirectory => AppDomain.CurrentDomain.BaseDirectory;
    }
}
#endif