const queryParameters = new URLSearchParams(window.location.search);
const queryParametersSplit = Object.fromEntries(queryParameters.entries());

window.addEventListener('load', (event) => {
    if (queryParametersSplit.page) {
        document.querySelector("iframe").src = queryParametersSplit.page + ".html?unique=" + Date.now();
    }
});

function redocPage(pageName) {
    window.frames['redocContainer'].location = pageName + '.html?unique=' + Date.now();
    window.history.pushState("", "", "?page=" + pageName);
}