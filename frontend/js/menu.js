function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector("svg");

    const allButtons = document.querySelectorAll("#menuAccordion button");
    const allContents = document.querySelectorAll("#menuAccordion div.hidden, #menuAccordion div.block");
    const allIcons = document.querySelectorAll("#menuAccordion svg");

    // Close all
    allContents.forEach(c => c.classList.add("hidden"));
    allIcons.forEach(i => i.classList.remove("rotate-180"));

    // If current was hidden, show it
    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        icon.classList.add("rotate-180");
    } else {
        content.classList.add("hidden");
        icon.classList.remove("rotate-180");
    }
}


// Highlight matching text (in dishes only)
function highlightMatch(text, term) {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, "gi");
    return text.replace(regex, `<span class="bg-yellow-200 rounded px-1">$1</span>`);
}

// Search filter logic
document.getElementById("searchInput").addEventListener("input", function () {
    const term = this.value.toLowerCase();
    const items = document.querySelectorAll("#menuAccordion > div");

    items.forEach((block) => {
        const button = block.querySelector("button");
        const content = block.querySelector("div");

        const categoryText = button.getAttribute("data-original") || button.innerText;
        const dishHTML = content.getAttribute("data-original") || content.innerHTML;

        // Check if any dish inside matches
        const tempEl = document.createElement("div");
        tempEl.innerHTML = dishHTML;
        const dishTexts = Array.from(tempEl.querySelectorAll("li")).map(li => li.innerText.toLowerCase());
        const matchInDishes = dishTexts.some(text => text.includes(term));

        if (term === "") {
            block.style.display = "block";
            content.innerHTML = dishHTML;
            button.innerHTML = categoryText + button.querySelector("svg").outerHTML;
            content.setAttribute("data-original", dishHTML);
            button.setAttribute("data-original", categoryText);
            content.classList.add("hidden");
            button.querySelector("svg").classList.remove("rotate-180");
        } else if (matchInDishes) {
            block.style.display = "block";
            toggleAccordion(button, true);

            // Preserve category name (no highlight)
            button.innerHTML = categoryText + button.querySelector("svg").outerHTML;
            button.setAttribute("data-original", categoryText);

            // Highlight matching dish names
            const highlighted = Array.from(tempEl.querySelectorAll("li")).map((li) => {
                const original = li.innerText;
                const highlightedText = highlightMatch(original, term);
                li.innerHTML = highlightedText;
                return li.outerHTML;
            }).join("");

            content.innerHTML = `<ul class="list-disc list-inside space-y-1">${highlighted}</ul>`;
            content.setAttribute("data-original", dishHTML);
        } else {
            block.style.display = "none";
        }
    });
});
