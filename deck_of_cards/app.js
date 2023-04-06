deck_url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

$new_card_button = $('#new_card_button');
$new_card_form = $('#new_card_form');
$res =  $('#res');
let deck_id = '';

async function getDeck() {
    axios.get(deck_url).then(res => {
        console.log(res.data);
        deck_id = res.data.deck_id;
        console.log(deck_id);
    })
    .catch(err => {
        console.log(err);
    });
}
   
getDeck();


$new_card_form.submit(function(e) {
    e.preventDefault();
    console.log(deck_id);
    let card_url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
    axios.get(card_url).then(res => {
        console.log(res.data);
        let card = res.data.cards[0];
        console.log(card);
        let card_img = card.image;
        console.log(card_img);
        let card_code = card.code;
        console.log(card_code);
        let card_suit = card.suit;
        console.log(card_suit);
        let card_value = card.value;
        console.log(card_value);
        $res.append(`<img src="${card_img}" alt="${card_code}" width="80">`);
    })
    .catch(err => {
        console.log(err);
    });
});







$res = $('#res');


