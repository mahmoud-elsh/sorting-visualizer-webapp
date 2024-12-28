import * as Tone from "tone";

export const synth = new Tone.Synth({
    oscillator: { 
    type: "triangle",
    volume: "-10"
    },
    envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.5,
        release: 1,
    },
}).toDestination();