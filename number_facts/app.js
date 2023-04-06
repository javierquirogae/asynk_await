const $res = $('#res');
const $res1 = $('#res1');
const $res2 = $('#res2');

const $form1 = $('#form1');
const $form2 = $('#form2');

$res.append('<h3>Get cool facts about your favorite numbers !!</h3>');

$form1.submit(async function(e) {
    e.preventDefault();
    let num = 0;
    $res1.empty();
    num = $('#number').val();
    console.log(num);
    await getFourFacts(num);
});

async function getFourFacts(num) {
    let fourPromises = [];
    let url = '';
    for (let i = 0; i < 4; i++) {
        url = `http://numbersapi.com/${num}?json`;
        fourPromises.push(axios.get(url));
        console.log(url);
    }
    try {
        const facts = await Promise.all(fourPromises);
        facts.forEach(res => {
            $res1.append(`<h3 style="color:blue;">${res.data.text}</h3>`);
        });
    } catch (err) {
        $res1.append(`<p style="color:red;"><b>${err}</b></p>`);
    }
}

$form2.submit(async function(e) {
    e.preventDefault();
    let choices = [];
    $res2.empty();
    choices.push($('#number1').val());
    choices.push($('#number2').val());
    choices.push($('#number3').val());
    console.log(choices);
    await getThreeFacts(choices);
});

async function getThreeFacts(nums) {
    let threePromises = [];
    let url = '';
    for (let i = 0; i < 3; i++) {
        url = `http://numbersapi.com/${nums[i]}?json`;
        threePromises.push(axios.get(url));
        console.log(url);
    }
    try {
        const facts = await Promise.all(threePromises);
        facts.forEach(res => {
            $res2.append(`<h3 style="color:blue;">${res.data.text}</h3>`);
        });
    } catch (err) {
        $res2.append(`<p style="color:red;"><b>${err}</b></p>`);
    }
}
