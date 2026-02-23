export const organsData = {
  heart: {
    en: {
      name: "Heart",
      overview:
        "The heart (Cor) is a muscular organ of the cardiovascular system that functions as the central pump for blood circulation. It is located in the mediastinum between the lungs, behind the sternum and above the diaphragm, with its apex pointing to the left. It has a conical shape, weighs about 300 grams, and is approximately the size of a clenched fist.",

      structure: [
        {
          name: "Right atrium",
          description:
            "Receives deoxygenated blood from the body and directs it to the right ventricle.",
        },
        {
          name: "Left atrium",
          description:
            "Receives oxygenated blood from the lungs and transfers it to the left ventricle.",
        },
        {
          name: "Right ventricle",
          description:
            "Pumps deoxygenated blood to the lungs through the pulmonary circulation.",
        },
        {
          name: "Left ventricle",
          description:
            "Pumps oxygenated blood into the systemic circulation; it has the thickest myocardial wall.",
        },
        {
          name: "Heart valves",
          description:
            "Includes the tricuspid, mitral, pulmonary, and aortic valves, ensuring one-way blood flow and preventing backflow.",
        },
        {
          name: "Heart wall layers",
          description:
            "Composed of endocardium (inner layer), myocardium (muscular layer), and epicardium (outer layer), surrounded by the pericardium which reduces friction.",
        },
        {
          name: "Coronary arteries",
          description:
            "Right and left coronary arteries supply the heart muscle with oxygenated blood.",
        },
      ],

      function: [
        "Maintains pulmonary and systemic circulation",
        "Pumps approximately 5 liters of blood per minute at rest",
        "Ensures oxygen and nutrient delivery to tissues",
        "Removes carbon dioxide and metabolic waste",
      ],

      location:
        "Located in the mediastinum of the chest cavity, between the lungs, behind the sternum, and above the diaphragm.",

      importance:
        "Vital for sustaining life by maintaining continuous blood circulation and tissue oxygenation.",

      diseases: [
        {
          name: "Myocardial infarction",
          description:
            "Occurs when a coronary artery is blocked, causing damage to the heart muscle.",
          causes: ["Coronary artery blockage", "Atherosclerosis"],
          symptoms: ["Chest pain", "Shortness of breath", "Sweating", "Nausea"],
          treatment:
            "Medication, coronary stent placement, bypass surgery, lifestyle changes",
        },
        {
          name: "Arrhythmias",
          description:
            "Abnormal heart rhythms caused by disturbances in the electrical conduction system.",
          causes: ["Electrical conduction disorders", "Ischemic heart disease"],
          symptoms: ["Palpitations", "Dizziness", "Fainting"],
          treatment:
            "Medication, pacemaker implantation, or other medical interventions",
        },
        {
          name: "Heart failure",
          description:
            "A condition in which the heart cannot pump sufficient blood to meet the body's needs.",
          causes: ["Previous heart attack", "Chronic hypertension"],
          symptoms: ["Fatigue", "Edema", "Breathing difficulty"],
          treatment:
            "Medication, lifestyle modification, medical devices, transplantation",
        },
      ],
    },

    sq: {
      name: "Zemra",
      overview:
        "Zemra (Cor) është organ muskulor i sistemit kardiovaskular që funksionon si pompë qendrore për qarkullimin e gjakut. Ndodhet në mediastinum, midis mushkërive, pas sternumit dhe mbi diafragmë, me majën e drejtuar majtas (apex cordis). Ka formë konike, peshon rreth 300 gram dhe ka madhësinë e një grushti.",

      structure: [
        {
          name: "Atriumi i djathtë",
          description:
            "Merr gjakun e paoksigjenuar nga trupi dhe e dërgon drejt ventrikulit të djathtë.",
        },
        {
          name: "Atriumi i majtë",
          description:
            "Merr gjakun e oksigjenuar nga mushkëritë dhe e kalon në ventrikulin e majtë.",
        },
        {
          name: "Ventrikuli i djathtë",
          description:
            "Pompon gjakun drejt mushkërive përmes qarkullimit pulmonar.",
        },
        {
          name: "Ventrikuli i majtë",
          description:
            "Pompon gjakun e oksigjenuar në qarkullimin sistemik dhe ka murin më të trashë muskulor.",
        },
        {
          name: "Valvulat e zemrës",
          description:
            "Përfshijnë valvulën trikuspidale, mitrale, pulmonare dhe aortale, duke siguruar rrjedhje njëkahëshe të gjakut.",
        },
        {
          name: "Shtresat e murit të zemrës",
          description:
            "Përbëhen nga endokardi, miokardi dhe epikardi, të mbështjella nga perikardi që zvogëlon fërkimin.",
        },
        {
          name: "Arteriet koronare",
          description:
            "Arteriet koronare furnizojnë muskujt e zemrës me gjak të oksigjenuar.",
        },
      ],

      function: [
        "Realizon qarkullimin pulmonar dhe sistemik",
        "Pompon rreth 5 litra gjak në minutë në gjendje pushimi",
        "Furnizon indet me oksigjen dhe lëndë ushqyese",
        "Largon dioksidin e karbonit dhe mbetjet metabolike",
      ],

      location:
        "Ndodhet në mediastinum, midis mushkërive, pas sternumit dhe mbi diafragmë.",

      importance:
        "Organ jetik që mban gjallë organizmin përmes qarkullimit të vazhdueshëm të gjakut.",

      diseases: [
        {
          name: "Infarkti i miokardit",
          description:
            "Shkaktohet nga bllokimi i arterieve koronare dhe dëmton muskulin e zemrës.",
          causes: ["Bllokim i arterieve koronare", "Ateroskleroza"],
          symptoms: ["Dhimbje gjoksi", "Frymëmarrje e vështirë", "Djersitje"],
          treatment:
            "Medikamente, vendosje stenti, bypass koronare, ndryshim i stilit të jetesës",
        },
        {
          name: "Aritmitë",
          description:
            "Çrregullime të ritmit të zemrës për shkak të problemeve në sistemin përçues elektrik.",
          causes: ["Çrregullime elektrike", "Sëmundje ishemike"],
          symptoms: ["Rrahje të çrregullta", "Marramendje", "Humbje ndjenje"],
          treatment: "Medikamente, pacemaker ose ndërhyrje të tjera mjekësore",
        },
        {
          name: "Insuficienca kardiake",
          description:
            "Gjendje në të cilën zemra nuk pompon gjak të mjaftueshëm për nevojat e trupit.",
          causes: ["Infarkt i mëparshëm", "Hipertension kronik"],
          symptoms: ["Lodhje", "Ënjtje", "Vështirësi në frymëmarrje"],
          treatment:
            "Medikamente, terapi mbështetëse, pajisje mjekësore, transplantim",
        },
      ],
    },
  },

  lungs: {
    en: {
      name: "Lungs",
      overview:
        "The lungs (Pulmones) are organs of the respiratory system responsible for gas exchange, enabling oxygen intake and carbon dioxide removal. They are located in the thoracic cavity within the pleural space, separated from the heart by the mediastinum.",

      structure: [
        {
          name: "Right lung",
          description:
            "Consists of three lobes (superior, middle, and inferior) and is slightly larger than the left lung.",
        },
        {
          name: "Left lung",
          description:
            "Consists of two lobes (superior and inferior) and has a cardiac notch to accommodate the heart.",
        },
        {
          name: "Pulmonary hilum",
          description:
            "The medial region where the main bronchus, pulmonary artery, pulmonary veins, lymphatic vessels, and nerves enter and exit the lung.",
        },
        {
          name: "Bronchial tree",
          description:
            "Includes bronchi and bronchioles that conduct air from the trachea to the alveoli.",
        },
        {
          name: "Alveoli",
          description:
            "Microscopic air sacs surrounded by capillaries where gas exchange occurs.",
        },
      ],

      function: [
        "Facilitates oxygen uptake into the bloodstream",
        "Removes carbon dioxide from the blood",
        "Maintains acid-base balance through respiration",
      ],

      location:
        "Located in the thoracic cavity on either side of the mediastinum, within the pleural cavities.",

      importance:
        "Essential for cellular respiration by supplying oxygen and eliminating carbon dioxide.",

      diseases: [
        {
          name: "Pneumonia",
          description:
            "An infection that inflames the alveoli, which may fill with fluid or pus.",
          causes: ["Bacterial infection", "Viral infection"],
          symptoms: ["Fever", "Cough", "Shortness of breath"],
          treatment: "Antibiotics, antivirals, supportive care",
        },
        {
          name: "Asthma",
          description:
            "A chronic inflammatory disease of the airways causing reversible airflow obstruction.",
          causes: ["Allergens", "Genetic predisposition"],
          symptoms: ["Wheezing", "Chest tightness", "Dyspnea"],
          treatment: "Bronchodilators, corticosteroids",
        },
        {
          name: "Pulmonary emphysema",
          description:
            "A condition characterized by destruction of alveolar walls and reduced respiratory surface.",
          causes: ["Smoking", "Chronic air pollution"],
          symptoms: ["Breathlessness", "Chronic cough"],
          treatment: "Smoking cessation, oxygen therapy, medication",
        },
      ],
    },

    sq: {
      name: "Mushkëritë",
      overview:
        "Mushkëritë (Pulmones) janë organe të sistemit respirator që kryejnë shkëmbimin e gazeve, duke marrë oksigjen dhe duke larguar dioksidin e karbonit. Ato ndodhen në zgavrën e kraharorit, brenda hapësirës pleurale, të ndara nga zemra përmes mediastinum-it.",

      structure: [
        {
          name: "Mushkëria e djathtë",
          description:
            "Përbëhet nga tre lobe (superior, medius dhe inferior) dhe është më e madhe se mushkëria e majtë.",
        },
        {
          name: "Mushkëria e majtë",
          description:
            "Përbëhet nga dy lobe dhe ka incisura cardiaca për shkak të pozicionit të zemrës.",
        },
        {
          name: "Hilumi pulmonar",
          description:
            "Zona mediale ku hyjnë dhe dalin bronku kryesor, arteria pulmonare, venat pulmonare, enët limfatike dhe nervat.",
        },
        {
          name: "Pema bronkiale",
          description:
            "Përfshin bronket dhe bronkiolet që përcjellin ajrin drejt alveolave.",
        },
        {
          name: "Alveolat",
          description:
            "Qese mikroskopike të rrethuara nga kapilarë ku ndodh shkëmbimi i gazeve.",
        },
      ],

      function: [
        "Marrja e oksigjenit në gjak",
        "Largimi i dioksidit të karbonit",
        "Rregullimi i ekuilibrit acid-bazë",
      ],

      location:
        "Ndodhen në zgavrën e kraharorit, në të dy anët e mediastinum-it, brenda zgavrave pleurale.",

      importance:
        "Janë thelbësore për frymëmarrjen qelizore dhe furnizimin e organizmit me oksigjen.",

      diseases: [
        {
          name: "Pneumonia",
          description:
            "Infeksion i alveolave që mund të mbushen me lëng ose qelb.",
          causes: ["Infeksione bakteriale", "Infeksione virale"],
          symptoms: ["Temperaturë", "Kollë", "Vështirësi në frymëmarrje"],
          treatment: "Antibiotikë, terapi mbështetëse",
        },
        {
          name: "Astma bronkiale",
          description:
            "Sëmundje kronike inflamatore e rrugëve të frymëmarrjes me ngushtim të kthyeshëm.",
          causes: ["Alergji", "Predispozicion gjenetik"],
          symptoms: [
            "Fishkëllimë",
            "Shtrëngim në gjoks",
            "Frymëmarrje e vështirë",
          ],
          treatment: "Bronkodilatuese, kortikosteroide",
        },
        {
          name: "Emfizema pulmonare",
          description:
            "Dëmtim i alveolave që redukton sipërfaqen e shkëmbimit të gazeve.",
          causes: ["Duhanpirja", "Ndotja kronike e ajrit"],
          symptoms: ["Mungesë fryme", "Kollë kronike"],
          treatment: "Ndërprerje e duhanit, oksigjenoterapi, medikamente",
        },
      ],
    },
  },

  liver: {
    en: {
      name: "Liver",
      overview:
        "The liver (Hepar) is the largest gland in the human body and a vital organ of the digestive and metabolic systems. It is located in the upper right quadrant of the abdomen beneath the diaphragm and above the stomach. In adults, it weighs approximately 1.2–1.5 kg and has a reddish-brown color with a soft consistency.",

      structure: [
        {
          name: "Right lobe",
          description:
            "The largest lobe of the liver, responsible for the majority of metabolic and detoxification functions.",
        },
        {
          name: "Left lobe",
          description:
            "Smaller than the right lobe and contributes to metabolic and synthetic processes.",
        },
        {
          name: "Caudate lobe",
          description:
            "A posterior lobe with independent vascular supply and drainage.",
        },
        {
          name: "Quadrate lobe",
          description:
            "Located on the inferior surface of the liver and functionally related to the left lobe.",
        },
        {
          name: "Porta hepatis",
          description:
            "The gateway of the liver where the portal vein, hepatic artery, and hepatic duct enter and exit, forming the portal triad.",
        },
        {
          name: "Glisson's capsule",
          description:
            "A fibrous capsule that surrounds and protects the liver tissue.",
        },
      ],

      function: [
        "Metabolizes carbohydrates, fats, and proteins",
        "Stores glycogen, vitamins, and iron",
        "Detoxifies drugs and harmful substances",
        "Produces bile for fat digestion",
        "Synthesizes blood clotting factors",
        "Breaks down old red blood cells",
      ],

      location:
        "Located in the upper right region of the abdomen, beneath the diaphragm and above the stomach.",

      importance:
        "Essential for metabolism, digestion, detoxification, and overall homeostasis of the body.",

      diseases: [
        {
          name: "Hepatitis",
          description:
            "Inflammation of the liver, most commonly caused by viral infections.",
          causes: ["Viral infection", "Alcohol abuse", "Toxins"],
          symptoms: ["Jaundice", "Fatigue", "Abdominal pain"],
          treatment: "Antiviral medication, lifestyle modification",
        },
        {
          name: "Liver cirrhosis",
          description:
            "Chronic liver damage characterized by fibrosis and loss of normal liver structure.",
          causes: ["Chronic alcohol use", "Chronic hepatitis"],
          symptoms: ["Ascites", "Fatigue", "Bleeding tendency"],
          treatment:
            "Lifestyle changes, medical management, liver transplantation",
        },
        {
          name: "Fatty liver disease",
          description:
            "Excess fat accumulation in liver cells, which may be alcoholic or non-alcoholic.",
          causes: ["Obesity", "Alcohol consumption", "Metabolic disorders"],
          symptoms: ["Often asymptomatic", "Fatigue"],
          treatment: "Diet, weight loss, lifestyle changes",
        },
      ],
    },

    sq: {
      name: "Mëlçia",
      overview:
        "Mëlçia (Hepar) është gjëndra më e madhe në trupin e njeriut dhe organ thelbësor i sistemit tretës dhe metabolik. Ajo ndodhet në kuadrantin e sipërm të djathtë të abdomenit, poshtë diafragmës dhe mbi stomakun. Pesha mesatare tek të rriturit është 1.2–1.5 kg dhe ka ngjyrë të kuqërremtë-kafe me konsistencë të butë.",

      structure: [
        {
          name: "Lobi i djathtë",
          description:
            "Lobi më i madh i mëlçisë që kryen shumicën e funksioneve metabolike dhe detoksifikuese.",
        },
        {
          name: "Lobi i majtë",
          description:
            "Lob më i vogël që merr pjesë në proceset metabolike dhe sintetike.",
        },
        {
          name: "Lobi kaudat",
          description:
            "Lob posterior me furnizim dhe drenazh të pavarur vaskular.",
        },
        {
          name: "Lobi katror",
          description:
            "Ndodhet në sipërfaqen e poshtme të mëlçisë dhe lidhet funksionalisht me lobin e majtë.",
        },
        {
          name: "Porta e mëlçisë",
          description:
            "Zona ku hyjnë vena porta, arteria hepatike dhe duktusi hepatik, duke formuar triadën portale.",
        },
        {
          name: "Kapsula e Glisson-it",
          description: "Kapsulë fibroze që mbulon dhe mbron indin e mëlçisë.",
        },
      ],

      function: [
        "Metabolizon karbohidratet, yndyrnat dhe proteinat",
        "Ruajtja e glikogjenit, vitaminave dhe hekurit",
        "Detoksifikon medikamente dhe substanca toksike",
        "Prodhon bilë për tretjen e yndyrnave",
        "Prodhon faktorë të koagulimit",
        "Shkatërron eritrocitet e vjetra",
      ],

      location:
        "Ndodhet në pjesën e sipërme të djathtë të barkut, poshtë diafragmës dhe mbi stomakun.",

      importance:
        "Organ jetik për metabolizmin, tretjen, detoksifikimin dhe ekuilibrin e brendshëm të organizmit.",

      diseases: [
        {
          name: "Hepatiti",
          description:
            "Inflamacion i mëlçisë, zakonisht i shkaktuar nga infeksione virale.",
          causes: ["Infeksion viral", "Abuzim me alkool", "Toksina"],
          symptoms: ["Verdhëz", "Lodhje", "Dhimbje barku"],
          treatment: "Medikamente antivirale dhe ndryshim stili jetese",
        },
        {
          name: "Cirroza e mëlçisë",
          description:
            "Dëmtim kronik i mëlçisë me fibrozë dhe humbje të strukturës normale.",
          causes: ["Alkoolizëm kronik", "Hepatit kronik"],
          symptoms: ["Ascit", "Lodhje", "Gjakderdhje e lehtë"],
          treatment:
            "Menaxhim mjekësor, ndryshim stili jetese, transplantim mëlçie",
        },
        {
          name: "Steatoza hepatike",
          description:
            "Grumbullim i yndyrës në qelizat e mëlçisë, me ose pa konsum alkooli.",
          causes: ["Obezitet", "Alkool", "Çrregullime metabolike"],
          symptoms: ["Shpesh pa simptoma", "Lodhje"],
          treatment: "Dietë, humbje peshe, stil jetese i shëndetshëm",
        },
      ],
    },
  },

  small_intestine: {
    en: {
      name: "Small Intestine",
      overview:
        "The small intestine (Intestinum tenue) is the longest part of the digestive tract and the primary site for digestion and nutrient absorption. It extends from the pylorus of the stomach to the ileocecal valve connecting it to the large intestine. In adults, it measures approximately 5–7 meters in length.",

      structure: [
        {
          name: "Duodenum",
          description:
            "The first segment of the small intestine, about 25–30 cm long, where bile and pancreatic enzymes enter to aid chemical digestion.",
        },
        {
          name: "Jejunum",
          description:
            "The middle portion with thicker walls and numerous folds, serving as the main site for absorption of carbohydrates and proteins.",
        },
        {
          name: "Ileum",
          description:
            "The longest and final segment, responsible for absorption of vitamin B12 and bile salts, ending at the ileocecal valve.",
        },
        {
          name: "Intestinal wall layers",
          description:
            "Composed of mucosa, submucosa, muscular layer, and serosa, enabling digestion, absorption, and peristalsis.",
        },
        {
          name: "Villi and microvilli",
          description:
            "Specialized structures that greatly increase the absorptive surface area to approximately 200–300 m².",
        },
      ],

      function: [
        "Performs chemical digestion using pancreatic enzymes, bile, and intestinal enzymes",
        "Absorbs glucose, amino acids, fatty acids, vitamins, and minerals",
        "Transfers nutrients into the bloodstream and lymphatic system",
      ],

      location:
        "Located in the abdominal cavity between the stomach and the large intestine.",

      importance:
        "Essential for nutrient absorption and energy supply; dysfunction can lead to malnutrition and systemic deficiencies.",

      diseases: [
        {
          name: "Celiac disease",
          description:
            "An autoimmune disorder in which gluten ingestion damages the intestinal villi.",
          causes: ["Autoimmune reaction", "Genetic predisposition"],
          symptoms: ["Abdominal pain", "Diarrhea", "Weight loss", "Fatigue"],
          treatment:
            "Strict lifelong gluten-free diet and nutritional supplementation",
        },
        {
          name: "Crohn’s disease",
          description:
            "A chronic inflammatory bowel disease that can affect any part of the small intestine.",
          causes: ["Immune dysregulation", "Genetic and environmental factors"],
          symptoms: ["Abdominal pain", "Diarrhea", "Malabsorption"],
          treatment:
            "Anti-inflammatory medication, immunosuppressants, surgery if necessary",
        },
        {
          name: "Intestinal obstruction",
          description:
            "A blockage that prevents the normal passage of intestinal contents.",
          causes: ["Adhesions", "Hernias", "Tumors"],
          symptoms: ["Severe pain", "Vomiting", "Abdominal distension"],
          treatment: "Surgical intervention and supportive care",
        },
      ],
    },

    sq: {
      name: "Zorra e Hollë",
      overview:
        "Zorra e hollë (Intestinum tenue) është pjesa më e gjatë e traktit tretës dhe organi kryesor për tretjen dhe përthithjen e lëndëve ushqyese. Ajo shtrihet nga pilorusi i stomakut deri te valvula ileocekale që e lidh me zorrën e trashë. Gjatësia mesatare është rreth 5–7 metra tek të rriturit.",

      structure: [
        {
          name: "Duodenumi",
          description:
            "Pjesa e parë e zorrës së hollë, rreth 25–30 cm e gjatë, ku derdhen bila dhe enzimat pankreatike për tretje kimike.",
        },
        {
          name: "Jejunumi",
          description:
            "Pjesa e mesme me mure më të trasha dhe shumë palosje, zona kryesore për përthithjen e karbohidrateve dhe proteinave.",
        },
        {
          name: "Ileumi",
          description:
            "Pjesa e fundit dhe më e gjatë, që përthith vitaminën B12 dhe kripërat biliare, duke përfunduar në valvulën ileocekale.",
        },
        {
          name: "Shtresat e murit intestinal",
          description:
            "Përbëhen nga mukoza, nënmukoza, shtresa muskulare dhe seroza, të domosdoshme për tretjen dhe lëvizjen e kimusit.",
        },
        {
          name: "Vilozitete dhe mikroviloze",
          description:
            "Struktura që rrisin sipërfaqen përthithëse deri në rreth 200–300 m².",
        },
      ],

      function: [
        "Kryen tretjen kimike me ndihmën e bilës dhe enzimave",
        "Përthith glukozën, aminoacidet, acidet yndyrore, vitaminat dhe mineralet",
        "Dërgon lëndët ushqyese në gjak dhe sistemin limfatik",
      ],

      location:
        "Ndodhet në zgavrën e barkut, midis stomakut dhe zorrës së trashë.",

      importance:
        "Organ kyç për ushqyerjen e trupit; dëmtimi i tij çon në keqpërthithje dhe mungesa ushqyese.",

      diseases: [
        {
          name: "Sëmundja celiake",
          description:
            "Sëmundje autoimune ku gluteni dëmton vilozitetet e zorrës së hollë.",
          causes: ["Reaksion autoimun", "Predispozitë gjenetike"],
          symptoms: ["Dhimbje barku", "Diarre", "Humbje peshe", "Lodhje"],
          treatment:
            "Dietë strikte pa gluten gjatë gjithë jetës dhe mbështetje ushqimore",
        },
        {
          name: "Sëmundja e Crohn-it",
          description:
            "Sëmundje inflamatore kronike që mund të prekë çdo pjesë të zorrës së hollë.",
          causes: ["Çrregullime imunitare", "Faktorë gjenetikë dhe mjedisorë"],
          symptoms: ["Dhimbje barku", "Diarre", "Keqpërthithje"],
          treatment:
            "Medikamente anti-inflamatore, imunosupresorë, kirurgji kur nevojitet",
        },
        {
          name: "Obstruksioni intestinal",
          description:
            "Bllokim që pengon kalimin normal të përmbajtjes intestinale.",
          causes: ["Ngjitje postoperative", "Hernie", "Tumore"],
          symptoms: ["Dhimbje të forta", "Të vjella", "Fryrje barku"],
          treatment: "Ndërhyrje kirurgjikale dhe trajtim mbështetës",
        },
      ],
    },
  },

  large_intestine: {
    en: {
      name: "Large Intestine",
      overview:
        "The large intestine (Intestinum crassum) is the final part of the digestive tract. It begins at the ileocecal valve and ends at the anus. It measures approximately 1.5 meters in length and its primary roles are water and electrolyte absorption and the formation of feces.",

      structure: [
        {
          name: "Cecum",
          description:
            "The initial portion of the large intestine that receives intestinal contents from the ileum; contains the vermiform appendix.",
        },
        {
          name: "Colon",
          description:
            "Divided into ascending, transverse, descending, and sigmoid parts; responsible for water absorption and feces formation.",
        },
        {
          name: "Rectum",
          description:
            "The terminal segment that stores feces prior to defecation.",
        },
        {
          name: "Anal canal",
          description:
            "The final passage through which feces are expelled from the body.",
        },
        {
          name: "Distinctive features",
          description:
            "Characterized by taeniae coli, haustra coli, and epiploic appendages, which distinguish it from the small intestine.",
        },
      ],

      function: [
        "Absorbs water and electrolytes",
        "Forms, stores, and expels feces",
        "Hosts intestinal microbiota involved in fermentation and vitamin K production",
      ],

      location:
        "Located in the abdominal cavity, framing the small intestine and extending from the ileocecal valve to the anus.",

      importance:
        "Essential for maintaining fluid balance, electrolyte homeostasis, and effective waste elimination.",

      diseases: [
        {
          name: "Appendicitis",
          description:
            "Inflammation of the vermiform appendix, often requiring surgical removal.",
          causes: ["Obstruction of the appendix lumen", "Bacterial infection"],
          symptoms: ["Right lower abdominal pain", "Fever", "Nausea"],
          treatment: "Surgical appendectomy and antibiotics",
        },
        {
          name: "Colorectal cancer",
          description: "Malignant tumor arising from the colon or rectum.",
          causes: ["Genetic predisposition", "Diet low in fiber", "Age"],
          symptoms: ["Blood in stool", "Weight loss", "Change in bowel habits"],
          treatment: "Surgery, chemotherapy, radiotherapy",
        },
        {
          name: "Irritable bowel syndrome (IBS)",
          description:
            "A functional gastrointestinal disorder affecting bowel habits and abdominal comfort.",
          causes: ["Gut-brain axis dysregulation", "Stress", "Dietary factors"],
          symptoms: ["Abdominal pain", "Bloating", "Constipation or diarrhea"],
          treatment:
            "Dietary modification, stress management, symptom-based therapy",
        },
      ],
    },

    sq: {
      name: "Zorra e Trashë",
      overview:
        "Zorra e trashë (Intestinum crassum) është pjesa e fundit e traktit tretës. Ajo fillon nga valvula ileocekale dhe përfundon në anus. Gjatësia mesatare është rreth 1.5 metra dhe funksioni kryesor është thithja e ujit, elektroliteve dhe formimi i feçeve.",

      structure: [
        {
          name: "Cekumi",
          description:
            "Pjesa fillestare e zorrës së trashë që merr përmbajtjen nga ileumi; përmban apendiksin.",
        },
        {
          name: "Koloni",
          description:
            "Përbëhet nga koloni ngjitës, tërthor, zbritës dhe sigmoid; kryen thithjen e ujit dhe formimin e feçeve.",
        },
        {
          name: "Rektumi",
          description: "Segmenti përfundimtar që ruan feçet para defekimit.",
        },
        {
          name: "Kanali anal",
          description:
            "Pjesa e fundit përmes së cilës feçet nxirren jashtë trupit.",
        },
        {
          name: "Veçori karakteristike",
          description:
            "Dallohet nga teniet e kolonit, haustrat dhe appendices epiploicae, të cilat mungojnë në zorrën e hollë.",
        },
      ],

      function: [
        "Thith ujin dhe kripërat minerale",
        "Formon, ruan dhe eliminon feçet",
        "Strehon mikrobiotën intestinale që ndihmon fermentimin dhe prodhimin e vitaminës K",
      ],

      location:
        "Ndodhet në zgavrën e barkut, rrethon zorrën e hollë dhe shtrihet nga valvula ileocekale deri në anus.",

      importance:
        "Organ thelbësor për ekuilibrin e lëngjeve, elektroliteve dhe eliminimin normal të mbetjeve.",

      diseases: [
        {
          name: "Apendiciti",
          description:
            "Inflamacion i apendiksit që zakonisht kërkon ndërhyrje kirurgjikale.",
          causes: ["Bllokim i lumenit të apendiksit", "Infeksion bakterial"],
          symptoms: [
            "Dhimbje në kuadrantin e poshtëm të djathtë",
            "Temperaturë",
          ],
          treatment: "Apendektomi dhe antibiotikë",
        },
        {
          name: "Kanceri i kolonit",
          description: "Tumor malinj që zhvillohet në kolon ose rektum.",
          causes: [
            "Predispozicion gjenetik",
            "Dietë e varfër me fibra",
            "Mosha",
          ],
          symptoms: ["Gjak në feçe", "Humbje peshe", "Ndryshim i jashtëqitjes"],
          treatment: "Kirurgji, kimioterapi, radioterapi",
        },
        {
          name: "Sindroma e zorrës së irrituar",
          description:
            "Çrregullim funksional që prek zakonet e jashtëqitjes dhe shkakton parehati abdominale.",
          causes: [
            "Çrregullim i boshtit zorrë-tru",
            "Stres",
            "Faktorë ushqimorë",
          ],
          symptoms: ["Dhimbje barku", "Fryrje", "Kapsllëk ose diarre"],
          treatment:
            "Dietë e përshtatur, menaxhim i stresit dhe trajtim simptomatik",
        },
      ],
    },
  },

  brain: {
    en: {
      name: "Brain",
      overview:
        "The brain (Encephalon) is the principal organ of the central nervous system and controls bodily functions, cognition, memory, emotions, and movement. It is located within the skull and weighs approximately 1300–1400 grams in adults. The brain is an extremely complex organ composed of billions of neurons.",

      structure: [
        {
          name: "Cerebrum",
          description:
            "The largest part of the brain, divided into right and left hemispheres with gyri and sulci. It includes the frontal, parietal, temporal, and occipital lobes, responsible for higher cognitive functions.",
        },
        {
          name: "Cerebellum",
          description:
            "Located posteriorly, it coordinates balance, posture, and precise motor movements.",
        },
        {
          name: "Brainstem",
          description:
            "Composed of the midbrain, pons, and medulla oblongata; it controls vital functions such as breathing, heart rate, and consciousness.",
        },
        {
          name: "Protective meninges",
          description:
            "Includes dura mater, arachnoid mater, and pia mater, with cerebrospinal fluid providing cushioning and nourishment.",
        },
        {
          name: "Internal structures",
          description:
            "Includes gray matter (neuronal cell bodies), white matter (nerve fibers), and key centers such as the thalamus, hypothalamus, and pituitary gland.",
        },
      ],

      function: [
        "Controls voluntary movement through the motor cortex",
        "Processes sensory information via sensory cortical areas",
        "Regulates cognition, memory, language, and emotions",
        "Maintains vital autonomic functions such as respiration and heart rate",
      ],

      location:
        "Located inside the skull and protected by cranial bones and meninges.",

      importance:
        "Essential for survival and consciousness; damage may impair movement, sensation, cognition, personality, or vital functions.",

      diseases: [
        {
          name: "Stroke",
          description:
            "A neurological emergency caused by interruption of cerebral blood flow, leading to neuronal damage.",
          causes: ["Ischemic vessel blockage", "Intracerebral hemorrhage"],
          symptoms: [
            "Sudden weakness or paralysis",
            "Speech impairment",
            "Visual disturbances",
          ],
          treatment:
            "Emergency medical intervention, medication, rehabilitation therapy",
        },
        {
          name: "Alzheimer’s disease",
          description:
            "A progressive neurodegenerative disorder characterized by memory loss and cognitive decline.",
          causes: ["Neuronal degeneration", "Amyloid and tau pathology"],
          symptoms: [
            "Memory impairment",
            "Disorientation",
            "Behavioral changes",
          ],
          treatment:
            "Symptomatic treatment, cognitive therapy, supportive care",
        },
        {
          name: "Parkinson’s disease",
          description:
            "A movement disorder caused by degeneration of dopaminergic neurons.",
          causes: ["Loss of dopamine-producing neurons"],
          symptoms: ["Tremor", "Rigidity", "Bradykinesia"],
          treatment:
            "Dopaminergic medication, physiotherapy, surgical interventions",
        },
      ],
    },

    sq: {
      name: "Truri",
      overview:
        "Truri (Encephalon) është organi kryesor i sistemit nervor qendror dhe kontrollon funksionet trupore, mendimin, kujtesën, emocionet dhe lëvizjen. Ndodhet brenda kafkës dhe peshon rreth 1300–1400 gram tek të rriturit. Është organ jashtëzakonisht kompleks, i përbërë nga miliarda neurone.",

      structure: [
        {
          name: "Truri i madh",
          description:
            "Pjesa më e madhe e trurit, e ndarë në dy hemisfera me gyri dhe sulci; përfshin lobin frontal, parietal, temporal dhe oksipital, që kontrollojnë funksionet kognitive.",
        },
        {
          name: "Truri i vogël",
          description:
            "Ndodhet prapa dhe kontrollon ekuilibrin, koordinimin dhe saktësinë e lëvizjeve.",
        },
        {
          name: "Trungu i trurit",
          description:
            "Përbëhet nga mezencefaloni, ponsi dhe medulla oblongata; kontrollon frymëmarrjen, rrahjet e zemrës dhe vetëdijen.",
        },
        {
          name: "Cipat mbrojtëse",
          description:
            "Dura mater, arachnoidea dhe pia mater, me lëngun cerebrospinal që mbron dhe ushqen trurin.",
        },
        {
          name: "Struktura të brendshme",
          description:
            "Përfshijnë lëndën gri, lëndën e bardhë, talamusin, hipotalamusin dhe hipofizën.",
        },
      ],

      function: [
        "Kontrollon lëvizjet vullnetare përmes korteksit motorik",
        "Përpunon informacionin ndijor në korteksin somatosensor",
        "Rregullon mendimin, kujtesën, gjuhën dhe emocionet",
        "Mban funksione jetësore si frymëmarrja dhe rrahjet e zemrës",
      ],

      location:
        "Ndodhet brenda kafkës dhe mbrohet nga kockat kraniale dhe cipat meningeale.",

      importance:
        "Organ thelbësor për jetën dhe vetëdijen; dëmtimi i tij ndikon drejtpërdrejt funksionet fizike dhe mendore.",

      diseases: [
        {
          name: "Goditja në tru",
          description:
            "Gjendje urgjente e shkaktuar nga ndërprerja e furnizimit me gjak të trurit.",
          causes: ["Bllokim ishemik", "Gjakderdhje cerebrale"],
          symptoms: [
            "Dobësi ose paralizë e papritur",
            "Vështirësi në të folur",
            "Çrregullime të shikimit",
          ],
          treatment:
            "Ndërhyrje urgjente mjekësore, medikamente dhe rehabilitim",
        },
        {
          name: "Sëmundja e Alzheimer-it",
          description:
            "Sëmundje neurodegjenerative progresive që dëmton kujtesën dhe funksionet kognitive.",
          causes: ["Degjenerim neuronal", "Depozitime proteinike patologjike"],
          symptoms: ["Humbje kujtese", "Çorientim", "Ndryshime sjelljeje"],
          treatment: "Trajtim simptomatik dhe terapi mbështetëse",
        },
        {
          name: "Sëmundja e Parkinson-it",
          description:
            "Çrregullim motorik për shkak të humbjes së neuroneve dopaminergjike.",
          causes: ["Mungesë e dopaminës"],
          symptoms: ["Dridhje", "Ngurtësi", "Ngadalësim i lëvizjeve"],
          treatment:
            "Medikamente dopaminergjike, fizioterapi, ndërhyrje kirurgjikale",
        },
      ],
    },
  },

  stomach: {
    en: {
      name: "Stomach",
      overview:
        "The stomach (Gaster or Ventriculus) is a muscular organ of the digestive system that serves as a reservoir and the site of initial food processing. It is located in the upper left quadrant of the abdomen, between the esophagus and the duodenum. Its average capacity is about 1.5–2 liters, but it can expand depending on food intake.",

      structure: [
        {
          name: "Cardia",
          description:
            "The entry region of the stomach where the esophagus connects to the stomach.",
        },
        {
          name: "Fundus",
          description:
            "The dome-shaped superior part that stores swallowed food and gases.",
        },
        {
          name: "Body",
          description:
            "The main central region responsible for mixing food with gastric secretions.",
        },
        {
          name: "Pyloric part",
          description:
            "The distal region ending with the pylorus, which regulates gastric emptying into the duodenum via the pyloric sphincter.",
        },
        {
          name: "Stomach wall layers",
          description:
            "Composed of mucosa, submucosa, muscular layer (longitudinal, circular, and oblique layers), and serosa; the oblique layer is unique to the stomach.",
        },
      ],

      function: [
        "Acts as a temporary storage reservoir for food",
        "Performs mechanical digestion through peristaltic contractions",
        "Initiates chemical digestion of proteins using pepsin and hydrochloric acid",
        "Gradually releases chyme into the duodenum",
      ],

      location:
        "Located in the upper left region of the abdomen, beneath the diaphragm, between the esophagus and the duodenum.",

      importance:
        "Essential for mechanical and chemical digestion, preparing food for efficient absorption in the small intestine.",

      diseases: [
        {
          name: "Gastritis",
          description:
            "Inflammation of the gastric mucosa that can be acute or chronic.",
          causes: [
            "Helicobacter pylori infection",
            "Excessive alcohol consumption",
            "Long-term use of NSAIDs",
          ],
          symptoms: ["Epigastric pain", "Nausea", "Bloating"],
          treatment:
            "Acid-suppressive therapy, antibiotics if H. pylori is present, dietary modification",
        },
        {
          name: "Peptic ulcer disease",
          description:
            "A defect in the stomach lining caused by acid and pepsin injury.",
          causes: ["H. pylori infection", "NSAID use"],
          symptoms: ["Burning epigastric pain", "Nausea", "Bleeding"],
          treatment:
            "Proton pump inhibitors, antibiotics, avoidance of irritants",
        },
        {
          name: "Gastric cancer",
          description: "A malignant tumor originating from the gastric mucosa.",
          causes: ["Chronic gastritis", "H. pylori infection", "Smoking"],
          symptoms: ["Weight loss", "Anemia", "Persistent abdominal pain"],
          treatment: "Surgical resection, chemotherapy, radiotherapy",
        },
      ],
    },

    sq: {
      name: "Stomaku",
      overview:
        "Stomaku (Gaster ose Ventriculus) është organ muskulor i sistemit tretës që shërben si rezervuar dhe vend për përpunimin fillestar të ushqimit. Ai ndodhet në kuadrantin e sipërm të majtë të barkut, midis ezofagut dhe duodenit. Kapaciteti mesatar është rreth 1.5–2 litra, por mund të zgjerohet sipas sasisë së ushqimit.",

      structure: [
        {
          name: "Kardiasi",
          description: "Zona hyrëse e stomakut ku lidhet ezofagu.",
        },
        {
          name: "Fundusi",
          description:
            "Pjesa e sipërme e rrumbullakët që shërben për ruajtjen e ushqimit dhe gazrave.",
        },
        {
          name: "Trupi i stomakut",
          description:
            "Pjesa kryesore ku ushqimi përzihet me sekrecionet gastrike.",
        },
        {
          name: "Pjesa pilorike",
          description:
            "Segmenti përfundimtar që mbaron me pilorin dhe kontrollon kalimin e kimusit në duodenum.",
        },
        {
          name: "Shtresat e murit të stomakut",
          description:
            "Përbëhet nga mukoza, nënmukoza, shtresa muskulare (gjatësore, rrethore dhe oblike) dhe seroza; shtresa oblike është karakteristike për stomakun.",
        },
      ],

      function: [
        "Ruan përkohësisht ushqimin",
        "Kryen tretje mekanike përmes kontraktimeve peristaltike",
        "Fillon tretjen kimike të proteinave me pepsinë dhe acid klorhidrik",
        "Liron gradualisht kimusin drejt duodenit",
      ],

      location:
        "Ndodhet në pjesën e sipërme të majtë të barkut, poshtë diafragmës, midis ezofagut dhe duodenit.",

      importance:
        "Organ kyç për tretjen mekanike dhe kimike, duke përgatitur ushqimin për përthithje në zorrën e hollë.",

      diseases: [
        {
          name: "Gastriti",
          description:
            "Inflamacion i mukozës së stomakut që mund të jetë akut ose kronik.",
          causes: [
            "Infeksion me Helicobacter pylori",
            "Abuzim me alkool",
            "Përdorim i zgjatur i NSAID-ve",
          ],
          symptoms: ["Dhimbje epigastrike", "Të përziera", "Fryrje"],
          treatment:
            "Medikamente për uljen e acidit, antibiotikë në rast infeksioni, ndryshim stili jetese",
        },
        {
          name: "Ulçera gastrike",
          description: "Dëmtim i mukozës së stomakut nga acidi dhe pepsina.",
          causes: ["H. pylori", "Përdorim i NSAID-ve"],
          symptoms: ["Dhimbje djegëse", "Të përziera", "Gjakderdhje"],
          treatment:
            "Inhibitorë të pompës protonike, antibiotikë, shmangie e faktorëve irritues",
        },
        {
          name: "Kanceri i stomakut",
          description: "Tumor malinj që zhvillohet nga mukoza gastrike.",
          causes: ["Gastrit kronik", "H. pylori", "Duhanpirja"],
          symptoms: ["Humbje peshe", "Anemi", "Dhimbje të vazhdueshme"],
          treatment: "Kirurgji, kimioterapi, radioterapi",
        },
      ],
    },
  },

  kidney: {
    en: {
      name: "Kidney",
      overview:
        "The kidneys (Renes) are paired organs of the urinary system responsible for filtering blood and producing urine. They are located in the retroperitoneal space at the level of vertebrae T12–L3. The right kidney lies slightly lower than the left due to the presence of the liver. Each kidney weighs approximately 120–170 grams.",

      structure: [
        {
          name: "Renal poles and hilum",
          description:
            "Each kidney has a superior and inferior pole, and a renal hilum where the renal artery, renal vein, and ureter enter and exit.",
        },
        {
          name: "Renal cortex",
          description:
            "The outer layer containing renal corpuscles where blood filtration begins.",
        },
        {
          name: "Renal medulla",
          description:
            "The inner region composed of renal pyramids that concentrate urine and transport it toward the renal pelvis.",
        },
        {
          name: "Renal pelvis",
          description:
            "A funnel-shaped cavity that collects urine from the calyces and directs it into the ureter.",
        },
        {
          name: "Nephrons",
          description:
            "Approximately one million microscopic functional units per kidney that filter blood and form urine.",
        },
      ],

      function: [
        "Filters blood through glomerular filtration",
        "Reabsorbs water, electrolytes, and nutrients",
        "Secretes waste substances into the urine",
        "Regulates fluid balance, electrolytes, and blood pH",
        "Controls blood pressure via the renin–angiotensin–aldosterone system",
        "Produces erythropoietin and activates vitamin D (calcitriol)",
      ],

      location:
        "Located in the posterior abdominal cavity on either side of the vertebral column, in the retroperitoneal space.",

      importance:
        "Essential for waste removal, blood pressure regulation, and metabolic homeostasis; kidney failure is life-threatening without replacement therapy.",

      diseases: [
        {
          name: "Kidney stones",
          description:
            "Solid mineral deposits that form in the kidneys and may obstruct urine flow.",
          causes: [
            "Dehydration",
            "High mineral concentration",
            "Dietary factors",
          ],
          symptoms: ["Severe flank pain", "Painful urination", "Hematuria"],
          treatment:
            "Hydration, pain management, lithotripsy or surgical removal",
        },
        {
          name: "Chronic kidney disease",
          description:
            "Progressive and irreversible loss of kidney function over time.",
          causes: ["Diabetes mellitus", "Hypertension", "Glomerular diseases"],
          symptoms: ["Fatigue", "Edema", "Reduced urine output"],
          treatment: "Medical management, dialysis, kidney transplantation",
        },
        {
          name: "Glomerulonephritis",
          description: "Inflammation of the glomeruli that impairs filtration.",
          causes: ["Autoimmune disorders", "Infections"],
          symptoms: ["Proteinuria", "Hematuria", "Hypertension"],
          treatment: "Immunosuppressive therapy, blood pressure control",
        },
      ],
    },

    sq: {
      name: "Veshka",
      overview:
        "Veshkat (Renes) janë organe çift të sistemit urinar që filtrojnë gjakun dhe formojnë urinën. Ato ndodhen në hapësirën retroperitoneale në nivelin e vertebrave T12–L3. Veshka e djathtë është zakonisht pak më poshtë se e majta për shkak të mëlçisë. Pesha mesatare e një veshke është rreth 120–170 gram.",

      structure: [
        {
          name: "Polet dhe hilumi renal",
          description:
            "Çdo veshkë ka polin superior dhe inferior, si dhe hilumin renal ku kalojnë arteria renale, vena renale dhe ureteri.",
        },
        {
          name: "Korteksi renal",
          description:
            "Shtresa e jashtme ku ndodhen korpuskulat renale dhe fillon filtrimi i gjakut.",
        },
        {
          name: "Medula renale",
          description:
            "Pjesa e brendshme e përbërë nga piramidat renale që përqendrojnë urinën.",
        },
        {
          name: "Pelvisi renal",
          description:
            "Zgavra në formë hinke që mbledh urinën nga kalikset dhe e dërgon në ureter.",
        },
        {
          name: "Nefronet",
          description:
            "Rreth një milion njësi funksionale mikroskopike në çdo veshkë që filtrojnë gjakun dhe formojnë urinën.",
        },
      ],

      function: [
        "Filtron gjakun përmes filtrimit glomerular",
        "Riabsorbon ujin, elektrolitet dhe substancat e dobishme",
        "Sekreton substanca të panevojshme në urinë",
        "Rregullon balancën e ujit, elektroliteve dhe pH-në e gjakut",
        "Kontrollon presionin e gjakut përmes sistemit reninë–angiotensinë–aldosteron",
        "Prodhon eritropoetinë dhe aktivizon vitaminën D",
      ],

      location:
        "Ndodhen në pjesën e pasme të barkut, në të dy anët e shtyllës kurrizore, në hapësirën retroperitoneale.",

      importance:
        "Organe jetike për pastrimin e gjakut, rregullimin e presionit dhe ekuilibrin metabolik; dështimi renal rrezikon jetën.",

      diseases: [
        {
          name: "Gurët në veshka",
          description:
            "Depozita të forta minerale që formohen në veshka dhe mund të bllokojnë rrjedhjen e urinës.",
          causes: [
            "Dehidratim",
            "Përqendrim i lartë mineralesh",
            "Dietë e papërshtatshme",
          ],
          symptoms: [
            "Dhimbje e fortë anësore",
            "Urinim i dhimbshëm",
            "Gjak në urinë",
          ],
          treatment: "Hidratim, qetësues dhimbjeje, litotripsi ose kirurgji",
        },
        {
          name: "Insuficienca renale kronike",
          description:
            "Humbje progresive dhe e pakthyeshme e funksionit të veshkave.",
          causes: ["Diabeti", "Hipertensioni", "Sëmundje glomerulare"],
          symptoms: ["Lodhje", "Ënjtje", "Urinim i reduktuar"],
          treatment: "Trajtim mjekësor, dializë, transplantim i veshkës",
        },
        {
          name: "Glomerulonefriti",
          description: "Inflamacion i glomeruleve që dëmton filtrimin renal.",
          causes: ["Çrregullime autoimune", "Infeksione"],
          symptoms: ["Proteinuri", "Hematuri", "Presion i lartë"],
          treatment:
            "Medikamente imunosupresive dhe kontroll i presionit të gjakut",
        },
      ],
    },
  },
};
