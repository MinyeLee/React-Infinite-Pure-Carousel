# React-Infinite-Pure-Banner
The below shows How I solve the problem. I describe it in 2 (Task, Solution) or 3 (Task, Problems, Solution) steps. 
<h3>Scripts</h3>
git clone && npm install && npm run start</br></br>
<hr/>
<h3>1. Infinite Scroll Loop Carousel</h3></hr>
<h4>&emsp;How to make the first slide appear again after the last slide?</h4>
<ul>  
<li>&emsp;<strong>Reordering arrays</strong> : Set the ‘order’ to the elements inside the array ‘Company_RC’ and Identify which items have changed. Use this ‘order’ for Keys.<br/><br/>
<img src="https://user-images.githubusercontent.com/6896920/61291280-0f842000-a809-11e9-9537-cd8d7623d287.png" height="400px"></img>

</li></br>
<li>&emsp;<strong>Animation</strong> : Only shows part of Carousel<br/><br/>
<img src="https://user-images.githubusercontent.com/6896920/61291468-8de0c200-a809-11e9-9d08-a080f401bc24.png" height="150px"></img><br/>

<img src="https://user-images.githubusercontent.com/6896920/61291541-b9fc4300-a809-11e9-87ee-1362afa50592.png" height="140px"></img>
</li></br></br>
<li>&emsp;<strong>Reference</strong>  : </br></br>
&emsp;&emsp;<a target="_blank" href="https://github.com/express-labs/pure-react-carousel/issues/60">GitHub-React Infinite Loop Issue</a></br>
&emsp;&emsp;<a target="_blank" href="https://codepen.io/MattPeck/pen/pZbWjN?editors=0010">CodePen-Carousel Fundamentals React</a>
</li>
</ul>

<h4>&emsp;How to stop slides while MouseOver?</h4></br>
<ul>
<li>&emsp;<strong>Mouse Over Event</strong> : Detect mouse over event by onMouseOut() function, change class Name, and apply css ‘animation-play-state’ property as paused.

<img src="https://user-images.githubusercontent.com/6896920/61291612-f2038600-a809-11e9-9524-8a75d17383e1.png" height="30px"></img><br/><br/>
<img src="https://user-images.githubusercontent.com/6896920/61291682-25461500-a80a-11e9-9e46-b7b02f5fc37b.png" height="60px"></img>
</li></br>
</ul>
<h4>&emsp;How to allow sliding to finish animation when using stop?</h4></br>
<ul>
<li>&emsp;<strong>Change animation</strong> : Set animation fill-mode as forwards, iteration-count as 1, not infinite.<br/><br/>
<img src="https://user-images.githubusercontent.com/6896920/61291800-7a822680-a80a-11e9-9406-5dadac6a2560.png" height="200px"></img>
</li>
<li>&emsp;<strong>Reference </strong>  : </br></br>
&emsp;&emsp;<a target="_blank" href="https://stackoverflow.com/questions/25314215/how-to-allow-slidedown-and-slideup-to-finish-animation-when-using-stop">StackOverflow</a></li>
</ul>
<hr/>
<h3>2. Next/Prev Control Buttons</h3>
<h4>&emsp;How to make the first slide appear again after the last slide?</h4></br>
<ul>
	<li>&emsp;<strong>Reordering arrays</strong> : Same as above </li>
</ul>
<hr/>
<h3>3. Stop on Mouse Focus</h3>
<h4>&emsp;Same as above</h4>
<hr/>
<h3>4. Mobile Swipe Touch Slider</h3>
<ul><li>&emsp;<strong>Swipe Event</strong> : Detect Swipe event by onMouseDown() -> onMouseMove() -> onMouseLeave() , change class Name, and apply css property as paused. And detect direction in onMouseMove(). For cross-platform compatibility, onTouchStart() -> onTouchMove() ->onTouchEnd().</li>		
<li>&emsp;<strong>Reference  </strong>:</br></br>
&emsp;&emsp;<a target="_blank" href="https://codepen.io/swingthing/pen/ZBGBJb/">Codepen - Swipe to remove the item</a></li>
</ul>
<hr/>
<h3>5. Data Fetching</h3>
<h4>&emsp;How to enable CORS(Cross Origin Resource Sharing)?</h4></br>
<ul>
<li>&emsp;<strong>Change mode</strong> : Implement fetch api in componentDidMount() and Set the mode as ‘no-cors’, however it doesn’t occur CORS error but, doesn’t send the data.<br/><br/>
<img src="https://user-images.githubusercontent.com/6896920/61291799-7a822680-a80a-11e9-98b8-147c0db2a277.png" height="250px"></img></li>		
</ul>
