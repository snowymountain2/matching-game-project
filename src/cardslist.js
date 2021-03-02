export function generatecardlist(number, thing) {

    const thelistofcards = [{
        item: 0
    }, {
        item: 1,
        image: './images/Bob.jpg',
        value: 'bob'
    }];

    return thelistofcards[number].thing;
}