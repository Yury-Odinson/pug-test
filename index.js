const root = $("#root").get(0);

function createElement(block, cssClass = [], attrs = {}) {
    const element = document.createElement(block);
    element.classList.add(...cssClass);
    for (const key in attrs) {
        element.setAttribute(key, attrs[key]);
    }

    return element
}

const newsContainer = $(".news-container").get(0);

for (let i = 1; i <= 5; i++) {
    const newsItem = createElement("article", ["news__item"], { id: "news__" + i });
    newsItem.innerText = `news ${i}`;
    newsContainer.appendChild(newsItem);
}

root.appendChild(newsContainer);
