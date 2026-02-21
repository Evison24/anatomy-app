export const organsData = {
  heart: {
    en: {
      name: "Heart",
      overview:
        "The heart is a muscular organ that pumps blood throughout the body.",
      function: [
        "Pumps oxygenated blood to the body",
        "Supplies nutrients to tissues",
        "Removes carbon dioxide and waste",
      ],
      location:
        "Located in the chest cavity, slightly to the left of the center.",
      importance:
        "Essential for life, as it maintains blood circulation and oxygen delivery.",
      diseases: [
        {
          name: "Coronary artery disease",
          description:
            "A condition caused by narrowed or blocked coronary arteries.",
          causes: ["High cholesterol", "Smoking", "High blood pressure"],
          symptoms: ["Chest pain", "Shortness of breath", "Fatigue"],
          treatment: "Lifestyle changes, medication, or surgery",
        },
        {
          name: "Heart failure",
          description:
            "A condition in which the heart cannot pump blood effectively.",
          causes: ["Heart attack", "High blood pressure"],
          symptoms: ["Swelling", "Fatigue", "Breathing difficulty"],
          treatment: "Medication, lifestyle changes, medical devices",
        },
      ],
    },

    sq: {
      name: "Zemra",
      overview:
        "Zemra është një organ muskulor që pompon gjakun në të gjithë trupin.",
      function: [
        "Pompon gjak të pasur me oksigjen",
        "Furnizon indet me lëndë ushqyese",
        "Largon dioksidin e karbonit",
      ],
      location: "Ndodhet në kraharor, pak në anën e majtë të qendrës.",
      importance: "Jetike për mbijetesën, pasi siguron qarkullimin e gjakut.",
      diseases: [
        {
          name: "Sëmundja koronare",
          description: "Ngushtimi ose bllokimi i arterieve koronare.",
          causes: ["Kolesteroli i lartë", "Duhanpirja", "Hipertensioni"],
          symptoms: ["Dhimbje gjoksi", "Vështirësi në frymëmarrje", "Lodhje"],
          treatment: "Ndryshime në stilin e jetesës, ilaçe, kirurgji",
        },
        {
          name: "Dështimi i zemrës",
          description: "Zemra nuk pompon gjak mjaftueshëm për trupin.",
          causes: ["Infarkt", "Tension i lartë"],
          symptoms: ["Ënjtje", "Lodhje", "Frymëmarrje e vështirë"],
          treatment: "Medikamente dhe terapi mbështetëse",
        },
      ],
    },
  },

  lungs: {
    en: {
      name: "Lungs",
      overview: "The lungs are responsible for breathing and gas exchange.",
      function: ["Oxygen intake", "Carbon dioxide removal"],
      location: "Located in the chest cavity on both sides of the heart.",
      importance: "Provide oxygen necessary for cellular respiration.",
      diseases: [
        {
          name: "Asthma",
          description: "Chronic inflammation of the airways.",
          causes: ["Allergens", "Genetics"],
          symptoms: ["Wheezing", "Shortness of breath"],
          treatment: "Inhalers and medication",
        },
      ],
    },

    sq: {
      name: "Mushkëritë",
      overview:
        "Mushkëritë janë përgjegjëse për frymëmarrjen dhe shkëmbimin e gazeve.",
      function: ["Marrja e oksigjenit", "Largimi i dioksidit të karbonit"],
      location: "Ndodhen në kraharor në të dy anët e zemrës.",
      importance: "Sigurojnë oksigjen për funksionimin e qelizave.",
      diseases: [
        {
          name: "Astma",
          description: "Inflamacion kronik i rrugëve të frymëmarrjes.",
          causes: ["Alergji", "Faktorë gjenetikë"],
          symptoms: ["Fishkëllimë", "Vështirësi në frymëmarrje"],
          treatment: "Inhalatorë dhe ilaçe",
        },
      ],
    },
  },

  liver: {
    en: {
      name: "Liver",
      overview:
        "The liver is a vital organ involved in metabolism and detoxification.",
      function: [
        "Detoxifies harmful substances",
        "Produces bile",
        "Stores nutrients",
      ],
      location: "Located in the upper right side of the abdomen.",
      importance: "Essential for metabolism and digestion.",
      diseases: [
        {
          name: "Hepatitis",
          description: "Inflammation of the liver caused by viruses.",
          causes: ["Viral infection", "Alcohol"],
          symptoms: ["Jaundice", "Fatigue"],
          treatment: "Medication and lifestyle changes",
        },
      ],
    },

    sq: {
      name: "Mëlçia",
      overview: "Mëlçia është organ jetik për metabolizmin dhe detoksifikimin.",
      function: [
        "Detoksifikon substancat e dëmshme",
        "Prodhon biliare",
        "Ruajtja e lëndëve ushqyese",
      ],
      location: "Ndodhet në pjesën e sipërme të djathtë të barkut.",
      importance: "Thelbësore për tretjen dhe metabolizmin.",
      diseases: [
        {
          name: "Hepatiti",
          description: "Inflamacion i mëlçisë i shkaktuar nga viruse.",
          causes: ["Infeksion viral", "Alkool"],
          symptoms: ["Verdhëz", "Lodhje"],
          treatment: "Medikamente dhe ndryshim stili jetese",
        },
      ],
    },
  },
};
