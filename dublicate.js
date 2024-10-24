var arr = [2,6,9,8,4,2,3,5,6,8,9,6,4,5,4,1];
var dub = [];
var sarr = arr.sort();
for(i=0; i<sarr.length; i++){
    if(sarr[i] == sarr[i+1] && sarr[i+1]!=sarr[i+2]){
       dub.push(sarr[i]);
    }
}
console.log(dub);
