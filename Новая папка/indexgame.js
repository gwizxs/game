
let columns = 2;
const game = document.getElementById("game")

let cardsCount = Number(prompt("введите количество пар", 2))
startGame(game, cardsCount)


function startGame(game, cardsCount) {

    const cardsNumberArray = [];

    let firstCard = null;
    let secondCard = null;

    // создание массива чисел
    for (let i = 1; i <= cardsCount; i++) {
        cardsNumberArray.push(i, i);
    }

    // мешаем 
    for (let i = 0; i < cardsNumberArray.length; i++) {
        let randomIndex = Math.floor(Math.random() * cardsNumberArray.length);

        let temp = cardsNumberArray[i];
        cardsNumberArray[i] = cardsNumberArray[randomIndex];
        cardsNumberArray[randomIndex] = temp;
    }

    // настрока карт 
    let columns = 8;

    if (cardsCount === 3) {
        columns = 3;
    }
    if (cardsCount === 4) {
        columns = 4;
    }
    if (cardsCount === 5) {
        columns = 5;
    }
    if (cardsCount === 6) {
        columns = 4;
    }
    if (cardsCount === 7) {
        columns = 7;
    }
    if (cardsCount === 8) {
        columns = 4;
    }
    if (cardsCount === 10) {
        columns = 5;
    }
    if (cardsCount === 9) {
        columns = 6;
    }
    if (cardsCount === 12) {
        columns = 6;
    }
    if (cardsCount === 11) {
        columns = 5;
    }
    if (cardsCount === 13) {
        columns = 6;
    }
    if (cardsCount === 14) {
        columns = 6;
    }
    if (cardsCount === 15) {
        columns = 6;
    }
    if (cardsCount === 16) {
        columns = 8;
    }
    if (cardsCount === 17) {
        columns = 8;
    }
    if (cardsCount === 18) {
        columns = 8;
    }
  if (cardsCount === 19) {
        columns = 8;
    }
      if (cardsCount === 20) {
        columns = 8;
    }
    

    game.style = `grid-template-columns: repeat(${columns}, 1fr)`;

    // создание карточек 
    for (const cardNumber of cardsNumberArray) {
        let card = document.createElement("div");
        card.textContent = cardNumber;
        card.classList.add("card");

        // клик
        card.addEventListener("click", function () {


            if (card.classList.contains("open") || card.classList.contains("success")) {

                return;
            }


            if (firstCard !== null && secondCard !== null) {
                firstCard.classList.remove("open");
                secondCard.classList.remove("open");
                firstCard = null;
                secondCard = null;
            }


            card.classList.add("open");
            console.log("карточка по которой произошел клик", card);

            if (firstCard === null) {
                firstCard = card;
            } else {
                secondCard = card;
            }

            if (firstCard !== null && secondCard !== null) {
                let firstCardNumber = firstCard.textContent;
                let secondCardNumber = secondCard.textContent;


                if (firstCardNumber === secondCardNumber) {
                    firstCard.classList.add("success");
                    secondCard.classList.add("success");

                }
            }

            if (cardsNumberArray.length === document.querySelectorAll(".success").length) {

                setTimeout(function () {
                    game.innerHTML = " ";
                    alert("ПОБЕДА");
                    let cardsCount = Number(prompt("введите количество пар", 2));
                    startGame(game, cardsCount);
                }, 400);

            }
        });

        game.append(card);
    }
}
