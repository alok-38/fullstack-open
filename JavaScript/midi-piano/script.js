const NOTE_DETAILS = [
    { note: "C", key: "Z", frequency: 261.626, active: false },
    { note: "Db", key: "S", frequency: 277.183, active: false },
    { note: "D", key: "X", frequency: 293.665, active: false },
    { note: "Eb", key: "D", frequency: 311.127, active: false },
    { note: "E", key: "C", frequency: 329.628, active: false },
    { note: "F", key: "V", frequency: 349.228, active: false },
    { note: "Gb", key: "G", frequency: 369.994, active: false },
    { note: "G", key: "B", frequency: 391.995, active: false },
    { note: "Ab", key: "H", frequency: 415.305, active: false },
    { note: "A", key: "N", frequency: 440, active: false },
    { note: "Bb", key: "J", frequency: 466.164, active: false },
    { note: "B", key: "M", frequency: 493.883, active: false }
];

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let activeOscillators = {};

function playNote(frequency) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);  // Volume control
    oscillator.start();
    return oscillator;
}

function stopNote(oscillator) {
    oscillator.stop();
}

// Event listener for keydown (pressing a key)
document.addEventListener('keydown', (event) => {
    const note = NOTE_DETAILS.find(n => n.key.toLowerCase() === event.key.toLowerCase());
    if (note && !note.active) {
        note.active = true;
        const oscillator = playNote(note.frequency);  // Start sound
        activeOscillators[note.note] = oscillator;  // Store oscillator

        // Add active class to the corresponding key
        const keyElement = document.querySelector(`[data-note="${note.note}"]`);
        if (keyElement) keyElement.classList.add('active');
    }
});

// Event listener for keyup (releasing a key)
document.addEventListener('keyup', (event) => {
    const note = NOTE_DETAILS.find(n => n.key.toLowerCase() === event.key.toLowerCase());
    if (note && note.active) {
        note.active = false;
        const oscillator = activeOscillators[note.note];
        if (oscillator) {
            stopNote(oscillator);  // Stop sound
            delete activeOscillators[note.note];  // Remove oscillator from active list
        }

        // Remove active class from the corresponding key
        const keyElement = document.querySelector(`[data-note="${note.note}"]`);
        if (keyElement) keyElement.classList.remove('active');
    }
});
