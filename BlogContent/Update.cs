using Bogoodski2019.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bogoodski2019.BlogContent
{
    public class Update
    {
        
        public static int id = 0;
        public static string blogTitle = "#Update";
        public static string publishDate = "May 23, 2019";
        public static string blogLink = "";
        public static string blogContent =
            @"<p><i>A quick progress report regarding some things on which I've been recently working.</i></p>
            <h3>#WebDev:</h3>
            <p><b>Run Archive:</b></p>
            <p>I added an archive section to the <a href=""https://bogoodski2019.azurewebsites.net/runlog/"" target=""_blank"" rel=""noreferrer noopener"">Run Log on BoGoodSki.com</a>.</p>";

        public static string blogContentPart2 =
            @"<p>When I initially built the run archive, I implemented it entirely in the client-side React app.  So, the archive data was stored as an array within a JSON object that was imported from one client-side file into a React component within another.</p>
            <p>I later refactored the data storage such that the historical run data are now saved on the server-side within the .NET solution.  The data for each historical run are saved as C# classes, and then the list of run data is delivered from the server-side as a JSON object via an IActionResult from the .NET solution, using a Web API controller. Within the React app, the data are consumed via a simple fetch() call that updates the component state object.</p>
            <p>The primary benefit of an architecture that stores the data server-side is that it will allow me to easily build functionality that permits adding historical run data to the archive from any device; that is: without having to update the actual source code.   As the Run Log is currently constructed, I have this functionality presently implemented for uploading the image of each day's daily run.  I have a password protected section of the site where I can upload an image from any device.  I plan to add this same functionality for the archive.  Though, I haven't yet.  So, for now, I have to update the source code each time I add a historical run to the archive.</p>
            <p><b>2Do App:</b></p>
            <p>As a code challenge, I was given about three and a half days to implement a ""To-Do"" app.  The only requirements: use font icons, implement simple animation, save the to-do list to local storage, and make the app ""your own"".  I came up with this: <a href=""https://bogoodski2019.azurewebsites.net/todo/switch"" target=""_blank"" rel=""noreferrer noopener""><i>Not Just Another</i> <b>2Do App</b>.</p>";

        public static string blogContentPart3 =
            @"<p>My current little side project is building a one-player (versus the computer) tic tac toe game.</p>";

        public static string blogContentPart4 =
            @"<p>Tic Tac Toe is a simplistic game, but the coding challenges it presents are sufficient for great learning opportunity. The most obvious, of course, will be the creation of the computer player's gameplay.  Initially, I plan for the computer player to be ""dumb"".  The computer player will select which tic-tac-toe square in which to place its ""O"" using JavaScript's Math.Random() method. The initial simplicity will be necessary as I will already have the challenge of setting the appropriate timeout calls and gameplay logic in order to simulate something like human behavior from the computer player.  After getting the first implementation of the game functioning correctly, I will then work on trying to improve the ""intelligence"" of the computer player; not with any fancy machine learning modeling or what-not, but via some simple conditional statements, and the like. </p>
            <h3>Human Development:</h3>
            <p>Nothing I've been working on, however, has been more rewarding than the improvements I've made to my own well-being.</p>
            <p>It's difficult for me to convey in words the extraordinary way I've been feeling.  I'll try, but first, I'll say this – as general guidance based on my experience:  I don't recommend sobriety for everyone.  When used in moderation, some intoxicants can be beneficial, especially – from my perspective – in providing a different angle by which to view perplexing issues. But, for those of you who do embrace sobriety, I hope its effects are as positively profound for you as they have been for me.</p>
            <p>Here is how I describe the feeling of sobriety.  First of all, I have astonishing clarity.  This intuitively makes sense. I take literally no medications, rely on zero intoxicants, and eat a plant-based and mostly whole-food diet. So, it follows – in a practical sense – that I should have no artificial influences impacting my cognitive ability.  And, mentally, I feel as if this is exactly the case.</p>
            <p>When I was a heavy drinker, I was still able to perform well professionally, so I was literally ignorant to the feeling that I have now.  Since I was being rewarded for my career success, I thought that my aptitude then was my maximum potential.  Since embracing sobriety, I have discovered how wrong I was.  The additional benefit to this discovery is that it causes me to appreciate every single day.  Knowing how I feel now compared to how I felt then, I have this daily sense each morning that I've been provided the opportunity to make the most of the given day. So, though things don't always go perfectly, the authenticity of my appreciation and gratitude allows me to compartmentalize the up's and down's such that I'm always generally happy.  Because I know I'm putting my absolutely best self forward to tackle all of life's challenges.</p>";

        public static BlogClass blog = new BlogClass(id, blogTitle, publishDate, blogContent, blogContentPart2, blogContentPart3, blogContentPart4, blogLink);
    }
}
