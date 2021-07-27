export function newGameDeck() {
    return fetch('http://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,3S,4S,5S,6S,7S,JS,QS,KS,AD,2D,3D,4D,5D,6D,7D,JD,QD,KD,AC,2C,3C,4C,5C,6C,7C,JC,QC,KC,AH,2H,3H,4H,5H,6H,7H,JH,QH,KH').then(res => res.json());
}

export function drawCardsP1(deckid) {
    try{
        return fetch('http://deckofcardsapi.com/api/deck/' + deckid + '/draw/?count=3').then(res => res.json());
    } catch(error) {console.log(error)}
}

export function drawCardsP2(deckid) {
    try{
        return fetch('http://deckofcardsapi.com/api/deck/' + deckid + '/draw/?count=3').then(res => res.json());
    } catch(error) {console.log(error)}
}