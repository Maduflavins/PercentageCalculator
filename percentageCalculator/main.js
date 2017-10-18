var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField1");
var resultField = document.getElementById("resultField");
var form = document.getElementById("xIsWhatPercentOfY");



form.addEventListener("submit", function(event){
    if(!numField1.value || !numField2.value){
        alert("please enter values in both fields");
    }else{
        var x = Number(numField1.value);
        var y = Number(numField2.value);

        var result = x/y;
        var percent = result *  100;
        
        

        resultField.innerText = "Answer: " + percent + "%";
        event.preventDefault();

    }
  

});