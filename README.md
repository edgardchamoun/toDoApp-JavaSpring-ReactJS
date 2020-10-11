# toDoApp-JavaSpring-ReactJS

An example built for educational purpose in which we can create and manage todo list.
<br/>
<h2>Development Components</h2>
<hr/>
<ul>
  <li>Java Spring Boot as Backend Framework</li>
  <li>ReactJS as Frontend Library</li>
  <li>H2 Database as In Memory Persistence</li>
  <li>JWT as Token Authentication</li> 
</ul>
<br/>
<br/>
<h2>Main Concept</h2>
<hr/>
<p>As frontend cycle, ReactJS will consume all the created REST APIs which were built using Java SpringBoot. <br/> 
As backend cycle, 2 sets of REST APIs are created (ToDo management APIs and Authentication APIs for JWT).<br/>
As database, ToDo management REST APIs are responsible of maintaining all CRUD actions on the H2 Database which is used as In Memory Persistence DB (Data not persisted on disk).<br/>
As authentication, JWT is used to validate the user upon calling any request from frontend to backend. </p>
