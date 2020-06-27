function getNumber(num){
   console.log(num);
   var resut=document.getElementById("result");
   result.value+=num;

}
   function clearresult(){
      var result=document.getElementById("result");
      result.value="";
   }
   function getresult(){
      var result=document.getElementById("result");
     
      result.value= eval(result.value)
      

   }
