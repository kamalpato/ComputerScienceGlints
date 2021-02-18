function designerPdfViewer(h, word) {

    let letters = "abcdefghijklmnopqrstuvwxyz";
    let letterHeight = [];

    for (let i = 0; i < word.length; i++) {
        letterHeight.push(h[letters.indexOf(word[i])]);
    }

    let tallest = letterHeight.sort()[letterHeight.length - 1];

    return tallest * word.length;

}

console.log(designerPdfViewer([1,2,3,4,5,6,7,1,3,5,2,6,1,2,3,4,5,7,7,4,3,2,1,2,6,6], 'lita'))