const piano = document.getElementById('piano');

piano.addEventListener('mousedown', playNote);

function playNote(event) {
    const key = event.target;
    const note = key.dataset.note;

    if (note) {
        const audio = new Audio(`sounds/${note}.mp3`);
        audio.play();
    }
}
