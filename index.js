const init = document.querySelector("#btn")
const container1 = document.querySelector("#container1")
const id = 0

btn.addEventListener("click", function(){
    start()
})

async function start(){
    const data = await getId()
    const id = data.deck_id
    const promise1 = await shuffle(id)
    const promise2 = await shuffle(id)
    const promise3 = await shuffle(id)
    const promise4 = await shuffle(id)
    const promise5 = await shuffle(id)

    Promise.all([promise1, promise2, promise3, promise4, promise5]).then((response) => {
        for(i=0; i<=4; i++){
            container1.innerHTML += `<img id=cards src='${response[i].cards[0].image}'}>`
        }
        console.log(response[1].cards[0].image)
        console.log(response);
    });
}

async function getId(){
    let response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    if (response.status === 200){
        let data = await response.json();
        return data
    }
}

async function shuffle (deckid){
    let response = await fetch(`https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=1`);
    if (response.status === 200){
        let data = await response.json();
        return data
    }
}