function getDr(){
    var i=0;
    for(i=0;i<4;i++){
        console.log("sn"+1);
        var san="san"+i;
        var rf="rf"+i;
       var particular= "particular"+i;
       var dr="dr"+i;
       var ta="ta"+i;
        var getvalue=document.getElementById(dr);
    if(getvalue.value!=0 ){
       
        var col1=document.getElementById(san).value; 
        var col2=document.getElementById(rf).value; 
        var col3=document.getElementById(particular).value; 
        var col4=document.getElementById(dr).value;  
        var col5=document.getElementById(cr).value;
        var col6=document.getElementById(ta).value;  
       console,console.log(col1,col2,col3,col4,col5,col6);
    }
    }
}