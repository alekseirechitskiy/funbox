export default function cardFunctionality() {
  const cardsList = document.querySelectorAll('.card__inner');
  const buttonsList = document.querySelectorAll('.card__button');

  for (let i = 0; i < cardsList.length; i++) {
    cardsList[i].addEventListener('click', () => {
      if (!cardsList[i].closest('.card').classList.contains('card--disabled')) {
        cardsList[i].closest('.card').classList.toggle('card--chosen');
        cardsList[i].closest('.card').classList.add('first-choise-click');
        cardsList[i].closest('.card').addEventListener('mouseleave', function () {
          cardsList[i].closest('.card').classList.remove('first-choise-click');
        });
      }
    });
  }

  for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].addEventListener('click', () => {
      buttonsList[i].closest('.card').classList.toggle('card--chosen');
    });
  }
}
