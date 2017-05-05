var WebSocketServer = require('ws').Server, 
    wss = new WebSocketServer({port: 8080});

var taskType = [
    '{"time":"", "task":"Sample Task", "type":"assignTask", "linkText":"View Assigned Task>"}',
    '{"time":"", "task":"Sample Notification ", "type":"notifications","linkText":"View Notification>"}',
    '{"time":"", "task":"Sample Reminder", "type":"reminder", "linkText":"View Reminder>"}'
];

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message); 
         ws.send(getTaskJson());
    });    
    ws.send(getTaskJson());
});

function getTaskJson(){
    var val = Math.floor(Math.random() * 3);
    var item = taskType[val];
    return item;
}