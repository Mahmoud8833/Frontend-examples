//  Toggle light and dark modes
const toggle_button = document.querySelector('.toggle-mode');
console.log(toggle_button);

toggle_button.addEventListener('click', () => {
  //toggle here
});

// A function to fetch data from Data.json
async function getCards() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching JSON: ', error);
  }
}

// Grapping the root element for the cards
const card_container = document.querySelector('.extensions-cards');

// Using the data from the function to creat the cards

getCards().then((cards) => {
  cards.forEach((card) => {
    const ext_card = document.createElement('div');
    ext_card.classList.add('card');

    const description = document.createElement('div');
    description.classList.add('description');

    const image = document.createElement('img');
    image.src = card.logo;
    image.alt = `${card.name} logo`;
    description.appendChild(image);

    const text = document.createElement('div');
    text.classList.add('text');

    const h3 = document.createElement('h3');
    h3.innerText = card.name;
    text.appendChild(h3);

    const p = document.createElement('p');
    p.innerText = card.description;
    text.appendChild(p);
    description.appendChild(text);

    const action_btns = document.createElement('div');
    action_btns.classList.add('action-btns');

    const button = document.createElement('button');
    button.classList.add('remove');
    button.innerText = 'Remove';
    action_btns.appendChild(button);

    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('check');
    input.setAttribute('name', 'active');

    const span = document.createElement('span');
    span.classList.add('slider');
    label.appendChild(input);
    label.appendChild(span);
    action_btns.appendChild(label);

    ext_card.appendChild(description);
    ext_card.appendChild(action_btns);

    card_container.append(ext_card);
  });
});
