function boxBlur(image) {
    const result = [];
    
    for(let i = 1; i < image.length-1; i++) {
        result.push([]);
        for(let j = 1; j < image[0].length-1; j++) {
            result[i-1].push(calculateBlurredPixel(image,i,j));
        }
    }

    return result;
}

function calculateBlurredPixel(image, row, column) {
    let total = 0;
    for(let i = -1; i < 2; i++) {
        for(let j = -1; j < 2; j++) {
            
            total += image[row + i][column + j];
        }
    }
    return Math.floor(total/9);
}

console.log(boxBlur(
    [
    [1,1,1], 
    [1,7,1], 
    [1,1,1]]));