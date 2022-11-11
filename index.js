const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for(let i =0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

wrapGifts(gifts);

function writeCards(names, event){
    let newArray = [];
    for( let i = 0; i < names.length; i++){
        let name = names[i];
        let message = `Thank you, ${name}, for the wonderful ${event} gift!`;
        newArray.push(message);
    }
    return newArray;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(i){
    while(i >= 0){
        console.log(i);
        i--;
    }
}
countDown();