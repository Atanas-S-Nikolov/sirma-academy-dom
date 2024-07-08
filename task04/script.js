function getAttributes() {
    const linkEl = document.querySelector("a#someId");
    console.log("href: ", linkEl.href);
    console.log("hreflang: ", linkEl.hreflang);
    console.log("rel: ", linkEl.rel);
    console.log("target: ", linkEl.target);
    console.log("type: ", linkEl.type);
}
