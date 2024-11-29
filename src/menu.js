const menuItems = [
    {
        item: "Sunrise Scramble",
        desc: "A delicious, fluffy egg scramble served with sautéed spinach, tomatoes, and creamy feta cheese, paired with a side of crispy hash browns and toasted sourdough.",
        price: 10.95,
        diet: "Vegetarian"
    },
    {
        item: "Avocado Bliss Toast",
        desc: "Toasted whole-grain bread topped with creamy avocado, a sprinkle of chilli flakes, and a drizzle of lemon-infused olive oil. Finished with a sprinkle of chia seeds and served with a side of mixed greens.",
        price: 8.50,
        diet: "Vegan"
    },
    {
        item: "Garden Herb Chicken Salad",
        desc: "Grilled, seasoned chicken breast on a bed of fresh mixed greens, cucumbers, cherry tomatoes, red onion, and a tangy balsamic vinaigrette. Topped with crispy croutons and a dash of fresh herbs.",
        price: 12.75,
        diet: "Contains Meat"
    },
    {
        item: "Mushroom & Truffle Risotto",
        desc: "Creamy Arborio rice cooked to perfection with sautéed mushrooms, white wine, and a hint of truffle oil. Topped with parmesan and a sprinkle of fresh parsley for that final touch of elegance.",
        price: 14.95,
        diet: "Vegetarian (Can be made vegan upon request)"
    },
    {
        item: "Lemon & Coconut Chia Pudding",
        desc: "A refreshing dessert made with creamy coconut milk, chia seeds, and a burst of citrusy lemon. Topped with fresh berries and a hint of mint for a light, satisfying treat.",
        price: 6.50,
        diet: "Vegan"
    }
];

export const SetLayoutMenu = (() => {
    const container = document.createElement(`div`);
    container.classList.add(`menu`);

    for (let x = 0; x < menuItems.length; x++) {
        const content = {
            container: document.createElement(`div`),
            item: document.createElement(`h2`),
            desc: document.createElement(`p`),
            price: document.createElement(`p`),
            diet: document.createElement(`p`),
        }

        content.item.textContent = menuItems[x].item;
        content.desc.textContent = menuItems[x].desc;
        content.price.textContent = `£${menuItems[x].price}`;
        content.diet.textContent = menuItems[x].diet;

        content.container.appendChild(content.item);
        content.container.appendChild(content.desc);
        content.container.appendChild(content.price);
        content.container.appendChild(content.diet);

        container.appendChild(content.container);
    }

    return {
        container,
    }
})();