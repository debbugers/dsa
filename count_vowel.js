let vowel = ["a","e","i","o","u"];
let s = "aman";
let count = 0;

for(i=s.length-1; i>=0; i--){
    for(j=0; j<vowel.length; j++){
        if(s[i]===vowel[j]){
            count++;
        }
    }
}
console.log(count);
