
# [BoGoodSki.com](http://bogoodski.com "BoGoodSki.com")



<h2>Update</h2>

<p><b>July 8, 2019:</b></p>

<p>Working on a guestbook feature on the "guestbook" branch.  The backend is already set up with a basic .NET Core Web API controller with CRUD functions connected to a MongoDB instance on mLab.  The frontend is a work-in-progress.  See gif below.</p>  

<p align="center">
	<img src="http://g.recordit.co/QTcOnffD50.gif" alt="Guestbook feature UI">
</p>

<p>Gif also available <a href="http://g.recordit.co/QTcOnffD50.gif" target="_blank" rel="noreferrer noopener">HERE<a>.</p>













<h4>Everything below is historical in nature (as of July 8, 2019):</h4>

<p><i>May 31, 2019:</i></p>

<p>Now, I have the UI in place to allow the functionality of uploading the Run Archive from my mobile device.  ReactJS to .NET Web API (via fetch) to MongoDB (via mLab). See gif:</p>

<p align="center">
	<img src="http://g.recordit.co/11WSL3BzTB.gif" alt="React to Dot Net to MongoDB">
</p>

<p>Gif also available <a href="http://g.recordit.co/11WSL3BzTB.gif" target="_blank" rel="noreferrer noopener">HERE<a>.</p>



<p><i>May 29, 2019:</i></p>

<p>The goal is to allow for adding data to the run log archive from my mobile devices.  Currently the run log data is (are?) stored in a list in the .NET solution.  I'm going to move the data to a MongoDB instance. Today, on the <i>dbsetup</i> branch, I set up the instance on mLab and connected it to the .NET solution.  See gif:</p>





<p><i>May 27, 2019:</i></p>

<p>On the <b>tictactoe</b> branch, I'm working on a ... tic-tac-toe game.</p>
<p align="center">
	<img src="http://g.recordit.co/mutnfF18oH.gif" alt="tic tac toe">
</p>

<p>Gif also available <a href="http://g.recordit.co/mutnfF18oH.gif" target="_blank" rel="noreferrer noopener">HERE<a>.</p>
<p><b>Next Steps:</b></p>
<ol>
<li>Give the computer player a graphical likeness.</li>
<li>Make the computer player more strategic.</li>
<li>Refactor: eliminate redundant code, make more efficient, add better error handling, implement tests.</li>
</ol>


<p><i>May 23, 2019:</i></p>

<ul>
<li>Added a new blog post.</li>
<li>Working on adding functionlity to submit run archive data from any device</li>
</ul>
<p align="center">
	<img src="http://g.recordit.co/zjzuE2lsyy.gif" alt="Controller Code">
</p>
<p>Gif available here: <a href="http://g.recordit.co/zjzuE2lsyy.gif" target="_blank" rel="noreferrer noopener">http://g.recordit.co/zjzuE2lsyy.gif</a>.</p>
<p><i>TODO: Gonna have to spin up a document DB to make that list persist.</i></p>


<p><i>May 22, 2019:</i></p>

<p>Created an archive for the run log to collect historical running data.  The data is maintained serve-side and delivered via a .NET Web API controller.  In the React app, it (or, well, "they"; I guess "data" is plural, right?) is consumed by a fetch() call.</p>
<p>Currently, in order to add run data to the archive, I have to enter the data into the source code.  Obviously, this is not the prefered course of action.  So, in time, I will update the functionality.  The code is currently set so that I can upload the image for the current run from any device. I have a simple little password-protected upload page for that.  I'm going to create the same functionality for adding historical runs to the archive.  Just not today - because I have something else that I'm about to begin.</p>
<p>The runlog is located <a href="https://bogoodski2019.azurewebsites.net/runlog" rel="noopener noreferrer" target="_blank">HERE</a>.</p>







This is what is currently being built on the chat branch (using SignalR), as of Mar. 11, 2019:







![Imgur](https://i.imgur.com/0ov78tf.gif)






If embedded gif is too long for GitHub, but you can view it here: 





[Currently in Progress Mar. 11, 2019](https://i.imgur.com/0ov78tf.gif)







![Currently in Progress Mar. 6 2019](https://i.imgur.com/bXdU92y.jpg)



![Currently in Progress Mar. 6 2019](https://i.imgur.com/j1pxvIU.jpg)




![Currently in Progress Mar. 6 2019](https://i.imgur.com/U43fgAK.jpg)






**Day One**

![Layout Day One](https://media.giphy.com/media/1fgkWNXzRELdUOW6oG/giphy.gif "Layout - Day One")
