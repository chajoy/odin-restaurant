import "./styles.css";

const container = document.getElementById(`content`);

const SetLayoutHome = (() => {

    const content = {
        container: document.createElement(`div`),
        title: document.createElement(`h1`),
        sub_title: document.createElement(`h2`),
        text: document.createElement(`p`),
    }

    content.title.textContent = `Cafe Delight`;
    content.sub_title.textContent = `fresh flavours, every day`;
    content.text.textContent = `Cafe Delights offers a cozy space to enjoy freshly prepared meals, from hearty breakfasts to delightful dinners. With a focus on quality ingredients and friendly service, we bring a little joy to every bite.`;

    content.container.appendChild(content.title);
    content.container.appendChild(content.sub_title);
    content.container.appendChild(content.text);

    content.container.classList.add(`intro`);

    return {
        container: content.container,
    }
})();

document.querySelector(`nav`).addEventListener(`click`, (e) => {
    switch (e.target.getAttribute(`id`)) {
        case `btn_home`:
            container.appendChild(SetLayoutHome.container);
            break;
        default:
            break;
    }
});