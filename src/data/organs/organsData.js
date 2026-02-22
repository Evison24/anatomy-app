export const organsData = {
  heart: {
    en: {
      name: "Heart",
      overview:
        "The heart is a muscular organ that pumps blood throughout the body.",
      structure: [
        {
          name: "Right atrium",
          description: "Receives deoxygenated blood from the body.",
        },
        {
          name: "Left atrium",
          description: "Receives oxygenated blood from the lungs.",
        },
        { name: "Right ventricle", description: "Pumps blood to the lungs." },
        {
          name: "Left ventricle",
          description: "Pumps oxygenated blood to the body.",
        },
        {
          name: "Heart valves",
          description: "Ensure one-way blood flow through the heart.",
        },
      ],
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
      structure: [
        {
          name: "Atriumi i djathtë",
          description: "Merr gjak të paoksigjenuar nga trupi.",
        },
        {
          name: "Atriumi i majtë",
          description: "Merr gjak të oksigjenuar nga mushkëritë.",
        },
        {
          name: "Ventrikuli i djathtë",
          description: "Pompon gjakun drejt mushkërive.",
        },
        {
          name: "Ventrikuli i majtë",
          description: "Pompon gjakun e oksigjenuar në trup.",
        },
        {
          name: "Valvulat e zemrës",
          description: "Sigurojnë rrjedhje njëkahëshe të gjakut.",
        },
      ],
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
      structure: [
        {
          name: "Right lung",
          description: "Has three lobes and performs gas exchange.",
        },
        {
          name: "Left lung",
          description: "Has two lobes and leaves space for the heart.",
        },
        {
          name: "Bronchi",
          description: "Airways that carry air into the lungs.",
        },
        {
          name: "Alveoli",
          description:
            "Tiny air sacs where oxygen and carbon dioxide are exchanged.",
        },
      ],
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
      structure: [
        {
          name: "Mushkëria e djathtë",
          description: "Ka tre lobe dhe kryen shkëmbimin e gazeve.",
        },
        {
          name: "Mushkëria e majtë",
          description: "Ka dy lobe dhe lë hapësirë për zemrën.",
        },
        {
          name: "Bronket",
          description: "Rrugë ajri që çojnë ajrin në mushkëri.",
        },
        {
          name: "Alveolat",
          description: "Qese të vogla ajri ku ndodh shkëmbimi i gazeve.",
        },
      ],
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
      structure: [
        {
          name: "Right lobe",
          description: "Largest lobe responsible for most liver functions.",
        },
        {
          name: "Left lobe",
          description: "Smaller lobe that assists in metabolic processes.",
        },
        {
          name: "Bile ducts",
          description: "Transport bile to the gallbladder and intestine.",
        },
      ],
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
      structure: [
        {
          name: "Lobi i djathtë",
          description:
            "Lobi më i madh që kryen shumicën e funksioneve të mëlçisë.",
        },
        {
          name: "Lobi i majtë",
          description: "Lob më i vogël që ndihmon në proceset metabolike.",
        },
        {
          name: "Kanalet biliare",
          description:
            "Transportojnë biliare drejt fshikëzës së tëmthit dhe zorrëve.",
        },
      ],
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

  small_intestine: {
    en: {
      name: "Small Intestine",
      overview:
        "The small intestine is a long, coiled organ responsible for most digestion and nutrient absorption.",
      structure: [
        {
          name: "Duodenum",
          description: "Receives partially digested food from the stomach.",
        },
        { name: "Jejunum", description: "Absorbs most nutrients." },
        {
          name: "Ileum",
          description: "Absorbs remaining nutrients and bile salts.",
        },
      ],
      function: [
        "Digests food chemically and mechanically",
        "Absorbs nutrients into the bloodstream",
        "Continues digestion from the stomach",
      ],

      location:
        "Located in the abdominal cavity, between the stomach and the large intestine.",

      importance:
        "The small intestine is essential for nutrition and energy. Damage or disease can lead to malnutrition.",

      diseases: [
        {
          name: "Celiac Disease",
          description:
            "An autoimmune disorder where gluten intake damages the lining of the small intestine.",

          causes: ["Autoimmune reaction", "Genetic predisposition"],
          symptoms: ["Abdominal pain", "Diarrhea", "Weight loss", "Fatigue"],
          treatment: "Lifelong gluten-free diet and nutritional support.",
        },
      ],
    },

    sq: {
      name: "Zorra e Hollë",
      overview:
        "Zorra e hollë është një organ i gjatë dhe i përdredhur që kryen pjesën më të madhe të tretjes dhe përthithjes së lëndëve ushqyese.",
      structure: [
        {
          name: "Duodenumi",
          description: "Merr ushqimin pjesërisht të tretur nga stomaku.",
        },
        {
          name: "Jejunumi",
          description: "Përthith pjesën më të madhe të lëndëve ushqyese.",
        },
        {
          name: "Ileumi",
          description:
            "Përthith lëndët ushqyese të mbetura dhe kripërat biliare.",
        },
      ],
      function: [
        "Tret ushqimin në mënyrë kimike dhe mekanike",
        "Përthith lëndët ushqyese në gjak",
        "Vazhdon procesin e tretjes nga stomaku",
      ],

      location:
        "Ndodhet në zgavrën e barkut, midis stomakut dhe zorrës së trashë.",

      importance:
        "Zorra e hollë është thelbësore për ushqyerjen dhe energjinë e trupit.",

      diseases: [
        {
          name: "Sëmundja Celiake",
          description:
            "Sëmundje autoimune ku gluteni dëmton mukozën e zorrës së hollë.",

          causes: ["Reaksion autoimun", "Predispozitë gjenetike"],
          symptoms: ["Dhimbje barku", "Diarre", "Humbje peshe", "Lodhje"],
          treatment:
            "Dietë pa gluten gjatë gjithë jetës dhe mbështetje ushqimore.",
        },
      ],
    },
  },

  large_intestine: {
    en: {
      name: "Large Intestine",
      overview:
        "The large intestine is the final part of the digestive system, responsible for absorbing water and forming waste for elimination.",
      structure: [
        {
          name: "Cecum",
          description: "Receives waste from the small intestine.",
        },
        { name: "Colon", description: "Absorbs water and forms feces." },
        { name: "Rectum", description: "Stores feces before elimination." },
      ],
      function: [
        "Absorbs water and electrolytes",
        "Forms and stores feces",
        "Supports gut bacteria activity",
      ],

      location:
        "Located in the abdominal cavity, surrounding the small intestine and ending at the rectum.",

      importance:
        "The large intestine is essential for maintaining fluid balance and proper waste elimination.",

      diseases: [
        {
          name: "Irritable Bowel Syndrome (IBS)",
          description:
            "A functional disorder affecting the large intestine, causing changes in bowel habits and abdominal discomfort.",

          causes: ["Gut-brain interaction issues", "Stress", "Dietary factors"],
          symptoms: ["Abdominal pain", "Bloating", "Constipation or diarrhea"],
          treatment:
            "Dietary changes, stress management, and symptom-focused treatment.",
        },
      ],
    },

    sq: {
      name: "Zorra e Trashë",
      overview:
        "Zorra e trashë është pjesa e fundit e sistemit tretës që përthith ujin dhe formon mbetjet për eliminim.",
      structure: [
        { name: "Cekumi", description: "Merr mbetjet nga zorra e hollë." },
        { name: "Koloni", description: "Përthith ujin dhe formon feçet." },
        { name: "Rektumi", description: "Ruan feçet para eliminimit." },
      ],
      function: [
        "Përthith ujin dhe elektrolitet",
        "Formon dhe ruan feçet",
        "Mbështet aktivitetin e baktereve të dobishme",
      ],

      location:
        "Ndodhet në zgavrën e barkut, rrethon zorrën e hollë dhe përfundon te rektumi.",

      importance:
        "Zorra e trashë është thelbësore për ekuilibrin e lëngjeve dhe eliminimin e mbetjeve.",

      diseases: [
        {
          name: "Sindroma e Zorrës së Irrituar (IBS)",
          description:
            "Çrregullim funksional që prek zorrën e trashë dhe shkakton ndryshime në jashtëqitje.",

          causes: [
            "Ndërveprim i çrregulluar zorrë-tru",
            "Stres",
            "Faktorë ushqimorë",
          ],
          symptoms: ["Dhimbje barku", "Fryrje", "Kapsllëk ose diarre"],
          treatment:
            "Ndryshime në dietë, menaxhim i stresit dhe trajtim simptomatik.",
        },
      ],
    },
  },

  brain: {
    en: {
      name: "Brain",
      overview:
        "The brain is the control center of the nervous system, responsible for thought, movement, sensation, memory, and regulation of vital body functions.",
      structure: [
        {
          name: "Cerebrum",
          description: "Controls thinking, memory, and voluntary movement.",
        },
        {
          name: "Cerebellum",
          description: "Coordinates balance and precise movements.",
        },
        {
          name: "Brainstem",
          description: "Controls vital functions like breathing and heartbeat.",
        },
      ],
      function: [
        "Controls voluntary and involuntary actions",
        "Processes sensory information",
        "Regulates emotions, memory, and cognition",
        "Maintains vital functions such as breathing and heart rate",
      ],

      location: "Located inside the skull, protected by the cranial bones.",

      importance:
        "The brain is essential for life. Damage can affect physical function, cognition, personality, or consciousness.",

      diseases: [
        {
          name: "Stroke",
          description:
            "A condition caused by interruption of blood flow to the brain, leading to brain cell damage.",

          causes: ["Blocked blood vessels", "Bleeding in the brain"],
          symptoms: [
            "Sudden weakness",
            "Speech difficulties",
            "Vision problems",
          ],
          treatment:
            "Emergency medical care, medication, rehabilitation, and lifestyle management.",
          interesting_fact:
            "The brain accounts for only about 2% of body weight but consumes around 20% of the body's energy.",
        },
      ],
    },

    sq: {
      name: "Truri",
      overview:
        "Truri është qendra kryesore e sistemit nervor dhe kontrollon mendimin, lëvizjen, ndjesitë, kujtesën dhe funksionet jetësore.",
      structure: [
        {
          name: "Truri i madh",
          description: "Kontrollon mendimin, kujtesën dhe lëvizjet vullnetare.",
        },
        {
          name: "Truri i vogël",
          description: "Koordinon ekuilibrin dhe lëvizjet e sakta.",
        },
        {
          name: "Trungu i trurit",
          description:
            "Kontrollon funksione jetësore si frymëmarrja dhe rrahjet e zemrës.",
        },
      ],
      function: [
        "Kontrollon veprimet vullnetare dhe të pavullnetshme",
        "Përpunon informacionin shqisor",
        "Rregullon emocionet, kujtesën dhe mendimin",
        "Mban funksione jetësore si frymëmarrja dhe rrahjet e zemrës",
      ],

      location: "Ndodhet brenda kafkës dhe mbrohet nga kockat kraniale.",

      importance:
        "Truri është thelbësor për jetën dhe funksionimin normal të trupit.",

      diseases: [
        {
          name: "Goditja në Tru",
          description:
            "Gjendje e shkaktuar nga ndërprerja e furnizimit me gjak të trurit.",

          causes: ["Bllokim i enëve të gjakut", "Gjakderdhje cerebrale"],
          symptoms: [
            "Dobësi e papritur",
            "Vështirësi në të folur",
            "Probleme me shikimin",
          ],
          treatment:
            "Ndërhyrje urgjente mjekësore, medikamente dhe rehabilitim.",
          interesting_fact:
            "Truri përbën vetëm rreth 2% të peshës së trupit, por konsumon rreth 20% të energjisë së trupit.",
        },
      ],
    },
  },

  stomach: {
    en: {
      name: "Stomach",
      overview:
        "The stomach is a muscular organ that temporarily stores food and begins the process of digestion using acids and enzymes.",

      function: [
        "Stores food after swallowing",
        "Breaks down food using gastric acid",
        "Controls the release of food into the small intestine",
      ],

      location:
        "Located in the upper left part of the abdomen, beneath the diaphragm and next to the liver.",

      importance:
        "The stomach is essential for digestion and preparation of nutrients for absorption in the small intestine.",

      diseases: [
        {
          name: "Gastritis",
          description:
            "Inflammation of the stomach lining that can cause pain and digestive discomfort.",

          causes: [
            "Helicobacter pylori infection",
            "Excessive alcohol use",
            "Long-term use of painkillers",
          ],
          symptoms: ["Abdominal pain", "Nausea", "Bloating"],
          treatment:
            "Treatment includes medication to reduce stomach acid, antibiotics if caused by infection, and dietary changes.",

          interesting_fact:
            "The stomach produces a strong acid capable of dissolving metal, yet it does not digest itself due to a protective mucus lining.",
        },
      ],
    },

    sq: {
      name: "Stomaku",
      overview:
        "Stomaku është një organ muskulor që ruan përkohësisht ushqimin dhe fillon procesin e tretjes përmes acideve dhe enzimave.",

      function: [
        "Ruan ushqimin pas gëlltitjes",
        "Shpërbën ushqimin me acid gastrik",
        "Rregullon kalimin e ushqimit në zorrën e hollë",
      ],

      location:
        "Ndodhet në pjesën e sipërme të majtë të barkut, nën diafragmë dhe pranë mëlçisë.",

      importance:
        "Stomaku është thelbësor për tretjen dhe përgatitjen e lëndëve ushqyese për përthithje.",

      diseases: [
        {
          name: "Gastriti",
          description:
            "Inflamacion i mukozës së stomakut që shkakton dhimbje dhe shqetësime tretëse.",

          causes: [
            "Infeksion nga Helicobacter pylori",
            "Përdorim i tepruar i alkoolit",
            "Përdorim afatgjatë i qetësuesve",
          ],
          symptoms: ["Dhimbje barku", "Të përziera", "Fryrje"],
          treatment:
            "Trajtimi përfshin medikamente për uljen e acidit, antibiotikë në rast infeksioni dhe ndryshime në dietë.",

          interesting_fact:
            "Acidi i stomakut është aq i fortë sa mund të tretë metalin, por stomaku mbrohet nga një shtresë mukusi mbrojtës.",
        },
      ],
    },
  },
};
