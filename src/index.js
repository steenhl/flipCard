import InitReady from "./initReady";

class TurnCard {
  constructor(wrapperClass, cardClass) {
    this.cardCntainer = document.querySelectorAll(wrapperClass);
    this.cardClass = cardClass;

    this.cardCntainer.forEach((wrapper) => {
      const allCards = wrapper.querySelectorAll(this.cardClass),
        obj = {
          cards: allCards,
          isFlipped: "isFlipped"
        };
      this.turn(obj);
    });
  }
  turn(obj) {
    obj.cards.forEach((elm) => {
      elm.addEventListener("click", function () {
        // the clicked card is not flipped
        if (!elm.classList.contains(obj.isFlipped)) {
          // turn all card back
          turnBack(obj.cards);
          setTimeout(function () {
            // flip active card
            elm.classList.add(obj.isFlipped);
          }, 300);
        }
      });
    });
    function turnBack(cards) {
      cards.forEach((elm) => {
        elm.classList.remove(obj.isFlipped);
      });
    }
    function test() {}
  }
}
let init = new InitReady();
init.ready(function () {
  new TurnCard(".card-container", ".card");
});
