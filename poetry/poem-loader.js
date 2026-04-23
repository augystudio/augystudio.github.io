


const params = new URLSearchParams(window.location.search);
const poemName = params.get("poem");

const container = document.getElementById("poem-content");

if (!poemName) {
    container.innerHTML = "<p>Oops, not found!</p>";
} else {
    fetch(`poems/${poemName}.md`)
    .then(res => {
        if (!res.ok) throw new Error ("Poem not found.");
        return res.text();
    })
    .then(text => {
        container.innerHTML = marked.parse(text, { breaks: true });
    })
    .catch(() => {
        container.innerHTML = "<p>Poem not found.</p>";
    });
}
