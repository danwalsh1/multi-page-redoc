const parentLocation = window.parent.location.href.split("/");

let inFrame = true;
let redirectPage = '';

for(let i = 0; i < parentLocation.length; i++) {
    if(parentLocation[i].includes("index.html")) {
        inFrame = false;
        break;
    } else if(parentLocation[i].includes(".html")) {
        let pageName = parentLocation[i].split('.');
        redirectPage = pageName[0];
        break;
    }
}

if (inFrame) {
    console.log("Redirect");
    window.location.href = "index.html?page=" + redirectPage;re
}