function handleMouseOver(event) {
    event.preventDefault();
    const boldWords = document.getElementsByTagName("b");
    Array.from(boldWords).forEach((word) => word.style.background = "orange");
}

function handleMouseLeave(event) {
    event.preventDefault();
    const boldWords = document.getElementsByTagName("b");
    Array.from(boldWords).forEach((word) => word.style.background = "none");
}
