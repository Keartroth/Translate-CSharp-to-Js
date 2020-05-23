using System;
using System.Collections.Generic;

namespace Insulter
{
    // We write C# code in classes.
    class Program
    {
        // All C# applications start in the "Main" method.
        static void Main(string[] args)
        {
            // We must specify the Type of the "insults" variable.
            // It is a "List" that can only contain "strings".
            List<string> insults = new List<string>
            {
                "You look like what morning breath smells like.",
                "If you tried to give me cpr I would probably throw myself back under water",
                "I am not a fan of you",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
                "I'd rather walk than be on the same plane as you",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
                "Do you have to be so...like that?"
            };

            // We must specify the Type of the "indexes" variable.
            // It is a "List" that can only contain "int" or integers.
            List<int> indexes = new List<int> { };

            // Create a list of three random indexes.
            while (indexes.Count < 3)
            {
                int indexValue = new Random().Next(0, 7);
                if (indexes.Contains(indexValue) == false)
                {
                    indexes.Add(indexValue);
                }
            }

            // Loop over the List of indexes and write the corresponding insult to the Console.
            for (int i = 0; i < indexes.Count; i++)
            {
                int index = indexes[i];
                Console.WriteLine($"{insults[index]}");
            }
        }
    }
}