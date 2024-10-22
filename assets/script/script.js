const arr = [
  {
    "name": "Бетмен",
    "universe": "DC Comics",
    "alterego": "Брюс Уэйн",
    "occupation": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгерл",
    "superpowers": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "url": "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg",
    "info": "По популярности человек-летучая мышь может сравниться только с Суперменом...",
    "rating": null
  },
  {
    "name": "Железный человек",
    "universe": "Marvel Comics",
    "alterego": "Тони Старк",
    "occupation": "гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "superpowers": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "url": "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg",
    "info": "Пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже. Прототипом для героя послужили Илон Маск и изобретатель Говард Хьюз. Железный Человек не всегда ходил в красном модном костюме: в своих первых версиях 1963 года он был скромного серого цвета. Увы, в киновоплощении бронекостюм даже не из металла — его делали из пластика и стекловолокна."
  }
];

const createCard = (obj) => {
  const div = document.createElement("div");
  div.classList.add = "card";

  const savedRating = localStorage.getItem(obj.name) || '';

  div.innerHTML = `
    <h2 class="title">${obj.name}</h2>
    <img src="${obj.url}" alt="${obj.name}" class="img">
    <input type="text" class="text">
    <button class="btn">Сохранить</button>
  `;
  return div;
};

const gallery = document.querySelector(".gallery-container");
arr.forEach((element) => {
  const divVDom = createCard(element);
  gallery.appendChild(divVDom);
});

gallery.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    const card = event.target.closest(".card");

    const title = card.querySelector(".title").textContent;
    //console.log(title);
    const value = card.querySelector(".text").value;
    //console.log(value);

    localStorage.setItem(title, value);
  }
});