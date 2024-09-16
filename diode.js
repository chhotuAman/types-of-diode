const diodes = [
    {
        name: "Zener Diode",
        image: "https://via.placeholder.com/600x300?text=Zener+Diode",
        structure: "Zener diodes have a heavily doped p-n junction, allowing them to conduct in reverse once a specific breakdown voltage is reached. They are designed to handle breakdown without damage, making them suitable for voltage regulation.",
        applications: "Used for voltage regulation, surge protection, and voltage reference."
    },
    {
        name: "Avalanche Diode",
        image: "https://via.placeholder.com/600x300?text=Avalanche+Diode",
        structure: "Avalanche diodes have a p-n junction designed to undergo controlled avalanche breakdown. They can handle high reverse voltages without damage.",
        applications: "Used in surge protection, RF circuits, and photodetection."
    },
    {
        name: "Varactor Diode",
        image: "https://via.placeholder.com/600x300?text=Varactor+Diode",
        structure: "Varactor diodes are designed to act as variable capacitors. The capacitance changes with the reverse voltage applied to the diode, which is due to the varying width of the depletion region.",
        applications: "Used in RF tuning circuits, voltage-controlled oscillators, and frequency modulation."
    },
    {
        name: "Light-emitting Diode (LED)",
        image: "https://via.placeholder.com/600x300?text=LED",
        structure: "LEDs have a p-n junction that emits light when forward-biased. The recombination of electrons and holes in the semiconductor material releases energy in the form of photons.",
        applications: "Used in display screens, indicator lights, and general lighting."
    },
    {
        name: "Photodiode",
        image: "https://via.placeholder.com/600x300?text=Photodiode",
        structure: "Photodiodes have a p-n junction that generates current when exposed to light. They are operated in reverse bias, where the current is proportional to the light intensity.",
        applications: "Used in optical communication systems, light sensors, and solar cells."
    },
    {
        name: "Laser Diode",
        image: "https://via.placeholder.com/600x300?text=Laser+Diode",
        structure: "Laser diodes are similar to LEDs but are designed to emit coherent light through stimulated emission. They have a cavity with mirrors to amplify the light.",
        applications: "Used in laser pointers, optical disc drives, and fiber optic communication."
    },
    {
        name: "Schottky Diode",
        image: "https://via.placeholder.com/600x300?text=Schottky+Diode",
        structure: "Schottky diodes have a metal-semiconductor junction instead of a p-n junction. They are known for their low forward voltage drop and fast switching speed.",
        applications: "Used in power rectification, RF applications, and voltage clamping."
    },
    {
        name: "PIN Diode",
        image: "https://via.placeholder.com/600x300?text=PIN+Diode",
        structure: "PIN diodes have an intrinsic layer between the p-type and n-type regions. This layer increases the space charge region, making them suitable for high-frequency applications.",
        applications: "Used in RF switches, photodetectors, and attenuators."
    },
    {
        name: "Tunnel Diode",
        image: "https://via.placeholder.com/600x300?text=Tunnel+Diode",
        structure: "Tunnel diodes have a heavily doped p-n junction, allowing electrons to tunnel through the barrier at very low voltages, giving them negative resistance properties.",
        applications: "Used in high-frequency oscillators and microwave amplifiers."
    },
    {
        name: "Small Signal Diode",
        image: "https://via.placeholder.com/600x300?text=Small+Signal+Diode",
        structure: "Small signal diodes are general-purpose diodes used for low-power applications. They have a standard p-n junction and are optimized for small currents.",
        applications: "Used in signal processing, rectification, and switching."
    },
    {
        name: "Large Signal Diode",
        image: "https://via.placeholder.com/600x300?text=Large+Signal+Diode",
        structure: "Large signal diodes are designed to handle high current and voltage levels. They have a robust construction to manage power efficiently.",
        applications: "Used in power rectification, inverters, and power supplies."
    },
    {
        name: "Shockley Diode",
        image: "https://via.placeholder.com/600x300?text=Shockley+Diode",
        structure: "The Shockley diode is a four-layer, three-junction semiconductor device. It acts as a switch when it transitions from a high-resistance state to a low-resistance state.",
        applications: "Used in switching circuits and relaxation oscillators."
    }
];

// Function to dynamically populate the diodes content
function populateDiodes() {
    const container = document.getElementById("diode-container");

    diodes.forEach((diode) => {
        const diodeElement = document.createElement("div");
        diodeElement.classList.add("diode");

        diodeElement.innerHTML = `
            <img src="${diode.image}" alt="${diode.name}">
            <div class="diode-content">
                <h2>${diode.name}</h2>
                <h3>Structure and Working</h3>
                <p>${diode.structure}</p>
                <h3>Applications</h3>
                <p>${diode.applications}</p>
            </div>
        `;

        container.appendChild(diodeElement);
    });
}

// Call the function to populate the diodes
populateDiodes();
