function calculateVolume(event) {
    event.preventDefault();
    const radius = document.getElementById("radius").value;
    const calculatedVolume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("volume").value = calculatedVolume.toFixed(4);
}
