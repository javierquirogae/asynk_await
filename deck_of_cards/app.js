const deck_url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

const $new_card_form = $('#new_card_form');
const $res =  $('#res');
let deck_id = '';

async function getDeck() {
  try {
    const res = await axios.get(deck_url);
    deck_id = res.data.deck_id;
  } catch (err) {
    console.log(err);
  }
}
   
getDeck();

$new_card_form.submit(async function(e) {
  e.preventDefault();
  const card_url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
  try {
    const res = await axios.get(card_url);
    const card = res.data.cards[0];
    $res.append(`<img src="${card.image}" alt="${card.code}" width="80">`);
  } catch (err) {
    console.log(err);
  }
});
