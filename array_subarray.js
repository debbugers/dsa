var arr = [2,2,6,7,3,3,2,5,6,5,6,7,7,4,4];
var arr2 = arr.sort();
var count = arr2.length;
var temp = [];
var array = [];
var mainarray = [];
var ischeck = true;
while(count>0){
 temp = [];
 array = [];
    for(i=0; i<arr2.length; i++){
        if(arr2[i] == arr2[i+1]){
            temp.push(arr2[i]);
        }else{
            array.push(arr2[i]);
        }
    }
    mainarray.push(array);
    arr2 = temp;
    count = arr2.length;
}
console.log(mainarray);