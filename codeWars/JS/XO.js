function XO(str) {
    //code here
    let quantity = 0;
    for (let i = 0; i < str.length; i++) {
        element = str.charAt(i);
        if (element == 'X' || element == 'x') {
            quantity++;
        }
        else if (element == 'o' || element == 'O') {
            quantity--;
        }
    
    }
    
    if (quantity == 0) {
        return true;
    }
    else return false;
}