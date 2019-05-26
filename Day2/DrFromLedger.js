var index=1;
var obj = JSON.parse(localStorage.getItem('myStorage'));
var temp=[];

for(j=0;j<=6;j++){
    if(obj[j]!=null){
        temp[index]=obj[j];
        index++;
     
    }
}
console.log(temp[1].sn);

for (i = 1; i <5; i++) {
    if(temp[i]!=null){

    document.getElementById("sn"+ i).value = temp[i].sn;
    document.getElementById("rf"+ i).value =temp[i].rf;
    document.getElementById("particular"+ i).value = temp[i].particular;
    document.getElementById("dr"+ i).value = temp[i].dr;
    document.getElementById("ta"+ i).value = temp[i].ta;
   
    } 
}