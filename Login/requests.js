var http = require('http'); // #1 'htt' instead of 'http'

var myname = function(){ // #2 Function spelled wrong
    const ipString = "Here is my IP address:";
    return ipString; // #3 return a string variable with the message
}

async function callHttpbin() { //#4 function name spelled incorrect. "callHttpbi" / #5 Async function to run promise.
    let promise = new Promise((resolve, reject) => {
        http.get(
         'http://httpbin.org/ip',
         function(response) {
          var str="";
          response.setEncoding('utf8');
          response.on('data', function(data){
          str += data;
          
         });
         response.on('end', function() {
          var result = JSON.parse(str);
          myips = result.origin;
          resolve(myips) // #6 passing variable to resolve
        });
        });
    });

    let result = await promise;
    return result; // #7 return results
}
async function executeAsyncTask(){ // #8 Async to run await function
    const valueA = await callHttpbin() 
    const valueB = myname();
    console.log(valueB+" "+valueA)
} // #9 missing closing curly bracket

executeAsyncTask() // #10 call the function to run the program