function getBrowserWindowSize(event) {
    event.preventDefault();
    document.getElementById("browser-width").textContent = window.innerWidth + "px";
    document.getElementById("browser-height").textContent = window.innerHeight + "px";    
}

// window.addEventListener("resize", getBrowserWindowSize);
window.onresize = getBrowserWindowSize;
