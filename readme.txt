
Server :\notification-server

	Run these commands : 
	1. to install the dependency (Only first time)  :   npm install
	2. to start the server (Every time when you want to start the server) :  node server.js
	3. Server url :
	http://localhost:8080/


Client : \notification-app
	Run these commands : 
	1. to install node dependency (Only first time)  :   npm install
	2. to install bower dependency (Only first time)  :   bower install
	2. to start the grunt server (Every time when you want to start the server) :  grunt serve
	3. Server url :
	http://localhost:8088/
	
	
	
Description : Server will listen the the port 8088 and send the task type when requested.
Client will make the connetion to the port 8080 and request task type in fixed intervel (2000 ms).
