export const pageLinks = [
  { id: 1, path: '/', text: 'home', title: 'Home' },
  {
    id: 2,
    text: 'about',
    title: 'About',
    submenu: [
      {
        id: 1,
        path: '/aboutvision',
        text: 'Vision',
        title: 'Vision',
        icon: 'material-symbols:lightbulb-rounded',
      },
      {
        id: 2,
        path: '/about/mission',
        text: 'Mission',
        title: 'mission',
        icon: 'material-symbols:featured-play-list',
      },
      {
        id: 3,
        path: '/about/goals',
        text: 'Goals',
        title: 'Goals',
        icon: 'carbon:trophy-filled',
      },
      {
        id: 4,
        path: '/core-values',
        text: 'Core values',
        title: 'Core Values',
        icon: 'bxs:donate-heart',
      },
      {
        id: 5,
        path: '/history',
        text: 'History',
        title: 'History',
        icon: 'ri:file-paper-2-fill',
      },
    ],
  },
  {
    id: 3,
    text: 'courses',
    title: 'Courses',
    submenu: [
      {
        id: 1,
        path: '/courses/beed',
        text: 'Bachelor of Elementary Education',
        title: 'Bachelor of Elementary Education',
        icon: 'mingcute:book-5-fill',
      },
      {
        id: 2,
        path: '/courses/bsed',
        text: 'Bachelor of Secondary Education',
        title: 'Bachelor of Secondary Education',
        icon: 'mdi:newspaper-variant',
      },
      {
        id: 3,
        path: '/courses/bshm',
        text: 'Bachelor of Science in Hospitality Management',
        title: 'Bachelor of Science in Hospitality Management',
        icon: 'fluent:drink-wine-20-filled',
      },
      {
        id: 4,
        path: '/courses/bsit',
        text: 'Bachelor of Science in Industrial Technology',
        title: 'Bachelor of Science in Industrial Technology',
        icon: 'bi:laptop-fill',
      },
      {
        id: 5,
        path: '/courses/dpe',
        text: 'Diploma in Professional Education',
        title: 'Diploma in Professional Education',
        icon: 'material-symbols:school',
      },
    ],
  },
  { id: 4, path: '/contacts', text: 'contacts', title: 'Contacts' },
];

export const achievers = [
  { id: 1, count: 1004, category: 'Government Scholars' },
  { id: 2, count: 234, category: 'LPT Passers' },
  { id: 3, count: 523, category: 'Topnotchers' },
  { id: 4, count: 515, category: 'Awards' },
];

/* image - img/title/info */
/* id, subject, createdAt, title, details(array of strings), images(array of objects{image,video,title,info(array of strings)})*/
/* 

{
  id:
  subject: '',
  createdAt: '',
  title: '',
  details: [''],
  images: [{image:'',info: ['']}],
}

*/
export const newsAndUpdates = [
  /* grade slip distribution 6 */
  {
    id: 6,
    subject: 'grade slip',
    createdAt: 'Jan 19, 2023',
    title: `MIDTERM GRADE SLIP DISTRIBUTION SCHEDULE || January 19-21, 2023`,
    details: [
      `Please be reminded of your respective schedules. ***Midterm Grade Slip*** will be one of the requirements (***1st year students to 3rd year students***) for your enrollment for the 2nd Semester of A.Y. 2022-2023.`,
      `Thank you!`,
    ],
    images: [
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1674267574/talisay-city-college/1st-semester-grade-slip-distribution-2022-2023/page-1_ml66r8.webp',
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1674267574/talisay-city-college/1st-semester-grade-slip-distribution-2022-2023/page-2_wriezw.webp',
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1674267573/talisay-city-college/1st-semester-grade-slip-distribution-2022-2023/page-3_vw7n1y.webp',
      },
    ],
  },
  /* final exam 7*/
  {
    id: 7,
    subject: 'examination',
    createdAt: 'Jan 17, 2023',
    title: `FINAL EXAMS SCHEDULE || January 16 - 21, 2023`,
    details: [
      `Please check your respective schedules (Teacher Education) for the `,
      `upcoming ***Final Exams of the 1st Semester, A.Y. 2022-2023***.`,
    ],
    images: [
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1674266767/talisay-city-college/1st-semester-final-examination-2022-2023/page-1_pud8h0.webp',
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1674266767/talisay-city-college/1st-semester-final-examination-2022-2023/page-2_f3v330.webp',
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1674266767/talisay-city-college/1st-semester-final-examination-2022-2023/page-3_azu3tc.webp',
      },
    ],
  },
  /* enrolment 8*/
  {
    id: 8,
    subject: 'enrollment',
    createdAt: 'Jan 13, 2023',
    title: 'Schedule of 𝐄𝐧𝐫𝐨𝐥𝐦𝐞𝐧𝐭 for Second 𝐒𝐞𝐦𝐞𝐬𝐭𝐞𝐫, A.Y. 2022-2023',
    details: [
      `(for Continuing Students and Returnees only)`,
      `📌𝙹𝚊𝚗𝚞𝚊𝚛𝚢 𝟸𝟹-𝟸𝟻, 𝟸𝟶𝟸𝟹 - ***𝟰𝘁𝗵 𝗬𝗲𝗮𝗿 𝗦𝘁𝘂𝗱𝗲𝗻𝘁𝘀***`,
      `📌𝙹𝚊𝚗𝚞𝚊𝚛𝚢 𝟸𝟼-𝟸𝟾, 𝟸𝟶𝟸𝟹 - ***𝟯𝗿𝗱 𝗬𝗲𝗮𝗿 𝗦𝘁𝘂𝗱𝗲𝗻𝘁𝘀***`,
      `📌𝙹𝚊𝚗. 𝟹𝟶 - 𝙵𝚎𝚋. 𝟷, 𝟸𝟶𝟸𝟹 - ***𝟮𝗻𝗱 𝗬𝗲𝗮𝗿 𝗦𝘁𝘂𝗱𝗲𝗻𝘁𝘀***`,
      `📌𝙵𝚎𝚋. 𝟸-𝟺, 𝟸𝟶𝟸𝟹 - ***𝟭𝘀𝘁 𝗬𝗲𝗮𝗿 𝗦𝘁𝘂𝗱𝗲𝗻𝘁𝘀***`,
      `***𝙀𝙣𝙧𝙤𝙡𝙢𝙚𝙣𝙩 𝙍𝙚𝙦𝙪𝙞𝙧𝙚𝙢𝙚𝙣𝙩𝙨:***`,
      `1.) Accomplished Clearance Form (1st Sem., A.Y. 2022-2023)`,
      `2.) Evaluated Prospectus`,
      `3.) Midterm Grade Slip (1st Sem., A.Y. 2022-2023)`,
      `4.) Proof of Online Teachers Evaluation (1st Sem., A.Y. 2022-2023)`,
      `5.) Medical X-ray result (for 4th Year Students only)`,
      `📍Enrolment Cut-Off Time: 4:00 PM`,
    ],
    images: [
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673752124/talisay-city-college/enrolment/enrollment_xlvfsi.webp',
      },
    ],
  },
  /* evaluation 9*/
  {
    id: 9,
    subject: 'evaluation',
    createdAt: 'Jan 11, 2023',
    title: `𝐈𝐍𝐒𝐓𝐑𝐔𝐂𝐓𝐎𝐑'𝐒 𝐎𝐍𝐋𝐈𝐍𝐄 𝐄𝐕𝐀𝐋𝐔𝐀𝐓𝐈𝐎𝐍 || 𝟏𝐬𝐭 𝐒𝐞𝐦𝐞𝐬𝐭𝐞𝐫, 𝐀.𝐘. 𝟐𝟎𝟐𝟐-𝟐𝟎𝟐𝟑`,
    details: [
      `Dear Talisalites,`,
      `As the 1st Semester of Academic Year 2022-2023 is about to end, you are required to accomplish an online evaluation of your instructors for instructional planning and development purposes.`,
      `This evaluation will further serve as an ***𝗜𝗡𝗜𝗧𝗜𝗔𝗟 𝗥𝗘𝗤𝗨𝗜𝗥𝗘𝗠𝗘𝗡𝗧*** for your enrolment in the 2nd Semester of A.Y. 2022-2023 as a continuing student. `,
      `Before you proceed, please take note of the following:`,
      `1) Evaluate all your teachers during this first semester. Click the link attached to their names from the list below.`,
      `2) Provide the correct and complete information which includes consistent valid and active e-mail addresses in accomplishing the online evaluation forms.`,
      `3) Once you submit the form/s, you will receive a copy of your responses through your e-mail.`,
      `4) From the received copy, take a screenshot of its first page/section. The screenshot must include the statement thanking you for filling out the form, the name of the instructor, subject/s, your e-mail address, and your student ID number.`,
      `5) You must present the screenshots upon enrollment as proof that you have evaluated all your instructors.`,
      `6) The links will only be open from January 12 to January 16, 2023.`,
      `Note:
By accomplishing the forms below, you hereby authorize Talisay City College to collect your personal information and use the data for academic purposes as per the Data Privacy Act of 2012. Please follow the link for more details on the Data Privacy Act of 2012: https://tinyurl.com/fcuehhb4`,
      `*See each photos for the links provided in the caption.`,
    ],
    images: [
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514735/talisay-city-college/evaluation/online-evaluation-1_wmta9s.webp',

        info: [
          `Dear Talisalites,`,
          `As the 1st Semester of Academic Year 2022-2023 is about to end, you are required to accomplish an online evaluation of your instructors for instructional planning and development purposes.`,
          `This evaluation will further serve as an ***𝗜𝗡𝗜𝗧𝗜𝗔𝗟 𝗥𝗘𝗤𝗨𝗜𝗥𝗘𝗠𝗘𝗡𝗧*** for your enrolment in the 2nd Semester of A.Y. 2022-2023 as a continuing student. `,
          `Before you proceed, please take note of the following:`,
          `1) Evaluate all your teachers during this first semester. Click the link attached to their names from the list below.`,
          `2) Provide the correct and complete information which includes consistent valid and active e-mail addresses in accomplishing the online evaluation forms.`,
          `3) Once you submit the form/s, you will receive a copy of your responses through your e-mail.`,
          `4) From the received copy, take a screenshot of its first page/section. The screenshot must include the statement thanking you for filling out the form, the name of the instructor, subject/s, your e-mail address, and your student ID number.`,
          `5) You must present the screenshots upon enrollment as proof that you have evaluated all your instructors.`,
          `6) The links will only be open from January 12 to January 16, 2023.`,
          `Note:
By accomplishing the forms below, you hereby authorize Talisay City College to collect your personal information and use the data for academic purposes as per the Data Privacy Act of 2012. Please follow the link for more details on the Data Privacy Act of 2012: https://tinyurl.com/fcuehhb4`,
          `*See each photos for the links provided in the caption.`,
          `(Page 1 of 10)`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514735/talisay-city-college/evaluation/online-evaluation-2_ctuffu.webp',

        info: [
          '*Check post for the complete instructions.',
          `***𝐓𝐄𝐀𝐂𝐇𝐄𝐑 𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐎𝐍 𝐏𝐑𝐎𝐆𝐑𝐀𝐌***`,
          `1. MA'AM JULIET ALFANTA - https://tinyurl.com/ALFANTAJ`,
          `2. MA'AM GRACE BACALSO - https://tinyurl.com/BACALSOG`,
          `3. SIR JOSELITO BACOLCOL - https://tinyurl.com/BACOLCOLJ`,
          `4. MA'AM MICHELLE CABRERA - https://tinyurl.com/CABRERAMI`,
          `5. MA'AM RACHEL JANE CASQUEJO - https://tinyurl.com/CASQUEJOR`,
          `6. MA'AM ADELAIDA COYOCA - https://tinyurl.com/COYOCAAD`,
          `7. MA'AM JULIET DELA CRUZ - https://tinyurl.com/DELACRUZJU`,
          `8. MA'AM EMMA DELGADO - https://tinyurl.com/DELGADOE`,
          `9. MA'AM NHIKIE DEL SOCORRO - https://tinyurl.com/DELSOCORRON`,
          `10. DR. JENNILYN GEAGONIA - https://tinyurl.com/GEAGONIAJ`,
          `11. DR. LAISA GONZALES - https://tinyurl.com/GONZALESL`,
          `12. DR. BERNARD EVANGELICOM JAMON - https://tinyurl.com/JAMONBER`,
          `13. MA'AM MARY GRACE JAMON - https://tinyurl.com/JAMONMAR`,
          `14. MA'AM CHERRY ANN LAURON - https://tinyurl.com/LAURONC`,
          `15. MA'AM TOMASA MAPANO - https://tinyurl.com/MAPANOTOM`,
          `16. MA'AM LYNN OLANO - https://tinyurl.com/OLANOL`,
          `17. DR. ALICIA PLANTAR - https://tinyurl.com/PLANTARALICE`,
          `18. DR. DELETAH POLINAR - https://tinyurl.com/POLINARDE`,
          `19. MA'AM ANA LUNA SAYSON - https://tinyurl.com/SAYSONANA`,
          `20. MA'AM HERMENIA SUARING - https://tinyurl.com/SUARINGH`,
          `(Page 2 of 10)`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514735/talisay-city-college/evaluation/online-evaluation-1_wmta9s.webp',
        info: [
          '*Check post for the complete instructions.',
          `***𝐇𝐎𝐒𝐏𝐈𝐓𝐀𝐋𝐈𝐓𝐘 𝐌𝐀𝐍𝐀𝐆𝐄𝐌𝐄𝐍𝐓 𝐏𝐑𝐎𝐆𝐑𝐀𝐌***`,
          `1. MA'AM Z-LEE ANN ANDO - https://tinyurl.com/ANDOZL`,
          `2. SIR ALEX ARTES - https://tinyurl.com/ARTESALE`,
          `3. SIR LEE BARGAYO - https://tinyurl.com/BARGAYOL`,
          `4. MA'AM KYRL BONGGO - https://tinyurl.com/BONGGOKY`,
          `5. SIR JOHN KEVIN BORLASA - https://tinyurl.com/BORLASAJ`,
          `6. SIR MARK GREGORY CABALLERO - https://tinyurl.com/CABALLEROM`,
          `7. SIR EMMANUEL CABAÑERO - https://tinyurl.com/CABANEROE`,
          `8. SIR ALBERTO CAMINGAO - https://tinyurl.com/CAMINGAOA`,
          `9. MA'AM GENEVIEVE CAVAIANI - https://tinyurl.com/CAVAIANIG`,
          `10. MA'AM ANGEL ELLAINE ESPINA - https://tinyurl.com/ESPINAA`,
          `11. MA'AM GERSHA FIEDACAN - https://tinyurl.com/FIEDACANG`,
          `12. MA'AM SHERIDANA FUERTES - https://tinyurl.com/FUERTESS`,
          `13. SIR MARL VINCENT LABITAD - https://tinyurl.com/LABITADM`,
          `14. MA'AM SHEILA NOREEN MACAN - https://tinyurl.com/MACANSHE`,
          `15. SIR JULIUS MEDIANO - https://tinyurl.com/MEDIANOJ`,
          `16. MA'AM TAINA RABAYA - https://tinyurl.com/RABAYATA`,
          `17. SIR EDMAR RAMA - https://tinyurl.com/EDMARAMA`,
          `18. MA'AM TERESITA SAZON - https://tinyurl.com/SAZONT`,
          `19. MA'AM NANCY TOSO - https://tinyurl.com/TOSONAN`,
          `20. MA'AM IMIE VILLAVER - https://tinyurl.com/VILLAVERI`,
          `(Page 3 of 10)`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514735/talisay-city-college/evaluation/online-evaluation-4_tzxjtx.webp',
        info: [
          `*Check post for the complete instructions.`,
          `***𝐈𝐍𝐃𝐔𝐒𝐓𝐑𝐈𝐀𝐋 𝐓𝐄𝐂𝐇𝐍𝐎𝐋𝐎𝐆𝐘 𝐏𝐑𝐎𝐆𝐑𝐀𝐌***`,
          `1. SIR BERNARDO ABAIS - https://tinyurl.com/ABAISB`,
          `2. SIR MICHAEL ABE- https://tinyurl.com/ABEMICHA`,
          `3. ENGR. ANGELITO ACEDO - https://tinyurl.com/ACEDOA`,
          `4. MA'AM FLORALICE ALUETA - https://tinyurl.com/ALUETAF`,
          `5. SIR JADE BARIBAR - https://tinyurl.com/BARIBARJ`,
          `6. SIR JOEL CAMASURA - https://tinyurl.com/CAMASURAJ`,
          `7. MA'AM CLARISSA CAÑETE - https://tinyurl.com/CANETEC`,
          `8. SIR JOSEPH CANILLO - https://tinyurl.com/CANILLOJ`,
          `9. SIR BHABETHS CANONAYON - https://tinyurl.com/CANONAYONB`,
          `10. SIR RICHARD CUPAL - https://tinyurl.com/CUPALRICH`,
          `11. SIR ALTHER DABON - https://tinyurl.com/DABONAL`,
          `12. SIR CLIFFORD DELOS REYES - https://tinyurl.com/DELOSREYESC`,
          `13. SIR PATRICK GASPE - https://tinyurl.com/GASPEP`,
          `14. SIR DANIEL GRAVINES - https://tinyurl.com/GRAVINESD`,
          `15. SIR CHARMYBOI LABAJO - https://tinyurl.com/LABAJOC`,
          `16. MA'AM JUDY ANN LIBATON - https://tinyurl.com/LIBATONJ`,
          `17. SIR RUFFY LUCIANO - https://tinyurl.com/LUCIANORUFFY`,
          `18. SIR RIAN MABANAG - https://tinyurl.com/MABANAGR`,
          `19. MA'AM NIDA MANGUBAT - https://tinyurl.com/MANGUBATN`,
          `20. MA'AM KAROLYN NARCA - https://tinyurl.com/NARCAKAR`,
          `21. SIR KELLY ADRIAN NERI - https://tinyurl.com/NERIKELLY`,
          `22. SIR PERFECTO PERALTA - https://tinyurl.com/PERALTAP`,
          `23. SIR ROMARJAY REBESE - https://tinyurl.com/REBESER`,
          `24. SIR EDGAR ALLAN ROSAROSO - https://tinyurl.com/ROSAROSOE`,
          `25. MA'AM HERMENEGILDA ROSINTO - https://tinyurl.com/ROSINTOH`,
          `26. SIR SYRAEL SOQUE - https://tinyurl.com/SOQUESY`,
          `27. MA'AM PRECIOUS MAY YASAY - https://tinyurl.com/YASAYP`,
          `(Page 4 of 10)`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514736/talisay-city-college/evaluation/online-evaluation-5_afj104.webp',
        info: [
          `*Check post for the complete instructions.`,
          `***𝐋𝐀𝐍𝐆𝐔𝐀𝐆𝐄𝐒 𝐃𝐄𝐏𝐀𝐑𝐓𝐌𝐄𝐍𝐓***`,
          `1. SIR HARSON ABANGAN- https://tinyurl.com/ABANGANH`,
          `2. MA'AM MAE ABELLANA - https://tinyurl.com/ABELLANAM`,
          `3. MA'AM CYNTHIA ABELLANOSA - https://tinyurl.com/ABELLANOSAC`,
          `4. DR. CHARLOTTE AMISTA - https://tinyurl.com/AMISTAC`,
          `5. SIR MICHAEL ATCHASO - https://tinyurl.com/ATCHASOM`,
          `6. DR. MARIANNE BAQUIAL - https://tinyurl.com/BAQUIALM`,
          `7. MA'AM WILFREDA CABUSAS - https://tinyurl.com/CABUSASW`,
          `8. MA'AM GUIA MARIE CASTAÑARES - https://tinyurl.com/CASTANARESG`,
          `9. MA'AM DHERNELYN COSTARDO - https://tinyurl.com/COSTARDOD`,
          `10. SIR BEEM GLEASON FABRIGA - https://tinyurl.com/FABRIGAB`,
          `11. MA'AM TERESITA GORDON - https://tinyurl.com/GORDONTER`,
          `12. SIR JARRE LABORTE - https://tinyurl.com/LABORTEJ`,
          `13. SIR JOHN CARLO LASOLA - https://tinyurl.com/LASOLAJ`,
          `14. SIR JOSHUA LOPEZ - https://tinyurl.com/LOPEZJO`,
          `15. MA'AM ADELAIDA MARCIAL - https://tinyurl.com/MARCIALADE`,
          `16. SIR JOSEPH MIRANDA - https://tinyurl.com/MIRANDAJO`,
          `17. MA'AM ROCHELLE MONTALBAN - https://tinyurl.com/MONTALBANR`,
          `18. DR. HELMER MONTEJO - https://tinyurl.com/MONTEJOH`,
          `19. MA'AM VICTORIA MORTOLA - https://tinyurl.com/MORTOLAV`,
          `20. SIR SALGIE VAN TAMPOS - https://tinyurl.com/TAMPOSS`,
          `21. MA'AM CHEZIE TORMIS - https://tinyurl.com/TORMISC`,
          `22. SIR JOSEPH LOUIS TORMIS - https://tinyurl.com/TORMISJ`,
          `23. SIR ASKIN VILLARIAS - https://tinyurl.com/VILLARIASA`,
          `24. SIR VENZ PATRICK VIRADOR - https://tinyurl.com/VIRADORV`,
          `25. DR. ERLINDA WONG - https://tinyurl.com/ERLINDAW`,
          `(Page 5 of 10)`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514736/talisay-city-college/evaluation/online-evaluation-6_pgrcub.webp',
        info: [
          `*Check post for the complete instructions.`,
          `***𝐌𝐀𝐓𝐇 𝐀𝐍𝐃 𝐒𝐂𝐈𝐄𝐍𝐂𝐄𝐒 𝐃𝐄𝐏𝐀𝐑𝐓𝐌𝐄𝐍𝐓***`,
          `*Check post for the complete instructions.`,
          `1. DR. ISABELITA ABELLANOSA- https://tinyurl.com/ABELLANOSAI`,
          `2. SIR RHOMMEL ACOP - https://tinyurl.com/ACOPRH`,
          `3. SIR EUGINE ARCHIVAL - https://tinyurl.com/ARCHIVALE`,
          `4. MA'AM HELEN BACALSO - https://tinyurl.com/BACALSOH`,
          `5. SIR GERARD DUIS BEJOC - https://tinyurl.com/BEJOCG`,
          `6. SIR ENDRIE BOHOL - https://tinyurl.com/BOHOLE`,
          `7. SIR NORMAN CABIGAS - https://tinyurl.com/CABIGASN`,
          `8. MA'AM RACHIEL CAL - https://tinyurl.com/RACHCAL12`,
          `9. DR. ALFREDO CANO - https://tinyurl.com/CANOALFRE`,
          `10. SIR ERWIN CAPARIDA - https://tinyurl.com/CAPARIDAE`,
          `11. SIR CIRILO GASTANES - https://tinyurl.com/GASTANESC`,
          `12. SIR INTANO CUADRATO - https://tinyurl.com/INTANOCUA`,
          `13. MA'AM LYNN LARIDA - https://tinyurl.com/LARIDALY`,
          `14. MA'AM APLHA JANE MILA - https://tinyurl.com/MILAALPHAJA`,
          `15. MA'AM NACION MARBETH - https://tinyurl.com/NACIONM`,
          `16. MA'AM VENUS NEÑEL - https://tinyurl.com/NENELVEN`,
          `17. SIR ORLANDO OBIEDO - https://tinyurl.com/OBIEDOROL`,
          `18. MA'AM ROREEN SALCEDA - https://tinyurl.com/SALCEDAR`,
          `19. SIR CRIS VANDY SALGARINO - https://tinyurl.com/SALGARINOC`,
          `20. SIR EPIFANIO TIGLEY - https://tinyurl.com/TIGLEYE`,
          `21. MA'AM DEBBIE VILLAVELEZ - https://tinyurl.com/VILLAVELEZD`,
          `22. MA'AM GLORY MAE CABRERA - https://tinyurl.com/CABRERAG`,
          `(Page 6 of 10)`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514736/talisay-city-college/evaluation/online-evaluation-7_yfhu2r.webp',
        info: [
          `*Check post for the complete instructions.`,
          `***𝐒𝐎𝐂𝐈𝐀𝐋 𝐀𝐍𝐃 𝐁𝐄𝐇𝐀𝐕𝐈𝐎𝐑𝐀𝐋 𝐒𝐂𝐈𝐄𝐍𝐂𝐄𝐒 𝐃𝐄𝐏𝐀𝐑𝐓𝐌𝐄𝐍𝐓***`,
          `1. SIR MARBEN BASCON - https://tinyurl.com/BASCONM`,
          `2. MA’AM JASMIN CABUENAS - https://tinyurl.com/CABUENASJ`,
          `3. SIR JOSHUA COMEROS - https://tinyurl.com/COMEROSJ`,
          `4. SIR JOSE FERMIN CRAVE - https://tinyurl.com/CRAVEJose`,
          `5. SIR JAYSON CUERDA - https://tinyurl.com/CUERDAJAY`,
          `6. MA'AM KAREN JANE DELA PAÑE - https://tinyurl.com/DELAPANEK`,
          `7. MA'AM RHEA DESTACAMENTO - https://tinyurl.com/DESTACAMENTOR`,
          `8. MA'AM ZENIA DOLLISON - https://tinyurl.com/DOLLISONZ`,
          `9. MA'AM MARIA FREGIE EJERCITO - https://tinyurl.com/EJERCITOM`,
          `10. SIR PHILLIP FEDILLAGA - https://tinyurl.com/FEDILLAGAP`,
          `11. SIR ALVIN GALLO - https://tinyurl.com/GALLOAL`,
          `12. MA'AM MARY LOU GARCIA - https://tinyurl.com/GARCIAMA`,
          `13. ATTY. PRETTY LEIGHN KATE GIMENA - https://tinyurl.com/GIMENAPRE`,
          `14. MA'AM LAARNI JERUSALEM - https://tinyurl.com/LAARNIJ`,
          `15. MA'AM SAMANTHA THEREZ LABAGALA - https://tinyurl.com/LABAGALAS`,
          `16. MA'AM AGIE LAROBIS - https://tinyurl.com/LAROBISA`,
          `17. MA'AM MAY LIMBAGA - https://tinyurl.com/LIMBAGAM`,
          `18. MA'AM CANDICE GRACE MAQUE - https://tinyurl.com/MAQUECAN`,
          `19. MA'AM KRISTA MARIEL RODELA - https://tinyurl.com/RODELAK`,
          `20. MA'AM LILYBETH SINGCO - https://tinyurl.com/SINGCOLILY`,
          `21. SIR CARMELO TORINO - https://tinyurl.com/TORINO11`,
          `(Page 7 of 10)`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514736/talisay-city-college/evaluation/online-evaluation-8_lu8ppo.webp',
        info: [
          `*Check post for the complete instructions.`,
          `***𝐏𝐇𝐘𝐒𝐈𝐂𝐀𝐋 𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐎𝐍 𝐃𝐄𝐏𝐀𝐑𝐓𝐌𝐄𝐍𝐓***`,
          `1. SIR DOMINIC CAÑEDA - https://tinyurl.com/CANEDADOM`,
          `2. SIR PRAISELOU LABAJO - https://tinyurl.com/LABAJOPRA`,
          `3. MA'AM JENNETH LABRADO - https://tinyurl.com/LABRADOJ`,
          `4. DR. EVELYN MANCAO - https://tinyurl.com/MANCAOE`,
          `5. SIR KENNEDY NAVARRA - https://tinyurl.com/NAVARRAK`,
          `6. SIR JASON NOQUILLO - https://tinyurl.com/NOQUILLOJ`,
          `7. SIR RAE VINCENT TAREGA - https://tinyurl.com/TAREGAR`,
          `8. SIR CARL JUSTIN TORRES - https://tinyurl.com/TORRESCARL`,
          `9. MA'AM JUVY VILLARIAS - https://tinyurl.com/VILLARIASJ`,
          `(Page 8 of 10)`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514736/talisay-city-college/evaluation/online-evaluation-9_zcmez7.webp',
        info: [
          `*Check post for the complete instructions.`,
          `***𝐑𝐄𝐄𝐃/𝐕𝐀𝐋𝐄𝐃 𝐃𝐄𝐏𝐀𝐑𝐓𝐌𝐄𝐍𝐓***`,
          `1. MA'AM RIZA ARCHIVAL - https://tinyurl.com/ARCHIVALR`,
          `2. SIR PAUL JAMES DAGATAN - https://tinyurl.com/DAGATANP`,
          `3. SIR ALVIN GALLO - https://tinyurl.com/GALLOAL`,
          `4. MA'AM KEREN RILE JAVIER - https://tinyurl.com/JAVIERK`,
          `5. SR. LUZVIMINDA JUNDIS - https://tinyurl.com/JUNDISLUZ`,
          `6. SIR TEODORO PADEROG - https://tinyurl.com/PADEROGT`,
          `7. SIR MANOLITO SELMA - https://tinyurl.com/SELMAM`,
          `8. MA'AM BRENDA TABERA - https://tinyurl.com/TABERAB`,
          `9. SIR DAVON JHAY TIDOY - https://tinyurl.com/TIDOYD`,
          `(Page 9 of 10)`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514736/talisay-city-college/evaluation/online-evaluation-10_gflnjp.webp',
        info: [
          `*Check post for the complete instructions.`,
          `***𝐍𝐒𝐓𝐏 𝐃𝐄𝐏𝐀𝐑𝐓𝐌𝐄𝐍𝐓***`,
          `1. SIR FROILAN DELOS SANTOS - https://tinyurl.com/DELOSSANTOSFR`,
          `2. SIR CHAD DIOKO - https://tinyurl.com/DIOKOCH`,
          `3. SIR JOHN BERT SEGARRA - https://tinyurl.com/SEGARRAJ`,
          `(Page 10 of 10)`,
        ],
      },
    ],
  },
  /* intramurals 10*/
  {
    id: 10,
    subject: 'intramurals',
    createdAt: 'Dec 19, 2022',
    title: `TCC Intramural Days 2022`,
    details: [
      `CONGRATULATIONS RED KNIGHTS!!! ❤️❤️❤️`,
      `Pop-Jazz Dance Competition CHAMPION!!!`,
      `- 1st Runner-up: YELLOW VIKINGS 💛`,
      `- 2nd Runner-up: PURPLE SAMURAIS 💜`,
    ],
    images: [
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868455/talisay-city-college/intramurals%402022/pop-jazz-red-knights_2022_vpkqfh.webp',
        title: `CONGRATULATIONS RED KNIGHTS!!! ❤️❤️❤️`,
        info: [
          `TCC Intramural Days 2022`,
          `Pop-Jazz Dance Competition CHAMPION!!!`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868459/talisay-city-college/intramurals%402022/pop-jazz-yellow-vikings_2022_tup0vm.webp',
        title: `CONGRATULATIONS YELLOW VIKINGS!!! 💛💛`,
        info: [
          `TCC Intramural Days 2022`,
          `Pop-Jazz Dance Competition 1st Runner-up!`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868455/talisay-city-college/intramurals%402022/pop-jazz-purple-samurai_2022_zkbkke.webp',
        title: `CONGRATULATIONS PURPLE SAMURAIS!!! 💜💜`,
        info: [
          `TCC Intramural Days 2022`,
          `Pop-Jazz Dance Competition 2nd Runner-up!`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868452/talisay-city-college/intramurals%402022/pop-jazz-grey-spartans_2022_cphnc5.webp',
        title: `CONGRATULATIONS GREY SPARTANS!!!`,
        info: [
          `TCC Intramural Days 2022`,
          `Pop-Jazz Dance Competition 3rd Runner-up!`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868454/talisay-city-college/intramurals%402022/pop-jazz-blue-trojans_2022_kpfl5u.webp',
        title: `CONGRATULATIONS BLUE TROJANS!!!`,
        info: [
          `TCC Intramural Days 2022`,
          `Pop-Jazz Dance Competition 4th Runner-up!`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868460/talisay-city-college/intramurals%402022/pop-jazz-green-immortals_2022_mdlg5n.webp',
        title: `CONGRATULATIONS GREEN IMMORTALS!!!`,
        info: [
          `TCC Intramural Days 2022`,
          `Pop-Jazz Dance Competition 5th Runner-up!`,
        ],
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868460/talisay-city-college/intramurals%402022/pop-jazz-pink-ninjas_2022_y5epzc.webp',
        title: `CONGRATULATIONS PINK NINJAS!!!`,
        info: [
          `TCC Intramural Days 2022`,
          `Pop-Jazz Dance Competition 6th Runner-up!`,
        ],
      },
    ],
  },
];

/* FIXED NEWS AND UPDATES WITH IMG AND VIDEO */
