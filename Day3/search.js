
 var it=[1,2,3,4,5,1,6,7,8,9,1,10];
function search(item){
    var index=[];
    j=0;
    for(i=0;i<it.length;i++){
        if(item===it[i]){
            index[j]=i;
            j++;
           }
    }
    return index;
}
function remove(index){
    j=0;
    for(i=0;i<index.length;i++){
        it.splice(index[i]-j,1);   
        j++;
    }
}

console.log(it);
var n = search(1);
if (n.length!=0){
remove(n);
console.log(it);
}else{
    console.log("not found");
}

