const diodes = [
  {
    name: "Zener Diode",
    image: "https://via.placeholder.com/600x300?text=Zener+Diode",
    structure: [
      "Consists of a heavily doped p-n junction.",
      "The doping levels are higher compared to normal diodes, allowing it to work in the breakdown region.",
    ],
    working: [
      "Zener diodes are designed to operate in reverse bias.",
      "When the reverse voltage reaches the Zener breakdown voltage, the diode starts conducting without damage.",
      "This behavior allows it to maintain a constant voltage, making it ideal for voltage regulation.",
    ],
    applications: [
      "Used in voltage regulation to provide a stable output voltage.",
      "Protection circuits to prevent voltage spikes.",
      "Serves as a reference voltage in precision circuits.",
    ],
  },
  {
    name: "Avalanche Diode",
    image: "https://via.placeholder.com/600x300?text=Avalanche+Diode",
    structure: [
      "Designed with a p-n junction similar to regular diodes but tailored to undergo controlled avalanche breakdown.",
      "Can handle very high reverse voltages.",
    ],
    working: [
      "Operates in reverse bias where high voltage causes avalanche breakdown.",
      "When the reverse voltage exceeds a certain threshold, a large number of carriers are generated, allowing it to conduct.",
      "The diode is designed to safely manage this breakdown without damage.",
    ],
    applications: [
      "Surge protection in electronic circuits.",
      "Used in radio frequency (RF) circuits.",
      "Photodetectors for light detection applications.",
    ],
  },
  {
    name: "Varactor Diode",
    image: "https://via.placeholder.com/600x300?text=Varactor+Diode",
    structure: [
      "A p-n junction designed to act as a variable capacitor.",
      "The capacitance changes based on the reverse voltage applied across the junction.",
    ],
    working: [
      "Operates in reverse bias where the width of the depletion region changes with the applied reverse voltage.",
      "This changing depletion region alters the capacitance of the diode.",
      "Commonly used to tune frequencies in radio-frequency (RF) circuits.",
    ],
    applications: [
      "Used in voltage-controlled oscillators to tune frequency.",
      "Essential in frequency modulation (FM) circuits.",
      "Widely used in RF tuning circuits.",
    ],
  },
  {
    name: "Light-emitting Diode (LED)",
    image: "https://via.placeholder.com/600x300?text=LED",
    structure: [
      "Consists of a p-n junction where the material is chosen for efficient light emission.",
      "Materials like gallium arsenide (GaAs) are often used.",
    ],
    working: [
      "When forward biased, electrons and holes recombine at the junction.",
      "This recombination releases energy in the form of photons (light).",
      "The color of light depends on the material and its band gap.",
    ],
    applications: [
      "Used in displays like TV and smartphone screens.",
      "Indicator lights in electronic devices.",
      "General lighting applications such as LED bulbs.",
    ],
  },
  {
    name: "Photodiode",
    image: "https://via.placeholder.com/600x300?text=Photodiode",
    structure: [
      "Contains a p-n junction designed to be sensitive to light.",
      "The junction is often optimized for light detection rather than current conduction.",
    ],
    working: [
      "Operates in reverse bias where light exposure generates electron-hole pairs.",
      "The current produced is directly proportional to the intensity of light falling on the diode.",
      "Used as a sensor to detect light or other radiation.",
    ],
    applications: [
      "Used in optical communication systems for converting light signals to electrical signals.",
      "Light sensors in cameras, alarms, and other electronics.",
      "Solar cells to convert light energy into electrical energy.",
    ],
  },
  {
    name: "Laser Diode",
    image: "https://via.placeholder.com/600x300?text=Laser+Diode",
    structure: [
      "Similar to an LED but includes a cavity with mirrors to amplify light.",
      "The mirrors reflect light back and forth, strengthening it into a coherent laser beam.",
    ],
    working: [
      "When forward biased, electrons and holes recombine and emit light.",
      "The mirrors within the diode create resonance, allowing light amplification.",
      "The emitted light is highly directional and coherent, forming a laser.",
    ],
    applications: [
      "Used in laser pointers for visible light emission.",
      "Optical disc drives (CD, DVD, Blu-ray) for reading and writing data.",
      "Fiber optic communication for transmitting data using light signals.",
    ],
  },
  {
    name: "Schottky Diode",
    image: "https://via.placeholder.com/600x300?text=Schottky+Diode",
    structure: [
      "Has a metal-semiconductor junction instead of a p-n junction.",
      "The metal creates a lower forward voltage drop compared to regular diodes.",
    ],
    working: [
      "Known for a low forward voltage drop (typically 0.2V to 0.3V).",
      "Has fast switching characteristics due to the absence of minority carrier storage.",
      "Primarily used in high-speed and low-power applications.",
    ],
    applications: [
      "Power rectification in power supplies to convert AC to DC.",
      "Used in radio frequency (RF) circuits due to fast switching speed.",
      "Voltage clamping to prevent voltage spikes in sensitive circuits.",
    ],
  },
  {
    name: "PIN Diode",
    image: "https://via.placeholder.com/600x300?text=PIN+Diode",
    structure: [
      "Has an intrinsic (undoped) semiconductor layer between the p-type and n-type regions.",
      "This structure creates a wide depletion region.",
    ],
    working: [
      "The wide depletion region allows the diode to handle high-frequency signals.",
      "Operates effectively in high-frequency and fast switching applications.",
      "Used as a variable resistor in RF circuits.",
    ],
    applications: [
      "Used in RF switches to control signal paths in communication systems.",
      "Photodetectors for detecting light.",
      "RF attenuators to adjust signal levels in communication circuits.",
    ],
  },
  {
    name: "Tunnel Diode",
    image: "https://via.placeholder.com/600x300?text=Tunnel+Diode",
    structure: [
      "Features a heavily doped p-n junction with a very thin depletion region.",
      "The high doping levels cause a quantum mechanical effect known as tunneling.",
    ],
    working: [
      "At low voltages, electrons can tunnel through the junction barrier.",
      "Exhibits negative resistance, where increasing voltage reduces current.",
      "Used in high-frequency applications due to its fast response.",
    ],
    applications: [
      "High-frequency oscillators for generating high-frequency signals.",
      "Microwave amplifiers to boost weak microwave signals.",
      "Switching circuits in specialized electronic applications.",
    ],
  },
  {
    name: "Small Signal Diode",
    image: "https://via.placeholder.com/600x300?text=Small+Signal+Diode",
    structure: [
      "A general-purpose diode with a simple p-n junction optimized for small current and voltage applications.",
    ],
    working: [
      "Designed for switching small signals.",
      "Operates at low current levels and provides fast switching times.",
    ],

    applications: [
      "Used in signal processing to rectify small AC signals.",
      "Switching small currents in digital circuits.",
      "Low-voltage rectification and demodulation in RF circuits.",
    ],
  },
  {
    name: "Large Signal Diode",
    image: "https://via.placeholder.com/600x300?text=Large+Signal+Diode",
    structure: [
      "Designed to handle high current and voltage levels.",
      "Has a robust structure to manage large power efficiently.",
    ],
    working: [
      "Optimized for large current flow and high voltage rectification.",
      "Operates at higher power levels compared to small signal diodes.",
    ],
    applications: [
      "Power rectification in high-voltage applications such as power supplies.",
      "Used in inverters for converting DC to AC.",
      "Large-scale rectification for industrial power systems.",
    ],
  },
  {
    name: "Shockley Diode",
    image: "https://via.placeholder.com/600x300?text=Shockley+Diode",
    structure: [
      "A four-layer, three-junction semiconductor device.",
      "Similar in structure to a thyristor, but with fewer control options.",
    ],
    working: [
      "Acts as a switch, remaining in a high-resistance state until a threshold voltage is reached.",
      "After reaching the threshold, it switches to a low-resistance state, allowing current to flow.",
    ],
    applications: [
      "Used in switching circuits where it acts as an on/off switch.",
      "Relaxation oscillators for generating specific waveforms.",
      "Triggered switches in power control circuits.",
    ],
  },
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
                <h3>Structure</h3>
                <ul>
                    ${diode.structure
                      .map((structure) => `<li>${structure}</li>`)
                      .join("")}
                </ul>
                <h3>Working</h3>
                <ul>
                    ${diode.working
                      .map((working) => `<li>${working}</li>`)
                      .join("")}
                </ul>
                <h3>Applications</h3>
                <ul>
                    ${diode.applications
                      .map((application) => `<li>${application}</li>`)
                      .join("")}
                </ul>
            </div>
        `;

    container.appendChild(diodeElement);
  });
}

// Call the function to populate the diodes
populateDiodes();
