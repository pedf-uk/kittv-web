const filters     = document.querySelector(".filters");
const buttons     = Array.from(filters.querySelectorAll(".button"));
const search      = document.querySelector("input[type='search']");
const form        = document.querySelector("form");
const articleList = document.querySelector(".articles");

let selectedCategory = null;

function buttonToggle(clickedButton) {
	buttons.forEach(button => {
		if (button === clickedButton && !button.classList.contains("selected")) {
			button.classList.add("selected");
			selectedCategory = button.dataset.category;
		} else {
			button.classList.remove("selected");
			if (button.dataset.category == selectedCategory) selectedCategory = null;
		}
	});
	filterArticles();
}

function filterArticles() {
	const searchTerm = sanitizeString(search.value);
	const articles = Array.from(articleList.children);
	articles.forEach(article => {
		const matching = (
			(article.dataset.title.includes(searchTerm) || (article.dataset.author && article.dataset.author.includes(searchTerm))) &&
			(!selectedCategory || article.dataset.category === selectedCategory)
		);
		article.classList.toggle("hidden", !matching);
	});
}

function sanitizeString(string) {
	return string.trim().toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
}

// Event listeners
search.addEventListener("input", filterArticles);
// Filtering happens before the reset itself without this timeout
form.addEventListener("reset", () => setTimeout(filterArticles, 0));
buttons.forEach(button => button.addEventListener("click", () => buttonToggle(button)));

// Normalize titles
Array.from(articleList.children).forEach(article => {
	article.dataset.title = sanitizeString(article.dataset.title);
	if (article.dataset.author) {
		article.dataset.author = sanitizeString(article.dataset.author);
	}
});

// Display the filter section on JS-enabled browsers
window.addEventListener("load", () => filters.classList.remove = "hidden");
