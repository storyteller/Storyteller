using System;
using System.IO;

namespace StoryTeller.Files
{
    public interface IFileReference
    {
        string Path { get; }

        /// <summary>
        /// Path relative to the containing content folder
        /// </summary>
        string RelativePath { get; set; }

        /// <summary>
        /// Read the contents of this IFileReference
        /// </summary>
        /// <returns></returns>
        string ReadContents();

        /// <summary>
        /// Read the contents of this IFileReference from a stream
        /// </summary>
        /// <param name="action"></param>
        void ReadContents(Action<Stream> action);

        /// <summary>
        /// Reads the text of this file and calls read on 
        /// ever line of the file
        /// </summary>
        /// <param name="read"></param>
        void ReadLines(Action<string> read);


        /// <summary>
        /// The size in bytes of this file
        /// </summary>
        /// <returns></returns>
        long Length();


        /// <summary>
        /// Quoted ETag string value determined by the last modified time
        /// and length 
        /// </summary>
        /// <returns></returns>
        string Etag();

        /// <summary>
        /// The last modified time of this file
        /// </summary>
        /// <returns></returns>
        DateTime LastModified();


    }
}