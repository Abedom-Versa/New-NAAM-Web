// Team roster, roles, and bios taken from naamass.org (Our Team and Leadership pages, fetched Oct 25 2026).
// Grouped by program the way the live site groups them. People who appear under two programs there
// (e.g. NAAM Artisans) appear under both here, with the role and bio the live site gives for each.
// Staff the live site shows with only a logo placeholder are left out until NAAM sends headshots:
// Barthelemy Leon, Sayed Achakzai, Carline Rimple, Jean Cinevus, Trish Kratka, Emily Popkey,
// Aliaqa Firoozi, David Keene. Their bios are on naamass.org.
// Generated file. Bio text is verbatim; edit roles and bios here.

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string[];
};

export type TeamGroup = {
  department: string;
  /** Program page for the group, when there is one. */
  href?: string;
  members: TeamMember[];
  subgroup?: { title: string; members: TeamMember[] };
};

export const team: TeamGroup[] = [
  {
    department: "Executive Director",
    members: [
      {
        name: "Natasha Soolkin",
        role: "Executive Director",
        image: "/images/team/natasha-soolkin.jpg",
        bio: [
          "Natasha Soolkin, an emigre from the former Soviet Union, arrived in the U.S. in 1990. For the past 25 years, Natasha has actively supported the immigrant and refugee community by providing a variety of services: from organizing educational seminars for diverse refugee populations, interpreting and translating for refugee clients and mainstream organizations, designing to implementing various activities for children and families. Since 2002, she has acted as Regional Director of the RCAM North Shore Office and Managing Director of the New American Center and has recently taken on the role of Executive Director of the newly named New American Association of Massachusetts (NAAM). Her responsibilities include coordination and implementation of a broad array of services for refugees and immigrants. Her outspoken commitment to the North Shore community has been recognized and commended by many in the social service and political fields. She advocates passionately for her clients and has always gone above and beyond to meet their needs. Natasha also serves on the Board of Directors at the Lynn Community Health Center, Advisory Board at the Department of Transitional Assistance, and Lynn Non-Profit Business Association.",
          "781 593-0100 ext 18, email nsoolkin@naamass.org",
        ],
      },
    ],
  },
  {
    department: "Employment Services",
    href: "/programs/employment",
    members: [
      {
        name: "Valeria Fasolo",
        role: "Director of Employment Services",
        image: "/images/team/valeria-fasolo.jpg",
        bio: [
          "In September of 2025, Valeria Fasolo joined the team, bringing extensive knowledge in refugee and immigrant services. Originally from Italy, Valeria began her work with asylum seekers there, teaching Italian and serving as a cultural mediator. Since then, she has been deeply committed to supporting immigrant integration, expanding opportunities, and strengthening pathways to self-sufficiency.",
          "Prior to joining NAAM, Valeria most recently served as Refugee Resettlement Program Manager with Catholic Charities of Boston. Although she is new to the team, she is not new to our community. During her time with Catholic Charities, Valeria was a thoughtful and reliable partner to NAAM, consistently demonstrating dedication to immigrant communities.",
          "In her new role, Valeria will oversee NAAM’s two employment services programs: CRES and ESSP, which assist employable immigrants in gaining English proficiency, easing their transition into the American workforce, and achieving durable self-sufficiency.",
        ],
      },
      {
        name: "Ally Croteau",
        role: "Lowell Regional Director",
        image: "/images/team/ally-croteau.jpg",
        bio: [
          "Ally Croteau joined NAAM in February 2022 as an employment specialist, supporting the expansion of services to clients residing outside NAAM’s initial catchment areas. Since her arrival, NAAM’s client base has grown across the North Shore, Lowell, Boston, and MetroWest areas of Massachusetts. Currently, Ally serves as the Lowell Regional Director, leading efforts to support clients in achieving their employment goals and promoting their families’ well-being in the Lowell and Lawrence areas. She is deeply committed to assisting individuals, particularly those with refugee and immigrant backgrounds, in their growth and development.",
          "A native of Pepperell, Massachusetts, Ally earned a B.S. in Secondary Education Mathematics from the University of Vermont and an M.A. in International Education from the George Washington University. Prior to NAAM, she began her professional career with YouthBuild in Burlington, Vermont, serving as the AmeriCorps Community Partnership Coordinator. Following YouthBuild, Ally worked as an English teacher in Costa Rica and Peru before supporting study abroad programs at the George Washington University.",
          "Academically, Ally has co-authored a book chapter, Giving Rise to Innovation Ecosystems in Rural Honduras: A Case Study of Sustainable Harvest International, published in Building Rural Community Resilience Through Innovation and Entrepreneurship. Additionally, she has served as a research assistant on a meta-analysis of refugee access to higher education and co-facilitated sessions at the Second Annual University Alliance for Refugees and At-Risk Migrants Conference.",
          "In her free time, Ally enjoys the outdoors, whether skiing in the winter or biking, hiking, and water skiing in the warmer months. Travel is also important to her, and she frequently visits Peru, along with other destinations on her travel list.",
        ],
      },
      {
        name: "Sabine Metellus",
        role: "Employment Specialist, Lowell Office",
        image: "/images/team/sabine-metellus.jpg",
        bio: [
          "Sabine Metellus joined NAAM in September 2023 as a part-time Employment Associate to help serve the growing Haitian population. She is uniquely qualified for this position, since she was a client in 2020, when NAAM helped her family settle in the United States. She is very aware of her clients’ struggles and leads from personal experience. Sabine helps to remove barriers to employment by finding childcare, ESOL classes, driving lessons, and anything else her clients need to start their new life in this country.",
          "Sabine earned a degree in Business Administration from Inuqua University in Port -au-Prince, Haiti. Inspired by the work NAAM is doing for immigrants and wanting to give back, she enrolled at Middlesex Community College in 2022 and is pursuing an associate degree in Human Services. Sabine also works as a full-time Case Manager at House of Hope, a shelter for homeless families. There she also focuses on helping Haitian families, by collaborating with residents on individualized and goal-oriented rehousing plans, as well as reaching out to other social service agencies and schools as needed.",
          "Of Haitian origin, Sabine loves spicy dishes and sunny weather. As a Social Worker, she takes pleasure in beautifying the lives of her clients.",
        ],
      },
      {
        name: "Diana M. Staco-Millery",
        role: "Employment Specialist - Lynn",
        image: "/images/team/diana-m-staco-millery.jpg",
        bio: [
          "Born and raised in Haiti, Diana migrated to the United States as a foreign student 45 years ago, eventually settling down, getting married, and raising a family. Over the years, Diana  embraced the U.S. as my home and became a resident of Lynn in 2004. Throughout her life, her unwavering passion has been to assist others, leading her to a fulfilling career as a Special Education administrative assistant in a nearby school district.",
          "With the recent significant influx of Haitian migrants in the Lynn community, she recognized an opportunity to further contribute and decided to join the New American Association of Massachusetts (NAAM) as a part-time Haitian interpreter. The impact of this work was so rewarding that, after nine months, she made the decision to retire from my full-time position at the school. Now, she proudly serves as a permanent Employment Specialist at NAAM helping newly arrived migrants enter the current market’s workforce.",
          "As part of a dedicated team, she strives to make a positive impact on the lives of many clients. The collective desire to tap into all available resources fuels our commitment to helping each immigrant achieve their dreams. The New American Association of Massachusetts is not just an organization; it’s a force dedicated to transforming aspirations into reality for the individuals we serve.",
        ],
      },
      {
        name: "Zabihullah Moshfiq",
        role: "Employment Specialist, Lowell Office",
        image: "/images/team/zabihullah-moshfiq.jpg",
        bio: [
          "Zabihullah Moshfiq joined NAAM in April 2022 as a full-time Employment Associate to help serve the large influx of Afghans escaping the Taliban amid the withdrawal of US/NATO forces at the end of the 2001–2021 war in Afghanistan. He and his family have lived in the United States since 2018.",
          "Zabi graduated from Balkh University in Afghanistan with a degree in Public Administration and Diplomacy. In Afghanistan he worked with UNHCR (United Nations High Commissioner for Refugees), USAID (United States Agency for International Development), and other international organizations. He was responsible for skills training for new private sector entrepreneurial enterprises that encouraged women and the marginalized with their start-ups, capacity-building plans for municipal departments, community engagement initiatives, and overseeing local projects ranging from public administration, urban and strategic planning to financial management and economic development. In the US, Zabi has worked as an interpreter and in the manufacturing sector.",
          "It is important to Zabi to protect and help people forced to leave their homes around the world.",
        ],
      },
      {
        name: "Kelsey Maira",
        role: "Employment Specialist & Coordinator",
        image: "/images/team/kelsey-maira.jpg",
        bio: [
          "Kelsey Maira is the Youth Program Coordinator at the Lowell office. Kelsey graduated from New York University with a BA in International Relations. She began working at NAAM in 2023. In her free time, she loves learning languages. Kelsey speaks fluent English, French and Spanish, advanced Arabic and Russian, and is learning Portuguese, Farsi/Dari and Haitian Creole.",
        ],
      },
      {
        name: "Lynne Havusha",
        role: "Employment Specialist",
        image: "/images/team/lynne-havusha.jpg",
        bio: [
          "Lynne Havusha is an Employment Specialist in NAAM’s Comprehensive Refugee Employment Services (CRES) program. A Massachusetts native, Lynne earned a B.A. in Psychology from Simmons College and a M.Ed. in Community Mental Health Counseling from Northeastern University. Early in her career, Lynne worked as a mental health counselor in Brookline, MA, and then in Jerusalem, Israel. After returning from a three-year sojourn in Israel, she worked for many years as an educator at the Epstein Hillel School (formerly Cohen Hillel Academy,) a Jewish day school in Marblehead, MA, first as a Hebrew language teacher and eventually as Director of Student Services.",
          "Over the winter of 2016-2017, after a brief retirement from her career in education, Lynne decided that the time was right to engage in the mission of welcoming newcomers to our country. A Google search led her to the New American Center, and “the rest is history.” She could not be more grateful for her experience as a member of the NAAM family, and she is inspired every day by the strength, resilience, and spirit of her clients.",
        ],
      },
      {
        name: "Judith Charles",
        role: "Employment Specialist",
        image: "/images/team/judith-charles.jpg",
        bio: [],
      },
    ],
  },
  {
    department: "Case Management",
    href: "/programs/case-management",
    members: [
      {
        name: "Venette Jean",
        role: "Citizenship/ Social Services Case Manager",
        image: "/images/team/venette-jean.jpg",
        bio: [
          "Venette Jean, a native of Haiti, is a Citizenship/Social Services Case Manager. She assists people with their citizenship applications as well as helps our refugee clients to get acclimated to their new home and connects them with community resources. Venette immigrated to United Stated in 1983 and has been in social services since she started her career after college. For many years she has worked in Eliot Community Human Services as a Crisis Stabilization Senior Case Manager, in Health Behavioral Services as a Care Coordinator. Venette is also an entrepreneur and a freelance contractor offering interpreting services for the community in Spanish, French, and Haitian Creole languages. Venette has a deep knowledge of  resources for immigrant community, tons of experience in finding solutions where it is practically impossible to find them, and most importantly, she has a positive attitude, outgoing personality.",
        ],
      },
      {
        name: "Paola Colunga",
        role: "Case Manager & Program Coordinator",
        image: "/images/team/paola-colunga.jpg",
        bio: [
          "Paola is Hispanic and enrolled in NAAM in 2019 as a citizenship student. She then joined the NAAM team in 2020 as an American citizenship tutor. Initially, as a tutor, Paola assisted more than 40 students to prepare them for their citizenship interview. Successfully that same year, our Executive Director, Natasha Solkin, invited Paola to start a career in case management for families in Lynn Public Schools. As a Case Manager and Program Coordinator for Lynn Public Schools (LPS), she is in charge of navigating their daily life; such as classes in English, taking care of their mental and emotional health, assisting them in obtaining clothing, food, computers, books, and other materials for their studies or that of their children.",
          "In 2021, she took on the challenge of taking charge of NAAM’s Wellness program as a Program Coordinator. NAAM’s Wellness Program focuses specifically on the care of the mental and emotional health of women and children. The following year, Paola became more involved in the Citizenship Program, coming full circle to how she was first involved with NAAM. She is also a Citizenship Program Assistant. While taking on many roles, Paola is thrilled to be able to help her clients and her community with all their needs. She believes little by little, her work at NAAM helps her community be free of worries.",
        ],
      },
      {
        name: "Jules Andre Mettellus",
        role: "Case Manager / Employment Specialist - Lynn",
        image: "/images/team/jules-andre-mettellus.jpg",
        bio: [
          "Jules Andre Metellus is a dedicated community advocate, interpreter, and case manager with over a decade of experience in social services, client support, and public-facing roles. His passion for serving immigrant families is deeply personal. When Jules arrived in the United States in 2019 with his family, they were introduced to the New American Association of Massachusetts (NAAM) by a friend who knew a case manager at the organization. As clients of NAAM for two years, Jules and his family received vital support during their transition. Today, Jules is proud to give back to the very organization that helped him, using his skills and lived experience to empower others.",
          "Currently, Jules serves as a Case Manager, Family Liaison, and Employment Specialist at NAAM, where he assists newly arrived families with navigating housing, healthcare, early education, and employment services. He helps clients access essential resources and provides guidance tailored to the unique needs of immigrant communities.",
          "Fluent in Haitian Creole, French, and English, Jules also works as a community interpreter with Lynn City Hall and volunteers at Lowell All Nations Seventh-Day Church, advocating for Haitian immigrants and bridging language and cultural barriers.",
          "Previously, Jules held client service and administrative roles at the International Organization for Migration (IOM) and NATCOM SA in Port-au-Prince, Haiti. His professional foundation includes experience in data entry, customer relations, and technical support.",
          "He holds an Associate Degree in Accounting from the Haitian Modern Technology Center and a Certificate in Business & Community Interpreting from Language Connection in Boston.",
          "Driven by gratitude and a desire to serve, Jules Metellus brings compassion, professionalism, and firsthand understanding to every family he supports.",
        ],
      },
      {
        name: "Bahara Amiri",
        role: "Case Manager",
        image: "/images/team/bahara-amiri.jpg",
        bio: [
          "Khujasta Bahara Amiri is originally from Kabul, Afghanistan and serves as a Case Manager for NAAM. Before joining NAAM, I volunteered with Sponsor Circles and ICNA Relief Boston, where I gained valuable experience supporting Afghan families.",
          "Bahara was referred to NAAM by Emily from the Sponsor Circle Team and the rest is history. She started out as an interpreter for the NAAM Artisans program on Sundays in Lynn, MA and soon after was offered a full-time position on the case management team.",
          "Bahara truly enjoys working with NAAM because it inspires her every day to support and empower people in her community.",
        ],
      },
      {
        name: "Julie Nkwetta",
        role: "Cameroonian Case Manager",
        image: "/images/team/julie-nkwetta.jpg",
        bio: [
          "With a Bachelor’s Degree in Geography and a Higher Institute of Teachers’ Training Diploma (DIPES II), Julie Nkwetta brings more than 20 years of experience as a high school teacher, along with studies in psychology and sociology. Fluent in English and conversational in French, Julie has always been passionate about helping others and believes that everyone deserves support, dignity, and the opportunity to improve their quality of life.",
          "As a Case Manager at NAAM, she primarily serves members of the Cameroonian community while also supporting clients from many different countries. Her role begins with welcoming and orienting clients to NAAM’s programs and services and ensuring they complete the intake process. She works closely with individuals and families to identify their needs and connect them with essential resources, including clothing and household items, food pantries, childcare support, fuel assistance, unemployment assistance, and benefits advocacy. Through partnerships with organizations such as Mission of Deeds and other community agencies, I connect clients to resources that help them achieve stability and self-sufficiency.",
          "Julie takes pride in the positive impact these services have on the community. By helping clients access critical resources and support systems, many are able to achieve stability within a relatively short period of time. I am continually motivated by the opportunity to serve others with compassion, respect, and dedication.",
          "She is passionate about helping people improve their quality of life and enjoys advocating for individuals and families, connecting them with resources, and empowering them to overcome challenges, particularly vulnerable populations. Julie finds it rewarding to support individuals which motivates her to continue serving her community with compassion and respect.",
          "One of her favorite aspects of NAAM’s work is fostering community connections through our monthly cultural organizational meetings, family gatherings, and social group activities that bring people together, strengthen relationships, and create a sense of belonging.",
        ],
      },
      {
        name: "Lynne Havusha",
        role: "RCS Coordinator",
        image: "/images/team/lynne-havusha.jpg",
        bio: [
          "Lynne Havusha is an Employment Specialist in NAAM’s Comprehensive Refugee Employment Services (CRES) program. A Massachusetts native, Lynne earned a B.A. in Psychology from Simmons College and a M.Ed. in Community Mental Health Counseling from Northeastern University. Early in her career, Lynne worked as a mental health counselor in Brookline, MA, and then in Jerusalem, Israel. After returning from a three-year sojourn in Israel, she worked for many years as an educator at the Epstein Hillel School (formerly Cohen Hillel Academy,) a Jewish day school in Marblehead, MA, first as a Hebrew language teacher and eventually as Director of Student Services.",
          "Over the winter of 2016-2017, after a brief retirement from her career in education, Lynne decided that the time was right to engage in the mission of welcoming newcomers to our country. A Google search led her to the New American Center, and “the rest is history.” She could not be more grateful for her experience as a member of the NAAM family, and she is inspired every day by the strength, resilience, and spirit of her clients.",
        ],
      },
    ],
  },
  {
    department: "English Language Classes",
    href: "/programs/english",
    members: [
      {
        name: "Mia Mountain",
        role: "Director of Curriculum for ESOL Programming",
        image: "/images/team/mia-mountain.jpg",
        bio: [
          "Mia Mountain is the Director of Curriculum for ESOL Programming. She helps support teachers with implementing culturally relevant and engaging materials to bolster our clients’ life skills and work-readiness. She began her journey at NAAM in 2019 as a volunteer, helping clients prepare for interviews and learning from veteran teachers Gina, Dan, and Khara.",
          "Mia has a Bachelor’s Degree in Literature from Fordham University, much of which was completed during her junior year abroad at Oxford University. She has a dual master’s degree in History and Library Science from Simmons College and had worked in both public and academic libraries for over ten years before deciding to become an English teacher. She holds a graduate certificate in TESOL from Salem State University.",
          "In her spare time, she is usually walking her German mix rescue dog, riding bikes with her son, or dancing in the kitchen with friends and family!",
        ],
      },
      {
        name: "Erica Peterson",
        role: "Director of Operations for ESOL Programming",
        image: "/images/team/erica-peterson.jpg",
        bio: [
          "Erica Peterson has been a teacher at NAAM since 2023 and has been the Operational Director of the ESOL Program since 2024. She is originally from New Hampshire, and currently lives in Central Mass. With an educational background in linguistics, cultural anthropology and Spanish, she has been working with immigrants and refugees in Massachusetts since 2011.",
          "Working for several English-language programs in the Boston area, including Boston Public Schools, Erica then transitioned to higher education at Framingham State University (FSU), where she worked for several years as a curriculum developer and trainer for a community-based program supporting first generation and underserved high schoolers and college students navigate college prep, admissions and academic success.",
          "After FSU, she returned to adult education at NAAM’s ESOL program, where she was connected through a long-time friend who also works here. As a proud native New Englander, she is inspired to make this beautiful corner of the US welcoming to newcomers.",
        ],
      },
      {
        name: "Geraldine Gabon",
        role: "ESOL Student Liaison",
        image: "/images/team/geraldine-gabon.jpg",
        bio: [
          "Employment Specialist for the CRES program and a graduate student at Heller School for Social Policy and Management. Before NAAM, I served as an Environmental Health Specialist for Broward County, Florida, and as an active Youth Leader at Berea Alliance where she provided case management for youth and guided them through college or career paths. I am currently the CEO of Bright Future for Vulnerable Children, a non-profit aiming to provide scholarship support and individually tailored mentorship to children in low-income communities in Haiti. My goal is to continue assisting immigrants and ensure they reach their full potential while on the journey.",
        ],
      },
    ],
    subgroup: {
      title: "ESOL Teachers",
      members: [
        {
          name: "Shira Moss",
          role: "ELT-I Instructor/Project-based learning: Art, Music, Wellness, Life Skills",
          image: "/images/team/shira-moss.jpg",
          bio: [
            "Shira has been working with NAAM since 2018 as an English Language Training through Integration Teacher. ELT-I is a language-based curriculum for adult refugees and immigrants seeking citizenship and productive lives in the United States. The themes addressed include visual art, music, life skills, civics, and cultural orientation as platforms for developing language acquisition. Before joining the NAAM team, Shira was an arts educator working in youth settings and has always seen the arts as foundational and global aspects of human society and, therefore, strong areas through which to explore vocabulary, grammar, pronunciation, and the more practical as well as nuanced aspects of the English language. Working with adults who are empowering themselves, through their engagement and commitment with NAAM, to build independent and fulfilling lives in the U.S., is very rewarding to Shira. She sees it as part of making the world a better place through direct action. In addition to her work at NAAM, Shira teaches music for two nonprofit youth organizations, does other freelance teaching, and is a working percussionist in a few bands.",
          ],
        },
        {
          name: "Virginia Bolat",
          role: "English for Employment English Instructor",
          image: "/images/team/virginia-bolat.jpg",
          bio: [
            "Virginia Bolat joined the absolutely wonderful NAAM team and community two years ago where she has been in  charge of the ESOL Beginner Level. Teaching the ESOL Beginner Level, Virginia has had the pleasure of helping students who are new to the world of the English language start their linguistic journey.",
            "She has always enjoyed interacting with people of all ages and nationalities, and after graduating College with a double major in Asian Culture/ English and Teaching, Virginia has had the chance to live and work around the world and broaden my horizons, enjoy and better understand different cultures, teach and be taught not just a language but also what it means to be a global human.",
            "While navigating through state school systems in Romania, private high schools university level courses in Turkey, as well as private language schools and kindergartens in the US, Virginia was lucky enough to meet incredible people from all 7 continents, people of diverse background who have contributed to the person and ESOL teacher she is today. Truly enjoying working with people, Virginia has tried to find ways to connect and understand the people around her better.",
            "Outside of teaching English, Virginia participates in yoga and mindfulness workshops. For around 3 years, she has been developing her skills as a Reiki therapist on the side. Virginia believes we are here to help each other grow and thrive in this adventure called LIFE.",
          ],
        },
        {
          name: "Chris Carroll",
          role: "ESL Instructor",
          image: "/images/team/chris-carroll.jpg",
          bio: [
            "Chris Carroll is a 30 year veteran language teacher, teacher trainer and polyglot. She is a specialist in curriculum development and a consultant for language programs. Recently retired World Language Coordinator of North Andover, she served at the state and local level to help author and implement proficiency based programs. Passionate about equity and access, she earned a Masters in Teaching English to newcomers and has taught students of all ages with cultural competence and linguistic sensitivity for decades.",
          ],
        },
        {
          name: "Nadia Elmouhsine",
          role: "English for Employment English Instructor",
          image: "/images/team/nadia-elmouhsine.jpg",
          bio: [
            "Nadia Elmouhsine has been an ESOL teacher at NAAM for almost four years. Nadia is originally from Morocco, where she earned a B.A. in English Literature from Hassan II University and a teaching certificate from the Regional Pedagogical Center in Casablanca. She also completed an Early Childhood Education certificate at Bunker Hill Community College here in Massachusetts.",
            "Before coming to the U.S., Nadia taught English language in middle schools for over 12 years in Morocco. She currently also teaches Arabic at the Nafis Center. Nadia is a graduate of the Immigrants Lead Boston program and a proud volunteer with Raising A Reader, where she supports early literacy in immigrant families.",
            "Nadia was drawn to NAAM’s mission because it aligns closely with my values. Nadia believes that “supporting immigrants and refugees as they grow, learn, and thrive in a new country is not just meaningful work; it’s personal to me. I feel honored to be part of their journey.",
            "Outside of work, Nadia enjoys baking, reading, and doing crafts, especially with her kids.",
          ],
        },
        {
          name: "Nicole Rodriguez",
          role: "English for Employment English Instructor",
          image: "/images/team/nicole-rodriguez.jpg",
          bio: [
            "Nicole Rodriguez joined the NAAM ESOL Program in January of 2025. She teaches mostly beginner students, both in person and online. Covering English for daily use (at the grocery store, the doctor, children’s schools), Nicole also trains students through mock job interviews, exam preparation, an English for cooking class and ESOL for the Afghan Women’s Workshop. She has five years’ experience teaching adults ESOL and nine years of teaching children in North Shore public schools. She holds a Master’s in Teaching English to Speakers of Other Languages from Salem State and a Bachelor’s in English from Harvard.",
          ],
        },
        {
          name: "Sanna Shaheen Saddy",
          role: "English for Employment English Instructor",
          image: "/images/team/sanna-shaheen-saddy.jpg",
          bio: [
            "Sanna Shaheen Saddy is the Beginning Literacy Class teacher and has been with NAAM for the past 3 years. It is a privilege and honor to be a part of her students’ story. Coming from an immigrant family, she can attest to the struggles and hardships many immigrant families go through. Sanna has a degree in Early Childhood Education and Psychology and has worked as an ESOL teacher for the past 20 years. Her experience in the ESOL space has ranged from kindergarten students to adult learners.",
            "Currently Sanna lives in Findlay, Ohio, where she was born to great Lebanese parents. She is bilingual in Arabic and English, and has lived in 5 different countries: the United States, Lebanon, Canada, Saudi Arabia, and Cyprus. Having an appreciation for travel and exploring different cultures and traditions, Sanna has traveled to Mexico, Egypt, Syria and Abu Dhabi. She loves to learn about the world.",
            "Sanna is a mother of three children and has two granddaughters. Her hobbies include gardening, crocheting, knitting, reading, and strolling in nature.",
          ],
        },
      ],
    },
  },
  {
    department: "Children and Youth",
    href: "/programs/youth",
    members: [
      {
        name: "Nicole Wilmarth",
        role: "Director of Youth Services",
        image: "/images/team/nicole-wilmarth.jpg",
        bio: [
          "Nicole joined NAAM in the late Spring of 2023 as the organization’s Early Childhood Coordinator. Nicole grew up in Lynn and continues to live in the city with her family. She has a rich background working with nonprofits, social work and early education. At the beginning of her career, she was a direct care counselor working with adolescents in need of mental health, substance abuse, family and education support. Since then she has been an early educator for the past 15 years. She first worked with nonprofits, Newton Community Service Center and South Windsor Child Development Center, as a Lead Infant, Toddler and Preschool Teacher and then worked with the Saugus and Lynn public school districts as a Pre-K Teacher. She earned her BA in Child Development with a concentration in Early Education from SNHU and has her Massachusetts teaching license working with students PreK-Grade 2 with or without disabilities.",
          "Nicole has developed and manages various play groups for NAAM, both on site in the Lynn office, and off site at various shelters in the area housing newcomers. She supports our youngest clients with social/emotional development, early literacy, language development, school readiness, and sensory play based learning. Nicole also supports parents with finding resources for their young children with early intervention supports, community resources, school registrations, and child care vouchers and enrollments. She became a certified Child Passenger Safety Technician in the Fall of 2023 and is able to provide car seat installations, safety checks and provide car seats for those in need with support from Lynn EMS.",
          "She is encouraged and excited to be providing all the support she can to our littlest clients and their families as they navigate our community.",
        ],
      },
      {
        name: "Reem Ahmad",
        role: "Teen & Young Adult Coordinator",
        image: "/images/team/reem-ahmad.jpg",
        bio: [
          "Reem Ahmad is a Youth Program Assistant at NAAM. She was involved in the youth program as a student when she was in high school. Reem graduated from Salem State University in 2017 with a Bachelor of Science in Biology",
        ],
      },
      {
        name: "Silvie Prinston",
        role: "School Age Program Coordinator",
        image: "/images/team/silvie-prinston.jpg",
        bio: [
          "Silvie is 20 years old and very warm with a thirst for knowledge and eclectic interests. She is currently double majoring in Sociology and Philosophy in hopes of using her people skills to help her community in significant ways.",
        ],
      },
      {
        name: "Madina Arsh Burhani",
        role: "Early Childhood Coordinator",
        image: "/images/team/madina-arsh-burhani.jpg",
        bio: [
          "Madina Arsh Burhani serves as the Youth Program Assistant, Childcare Assistant, and Interpreter at NAAM.",
          "Originally from Afghanistan, a country known for its rich culture, history, and strong sense of community, she carries the values of resilience, compassion, and hospitality within her. These values continue to inspire the work she does today.",
          "She holds a high school diploma and strongly believes in the power of learning and personal growth. Education has always been a core part of Madina’s journey and continues to shape her perspective.",
          "Before coming to the U.S., Madina worked for two years as a Financial Office Manager at Razi Institute of Higher Education in Afghanistan. She discovered NAAM through browsing social media while looking for ways to get involved after moving to the United States. She soon then began volunteering with NAAM, which led to a deeper connection with the organization. The mission and values immediately resonated with her, and she felt drawn to support the work NAAM does for others.",
          "Madina is deeply inspired by the strength and determination of immigrant and refugee families who are building new lives here. Being able to support and uplift others through NAAM gives her a sense of purpose and belonging. She believes in creating spaces where everyone feels seen, heard, and supported especially youth and families who are navigating so much change with courage.",
          "Outside of NAAM, Madina also currently works as a Supervisor at Stop & Shop.",
          "Madina enjoys reading, shopping, walking, playing basketball and volleyball, and cooking. She also loves spending time with friends and family, exploring new places, and listening to music. These hobbies keep her grounded and bring joy to her everyday life.",
        ],
      },
    ],
  },
  {
    department: "Immigration Legal Services",
    href: "/programs/citizenship",
    members: [
      {
        name: "Michael P. Martel",
        role: "Legal Director, Immigration Program",
        image: "/images/team/michael-p-martel.jpg",
        bio: [
          "Michael Martel is a graduate of the University of Washington and Suffolk University Law School. He is a native of Lynn and graduated from the Lynn Classical High School. He began practicing law in1985. Over the next seven years his practice concentrated on criminal defense and civil litigation with his immigration caseload continuing to grow. From 1992 until 2003, he was a partner in the Boston immigration firm, Ross, Martel and Silverman.",
          "Over the following eighteen years he headed his own firm located in Lynn and Boston representing thousands of foreign nationals with their family-based immigration cases as well as those facing removal proceedings. In 2021 he joined the Goldman and Partners Immigration firm in Salem MA, from which he retired as full time attorney in 2024. He has remained of counsel to that firm. Mike has been a long time member of the American Immigration Lawyers Association, the National Immigration Project of the National Lawyers Guild and the Massachusetts Association of Trial Attorneys. Over the years he has assisted several other community agencies by acting as mentor attorney to their accredited representatives. He is excited to be part of NAAM in its important mission to help bridge the transition of immigrants into the local community.",
        ],
      },
      {
        name: "Winfred Anyangu",
        role: "Immigration Specialist",
        image: "/images/team/winfred-anyangu.jpg",
        bio: [
          "Winfred Anyangu lives in Leominster, Massachusetts. She joined the NAAM team in August 2022 and is working as a Refugee and Immigrant Support Associate. Winnie enjoys positively impacting her clients’ lives and helping them to learn the basics of a new culture. In her free time, Winnie enjoys being indoors.",
        ],
      },
    ],
  },
  {
    department: "Health and Wellness",
    href: "/programs/wellness",
    members: [
      {
        name: "Dr. Scune Carrington",
        role: "Chief Clinical Officer and Wellness Clinic Director",
        image: "/images/team/dr-scune-carrington.jpg",
        bio: [
          "Dr. Scune Carrington first discovered NAAM during a late-night job search, at a moment when she was rethinking the direction of her career, especially as the landscape of higher education began to feel increasingly disconnected from the values that mattered most to her.",
          "Dr. Scune Carrington holds a Doctorate of Health Sciences (DHSc) from Massachusetts College of Pharmacy and Health Sciences, Masters of Social Work (MSW) from Boston College, and a Bachelor’s Degree with Individual Concentration (BDIC) from University of Massachusetts Amherst. Before this role, Dr. Scune Carrington was the Associate Dean and Director of the CARE Team at MIT, and before that, had spent over a decade in health care including spearheading behavioral health, oral health and integrated care initiatives across the commonwealth as the director of integrated care at the Massachusetts League of Community Health Centers and  leading a complex care population health program at Beth Israel Lahey Health Behavioral Services. Currently, she is licensed to practice in the Commonwealth of Massachusetts and the State of Maine.",
          "As a daughter of immigrants, Dr. Scune Carrington felt a deep pull to return to more of that wellness/wellbeing service work. When she saw a posting for a role focused on launching a Wellness Clinic and enhancing the well-being of refugees and immigrants, it immediately resonated with her. It felt personal and purposeful, and from that moment on, the path forward was clear.",
          "Her personal and professional journey has consistently centered around serving the greater good and uplifting my community. Aside from her jobs and running her private practice, she has been deeply committed to public service in the City of Malden, where she lives, as well as throughout the Commonwealth of Massachusetts, through appointments by both the Governor’s Office and the Speaker of the House of Representatives. These opportunities have only strengthened her resolve to build meaningful, lasting change in the communities she cares so deeply about.",
          "With a background in Social Work, her passion has always been rooted in supporting neighbors, friends, and those who are often overlooked. She believes in the power of connection, advocacy, and the possibility of positive change, even in the most challenging systems.",
          "Scune enjoys spending time with friends and family, hiking, traveling (25 countries and counting) and cooking. She is also a corgi video enthusiast, an avid reader, and a music lover who equally enjoys live concerts and dancing like no one is watching.",
        ],
      },
      {
        name: "Judi Goldman, LICSW",
        role: "Wellness Program Coordinator, NAAM",
        image: "/images/team/judi-goldman-licsw.jpg",
        bio: [
          "Judi Goldman is a Licensed Independent Clinical Social Worker (LICSW) with over 25 years of experience in private clinical practice. Since 2022, she has served as the Wellness Program Coordinator at the New American Association of Massachusetts (NAAM), where she develops and leads programs that promote healing, resilience, and community connection.",
          "With a deep commitment to emotional well-being and holistic care, Judi integrates her clinical expertise with a compassionate, community-centered approach. Outside of her professional life, she finds joy in being the mother of three beautiful young adults, who continue to inspire her work and outlook on life.",
        ],
      },
      {
        name: "Carlinne Barros",
        role: "Wellness Clinic Enrollment and Case Management Specialist",
        image: "/images/team/carlinne-barros.jpg",
        bio: [
          "Carlinne Barros, MSW is a Lynn native who recently returned to the North Shore after spending 10 years in Vermont. As a daughter of immigrants, Carlinne has a deep passion for supporting Immigrant communities in navigating systems, understanding their rights and empowering them to achieve their goals and overall wellness. She is excited to return to Lynn to support the refugee and immigrant community as the Wellness Center Enrollment Specialist and Case Manager of the STAR wellness Program. During her time in Vermont, she engaged in community outreach, program development, and clinical work. She served as a career counselor and program director with a focus on increasing healthcare equity, addressing healthcare disparities, and supporting those underrepresented in medicine to enter the health career pipeline. This work involved working closely with youth, young adults, families and community liaisons in the refugee and immigrant population of Winooski and Burlington Vermont. Carlinne later became a rostered psychotherapist in Vermont and has experience working in community mental health and private practice. Carlinne holds a deep appreciation and respect for human experience and each person’s unique story, which may come with traumatic experiences. Carlinne recognizes the importance of trauma-informed care, which is the basis of her work. Carlinne holds a bachelor’s and master’s degree in social work and is working towards obtaining her LICSW. Carlinne decided to go into social work due to its holistic and empowering approach towards serving others and the profession’s commitment to advocating for social justice. She also credits the social worker and social agencies that supported her and her family when she was a child. Carlinne enjoys spending time with her family and friends, painting rocks, reading books (though she admits she has converted to mostly audiobooks), the smell of the ocean, trying new foods (especially spicy food), traveling and meeting new people, skiing, and playing chess. She is a self-growth enthusiast and a lifelong learner who believes that you can learn something from anyone you meet.",
        ],
      },
    ],
  },
  {
    department: "NAAM Artisans",
    href: "https://naamartisans.org/",
    members: [
      {
        name: "Natasha Soolkin",
        role: "Executive Director",
        image: "/images/team/natasha-soolkin.jpg",
        bio: [
          "Natasha, an émigré from the former Soviet Union, arrived in the U.S. in 1990. For 25 years, she has supported immigrants and refugees with educational seminars, interpreting, and various activities. Since 2002, she has directed the New American Center and now serves as Executive Director of NAAM, passionately advocating for her clients.",
        ],
      },
      {
        name: "Lesley Hansard",
        role: "Program Director, NAAM Artisans",
        image: "/images/team/lesley-hansard.jpg",
        bio: [
          "Lesley is the driving force behind NAAM Artisans. Born in New Zealand, she arrived in the USA in 1988. She started her own artisan business in 1990 and has over 30 years of experience in craft shows, international workshops, and working with marginalized women artisans. She teaches microbusiness skills, empowering women to achieve financial independence.",
        ],
      },
      {
        name: "Judi Goldman",
        role: "Wellness Program Manager",
        image: "/images/team/judi-goldman-licsw.jpg",
        bio: [
          "Judi Goldman, LICSW, has been NAAM’s Wellness Program Manager for two years, following 30 years as a clinical therapist. The wellness program offers culturally sensitive support to Afghan refugees, promoting resilience through discussions, resources, and interventions. Activities include breathing exercises, yoga, therapeutic art, and bi-weekly discussions on various topics.",
        ],
      },
      {
        name: "Emilie Wilk",
        role: "Craft Show Manager",
        image: "/images/team/emilie-wilk.jpg",
        bio: [
          "Emilie started NAAM Artisans Lynn in summer 2022 as a social group for Afghan mothers. The group provided sewing materials and a space to connect. After feedback, formal English and sewing lessons were added. Emilie was the Youth Program Director at NAAM but is now a full time law student. Emilie remains involved with NAAM and manages NAAM Artisans craft markets. We are lucky to have her back with us.",
        ],
      },
      {
        name: "Taiba Amiri",
        role: "NAAM Artisans Craft Show Manager",
        image: "/images/team/taiba-amiri.jpg",
        bio: [
          "Taiba is the Craft Show Manager for NAAM Artisans. Originally from Afghanistan, Taiba came to the United States in 2021.",
          "Back home in Afghanistan, Taiba studied nursing and after arriving in the United States remained dedicated to continuing her education. Taiba received her High School Diploma in 2025 and is now studying to be a Dental Assistant. Her involvement at NAAM Artisans began by attending the sewing classes along with her mother. Through her involvement with NAAM Artisans, Taiba started working at the craft markets and is now a Craft Show Manager.",
          "Taiba is proud to be part of the team that supports others as they adjust to life in a new country, just like she did. In her free time, she enjoys reading books and continuing to learn and grow every day.",
        ],
      },
      {
        name: "Nicole Wilmarth",
        role: "Early Childhood Coordinator",
        image: "/images/team/nicole-wilmarth.jpg",
        bio: [
          "I began working with the NAAM Artisans Program in May 2023, providing a safe, stimulating childcare space. We plan weekly activities inspired by seasons, holidays, or children’s interests, and offer study support for school-age children. I supervise teen staff and provide health and educational resources to clients. Watching the program grow has been exciting.",
        ],
      },
      {
        name: "Madina Arsh Burhani",
        role: "Childcare Assistant, Interpreter",
        image: "/images/team/madina-arsh-burhani.jpg",
        bio: [
          "Madina is a leader at NAAM Artisans Childcare.  She loves supporting and nurturing the children in a positive environment. Additionally, she serves as an interpreter, ensuring clear and effective communication for all the families. Being part of the team is truly rewarding!",
        ],
      },
      {
        name: "Forrest Elliott",
        role: "Creative Consultant",
        image: "/images/team/forrest-elliott.jpg",
        bio: [
          "Forrest Elliott is a contemporary painter, designer, and arts advocate. He joined NAAM Artisans in 2025 to support Lesley in research and development, helping to shape innovative new initiatives for the organization. As NAAM’s Creative Consultant, Forrest brings a unique blend of artistic vision and entrepreneurial spirit to his work. Outside of NAAM, he can be found in his studio painting, curating exhibitions, or volunteering with a local music and arts nonprofit, where he has served on the board of directors for the past six years. His deep commitment to creative expression and community engagement continues to inform and inspire his work.",
        ],
      },
      {
        name: "Khujasta Bahara Amiri",
        role: "Interpreter, Afghan Cultural Ambassador",
        image: "/images/team/khujasta-bahara-amiri.jpg",
        bio: [
          "Bahara is an Interpreter at the New American Association of Massachusetts. Bahara interprets and assists in organizing NAAM Artisans and is a crucial player in empowering Afghan women at the sewing classes, wellness groups, and financial literacy sessions.",
        ],
      },
      {
        name: "Iryna Smyrnova",
        role: "NAAM Artisans Program Coordinator, Lynn Groups",
        image: "/images/team/iryna-smyrnova.jpg",
        bio: [
          "My name is Iryna Smyrnova, born in Mariupol, Ukraine. I loved drawing and creating clothes from childhood. I became a home economics teacher and worked in Mariupol. In Kyiv, I lived near my family. On February 24, 2022, my life changed. Now, I’m the Program Coordinator at NAAM Artisans, helping artisans succeed.",
        ],
      },
      {
        name: "Nicole Rodriguez",
        role: "English Teacher",
        image: "/images/team/nicole-rodriguez.jpg",
        bio: [
          "Nicole Rodriguez is thrilled to teach English to the women in NAAM Artisans. The women are learning survival English for daily life. Having taught English to Speakers of Other Languages for 15 years, teaching both children and adults, Nicole loves this role, where she can welcome and help New Americans get familiar with their new surroundings.",
        ],
      },
    ],
  },
  {
    department: "Administration",
    members: [
      {
        name: "Jud-Ann Geneus",
        role: "Operations Manager",
        image: "/images/team/jud-ann-geneus.jpg",
        bio: [
          "Jud-Ann Geneus joined NAAM in June 2023 after graduating from George Washington University with a Bachelors in International Affairs and a Micro-Minor in Immigration and Migration Studies.",
          "During her time at GW, Jud-Ann was actively involved in various initiatives supporting immigrant justice, whether that be student organizations, internships, mutual aid efforts, or research opportunities. She was a key member of No Lost Generation GW (NLG GW), a refugee advocacy student organization, and contributed to Refugee Educational Advancement Labs (REAL), a research lab focused on improving refugee access to education.",
          "With her upbringing as a Haitian American, Jud-Ann has always been passionate about immigrant justice and empowerment. At NAAM, she currently serves as the Office Manager and Enrollment Specialist, where she plays a vital role in overseeing administrative operations and assisting individuals in accessing essential services.",
          "Jud-Ann is a firm believer that to build a more equitable future, we must not only include immigrant voices, but center immigrants in discussions about them.",
        ],
      },
      {
        name: "Ramy Mahdi",
        role: "IT Specialist",
        image: "/images/team/ramy-mahdi.jpg",
        bio: [
          "Ramy is the IT Support at NAAM. He came to the United States in 2015 and he was referred to the New American Center for job readiness. He didn’t need English classes because he has a bachelor’s degree in English literature. He ended up volunteering in the computer lab. NAAM helped him find his first job. His work schedule allowed him to continue to volunteer in the computer lab. He enjoys helping the students with their computer skills, troubleshooting problems with the computers, and maintaining the equipment. He also helps translate for students when necessary.",
        ],
      },
    ],
  },
  {
    department: "Board of Directors",
    members: [
      {
        name: "Harena Gebreyesus",
        role: "President of the Board",
        image: "/images/team/harena-gebreyesus.jpg",
        bio: [
          "Harena Gebreyesus first became involved with the New American Association of Massachusetts in 2009 as a student in the after-school program. Soon after, she began working in the summer program and afterward, supervising the teen staff. Harena holds a Master of Physician Assistant Studies from MGH Institute of Health Professions and a Bachelor of Science in Nutrition from UMASS Amherst. She currently works as a Physician Assistant and spends her spare time hiking, exercising, and traveling.",
        ],
      },
      {
        name: "Dany Chhan",
        role: "Vice President",
        image: "/images/team/dany-chhan.jpg",
        bio: [
          "Dany (“Dah-nee”) Chhan is an analyst at Rockefeller Philanthropy Advisors where she facilitates and supports clients in their philanthropic journey through grantmaking. She began her career in rural Sierra Leone, serving as a Peace Corps volunteer. Throughout her professional experience, she has built expertise in managing both the technical and operational aspects of nonprofit projects. She is passionate about health systems strengthening, primary health care, and universal health coverage. Dany holds a Bachelor of Science in Public Health from University of Massachusetts Amherst and a Master of Public Health from Johns Hopkins Bloomberg School of Public Health.",
        ],
      },
      {
        name: "Romell Kidd",
        role: "Treasurer",
        image: "/images/team/romell-kidd.jpg",
        bio: [
          "Romell Kidd serves as a Multi-Site Manager for several of Peabody Properties’ North Shore developments. Before joining PPI, Romell held positions in the Hospitality industry and as a Real Estate Sales agent. He has worked closely alongside the Housing Corporation of Arlington and Madison Park Development Corporation, where he oversaw and helped manage their portfolio of income-based housing. As a Real Estate Manager, he has partnered with numerous local and statewide housing agencies and programs to provide access to a variety of housing options to stabilize families and those with disabilities.",
          "Romell Kidd holds a Bachelor of Science degree in Hospitality Management, from The West Indies College. He also holds the professional designation of Specialist in Housing Credit Management from the National Affordable Housing Management Association and is Certified by the Institute of Real Estate Management as an Accredited Residential Manager.",
        ],
      },
      {
        name: "Rasha Mikhael",
        role: "Board Member",
        image: "/images/team/rasha-mikhael.jpg",
        bio: [
          "Rasha Mikhael serves as the Revere community building Manager with The Neighborhood Developers. Rasha’s main focus in her position is to organize around affordable housing and support small businesses to thrive as well as educate the community about their civic rights.",
          "Prior to that, Rasha served as a Case Manager with NAAM, and before that, she worked with NGOs in Syria and Lebanon predominantly with service agencies that aim to provide advocacy and assist underrepresented populations in becoming active community participants.",
          "Rasha holds a Master’s Degree in Public Policy and a Bachelor’s degree in Management Information Systems and currently, she is pursuing her license as a Real Estate Salesperson.",
        ],
      },
      {
        name: "Analesa Baraka",
        role: "Board Member",
        image: "/images/team/analesa-baraka.jpg",
        bio: [
          "Analesa Baraka is a Boston based Acute Care Nurse Practitioner. Some of her  impactful philanthropic volunteer activities include medical missions to Cape Verde and Haiti. Analesa holds a Master of Science degree in Nursing from Northeastern University. She has a strong focus on creating sustainable and equitable care models and improving access to care for underserved communities.",
        ],
      },
      {
        name: "Doug Pardo",
        role: "Board Member",
        image: "/images/team/doug-pardo.jpg",
        bio: [
          "Doug founded LionPoint Coaching in 2020, taking the natural next step in a personal and professional life grounded in service to others. LionPoint has allowed him to formalize his vision for leader-centric, results-targeted potential building.",
          "From his first days at the United States Military Academy at West Point, Doug was drawn to the study of leadership. After West Point, Doug served with the 101st Airborne Division as an officer and Apache pilot during combat deployments to Afghanistan and Iraq.",
          "Following graduation from Columbia Business School, Doug served in executive, management, and strategy roles for Bridgewater Associates and Booz & Company.",
          "Since 2016, Doug has served as an Executive Coach, working with some of the most accomplished and ambitious leaders across some of the fastest-growing companies and industries.",
          "Doug mentors leaders of nonprofits, veterans, and those still serving in uniform; he plays a similar role with veterans transitioning from the military, considering political office, or progressing in their careers.  Doug is a New York native who makes his home in the Boston area with his wife and daughter, Clara.",
        ],
      },
    ],
  },
];

/** Volunteer bios, moved from Our Team to the Volunteer page at the client's request. */
export const volunteers: TeamMember[] = [
  {
    name: "Igor Sokolik",
    role: "Career Development Program Instructor/ NAAM Board of Directors",
    image: "/images/team/igor-sokolik.jpg",
    bio: [
      "Igor Sokolik teaches job readiness and career development at the NAAM and New American Center since 2009. Igor is a scientist with over 40 years of experience in industry and academia, he has Ph.D. in Physics and currently works as a consultant for industry and VC community. Igor also volunteers as a boat skipper and companion sailor for adaptive program at Piers Park Sailing Center in East Boston.",
    ],
  },
  {
    name: "Dulany Alexander",
    role: "Citizenship Instructor/Computer Training Instructor",
    image: "/images/team/dulany-alexander.jpg",
    bio: [
      "Once upon a time, Dulany was a self-employed stained glass craftsman in the Pacific Northwest, but then she decided to go into teaching. A year living in France convinced her that teaching French was not in the cards, so she became an elementary school teacher in Central Florida. However, when a friend persuaded her that Massachusetts would be a great place to live, she found work here with a computer graphics company. Eventually, she got tired of working in the corporate world and decided to go back to teaching, only this time, she wanted to teach adults. As luck would have it, she fell into teaching English to adults in 1988, and she loved it. She’s been teaching English and adult basic education, and integrating technology into instruction ever since.",
    ],
  },
  {
    name: "Roberta Rogers",
    role: "Computer Training Volunteer",
    image: "/images/team/roberta-rogers.jpg",
    bio: [
      "I am originally from New York. My degree was in elementary education, and I taught at that level for several years. Then, while raising my family, I enjoyed a variety of other jobs outside the field of education. I eventually returned to teaching, but to teaching adults. For fourteen years, I taught ESOL in the context of family literacy which I found extremely rewarding. After retiring several years ago, I came to NAAM to volunteer in the computer lab with my former colleague, Dulany.",
    ],
  },
  {
    name: "Nancy Sullivan",
    role: "ESL/Citizenship Programs",
    image: "/images/team/nancy-sullivan.jpg",
    bio: [
      "Nancy Sullivan is an ESL/Citizenship Volunteer at NAAM. After graduating from Framingham State College with a B.S. in Education she joined the Peace Corps and volunteered in Brazil. For twenty-five years Nancy taught Life Skills/Health in the Newburyport Middle School, retiring in 2002. During that time she completed the Commonwealth Adult Literacy Campaign Training and tutored at the Haverhill Library. She was also very active in local Sister City programs in rural Kenya. After retiring, she completed a TESOL Certificate (Teaching of English to Speakers of Other Languages) from the School for International Training and a CELTA-Level 4 Certificate (Certificate in English Language Teaching to Adults) from the University of Cambridge (UK). For seven years she taught for the International Rescue Committee in Chelsea and Lynn until IRC closed their Boston office. She then facilitated Conversation Classes at Operation Bootstrap in Lynn until 2012 when she began to volunteer at the New American Association of Massachusetts.",
    ],
  },
];
