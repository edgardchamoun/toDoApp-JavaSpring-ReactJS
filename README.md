# toDoApp-JavaSpring-ReactJS

An example built for educational purpose in which we can create and manage todo list.
<br/>
<h1>Development Components</h1>
<ul>
  <li>Java Spring Boot as Backend Framework</li>
  <li>ReactJS as Frontend Library</li>
  <li>H2 Database as In Memory Persistence</li>
  <li>JWT as Token Authentication</li> 
</ul>
<br/>
<h1>Main Concept</h1>
<p>As frontend cycle, ReactJS will consume all the created REST APIs which were built using Java SpringBoot. <br/> 
As backend cycle, 2 sets of REST APIs are created (ToDo management APIs and Authentication APIs for JWT).<br/>
As database, ToDo management REST APIs are responsible of maintaining all CRUD actions on the H2 Database which is used as In Memory Persistence DB (Data not persisted on disk).<br/>
As authentication, JWT is used to validate the user upon calling any request from frontend to backend. </p>
<br/>
<h1>Installation</h1>
<h2>Requirements</h2>
<p>Make sure you have an IDE for Java installed.<br/>
Make sure you have installed Node >= v10.19.0 and npm >= 6.14.8 for a better compatibility.</p>
<h2>Setup on machine</h2>
<ol>
  <li>From terminal, checkout the project to your machine: <b>git clone https://github.com/edgardchamoun/toDoApp-JavaSpring-ReactJS.git</b></li>
  <li>Access to project folder: <b>cd toDoApp-JavaSpring-ReactJS/</b></li>
  <li>Open your Java IDE and import the project name "toDoApp-Backend" as a Maven Project</li>
  <li>Start the backend. Go to src/main/java/com/ToDoApp/toDoApp/ToDoAppApplication.java and right click -> Java Application</li>
  <li>From terminal, go to ReactJS project with folder name "todo-app" and download all modules: <b>npm install</b></li>
  <li>Launch ReactJS application: <b>npm start</b></li>
  <li>Login credentials (username: testing, password: 123)</li>
</ol>
