var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var n = [1,13,1,14];
var name = "";

for (i=0; i<n.length; i++){
    name+=arr[n[i]-1];
}
console.log(name);
