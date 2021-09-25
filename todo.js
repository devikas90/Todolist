
var unCheck = 0;


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200 ){
      var res = JSON.parse(this.responseText)
        var output = "<tr><th>USER ID</th><th>ID</th><th>TITLE</th><th>COMPLETED</th></tr>"
        for(i=0;i<res.length;i++){
         
            output += "<tr>";
            output += "<td >" +res[i].userId+ "</td>"
            output += "<td>" +res[i].id+ "</td>"
            output += "<td>" +res[i].title+ "</td>"
            //check box
            if(res[i].completed == true){
                output += `<th><input type="checkbox" checked disabled  onChange = "check()"></th>`;
            }
            else{
                console.log(output)
                output += `<th><input type="checkbox" id="checkbox${unCheck}" oninput = "check()"></th>`;
                unCheck += 1
            }
            console.log(output)
            output += "</tr>"

        }
     
     /*  document.getElementById("progress").setAttribute("hidden",true)*/
     console.log(output);
       document.getElementById("tbdata").innerHTML = output;
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true)
xhttp.send();


function check(){
    var checkValid =new Promise(function(resolve,reject){
        var Count = 0;
       // loop through all check box and count checked
       for(var i=0;i<unCheck;i++){
           if((document.getElementById("checkbox" +i)).checked == true){
        Count += 1;
           }
       }
    //when 5 checkbox is checked alert msg
       if(Count == 5 ){
           resolve();
       }
    });
       checkValid.then(function(){
    
            alert( " Congrats😃😃😃 5 Tasks have been Successfully Completed 👍👍👍");
        
     });
 }
  
   
