export function renderCard(array) {
  const cardContainer = document.querySelector(".card_container");
  array.forEach((element) => {
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const img = document.createElement("img");
    const ul1 = document.createElement("ul");
    const ul2 = document.createElement("ul");
    const li1Name = document.createElement("li");
    const li1Origin = document.createElement("li");
    const li1Life = document.createElement("li");
    const li1Weight = document.createElement("li");

    const buttonMoreInfo = document.createElement("button");
    const buttonAddtoFavourite = document.createElement("button");

    const li2Name = document.createElement("li");
    const li2Origin = document.createElement("li");
    const li2Life = document.createElement("li");
    const li2Weight = document.createElement("li");

    const nameVar = `${element.breeds[0].name}`;
    const originVar = `${element.breeds[0].origin}`;
    const dlzkaZivotaVar = `${element.breeds[0].life_span}`;
    const vahaVar = `${element.breeds[0].weight.metric}`;

    div.classList.add("card");
    div2.classList.add("cat_info");
    img.setAttribute("src", element.url);
    buttonMoreInfo.classList.add("modal");
    buttonAddtoFavourite.innerText = "Obľúbené";
    buttonAddtoFavourite.classList.add("favButton");
    div.id = element.id;

    li1Name.innerText = "Druh:";
    li1Origin.innerText = "Pôvod:";
    li1Life.innerText = "Dĺžka života:";
    li1Weight.innerText = "Váha (v kg):";

    li2Name.innerText = nameVar;
    li2Origin.innerText = originVar;
    li2Life.innerText = dlzkaZivotaVar;
    li2Weight.innerText = vahaVar;

    ul1.appendChild(li1Name);
    ul1.appendChild(li1Origin);
    ul1.appendChild(li1Life);
    ul1.appendChild(li1Weight);

    ul2.appendChild(li2Name);
    ul2.appendChild(li2Origin);
    ul2.appendChild(li2Life);
    ul2.appendChild(li2Weight);

    div2.appendChild(ul1);
    div2.appendChild(ul2);

    div.appendChild(img);
    div.appendChild(div2);

    div.appendChild(buttonAddtoFavourite);

    cardContainer.appendChild(div);
  });
}
