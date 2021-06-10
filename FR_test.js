var http = require('http');
var server = http.createServer();
var port = 3235;
server.listen(port);
console.log('Server running!\nport:' + port);
const { PythonShell } = require('python-shell');

var options = {
	mode: 'text',
	pythonPath: "C:\\Users\\diddn\\anaconda3\\envs\\fr\\python.exe",
	pythonOptions: ['-u'],
	scriptPath: ''
};

// 요청 처리
server.on('request', function (req, res){
	PythonShell.run('FR_Exam.py', options, function(err, result) {
		if(err) throw err;
	
		console.log(result);
	});
});
