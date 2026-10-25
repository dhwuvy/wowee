// Utility helpers
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Assembles a question object with randomly shuffled choices (A, B, C, D)
function makeQuestion(questionText, correctAnswer, wrongAnswers, explanationText) {
  const allChoices = [correctAnswer, ...wrongAnswers];
  const shuffled = shuffleArray(allChoices);
  return {
    question: questionText,
    options: shuffled,
    answer: shuffled.indexOf(correctAnswer),
    explanation: explanationText
  };
}

// =========================================================
// YOUR TOPIC BANK
// Add all static problems and dynamic problem generators directly here.
// Everything is an inline arrow function () => ... so numbers 
// AND choice orders (A, B, C, D) are freshly shuffled on every restart.
// =========================================================
const topicDefinitions = {
"Nitrogen Cycle": [
    () => makeQuestion(
      "Approximately what percentage of Earth's atmosphere is nitrogen gas?",
      "78%",
      ["21%", "50%", "95%"],
      "Nitrogen gas makes up approximately 78% of Earth's atmosphere."
    ),

    () => makeQuestion(
      "Why can most organisms not directly use atmospheric nitrogen gas?",
      "The triple bond in N2 is very difficult to break.",
      [
        "Nitrogen gas is too heavy to enter cells.",
        "Nitrogen gas is poisonous to all plants.",
        "Nitrogen gas dissolves too quickly in water."
      ],
      "Atmospheric N2 has a very strong triple bond, making it difficult for most organisms to break and use directly."
    ),

    () => makeQuestion(
      "What is the process that converts nitrogen gas into ammonia called?",
      "Nitrogen fixation",
      ["Nitrification", "Ammonification", "Denitrification"],
      "Nitrogen fixation converts atmospheric nitrogen gas into ammonia."
    ),

    () => makeQuestion(
      "Which organisms carry out nitrogen fixation?",
      "Nitrogen-fixing bacteria",
      [
        "Only animals",
        "Only flowering plants",
        "Only decomposers such as fungi"
      ],
      "Nitrogen-fixing bacteria convert atmospheric N2 into ammonia."
    ),

    () => makeQuestion(
      "What is the correct chemical change represented by nitrogen fixation?",
      "N2 → NH3",
      ["NH3 → N2", "NH4+ → NO3-", "NO3- → N2"],
      "Nitrogen fixation converts nitrogen gas into ammonia: N2 → NH3."
    ),

    () => makeQuestion(
      "What is assimilation in the nitrogen cycle?",
      "The uptake and use of nitrogen compounds by plants",
      [
        "The conversion of nitrate back into nitrogen gas",
        "The breakdown of dead organisms into ammonium",
        "The oxidation of ammonium into nitrate"
      ],
      "Assimilation occurs when plants absorb nitrogen compounds, such as ammonia or nitrate, and incorporate them into biological molecules."
    ),

    () => makeQuestion(
      "Which form of nitrogen can plants take up during assimilation after nitrogen fixation?",
      "Ammonia",
      [
        "Nitrogen gas",
        "Atmospheric oxygen",
        "Solid carbon"
      ],
      "Ammonia produced by nitrogen-fixing bacteria can be taken up by plants during assimilation."
    ),

    () => makeQuestion(
      "What occurs during nitrification?",
      "Ammonium is oxidized into nitrate.",
      [
        "Nitrogen gas is converted into ammonia.",
        "Nitrate is converted back into nitrogen gas.",
        "Dead organisms are broken down into ammonium."
      ],
      "Nitrification is the bacterial oxidation of ammonium into nitrate."
    ),

    () => makeQuestion(
      "Which nitrogen compound is produced by nitrification and used by plants in assimilation?",
      "Nitrate",
      ["Nitrogen gas", "Ammonia", "Protein"],
      "Nitrification produces nitrate, which plants can absorb and assimilate."
    ),

    () => makeQuestion(
      "How does nitrogen move from plants to animals?",
      "Animals obtain nitrogen by eating plants or other animals.",
      [
        "Animals absorb nitrogen directly from the atmosphere.",
        "Animals fix nitrogen gas into ammonia.",
        "Animals convert nitrate into nitrogen gas."
      ],
      "Plants incorporate nitrogen into their tissues, and animals obtain that nitrogen by eating plants or other animals."
    ),

    () => makeQuestion(
      "What happens to nitrogen in an animal's body after it dies?",
      "Decomposers return it to the soil through ammonification.",
      [
        "It immediately becomes atmospheric nitrogen gas.",
        "It is converted directly into nitrate by plants.",
        "It remains locked in the animal's body forever."
      ],
      "When an organism dies, decomposers break down its nitrogen-containing compounds and return nitrogen to the soil through ammonification."
    ),

    () => makeQuestion(
      "What is ammonification?",
      "The conversion of organic nitrogen from dead organisms into ammonium or ammonia.",
      [
        "The conversion of nitrogen gas into ammonia",
        "The conversion of ammonium into nitrate",
        "The conversion of nitrate into nitrogen gas"
      ],
      "Ammonification is the decomposition process that converts organic nitrogen from dead organisms and waste into ammonium or ammonia."
    ),

    () => makeQuestion(
      "What occurs during denitrification?",
      "Bacteria convert nitrates into nitrogen gas.",
      [
        "Bacteria convert nitrogen gas into ammonia.",
        "Bacteria convert ammonium into nitrate.",
        "Plants absorb nitrate from the soil."
      ],
      "Denitrifying bacteria convert nitrates back into nitrogen gas, returning it to the atmosphere."
    ),

    () => makeQuestion(
      "Which chemical change represents denitrification?",
      "NO3- → N2",
      ["N2 → NH3", "NH4+ → NO3-", "NH3 → NH4+"],
      "Denitrification converts nitrate into nitrogen gas: NO3- → N2."
    ),

    () => makeQuestion(
      "Why can denitrification reduce soil fertility?",
      "It removes usable nitrate from the soil.",
      [
        "It adds excess ammonia to the soil.",
        "It increases the amount of nitrate available to plants.",
        "It creates more nitrogen-fixing bacteria."
      ],
      "Denitrification converts nitrate, a form plants can use, back into nitrogen gas, reducing the nitrogen available in the soil."
    ),

    () => makeQuestion(
      "Which sequence correctly shows part of the nitrogen cycle?",
      "Nitrogen fixation → assimilation → ammonification → nitrification → denitrification",
      [
        "Nitrogen fixation → denitrification → assimilation → ammonification",
        "Ammonification → nitrogen fixation → denitrification → assimilation",
        "Denitrification → nitrification → nitrogen fixation → ammonification"
      ],
      "A major pathway moves from nitrogen fixation to assimilation, then through ammonification and nitrification, and finally denitrification returns nitrogen gas to the atmosphere."
    ),

    () => makeQuestion(
      "Which process returns nitrogen from the soil to the atmosphere?",
      "Denitrification",
      ["Nitrogen fixation", "Nitrification", "Assimilation"],
      "Denitrification converts soil nitrate into atmospheric nitrogen gas."
    ),

    () => makeQuestion(
      "Which process adds newly usable nitrogen to the soil from the atmosphere?",
      "Nitrogen fixation",
      ["Denitrification", "Ammonification", "Nitrification"],
      "Nitrogen fixation converts atmospheric nitrogen gas into ammonia, making nitrogen available to organisms."
    ),

    () => makeQuestion(
      "Which process converts ammonium into nitrate?",
      "Nitrification",
      ["Nitrogen fixation", "Denitrification", "Ammonification"],
      "Nitrification oxidizes ammonium into nitrate."
    ),

    () => makeQuestion(
      "Which process breaks down dead organisms and returns nitrogen to the soil?",
      "Ammonification",
      ["Nitrogen fixation", "Nitrification", "Denitrification"],
      "Ammonification decomposes organic nitrogen from dead organisms into ammonium or ammonia in the soil."
    ),

    () => makeQuestion(
      "Which form of nitrogen is most directly produced by nitrogen-fixing bacteria?",
      "Ammonia",
      ["Nitrate", "Nitrogen gas", "Atmospheric oxygen"],
      "Nitrogen-fixing bacteria convert nitrogen gas into ammonia."
    ),

    () => makeQuestion(
      "Which form of nitrogen is most directly produced by nitrifying bacteria?",
      "Nitrate",
      ["Ammonia", "Nitrogen gas", "Organic protein"],
      "Nitrifying bacteria oxidize ammonium into nitrate."
    ),

    () => makeQuestion(
      "Which form of nitrogen is most directly produced by denitrifying bacteria?",
      "Nitrogen gas",
      ["Ammonia", "Nitrate", "Ammonium"],
      "Denitrifying bacteria convert nitrate into nitrogen gas."
    ),

    () => makeQuestion(
      "Which process would most likely decrease the amount of nitrate available to plants?",
      "Denitrification",
      ["Nitrogen fixation", "Nitrification", "Assimilation"],
      "Denitrification converts nitrate into nitrogen gas, reducing nitrate availability in the soil."
    ),

    () => makeQuestion(
      "Which process would most likely increase the amount of nitrate available to plants?",
      "Nitrification",
      ["Denitrification", "Nitrogen fixation", "Ammonification"],
      "Nitrification converts ammonium into nitrate, a form plants can assimilate."
    )
],
"SI Units": [
  // Dynamic SI Unit Problem
  () => {
    const constants = [
      {
        name: `\\varepsilon_0`,
        dim: [-1, -3, 4, 2, 0, 0, 0] // kg, m, s, A, K, mol, cd
      },
      {
        name: `\\mu_0`,
        dim: [1, 1, -2, -2, 0, 0, 0]
      },
      {
        name: `h`,
        dim: [1, 2, -1, 0, 0, 0, 0]
      },
      {
        name: `G`,
        dim: [-1, 3, -2, 0, 0, 0, 0]
      },
      {
        name: `c`,
        dim: [0, 1, -1, 0, 0, 0, 0]
      },
      {
        name: `k_B`,
        dim: [1, 2, -2, 0, -1, 0, 0]
      },
      {
        name: `R`,
        dim: [1, 2, -2, 0, -1, -1, 0]
      },
      {
        name: `\\sigma`,
        dim: [1, 0, -3, 0, -4, 0, 0]
      },
      {
        name: `m_e`,
        dim: [1, 0, 0, 0, 0, 0, 0]
      },
      {
        name: `m_p`,
        dim: [1, 0, 0, 0, 0, 0, 0]
      },
      {
        name: `k_e`,
        dim: [1, 3, -4, -2, 0, 0, 0]
      }
    ];


    const c1 = constants[getRandomInt(0, constants.length - 1)];
    let c2 = constants[getRandomInt(0, constants.length - 1)];


    // Avoid using the same constant twice for multiply/divide.
    while (c2 === c1) {
      c2 = constants[getRandomInt(0, constants.length - 1)];
    }


    // Only allow square roots when all exponents are even.
    const canSqrt = c1.dim.every((power) => power % 2 === 0);


    const operations = canSqrt
      ? ["multiply", "multiply", "divide", "divide", "square", "sqrt"]
      : ["multiply", "multiply", "divide", "divide", "square"];


    const operation = operations[getRandomInt(0, operations.length - 1)];


    let prompt;
    let dim;


    if (operation === "multiply") {
      prompt = `${c1.name} \\cdot ${c2.name}`;
      dim = c1.dim.map((power, i) => power + c2.dim[i]);
    } else if (operation === "divide") {
      prompt = `\\frac{${c1.name}}{${c2.name}}`;
      dim = c1.dim.map((power, i) => power - c2.dim[i]);
    } else if (operation === "square") {
      prompt = `\\left(${c1.name}\\right)^2`;
      dim = c1.dim.map((power) => power * 2);
    } else {
      prompt = `\\sqrt{${c1.name}}`;
      dim = c1.dim.map((power) => power / 2);
    }


    const baseNames = ["kg", "m", "s", "A", "K", "mol", "cd"];


    const dimToLatex = (d) => {
      const parts = [];


      d.forEach((power, i) => {
        if (power === 0) return;


        if (power === 1) {
          parts.push(`\\mathrm{${baseNames[i]}}`);
        } else if (power === -1) {
          parts.push(`\\mathrm{${baseNames[i]}^{-1}}`);
        } else {
          parts.push(`\\mathrm{${baseNames[i]}^{${power}}}`);
        }
      });


      return parts.length ? parts.join("\\,") : "\\mathrm{dimensionless}";
    };


    const correct = `$${dimToLatex(dim)}` + "$";


    // Distractors: reciprocal and squared version.
    const reciprocal = dim.map((power) => -power);
    const squared = dim.map((power) => power * 2);


    return makeQuestion(
      `What are the SI base units of $${prompt}$?`,
      correct,
      [
        correct,
        `$${dimToLatex(reciprocal)}$`,
        `$${dimToLatex(squared)}$`
      ],
      `Use dimensional analysis: multiplication adds exponents, division subtracts them, squaring doubles them, and a square root halves them. Therefore, the expression has SI base units ${correct}.`
    );
  },
],
"Chapter 1: End of the Age of Silicon": [
  () => makeQuestion(
    "Who coined the term “quantum supremacy”?",
    "John Preskill",
    [
      "Richard Feynman",
      "Sundar Pichai",
      "Albert Einstein"
    ],
    "The term “quantum supremacy” was coined by Caltech physicist John Preskill."
  ),

  () => makeQuestion(
    "What is the basic idea behind quantum computers?",
    "Computing directly using atoms themselves",
    [
      "Computing using only classical electrical circuits",
      "Computing by making larger microchips",
      "Computing using mechanical gears"
    ],
    "Quantum computers compute using the quantum states of atoms, as suggested by Richard Feynman."
  ),

  () => makeQuestion(
    "Which scientist suggested the idea of using atoms themselves for computation?",
    "Richard Feynman",
    [
      "John Preskill",
      "Sundar Pichai",
      "Fritz Haber"
    ],
    "Richard Feynman suggested that computers could compute using atoms themselves."
  ),

  () => makeQuestion(
    "What is the basic unit of information used by a quantum computer?",
    "Qubit",
    [
      "Bit",
      "Byte",
      "Transistor"
    ],
    "Quantum computers use qubits, the quantum analogue of classical bits."
  ),

  () => makeQuestion(
    "What condition must atoms be in for quantum computation to work?",
    "Coherence",
    [
      "Ionization",
      "Superposition of classical bits",
      "Thermal equilibrium at room temperature"
    ],
    "Atoms must be in unison, or coherence, for quantum computation to function."
  ),

  () => makeQuestion(
    "How are atoms typically brought into coherence in quantum computers?",
    "By cooling them to near 0 K",
    [
      "By heating them to extremely high temperatures",
      "By exposing them to visible light only",
      "By increasing their pressure"
    ],
    "Quantum computers often achieve coherence by cooling atoms to temperatures near absolute zero."
  ),

  () => makeQuestion(
    "Which natural process is described as a quantum process that can maintain quantum effects at normal temperatures?",
    "Photosynthesis",
    [
      "Volcanic eruptions",
      "Nuclear fission",
      "Plate tectonics"
    ],
    "Photosynthesis is described as a quantum process that can operate at normal temperatures, unlike most engineered quantum systems."
  ),

  () => makeQuestion(
    "According to Moore’s Law, how often does computing power double?",
    "Every 18 months",
    [
      "Every 18 days",
      "Every 18 years",
      "Every 225 million years"
    ],
    "Moore’s Law states that computing power doubles approximately every 18 months."
  ),

  () => makeQuestion(
    "Why is Moore’s Law slowing down?",
    "Microchips have already been optimized close to their physical limits.",
    [
      "Quantum computers have made classical computers obsolete.",
      "There is no longer any demand for faster computing.",
      "Microchips are becoming too large to manufacture."
    ],
    "Moore’s Law is slowing because conventional microchips have already been optimized near their limits."
  ),

  () => makeQuestion(
    "What comparison did Sundar Pichai make about quantum computing?",
    "It is comparable to the Wright brothers’ first flight.",
    [
      "It is comparable to the invention of the printing press.",
      "It is comparable to the discovery of fire.",
      "It is comparable to the development of the automobile."
    ],
    "Sundar Pichai compared the current stage of quantum computing to the Wright brothers’ early flight."
  ),

  () => makeQuestion(
    "Which company was the first major quantum computing company to go public?",
    "IonQ",
    [
      "IBM",
      "Google",
      "ExxonMobil"
    ],
    "IonQ was the first major quantum computing company to become publicly traded."
  ),

  () => makeQuestion(
    "What is the purpose of the National Quantum Initiative Act?",
    "To fund quantum research",
    [
      "To regulate lithium-sulfur battery sales",
      "To replace classical computers with quantum computers immediately",
      "To fund the Haber-Bosch process"
    ],
    "The National Quantum Initiative Act provides funding for quantum research."
  ),

  () => makeQuestion(
    "What is computational chemistry in the context of quantum computing?",
    "Simulating chemical properties using quantum computers",
    [
      "Using classical computers to build physical batteries",
      "Using quantum computers only to encrypt data",
      "Using chemical reactions to cool atoms"
    ],
    "Computational chemistry uses quantum computers to simulate the properties and behavior of chemicals."
  ),

  () => makeQuestion(
    "What is the key bottleneck for solar energy?",
    "The battery",
    [
      "The solar panel",
      "The electrical grid",
      "The inverter"
    ],
    "The battery is the key bottleneck for solar energy."
  ),

  () => makeQuestion(
    "Which battery technology are utilities and car companies trying to improve?",
    "Lithium-sulfur batteries",
    [
      "Lead-acid batteries",
      "Nickel-cadmium batteries",
      "Alkaline batteries"
    ],
    "Utilities and car companies are working to increase the capacity and recharge speed of lithium-sulfur batteries."
  ),

  () => makeQuestion(
    "Which two battery characteristics are companies trying to improve in lithium-sulfur batteries?",
    "Capacity and recharge speed",
    [
      "Color and weight",
      "Voltage and temperature",
      "Cost and thickness"
    ],
    "Companies are trying to increase lithium-sulfur battery capacity and recharge speed."
  ),

  () => makeQuestion(
    "Which company uses IBM’s quantum computers to develop new chemicals for low-energy processing and carbon capture?",
    "ExxonMobil",
    [
      "IonQ",
      "Google",
      "Tesla"
    ],
    "ExxonMobil uses IBM’s computers to help create new chemicals for low-energy processing and carbon capture."
  ),

  () => makeQuestion(
    "What drove the Green Revolution?",
    "The Haber-Bosch process",
    [
      "The development of lithium-sulfur batteries",
      "The invention of quantum supremacy",
      "The National Quantum Initiative Act"
    ],
    "The Green Revolution was driven by the Haber-Bosch process, which enabled large-scale fertilizer production."
  ),

  () => makeQuestion(
    "Approximately what percentage of the world’s energy is used by the Haber-Bosch process?",
    "2%",
    [
      "10%",
      "25%",
      "50%"
    ],
    "The Haber-Bosch process accounts for approximately 2% of the world’s energy use."
  ),

  () => makeQuestion(
    "How might quantum computers affect the Haber-Bosch process?",
    "They could reduce the amount of energy it requires.",
    [
      "They could eliminate the need for nitrogen.",
      "They could make the process require more energy.",
      "They could replace fertilizer with solar panels."
    ],
    "Quantum computers could help make the Haber-Bosch process more efficient, reducing its energy use."
  )
],
"Chapter 2: End of the Digital Age": [
  () => makeQuestion(
    "What is the Antikythera mechanism considered to be?",
    "The world’s oldest computer",
    [
      "The first electronic computer",
      "The first steam engine",
      "The first telescope"
    ],
    "The Antikythera mechanism, created by the Greeks about 2,000 years ago, is considered the world’s oldest computer."
  ),

  () => makeQuestion(
    "What did the Antikythera mechanism simulate?",
    "The movements of heavenly bodies",
    [
      "Weather patterns",
      "Human brains",
      "Ocean currents"
    ],
    "The Antikythera mechanism was used to simulate the movements of astronomical bodies."
  ),

  () => makeQuestion(
    "Who is known as the father of the computer?",
    "Charles Babbage",
    [
      "Alan Turing",
      "David Hilbert",
      "Kurt Gödel"
    ],
    "Charles Babbage is known as the father of the computer."
  ),

  () => makeQuestion(
    "What were Babbage’s two main goals for his machine?",
    "To predict astronomical movements and produce accurate navigational charts",
    [
      "To encrypt messages and build rockets",
      "To create artificial intelligence and translate languages",
      "To calculate taxes and design bridges"
    ],
    "Babbage wanted a machine that could predict astronomical movements and produce accurate navigational charts."
  ),

  () => makeQuestion(
    "Who did Charles Babbage recruit to help with his computing work?",
    "Ada Lovelace",
    [
      "Grace Hopper",
      "Marie Curie",
      "Rosalind Franklin"
    ],
    "Babbage recruited Ada Lovelace to help with his computing project."
  ),

  () => makeQuestion(
    "What is Ada Lovelace known as?",
    "The world’s first programmer",
    [
      "The inventor of the vacuum tube",
      "The founder of artificial intelligence",
      "The first computer engineer"
    ],
    "Ada Lovelace is known as the world’s first programmer."
  ),

  () => makeQuestion(
    "What program did Ada Lovelace write?",
    "A program to produce Bernoulli numbers",
    [
      "A program to break the Enigma code",
      "A program to simulate planetary motion",
      "A program to run the Turing test"
    ],
    "Ada Lovelace wrote a program that could produce Bernoulli numbers."
  ),

  () => makeQuestion(
    "What did David Hilbert propose?",
    "23 major unsolved problems in mathematics",
    [
      "23 rules for building computers",
      "23 laws of physics",
      "23 types of artificial intelligence"
    ],
    "David Hilbert proposed 23 major unsolved problems that shaped much of 20th-century mathematics."
  ),

  () => makeQuestion(
    "What did Hilbert want to prove about mathematics?",
    "That all true mathematical statements could be proven from a set of axioms",
    [
      "That mathematics was purely based on observation",
      "That computers could never solve equations",
      "That geometry was more important than algebra"
    ],
    "One of Hilbert’s goals was to prove that all true statements in mathematics could be proven from a given set of axioms."
  ),

  () => makeQuestion(
    "What did Kurt Gödel prove about mathematics?",
    "That mathematics can never be fully completed",
    [
      "That every math problem has a simple solution",
      "That all numbers are rational",
      "That computers can solve every problem"
    ],
    "Kurt Gödel proved that it is impossible to prove every true mathematical statement, meaning math can never be completed."
  ),

  () => makeQuestion(
    "What question did Alan Turing ask?",
    "Can computers prove everything?",
    [
      "Can computers travel through time?",
      "Can computers replace the human brain?",
      "Can computers create new elements?"
    ],
    "Turing asked whether computers could prove everything, building on Gödel’s work."
  ),

  () => makeQuestion(
    "What did Alan Turing develop to explore computation?",
    "The Turing machine",
    [
      "The Colossus computer",
      "The Antikythera mechanism",
      "The Bernoulli engine"
    ],
    "Alan Turing developed the Turing machine as a theoretical model of computation."
  ),

  () => makeQuestion(
    "How does a Turing machine work?",
    "It reads symbols on an infinite tape and follows rules to write, move, change state, or halt",
    [
      "It uses vacuum tubes to process electrical signals",
      "It simulates planets using gears",
      "It stores data only in magnetic disks"
    ],
    "A Turing machine reads the symbol under its head on an infinite tape, then writes, moves, changes state, or halts according to fixed rules."
  ),

  () => makeQuestion(
    "What did Turing use the Turing machine to prove?",
    "That Gödel’s work was correct",
    [
      "That Babbage’s machine could be built",
      "That the Enigma code was unbreakable",
      "That AI already existed"
    ],
    "Turing used his machine to support Gödel’s conclusion that not all true mathematical statements can be proven."
  ),

  () => makeQuestion(
    "What did Alan Turing help break during World War II?",
    "Nazi Germany’s Enigma code",
    [
      "The Soviet Union’s diplomatic code",
      "The Japanese naval code",
      "The British government’s code"
    ],
    "Turing helped break Nazi Germany’s Enigma code during World War II."
  ),

  () => makeQuestion(
    "What machine did Turing design to decode German messages?",
    "The Bombe",
    [
      "The Colossus",
      "The Analytical Engine",
      "The Turing test machine"
    ],
    "Turing designed the Bombe machine to help decode German Enigma messages."
  ),

  () => makeQuestion(
    "What was Colossus?",
    "The first programmable digital electronic computer",
    [
      "The first mechanical calculator",
      "The first quantum computer",
      "The first personal computer"
    ],
    "Colossus was the first programmable digital electronic computer."
  ),

  () => makeQuestion(
    "What did Colossus use as logic circuits?",
    "Vacuum tubes",
    [
      "Transistors",
      "Microchips",
      "Mechanical gears"
    ],
    "Colossus used vacuum tubes as its logic circuits."
  ),

  () => makeQuestion(
    "What question inspired early AI research?",
    "Is the brain a Turing machine of sorts?",
    [
      "Can machines build other machines?",
      "Is the universe made of mathematics?",
      "Can computers feel emotions?"
    ],
    "Early AI research was inspired by the question of whether the brain works like a Turing machine."
  ),

  () => makeQuestion(
    "What does the Turing test measure?",
    "Whether a machine can convince a human judge that it is human",
    [
      "Whether a machine can solve math proofs",
      "Whether a machine can break encryption",
      "Whether a machine can move like a human"
    ],
    "The Turing test asks whether a human judge, conversing by text, can reliably tell a machine apart from a human."
  ),

  () => makeQuestion(
    "Has any machine passed the Turing test?",
    "No",
    [
      "Yes, in 1950",
      "Yes, in 1997",
      "Yes, every AI passes it"
    ],
    "No machine has passed the Turing test yet."
  )
],
"Chapter 3: Rise of the Quantum": [
  () => makeQuestion(
    "Who created quantum theory?",
    "Max Planck",
    [
      "Albert Einstein",
      "Erwin Schrödinger",
      "Werner Heisenberg"
    ],
    "Max Planck is credited with creating quantum theory."
  ),

  () => makeQuestion(
    "What idea did Planck’s quantum theory challenge?",
    "Newtonian determinism",
    [
      "Relativity",
      "Evolution",
      "Classical thermodynamics"
    ],
    "Planck’s theory challenged Newtonian determinism, which viewed the universe as a clock obeying Newton’s laws."
  ),

  () => makeQuestion(
    "What did Planck propose about energy?",
    "It comes in packets of a certain size",
    [
      "It flows continuously in any amount",
      "It exists only as waves",
      "It cannot be measured"
    ],
    "Planck stated that energy occurs in discrete packets called quanta."
  ),

  () => makeQuestion(
    "What problem did Planck’s idea of energy quanta solve?",
    "The Rayleigh-Jeans catastrophe",
    [
      "The photoelectric effect",
      "Quantum entanglement",
      "The uncertainty principle"
    ],
    "Planck’s idea of energy packets solved the problem of predicting light emitted from a hot object, known as the Rayleigh-Jeans catastrophe."
  ),

  () => makeQuestion(
    "What does Planck’s constant show?",
    "That energy at very small scales comes in discrete packets",
    [
      "That energy is always continuous",
      "That light travels faster than anything else",
      "That gravity controls quantum particles"
    ],
    "Planck’s constant shows that energy at very small scales comes in discrete packets called quanta."
  ),

  () => makeQuestion(
    "What happens to physics as Planck’s constant approaches zero?",
    "We get Newtonian physics",
    [
      "We get quantum physics",
      "We get relativity",
      "We get no physics"
    ],
    "As Planck’s constant goes to zero, quantum effects disappear and Newtonian physics applies."
  ),

  () => makeQuestion(
    "What did Einstein explain using light quanta?",
    "The photoelectric effect",
    [
      "The double-slit experiment",
      "Quantum entanglement",
      "Schrödinger’s cat"
    ],
    "Einstein explained the photoelectric effect by claiming that light energy could occur in quanta."
  ),

  () => makeQuestion(
    "What question did Louis de Broglie ask?",
    "If light can be a particle and wave, why can’t matter?",
    [
      "Can matter travel faster than light?",
      "Can energy be created from nothing?",
      "Can particles exist without mass?"
    ],
    "De Broglie asked whether matter, like light, could behave as both a particle and a wave."
  ),

  () => makeQuestion(
    "What does the double-slit experiment demonstrate?",
    "That light and particles can behave like both waves and particles",
    [
      "That particles always travel in straight lines",
      "That light cannot interfere with itself",
      "That electrons have no mass"
    ],
    "The double-slit experiment shows wave-particle behavior through interference patterns."
  ),

  () => makeQuestion(
    "What happens to the double-slit interference pattern when you measure which slit a particle passes through?",
    "It disappears",
    [
      "It becomes stronger",
      "It splits into two patterns",
      "It reverses direction"
    ],
    "Trying to measure which slit a particle passes through destroys the interference pattern."
  ),

  () => makeQuestion(
    "What does Schrödinger’s equation describe?",
    "How a quantum particle’s wave function changes over time",
    [
      "How planets orbit the Sun",
      "How light travels through glass",
      "How atoms combine in chemical reactions"
    ],
    "Schrödinger’s equation describes the time evolution of a quantum particle’s wave function."
  ),

  () => makeQuestion(
    "What can Schrödinger’s equation help calculate?",
    "The probabilities of a particle’s location or energy",
    [
      "The exact path of every particle",
      "The age of the universe",
      "The speed of light"
    ],
    "The equation lets you calculate probabilities for where a particle may be found or what energy it may have."
  ),

  () => makeQuestion(
    "What is Schrödinger’s cat a thought experiment about?",
    "Superposition before observation",
    [
      "Quantum tunneling",
      "Entanglement between cats",
      "The speed of light"
    ],
    "Schrödinger’s cat links a cat’s fate to a random quantum event, placing it in a superposition of alive and dead before observation."
  ),

  () => makeQuestion(
    "What did George Berkeley believe about objects?",
    "They do not exist until observed",
    [
      "They exist independently of observation",
      "They are made entirely of energy",
      "They cannot change over time"
    ],
    "George Berkeley believed that objects do not exist until they are observed."
  ),

  () => makeQuestion(
    "What did Max Born say about the wave function?",
    "Its amplitude gives the probability of finding a particle in a state or location",
    [
      "It gives the exact position of a particle",
      "It describes only light waves",
      "It proves particles have no energy"
    ],
    "Max Born interpreted the wave function’s amplitude as a probability for a particle’s state or location."
  ),

  () => makeQuestion(
    "What is Heisenberg’s uncertainty principle?",
    "Certain pairs of properties cannot both be known with perfect precision at the same time",
    [
      "All particles have uncertain mass",
      "Energy cannot be measured",
      "Light always behaves as a particle"
    ],
    "The uncertainty principle states that certain pairs of properties, such as position and momentum, cannot both be known perfectly at once."
  ),

  () => makeQuestion(
    "What did John von Neumann propose about the macroworld and microworld?",
    "There is an invisible wall between them with different laws of physics",
    [
      "They follow exactly the same laws",
      "The microworld does not exist",
      "The macroworld is made of quanta"
    ],
    "Von Neumann proposed that the macro and micro worlds are separated by an invisible wall and follow different physical laws."
  ),

  () => makeQuestion(
    "What did Bohr and Einstein disagree about?",
    "Whether quantum randomness is fundamental or shows the theory is incomplete",
    [
      "Whether light has a speed limit",
      "Whether atoms contain electrons",
      "Whether gravity exists"
    ],
    "Bohr and Einstein disagreed over the meaning of quantum mechanics, especially whether its randomness is fundamental."
  ),

  () => makeQuestion(
    "Who wrote the EPR paper?",
    "Einstein, Podolsky, and Rosen",
    [
      "Planck, Bohr, and Heisenberg",
      "Schrödinger, Born, and de Broglie",
      "Newton, Maxwell, and Faraday"
    ],
    "The EPR paper was written by Einstein, Podolsky, and Rosen."
  ),

  () => makeQuestion(
    "What did the EPR paper argue about quantum entanglement?",
    "That it shows quantum mechanics cannot be a complete description of reality",
    [
      "That it proves particles cannot interact",
      "That it eliminates randomness from physics",
      "That it only applies to light"
    ],
    "The EPR paper argued that entanglement implies quantum mechanics is incomplete because measuring one particle seems to reveal a property of a distant particle."
  ),

  () => makeQuestion(
    "What role did Heisenberg have during World War II?",
    "He was the Nazi lead on developing the atomic bomb",
    [
      "He led the Allied atomic bomb project",
      "He broke the Enigma code",
      "He designed radar systems"
    ],
    "Heisenberg led Nazi Germany’s atomic bomb development effort, which failed."
  )
],
"Nuclear Physics": [
  // Nuclear structure
  () => makeQuestion(
    "Which force holds protons and neutrons together in an atomic nucleus?",
    "The strong nuclear force",
    [
      "The gravitational force",
      "The electromagnetic force",
      "The weak nuclear force"
    ],
    "The strong nuclear force holds protons and neutrons together in the nucleus."
  ),

  () => makeQuestion(
    "In nuclear notation ${}^{A}_{Z}X$, what do $A$ and $Z$ represent?",
    "$A$: protons plus neutrons; $Z$: protons",
    [
      "$A$: protons; $Z$: neutrons",
      "$A$: neutrons; $Z$: protons plus neutrons",
      "$A$: electrons; $Z$: neutrons"
    ],
    "$A$ is the mass number, and $Z$ is the atomic number. The neutron number is $A-Z$."
  ),

  // Alpha decay
  () => makeQuestion(
    "What is an alpha particle?",
    "A helium-4 nucleus containing two protons and two neutrons",
    [
      "An electron emitted from a nucleus",
      "A positron emitted from a nucleus",
      "A photon emitted by an excited nucleus"
    ],
    "An alpha particle is written as ${}^{4}_{2}\\mathrm{He}$ and contains two protons and two neutrons."
  ),

  () => makeQuestion(
    "Which equation correctly represents alpha decay?",
    "${}^{A}_{Z}X \\rightarrow {}^{A-4}_{Z-2}Y + {}^{4}_{2}\\mathrm{He}$",
    [
      "${}^{A}_{Z}X \\rightarrow {}^{A}_{Z+1}Y + {}^{0}_{-1}e + \\bar{\\nu}_e$",
      "${}^{A}_{Z}X \\rightarrow {}^{A}_{Z-1}Y + {}^{0}_{+1}e + \\nu_e$",
      "${}^{A}_{Z}X^{*} \\rightarrow {}^{A}_{Z}X + {}^{0}_{0}\\gamma$"
    ],
    "Alpha decay removes two protons and two neutrons, so $A$ decreases by $4$ and $Z$ decreases by $2$."
  ),

  () => makeQuestion(
    "A nucleus with $A=238$ and $Z=92$ undergoes alpha decay. What are the daughter's values?",
    "$A=234,\\ Z=90$",
    [
      "$A=238,\\ Z=93$",
      "$A=234,\\ Z=94$",
      "$A=236,\\ Z=90$"
    ],
    "Alpha decay gives $A'=238-4=234$ and $Z'=92-2=90$."
  ),

  // Beta-minus decay
  () => makeQuestion(
    "What happens during beta-minus decay?",
    "A neutron becomes a proton, emitting an electron and an electron antineutrino.",
    [
      "A proton becomes a neutron, emitting a positron and an electron neutrino.",
      "The nucleus ejects two protons and two neutrons.",
      "An excited nucleus emits only a gamma-ray photon."
    ],
    "Beta-minus decay converts a neutron into a proton and emits $e^-$ and $\\bar{\\nu}_e$."
  ),

  () => makeQuestion(
    "Which equation correctly represents beta-minus decay?",
    "${}^{A}_{Z}X \\rightarrow {}^{A}_{Z+1}Y + {}^{0}_{-1}e + \\bar{\\nu}_e$",
    [
      "${}^{A}_{Z}X \\rightarrow {}^{A}_{Z-1}Y + {}^{0}_{+1}e + \\nu_e$",
      "${}^{A}_{Z}X \\rightarrow {}^{A-4}_{Z-2}Y + {}^{4}_{2}\\mathrm{He}$",
      "${}^{A}_{Z}X^{*} \\rightarrow {}^{A}_{Z}X + {}^{0}_{0}\\gamma$"
    ],
    "Beta-minus decay leaves $A$ unchanged and increases $Z$ by $1$."
  ),

  () => makeQuestion(
    "A nucleus with $A=14$ and $Z=6$ undergoes beta-minus decay. What are the daughter's values?",
    "$A=14,\\ Z=7$",
    [
      "$A=14,\\ Z=5$",
      "$A=10,\\ Z=4$",
      "$A=13,\\ Z=7$"
    ],
    "One neutron becomes a proton, so $A$ remains $14$ and $Z$ increases to $7$."
  ),

  // Beta-plus decay
  () => makeQuestion(
    "What happens during beta-plus decay?",
    "A proton becomes a neutron, emitting a positron and an electron neutrino.",
    [
      "A neutron becomes a proton, emitting an electron and an electron antineutrino.",
      "The nucleus ejects a helium-4 nucleus.",
      "An excited nucleus emits only a gamma-ray photon."
    ],
    "Beta-plus decay converts a proton into a neutron and emits $e^+$ and $\\nu_e$."
  ),

  () => makeQuestion(
    "Which equation correctly represents beta-plus decay?",
    "${}^{A}_{Z}X \\rightarrow {}^{A}_{Z-1}Y + {}^{0}_{+1}e + \\nu_e$",
    [
      "${}^{A}_{Z}X \\rightarrow {}^{A}_{Z+1}Y + {}^{0}_{-1}e + \\bar{\\nu}_e$",
      "${}^{A}_{Z}X \\rightarrow {}^{A-4}_{Z-2}Y + {}^{4}_{2}\\mathrm{He}$",
      "${}^{A}_{Z}X^{*} \\rightarrow {}^{A}_{Z}X + {}^{0}_{0}\\gamma$"
    ],
    "Beta-plus decay leaves $A$ unchanged and decreases $Z$ by $1$."
  ),

  () => makeQuestion(
    "A nucleus with $A=22$ and $Z=11$ undergoes beta-plus decay. What are the daughter's values?",
    "$A=22,\\ Z=10$",
    [
      "$A=22,\\ Z=12$",
      "$A=18,\\ Z=9$",
      "$A=21,\\ Z=10$"
    ],
    "One proton becomes a neutron, so $A$ remains $22$ and $Z$ decreases to $10$."
  ),

  // Gamma decay
  () => makeQuestion(
    "Which equation correctly represents gamma decay?",
    "${}^{A}_{Z}X^{*} \\rightarrow {}^{A}_{Z}X + {}^{0}_{0}\\gamma$",
    [
      "${}^{A}_{Z}X \\rightarrow {}^{A-4}_{Z-2}Y + {}^{4}_{2}\\mathrm{He}$",
      "${}^{A}_{Z}X \\rightarrow {}^{A}_{Z+1}Y + {}^{0}_{-1}e + \\bar{\\nu}_e$",
      "${}^{A}_{Z}X \\rightarrow {}^{A}_{Z-1}Y + {}^{0}_{+1}e + \\nu_e$"
    ],
    "An excited nucleus releases a gamma-ray photon without changing $A$ or $Z$."
  ),

  () => makeQuestion(
    "What does the asterisk in ${}^{A}_{Z}X^{*}$ indicate?",
    "The nucleus is in an excited energy state.",
    [
      "The nucleus contains no neutrons.",
      "The nucleus has a negative atomic number.",
      "The nucleus is an alpha particle."
    ],
    "The asterisk identifies an excited nucleus. Gamma emission allows it to transition to a lower-energy state."
  ),

  () => makeQuestion(
    "Which listed decay leaves both the mass number and atomic number unchanged?",
    "Gamma decay",
    [
      "Alpha decay",
      "Beta-minus decay",
      "Beta-plus decay"
    ],
    "Gamma decay releases energy without changing the number of protons or neutrons."
  ),

  // Comparing decay types
  () => makeQuestion(
    "Why do beta-minus and beta-plus decay leave the mass number unchanged?",
    "One nucleon changes type, but the total number of nucleons stays the same.",
    [
      "Both processes remove two protons and two neutrons.",
      "The emitted particle replaces a lost nucleon.",
      "Neither process changes a proton or neutron."
    ],
    "Beta-minus converts a neutron into a proton; beta-plus converts a proton into a neutron. The total nucleon count remains unchanged."
  ),

  () => makeQuestion(
    "Which pairing of decay type and emitted particles is correct?",
    "Beta-minus: electron and electron antineutrino",
    [
      "Beta-minus: positron and electron neutrino",
      "Beta-plus: electron and electron antineutrino",
      "Alpha: electron and positron"
    ],
    "Beta-minus emits $e^-$ and $\\bar{\\nu}_e$, while beta-plus emits $e^+$ and $\\nu_e$."
  ),

  // Baryon fundamentals
  () => makeQuestion(
    "What are baryons typically made of?",
    "Three quarks",
    [
      "Three electrons",
      "Two photons",
      "An electron and a positron"
    ],
    "The baryons in this topic each have three valence quarks."
  ),

  // Typed-answer baryon questions
  ...[
    {
      name: "Proton",
      symbol: "$p^{+}$",
      composition: "uud"
    },
    {
      name: "Neutron",
      symbol: "$n^{0}$",
      composition: "udd"
    },
    {
      name: "Delta minus",
      symbol: "$\\Delta^{-}$",
      composition: "ddd"
    },
    {
      name: "Delta double-plus",
      symbol: "$\\Delta^{++}$",
      composition: "uuu"
    },
    {
      name: "Omega minus",
      symbol: "$\\Omega^{-}$",
      composition: "sss"
    },
    {
      name: "Lambda",
      symbol: "$\\Lambda^{0}$",
      composition: "uds"
    },
    {
      name: "Sigma plus",
      symbol: "$\\Sigma^{+}$",
      composition: "uus"
    },
    {
      name: "Sigma zero",
      symbol: "$\\Sigma^{0}$",
      composition: "uds"
    },
    {
      name: "Sigma minus",
      symbol: "$\\Sigma^{-}$",
      composition: "dds"
    }
  ].map(({ name, symbol, composition }) => () => ({
    type: "text",
    question:
      `${name} (${symbol}): Enter its three-letter quark composition.`,
    correctAnswer: composition,
    placeholder: "Enter quark composition",
    hint: "Use u, d, and s. Order does not matter.",
    explanation:
      `${name} (${symbol}) has quark composition $${composition}$.`
  }))
],
"Galaxies": [
    () => makeQuestion(
      "Which letter represents elliptical galaxies in galaxy classification?",
      "E",
      ["S", "SB", "I"],
      "Elliptical galaxies are designated E."
    ),

    () => makeQuestion(
      "What does the classification E0 indicate about an elliptical galaxy?",
      "It appears nearly spherical.",
      [
        "It has tightly wound spiral arms.",
        "It has a prominent central bar.",
        "It has no stars."
      ],
      "E0 galaxies appear nearly spherical, while higher E numbers indicate a more flattened appearance."
    ),

    () => makeQuestion(
      "Which elliptical galaxy classification indicates the most flattened appearance?",
      "E7",
      ["E0", "E2", "E5"],
      "The elliptical galaxy sequence runs from E0, nearly spherical, to E7, flattened."
    ),

    () => makeQuestion(
      "How does the appearance of elliptical galaxies change from E0 to E7?",
      "They appear increasingly flattened.",
      [
        "Their spiral arms become more tightly wound.",
        "Their central bars become longer.",
        "They appear increasingly spherical."
      ],
      "Increasing E numbers indicate an increasingly flattened appearance."
    ),

    () => makeQuestion(
      "Which stellar population is characteristic of elliptical galaxies?",
      "Mostly old stars",
      [
        "Only newly formed stars",
        "Only stars orbiting in spiral arms",
        "No stars, only gas"
      ],
      "Elliptical galaxies are characterized by populations of mostly old stars."
    ),

    () => makeQuestion(
      "Which galaxy type is the most common?",
      "Elliptical galaxies",
      [
        "Spiral galaxies",
        "Barred spiral galaxies",
        "Irregular galaxies"
      ],
      "Elliptical galaxies are the most common galaxy type."
    ),

    () => makeQuestion(
      "How do stars typically orbit within an elliptical galaxy?",
      "In many different directions",
      [
        "All in the same direction within a thin disk",
        "Only along spiral arms",
        "Only in circular orbits around a central bar"
      ],
      "Stars in elliptical galaxies have orbits oriented in many different directions."
    ),

    () => makeQuestion(
      "What is a defining structural feature of a spiral galaxy?",
      "Spiral arms surrounding a central bulge",
      [
        "A nearly spherical shape with no disk",
        "A central bar with no surrounding stars",
        "An irregular distribution with no central structure"
      ],
      "Spiral galaxies have spiral arms arranged around a central bulge."
    ),

    () => makeQuestion(
      "What does S represent in galaxy classification?",
      "Spiral galaxy",
      [
        "Spherical galaxy",
        "Stellar stream",
        "Supernova bubble"
      ],
      "S is the designation for spiral galaxies."
    ),

    () => makeQuestion(
      "What distinguishes a barred spiral galaxy from an ordinary spiral galaxy?",
      "It has a bar-shaped structure through its center.",
      [
        "It contains no central bulge.",
        "It contains only old stars.",
        "It has no spiral arms."
      ],
      "Barred spiral galaxies have a central bar-shaped structure and are designated SB."
    ),

    () => makeQuestion(
      "Which designation identifies a barred spiral galaxy?",
      "SB",
      ["E", "S0", "S"],
      "SB identifies barred spiral galaxies."
    ),

    () => makeQuestion(
      "As spiral galaxy classifications progress from a to c, how do the spiral arms change?",
      "They become more loosely wound.",
      [
        "They become more tightly wound.",
        "They disappear entirely.",
        "They become a spherical halo."
      ],
      "From a to c, the spiral arms become more loosely wound."
    ),

    () => makeQuestion(
      "As spiral galaxy classifications progress from a to c, how does the central bulge change?",
      "It becomes smaller.",
      [
        "It becomes larger.",
        "It becomes a stellar stream.",
        "It becomes the entire galaxy."
      ],
      "From a to c, the central bulge becomes smaller."
    ),

    () => makeQuestion(
      "Compared with an Sa galaxy, which features would an Sc galaxy have?",
      "More loosely wound arms and a smaller central bulge",
      [
        "More tightly wound arms and a larger central bulge",
        "More loosely wound arms and a larger central bulge",
        "More tightly wound arms and a smaller central bulge"
      ],
      "The progression from a to c corresponds to more loosely wound arms and a smaller central bulge."
    ),

    () => makeQuestion(
      "How is the Milky Way classified?",
      "An SBbc barred spiral galaxy",
      [
        "An E0 elliptical galaxy",
        "An S0 galaxy",
        "An irregular galaxy"
      ],
      "The Milky Way is classified as a barred spiral galaxy of type SBbc."
    ),

    () => makeQuestion(
      "Where are the Milky Way's oldest stars found?",
      "In the halo",
      [
        "Only in the spiral arms",
        "Inside the central black hole",
        "Only in supernova bubbles"
      ],
      "The Milky Way's oldest stars are found in the halo."
    ),

    () => makeQuestion(
      "Which structures characterize an S0 galaxy?",
      "A smooth disk and a central bulge",
      [
        "Spiral arms with no central bulge",
        "A central black hole with no stars",
        "Only an irregular cloud of gas"
      ],
      "S0 galaxies have a smooth disk and a central bulge."
    ),

    () => makeQuestion(
      "S0 galaxies combine characteristics of which two galaxy types?",
      "Elliptical and spiral galaxies",
      [
        "Irregular and barred spiral galaxies",
        "Elliptical and irregular galaxies",
        "Dwarf galaxies and stellar streams"
      ],
      "S0 galaxies combine characteristics of elliptical and spiral galaxies."
    ),

    () => makeQuestion(
      "Which description best matches an irregular galaxy?",
      "A galaxy that does not fit the other regular shape categories",
      [
        "A galaxy with tightly wound spiral arms",
        "A galaxy with a smooth disk and bulge",
        "A galaxy classified between E0 and E7"
      ],
      "Irregular galaxies do not fit the other regular galaxy shape categories."
    ),

    () => makeQuestion(
      "Approximately what percentage of all galaxies are irregular?",
      "25%",
      ["5%", "50%", "75%"],
      "Irregular galaxies account for approximately 25% of all galaxies."
    ),

    () => makeQuestion(
      "What is a galactic year?",
      "The time the Sun takes to complete one orbit around the Milky Way's center",
      [
        "The time Earth takes to orbit the Sun",
        "The time light takes to cross the Milky Way",
        "The time a supernova takes to form a bubble"
      ],
      "A galactic year is one complete orbit of the Sun around the Milky Way's center, where Sagittarius A* is located."
    ),

    () => makeQuestion(
      "Approximately how long is a galactic year?",
      "225 million years",
      [
        "225 thousand years",
        "100 million years",
        "225 billion years"
      ],
      "The Sun's orbital period around the Galactic center is approximately 225 million years."
    ),

    () => makeQuestion(
      "Approximately how wide is the Milky Way?",
      "100,000 light-years",
      [
        "100 light-years",
        "1,000 light-years",
        "225 million light-years"
      ],
      "The Milky Way is approximately 100,000 light-years across."
    ),

    () => makeQuestion(
      "How do supernovae create clear bubbles in interstellar gas?",
      "They sweep away surrounding gas, creating a clearer region.",
      [
        "They gather all surrounding stars into a central bulge.",
        "They turn spiral galaxies into elliptical galaxies.",
        "They stop the Sun from orbiting the Galactic center."
      ],
      "Supernovae sweep away surrounding gas to form clearer bubble-like regions, allowing a relatively clear view."
    ),

    () => makeQuestion(
      "Which galaxy is the Milky Way currently merging with, and what does this interaction produce?",
      "The Sagittarius Dwarf Spheroidal Galaxy, producing stellar streams",
      [
        "An E7 galaxy, producing a central bar",
        "An S0 galaxy, producing supernova bubbles",
        "An Sc galaxy, producing the Galactic halo in a single event"
      ],
      "The Milky Way is merging with the Sagittarius Dwarf Spheroidal Galaxy. Stars pulled from the dwarf galaxy form stellar streams."
    ),

    () => makeQuestion(
      "What powers an active galactic nucleus?",
      "Matter falling toward and accreting onto a central black hole",
      [
        "Stars orbiting in different directions",
        "The winding of a galaxy's spiral arms",
        "The Sun completing a galactic year"
      ],
      "An active galactic nucleus is powered by matter accreting onto the galaxy's central black hole."
    )
]
};
