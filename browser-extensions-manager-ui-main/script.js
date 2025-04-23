//     {
//     "logo": "./assets/images/logo-devlens.svg",
//     "name": "DevLens",
//     "description": "Quickly inspect page layouts and visualize element boundaries.",
//     "isActive": true
// }

async function getCards() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching JSON: ', error);
  }
}
/*<div class="card">
          <div class="description">
            <img src="" alt="">
            <div class="text">
              <h3>DevLens</h3>
              <p>Quickly inspect page layouts and visualize element boundaries</p>
            </div>
            <div class="action-btns">
              <button class="remove">Remove</button>
              <input type="checkbox" name="" id="check">
            </div>
          </div>
        </div>*/
const card_container = document.querySelector('.extensions-cards');

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

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('check');
    action_btns.appendChild(input);

    ext_card.appendChild(description);
    ext_card.appendChild(action_btns);

    card_container.append(ext_card);
  });
});
