export const SetLayoutAbout = (() => {
    const content = {
        container: document.createElement(`div`),
        subtitle: document.createElement(`h2`),
        text: document.createElement(`p`),
    }

    content.container.classList.add(`about`);

    content.subtitle.textContent = `where freshness meets flavour`;
    content.text.textContent = `At Cafe Delight, we're passionate about creating delicious meals that make every moment special. From the first sip of coffee to the last bite of dessert, we use only the freshest ingredients to craft dishes that bring out the best in every flavour. Whether you're here for a cozy breakfast, a light lunch, or a satisfying dinner, you'll always find a warm welcome and a meal made with care. Come in and enjoy a little taste of happiness, served fresh every day.`;

    content.container.appendChild(content.subtitle);
    content.container.appendChild(content.text);

    return {
        container: content.container,
    }
})();

