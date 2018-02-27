function permutations(string) {
    let permutations = [];
    
    for(let i = 0; i< string.length;i++) {   
        
        for(let j=0; j<string.length;j++)
        {
            let arr = string.split("");
            let initialElement = arr[i];
            arr[i] = arr[j];
            arr[j] = initialElement;
            let str = arr.join("");
            if(!permutations.includes(arr.join(""))){
                console.log(arr.join(""));
                permutations.push(arr.join(""));
            }
            
        }
    }
    return permutations;
   }
console.log(permutations('abc'));
// 'abc','acb''bac','bca','cab','cba'