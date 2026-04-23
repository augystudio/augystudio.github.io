

const poems = [
    "Cross",
    "Lana"
];

const grid = document.getElementById("poems-grid");

poems.forEach(poem => {
    fetch(`poems/${poem}.md`)
    .then(res => res.text())
    .then(text => {
        const card = document.createElement("div");
        card.classList.add("poem-card");
        card.innerHTML = marked.parse(text, { breaks: true });

        card.addEventListener("click", () => {
            window.location.href = `poem.html?poem=${poem}`;
        });

        grid.appendChild(card);
    });
});