export function newGameDeck() {
    return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,3S,4S,5S,6S,7S,JS,QS,KS,AD,2D,3D,4D,5D,6D,7D,JD,QD,KD,AC,2C,3C,4C,5C,6C,7C,JC,QC,KC,AH,2H,3H,4H,5H,6H,7H,JH,QH,KH').then(res => res.json());
}

export function drawCardsP1(deckid) {
    try{
        return fetch('https://deckofcardsapi.com/api/deck/' + deckid + '/draw/?count=3', {
            retries: 4,
            retryDelay: 1500,
            // mode: "no-cors"
        }).then(res => res.json());
    } catch(error) {console.log('woohoo')}
}

export function drawCardsP2(deckid) {
    try{
        return fetch('https://deckofcardsapi.com/api/deck/' + deckid + '/draw/?count=3', {
            retries: 4,
            retryDelay: 1500,
            // mode: "no-cors"
        }).then(res => res.json());
    } catch(error) {console.log(error)}
}

export function drawCommonCards(deckid) {
    try{
        return fetch('https://deckofcardsapi.com/api/deck/' + deckid + '/draw/?count=4').then(res => res.json());
    } catch(error) {console.log(error)}
}

export function addToPile1(deckid, cards) {
    try{
        return fetch(`https://deckofcardsapi.com/api/deck/${deckid}/pile/pile1/add/?cards=${cards}`).then(res => res.json());
    } catch(error) {console.log(error)}
}

export function addToPile2(deckid, cards) {
    try{
        return fetch(`https://deckofcardsapi.com/api/deck/${deckid}/pile/pile2/add/?cards=${cards}`).then(res => res.json());
    } catch(error) {console.log(error)}
}