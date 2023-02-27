/* ########## PAGE LINKS ########## */

/* pageLinks - submenu is dropdown component */
export const pageLinks = [
  { id: 1, path: '/', text: 'home', title: 'Home' },
  {
    id: 2,
    path: '/about',
    text: 'about',
    title: 'About',
    /* submenu: [
      {
        id: 1,
        path: '/about',
        text: 'Vision',
        title: 'Vision',
        icon: 'material-symbols:lightbulb-rounded',
      },
      {
        id: 2,
        path: '/about',
        text: 'Mission',
        title: 'mission',
        icon: 'material-symbols:featured-play-list',
      },
      {
        id: 3,
        path: '/about',
        text: 'Goals',
        title: 'Goals',
        icon: 'carbon:trophy-filled',
      },
      {
        id: 4,
        path: '/about',
        text: 'Core values',
        title: 'Core Values',
        icon: 'bxs:donate-heart',
      },
      {
        id: 5,
        path: '/about',
        text: 'History',
        title: 'History',
        icon: 'ri:file-paper-2-fill',
      },
    ], */
  },
  {
    id: 3,
    path: '/officials',
    text: 'officials',
    title: 'Organizational Chart',
  },

  {
    id: 4,
    path: '/courses',
    text: 'courses',
    title: 'Courses',
    /* submenu: [
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
    ], */
  },
  { id: 5, path: '/contacts', text: 'contact us', title: 'Contact Us' },
];

/* ########## SOCIAL LINKS ########## */

export const socialLinks = [
  {
    id: 0,
    path: 'https://www.facebook.com/TCCofficialfbpage',
    title: 'Facebook',
    icon: 'ri:facebook-box-fill',
  },
  {
    id: 1,
    path: 'https://www.youtube.com/@talisaycitycollege6427',
    title: 'YouTube',
    icon: 'ph:youtube-logo-fill',
  },
  /*   {
    id: 2,
    path: 'https://www.youtube.com/@talisaycitycollege6427',
    title: 'Instagram',
    icon: 'ph:instagram-logo-fill',
  }, */
  {
    id: 3,
    path: 'mailto:talisaycitycollege2004@gmail.com?subject = Inqueries&body = Message',
    title: 'Email',
    icon: 'ic:round-email',
  },
];

/* ########## ACHIEVEMENTS ########## */

export const achievers = [
  { id: 1, count: 1004, category: 'Government Scholars' },
  { id: 2, count: 234, category: 'LPT Passers' },
  { id: 3, count: 523, category: 'Topnotchers' },
  { id: 4, count: 515, category: 'Awards' },
];

/* ########## NEWS AND UPDATES (POSTS) ########## */

/* 

line break

\n &nbsp;
\n

*/

export const posts = [
  {
    id: 1,
    subject: 'enrollment',
    createdAt: 'Jan 20, 2023',
    title: 'Important Announcement',
    description: `Due to unforeseen circumstances, please be advised of the following schedule updates as of January 20, 2023:
\n &nbsp;
\n
📌 **Processing of Student"s Clearance for 1st Semester**, **A.Y. 2022-2023** is **temporarily suspended** from January 23-25, 2023, 2023. Clearance signing will resume on Thursday, January 26, 2023.
\n &nbsp;
\n
📌 **Medical Examination for Fourth Year Students** is also  **temporarily suspended** on January 23 & 24, 2023. Medical Exam at the School Clinic will resume on Wednesday, January 25, 2023.
\n &nbsp;
\n
📌 Start of **Enrollment Schedule for Fourth Year Students** is moved to Wednesday, January 25, 2023.
\n &nbsp;
\n
**Note**: Fourth Year Students must wear complete OJT/Practicum Uniforms during the Enrollment.
\n &nbsp;
\n
⚠️ Here's the **UPDATED Schedule of Enrollment for Second Semester, A.Y. 2022-2023**
\n &nbsp;
\n
(for Continuing Students and Returnees only)
\n &nbsp;
\n
📌 January 25-28, 2023 - **4th Year Students**
\n
📌 January 26-28, 2023 - **3rd Year Students**
\n
📌 January 30 - February 1, 2023 - **2nd Year Students**
\n
📌 February 2-4, 2023 - **1st Year Students**
\n &nbsp;
\n
📍 **Enrolment Requirements**:  
\n &nbsp;
\n
1. Accomplished Clearance Form (1st Sem., A.Y. 2022-2023)
2. Evaluated Prospectus
3. Midterm Grade Slip (1st Sem., A.Y. 2022-2023)
4. Proof of Online Teachers Evaluation (1st Sem., A.Y. 2022-2023)
5. Medical X-ray result (for 4th Year Students only)
\n &nbsp;
\n
📍 Enrolment Cut-Off Time: 4:00PM
\n &nbsp;
\n
⚠️ Be reminded of the following in the processing of your enrollment:
\n &nbsp;
\n
1. Follow your respective schedule.
2. Observe the PRESCRIBED DRESS CODE.
3. Men must observe proper **HAIR CUT**.
4. Ladies must have their **PINANGKO**.
5. Must wear your school IDs (for those who have their IDs).`,
    media: [
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1674268390/talisay-city-college/2nd-semester-enrolment-2022-2023/page-1_fhorny.webp',
      },
    ],
  },
  {
    id: 2,
    subject: 'grade slip',
    createdAt: 'Jan 19, 2023',
    title: `Midterm Grade Slip Distribution schedule || January 19-21, 2023`,
    description: `Please be reminded of your respective schedules. **Midterm Grade Slip** will be one of the requirements (**1st year students to 3rd year students**) for your enrollment for the 2nd Semester of A.Y. 2022-2023.
\n &nbsp;
\n
Thank you!`,
    media: [
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
  {
    id: 3,
    subject: 'examination',
    createdAt: 'Jan 17, 2023',
    title: `Final Exams Schedule || January 16 - 21, 2023`,
    description: `Please check your respective schedules (Teacher Education) for the upcoming **Final Exams of the 1st Semester, A.Y. 2022-2023**.`,
    media: [
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
  {
    id: 4,
    subject: 'enrollment',
    createdAt: 'Jan 13, 2023',
    title: 'Schedule of Enrolment for Second Semester, A.Y. 2022-2023',
    description: `(for Continuing Students and Returnees only)
\n &nbsp;
\n
📌 January 23-25, 2023 - **4th Year Students**
\n
📌 January 26-28, 2023 - **3rd Year Students**
\n
📌 January 30 - February 1, 2023 - **2nd Year Students**
\n
📌 February 2-4, 2023 - **1st Year Students**
\n &nbsp;
\n
**Enrolment Requirements**
\n
1. Accomplished Clearance Form (1st Sem., A.Y. 2022-2023)
2. Evaluated Prospectus
3. Midterm Grade Slip (1st Sem., A.Y. 2022-2023)
4. Proof of Online Teachers Evaluation (1st Sem., A.Y. 2022-2023)
5. Medical X-ray result (for 4th Year Students only)
\n &nbsp;
\n
📍 Enrolment Cut-Off Time: 4:00 PM`,
    media: [
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673752124/talisay-city-college/enrolment/enrollment_xlvfsi.webp',
      },
    ],
  },
  {
    id: 5,
    subject: 'evaluation',
    createdAt: 'Jan 11, 2023',
    title: `Instructor's Online Evaluation || 1st Semester, A.Y. 2022-2023`,
    description: `Dear Talisalites,
\n &nbsp;
\n
As the 1st Semester of Academic Year 2022-2023 is about to end, you are required to accomplish an online evaluation of your instructors for instructional planning and development purposes.
\n &nbsp;
\n
This evaluation will further serve as an ***INITIAL REQUIREMENT*** for your enrolment in the 2nd Semester of A.Y. 2022-2023 as a continuing student.
\n &nbsp;
\n
Before you proceed, please take note of the following:
\n &nbsp;
\n
1. Evaluate all your teachers during this first semester. Click the link attached to their names from the list below.
2. Provide the correct and complete information which includes consistent valid and active e-mail addresses in accomplishing the online evaluation forms.
3. Once you submit the form/s, you will receive a copy of your responses through your e-mail.
4. From the received copy, take a screenshot of its first page/section. The screenshot must include the statement thanking you for filling out the form, the name of the instructor, subject/s, your e-mail address, and your student ID number.
5. You must present the screenshots upon enrollment as proof that you have evaluated all your instructors.
6. The links will only be open from January 12 to January 16, 2023.
\n &nbsp;
\n
**Note**: By accomplishing the forms below, you hereby authorize Talisay City College to collect your personal information and use the data for academic purposes as per the Data Privacy Act of 2012. Please follow the link for more details on the Data Privacy Act of 2012: <https://tinyurl.com/fcuehhb4>
\n &nbsp;
\n
See each photos for the links provided in the caption.`,
    media: [
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514735/talisay-city-college/evaluation/online-evaluation-1_wmta9s.webp',
        info: `Dear Talisalites,
\n &nbsp;
\n
As the 1st Semester of Academic Year 2022-2023 is about to end, you are required to accomplish an online evaluation of your instructors for instructional planning and development purposes.
\n &nbsp;
\n
This evaluation will further serve as an ***INITIAL REQUIREMENT*** for your enrolment in the 2nd Semester of A.Y. 2022-2023 as a continuing student.
\n
Before you proceed, please take note of the following:
\n
1. Evaluate all your teachers during this first semester. Click the link attached to their names from the list below.
2. Provide the correct and complete information which includes consistent valid and active e-mail addresses in accomplishing the online evaluation forms.
3. Once you submit the form/s, you will receive a copy of your responses through your e-mail.
4. From the received copy, take a screenshot of its first page/section. The screenshot must include the statement thanking you for filling out the form, the name of the instructor, subject/s, your e-mail address, and your student ID number.
5. You must present the screenshots upon enrollment as proof that you have evaluated all your instructors.
6. The links will only be open from January 12 to January 16, 2023.
\n &nbsp;
\n
**Note**: by accomplishing the forms below, you hereby authorize Talisay City College to collect your personal information and use the data for academic purposes as per the Data Privacy Act of 2012. Please follow the link for more details on the Data Privacy Act of 2012: <https://tinyurl.com/fcuehhb4>
\n
See each photos for the links provided in the caption.
\n &nbsp;
\n
(Page 1 of 10)`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514735/talisay-city-college/evaluation/online-evaluation-2_ctuffu.webp',
        info: `Check post for the complete instructions.
\n &nbsp;
\n
**TEACHER EDUCATION PROGRAM**
\n
1. MA'AM JULIET ALFANTA - <https://tinyurl.com/ALFANTAJ>
2. MA'AM GRACE BACALSO - <https://tinyurl.com/BACALSOG>
3. SIR JOSELITO BACOLCOL - <https://tinyurl.com/BACOLCOLJ>
4. MA'AM MICHELLE CABRERA - <https://tinyurl.com/CABRERAMI>
5. MA'AM RACHEL JANE CASQUEJO - <https://tinyurl.com/CASQUEJOR>
6. MA'AM ADELAIDA COYOCA - <https://tinyurl.com/COYOCAAD>
7. MA'AM JULIET DELA CRUZ - <https://tinyurl.com/DELACRUZJU>
8. MA'AM EMMA DELGADO - <https://tinyurl.com/DELGADOE>
9. MA'AM NHIKIE DEL SOCORRO - <https://tinyurl.com/DELSOCORRON>
10. DR. JENNILYN GEAGONIA - <https://tinyurl.com/GEAGONIAJ>
11. DR. LAISA GONZALES - <https://tinyurl.com/GONZALESL>
12. DR. BERNARD EVANGELICOM JAMON - <https://tinyurl.com/JAMONBER>
13. MA'AM MARY GRACE JAMON - <https://tinyurl.com/JAMONMAR>
14. MA'AM CHERRY ANN LAURON - <https://tinyurl.com/LAURONC>
15. MA'AM TOMASA MAPANO - <https://tinyurl.com/MAPANOTOM>
16. MA'AM LYNN OLANO - <https://tinyurl.com/OLANOL>
17. DR. ALICIA PLANTAR - <https://tinyurl.com/PLANTARALICE>
18. DR. DELETAH POLINAR - <https://tinyurl.com/POLINARDE>
19. MA'AM ANA LUNA SAYSON - <https://tinyurl.com/SAYSONANA>
20. MA'AM HERMENIA SUARING - <https://tinyurl.com/SUARINGH>
\n &nbsp;
\n
(Page 2 of 10)`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514735/talisay-city-college/evaluation/online-evaluation-1_wmta9s.webp',
        info: `Check post for the complete instructions.
\n &nbsp;
\n
**HOSPITALITY MANAGEMENT PROGRAM**
\n
1. MA'AM Z-LEE ANN ANDO - <https://tinyurl.com/ANDOZL>
2. SIR ALEX ARTES - <https://tinyurl.com/ARTESALE>
3. SIR LEE BARGAYO - <https://tinyurl.com/BARGAYOL>
4. MA'AM KYRL BONGGO - <https://tinyurl.com/BONGGOKY>
5. SIR JOHN KEVIN BORLASA - <https://tinyurl.com/BORLASAJ>
6. SIR MARK GREGORY CABALLERO - <https://tinyurl.com/CABALLEROM>
7. SIR EMMANUEL CABAÑERO - <https://tinyurl.com/CABANEROE>
8. SIR ALBERTO CAMINGAO - <https://tinyurl.com/CAMINGAOA>
9. MA'AM GENEVIEVE CAVAIANI - <https://tinyurl.com/CAVAIANIG>
10. MA'AM ANGEL ELLAINE ESPINA - <https://tinyurl.com/ESPINAA>
11. MA'AM GERSHA FIEDACAN - <https://tinyurl.com/FIEDACANG>
12. MA'AM SHERIDANA FUERTES - <https://tinyurl.com/FUERTESS>
13. SIR MARL VINCENT LABITAD - <https://tinyurl.com/LABITADM>
14. MA'AM SHEILA NOREEN MACAN - <https://tinyurl.com/MACANSHE>
15. SIR JULIUS MEDIANO - <https://tinyurl.com/MEDIANOJ>
16. MA'AM TAINA RABAYA - <https://tinyurl.com/RABAYATA>
17. SIR EDMAR RAMA - <https://tinyurl.com/EDMARAMA>
18. MA'AM TERESITA SAZON - <https://tinyurl.com/SAZONT>
19. MA'AM NANCY TOSO - <https://tinyurl.com/TOSONAN>
20. MA'AM IMIE VILLAVER - <https://tinyurl.com/VILLAVERI>
\n
(Page 3 of 10)`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514735/talisay-city-college/evaluation/online-evaluation-4_tzxjtx.webp',
        info: `Check post for the complete instructions.
\n &nbsp;
\n
**INDUSTRIAL TECHNOLOGY PROGRAM**
\n
1. SIR BERNARDO ABAIS - <https://tinyurl.com/ABAISB>
2. SIR MICHAEL ABE - <https://tinyurl.com/ABEMICHA>
3. ENGR. ANGELITO ACEDO - <https://tinyurl.com/ACEDOA>
4. MA'AM FLORALICE ALUETA - <https://tinyurl.com/ALUETAF>
5. SIR JADE BARIBAR - <https://tinyurl.com/BARIBARJ>
6. SIR JOEL CAMASURA - <https://tinyurl.com/CAMASURAJ>
7. MA'AM CLARISSA CAÑETE - <https://tinyurl.com/CANETEC>
8. SIR JOSEPH CANILLO - <https://tinyurl.com/CANILLOJ>
9. SIR BHABETHS CANONAYON - <https://tinyurl.com/CANONAYONB>
10. SIR RICHARD CUPAL - <https://tinyurl.com/CUPALRICH>
11. SIR ALTHER DABON - <https://tinyurl.com/DABONAL>
12. SIR CLIFFORD DELOS REYES - <https://tinyurl.com/DELOSREYESC>
13. SIR PATRICK GASPE - <https://tinyurl.com/GASPEP>
14. SIR DANIEL GRAVINES - <https://tinyurl.com/GRAVINESD>
15. SIR CHARMYBOI LABAJO - <https://tinyurl.com/LABAJOC>
16. MA'AM JUDY ANN LIBATON - <https://tinyurl.com/LIBATONJ>
17. SIR RUFFY LUCIANO - <https://tinyurl.com/LUCIANORUFFY>
18. SIR RIAN MABANAG - <https://tinyurl.com/MABANAGR>
19. MA'AM NIDA MANGUBAT - <https://tinyurl.com/MANGUBATN>
20. MA'AM KAROLYN NARCA - <https://tinyurl.com/NARCAKAR>
21. SIR KELLY ADRIAN NERI - <https://tinyurl.com/NERIKELLY>
22. SIR PERFECTO PERALTA - <https://tinyurl.com/PERALTAP>
23. SIR ROMARJAY REBESE - <https://tinyurl.com/REBESER>
24. SIR EDGAR ALLAN ROSAROSO - <https://tinyurl.com/ROSAROSOE>
25. MA'AM HERMENEGILDA ROSINTO - <https://tinyurl.com/ROSINTOH>
26. SIR SYRAEL SOQUE - <https://tinyurl.com/SOQUESY>
27. MA'AM PRECIOUS MAY YASAY - <https://tinyurl.com/YASAYP>
\n
(Page 4 of 10)`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514736/talisay-city-college/evaluation/online-evaluation-5_afj104.webp',
        info: `Check post for the complete instructions.
\n &nbsp;
\n
**LANGUAGES DEPARTMENT**
\n
1. SIR HARSON ABANGAN- <https://tinyurl.com/ABANGANH>
2. MA'AM MAE ABELLANA - <https://tinyurl.com/ABELLANAM>
3. MA'AM CYNTHIA ABELLANOSA - <https://tinyurl.com/ABELLANOSAC>
4. DR. CHARLOTTE AMISTA - <https://tinyurl.com/AMISTAC>
5. SIR MICHAEL ATCHASO - <https://tinyurl.com/ATCHASOM>
6. DR. MARIANNE BAQUIAL - <https://tinyurl.com/BAQUIALM>
7. MA'AM WILFREDA CABUSAS - <https://tinyurl.com/CABUSASW>
8. MA'AM GUIA MARIE CASTAÑARES - <https://tinyurl.com/CASTANARESG>
9. MA'AM DHERNELYN COSTARDO - <https://tinyurl.com/COSTARDOD>
10. SIR BEEM GLEASON FABRIGA - <https://tinyurl.com/FABRIGAB>
11. MA'AM TERESITA GORDON - <https://tinyurl.com/GORDONTER>
12. SIR JARRE LABORTE - <https://tinyurl.com/LABORTEJ>
13. SIR JOHN CARLO LASOLA - <https://tinyurl.com/LASOLAJ>
14. SIR JOSHUA LOPEZ - <https://tinyurl.com/LOPEZJO>
15. MA'AM ADELAIDA MARCIAL - <https://tinyurl.com/MARCIALADE>
16. SIR JOSEPH MIRANDA - <https://tinyurl.com/MIRANDAJO>
17. MA'AM ROCHELLE MONTALBAN - <https://tinyurl.com/MONTALBANR>
18. DR. HELMER MONTEJO - <https://tinyurl.com/MONTEJOH>
19. MA'AM VICTORIA MORTOLA - <https://tinyurl.com/MORTOLAV>
20. SIR SALGIE VAN TAMPOS - <https://tinyurl.com/TAMPOSS>
21. MA'AM CHEZIE TORMIS - <https://tinyurl.com/TORMISC>
22. SIR JOSEPH LOUIS TORMIS - <https://tinyurl.com/TORMISJ>
23. SIR ASKIN VILLARIAS - <https://tinyurl.com/VILLARIASA>
24. SIR VENZ PATRICK VIRADOR - <https://tinyurl.com/VIRADORV>
25. DR. ERLINDA WONG - <https://tinyurl.com/ERLINDAW>
\n
(Page 5 of 10)`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514736/talisay-city-college/evaluation/online-evaluation-6_pgrcub.webp',
        info: `Check post for the complete instructions.
\n &nbsp;
\n
**MATH AND SCIENCES DEPARTMENT**
\n
1. DR. ISABELITA ABELLANOSA- <https://tinyurl.com/ABELLANOSAI>
2. SIR RHOMMEL ACOP - <https://tinyurl.com/ACOPRH>
3. SIR EUGINE ARCHIVAL - <https://tinyurl.com/ARCHIVALE>
4. MA'AM HELEN BACALSO - <https://tinyurl.com/BACALSOH>
5. SIR GERARD DUIS BEJOC - <https://tinyurl.com/BEJOCG>
6. SIR ENDRIE BOHOL - <https://tinyurl.com/BOHOLE>
7. SIR NORMAN CABIGAS - <https://tinyurl.com/CABIGASN>
8. MA'AM RACHIEL CAL - <https://tinyurl.com/RACHCAL12>
9. DR. ALFREDO CANO - <https://tinyurl.com/CANOALFRE>
10. SIR ERWIN CAPARIDA - <https://tinyurl.com/CAPARIDAE>
11. SIR CIRILO GASTANES - <https://tinyurl.com/GASTANESC>
12. SIR INTANO CUADRATO - <https://tinyurl.com/INTANOCUA>
13. MA'AM LYNN LARIDA - <https://tinyurl.com/LARIDALY>
14. MA'AM APLHA JANE MILA - <https://tinyurl.com/MILAALPHAJA>
15. MA'AM NACION MARBETH - <https://tinyurl.com/NACIONM>
16. MA'AM VENUS NEÑEL - <https://tinyurl.com/NENELVEN>
17. SIR ORLANDO OBIEDO - <https://tinyurl.com/OBIEDOROL>
18. MA'AM ROREEN SALCEDA - <https://tinyurl.com/SALCEDAR>
19. SIR CRIS VANDY SALGARINO - <https://tinyurl.com/SALGARINOC>
20. SIR EPIFANIO TIGLEY - <https://tinyurl.com/TIGLEYE>
21. MA'AM DEBBIE VILLAVELEZ - <https://tinyurl.com/VILLAVELEZD>
22. MA'AM GLORY MAE CABRERA - <https://tinyurl.com/CABRERAG>
\n
(Page 6 of 10)`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514736/talisay-city-college/evaluation/online-evaluation-7_yfhu2r.webp',
        info: `Check post for the complete instructions.
\n &nbsp;
\n
**SOCIAL AND BEHAVIORAL SCIENCES DEPARTMENT**
\n
1. SIR MARBEN BASCON - <https://tinyurl.com/BASCONM>
2. MA'AM JASMIN CABUENAS - <https://tinyurl.com/CABUENASJ>
3. SIR JOSHUA COMEROS - <https://tinyurl.com/COMEROSJ>
4. SIR JOSE FERMIN CRAVE - <https://tinyurl.com/CRAVEJose>
5. SIR JAYSON CUERDA - <https://tinyurl.com/CUERDAJAY>
6. MA'AM KAREN JANE DELA PAÑE - <https://tinyurl.com/DELAPANEK>
7. MA'AM RHEA DESTACAMENTO - <https://tinyurl.com/DESTACAMENTOR>
8. MA'AM ZENIA DOLLISON - <https://tinyurl.com/DOLLISONZ>
9. MA'AM MARIA FREGIE EJERCITO - <https://tinyurl.com/EJERCITOM>
10. SIR PHILLIP FEDILLAGA - <https://tinyurl.com/FEDILLAGAP>
11. SIR ALVIN GALLO - <https://tinyurl.com/GALLOAL>
12. MA'AM MARY LOU GARCIA - <https://tinyurl.com/GARCIAMA>
13. ATTY. PRETTY LEIGHN KATE GIMENA - <https://tinyurl.com/GIMENAPRE>
14. MA'AM LAARNI JERUSALEM - <https://tinyurl.com/LAARNIJ>
15. MA'AM SAMANTHA THEREZ LABAGALA - <https://tinyurl.com/LABAGALAS>
16. MA'AM AGIE LAROBIS - <https://tinyurl.com/LAROBISA>
17. MA'AM MAY LIMBAGA - <https://tinyurl.com/LIMBAGAM>
18. MA'AM CANDICE GRACE MAQUE - <https://tinyurl.com/MAQUECAN>
19. MA'AM KRISTA MARIEL RODELA - <https://tinyurl.com/RODELAK>
20. MA'AM LILYBETH SINGCO - <https://tinyurl.com/SINGCOLILY>
21. SIR CARMELO TORINO - <https://tinyurl.com/TORINO11>
\n
(Page 7 of 10)`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514736/talisay-city-college/evaluation/online-evaluation-8_lu8ppo.webp',
        info: `Check post for the complete instructions.
\n &nbsp;
\n
**PHYSICAL EDUCATION DEPARTMENT**
\n
1. SIR DOMINIC CAÑEDA - <https://tinyurl.com/CANEDADOM>
2. SIR PRAISELOU LABAJO - <https://tinyurl.com/LABAJOPRA>
3. MA'AM JENNETH LABRADO - <https://tinyurl.com/LABRADOJ>
4. DR. EVELYN MANCAO - <https://tinyurl.com/MANCAOE>
5. SIR KENNEDY NAVARRA - <https://tinyurl.com/NAVARRAK>
6. SIR JASON NOQUILLO - <https://tinyurl.com/NOQUILLOJ>
7. SIR RAE VINCENT TAREGA - <https://tinyurl.com/TAREGAR>
8. SIR CARL JUSTIN TORRES - <https://tinyurl.com/TORRESCARL>
9. MA'AM JUVY VILLARIAS - <https://tinyurl.com/VILLARIASJ>
\n
(Page 8 of 10)`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514736/talisay-city-college/evaluation/online-evaluation-9_zcmez7.webp',
        info: `Check post for the complete instructions.
\n &nbsp;
\n
**REDD/VALED DEPARTMENT**
\n
1. MA'AM RIZA ARCHIVAL - <https://tinyurl.com/ARCHIVALR>
2. SIR PAUL JAMES DAGATAN - <https://tinyurl.com/DAGATANP>
3. SIR ALVIN GALLO - <https://tinyurl.com/GALLOAL>
4. MA'AM KEREN RILE JAVIER - <https://tinyurl.com/JAVIERK>
5. SR. LUZVIMINDA JUNDIS - <https://tinyurl.com/JUNDISLUZ>
6. SIR TEODORO PADEROG - <https://tinyurl.com/PADEROGT>
7. SIR MANOLITO SELMA - <https://tinyurl.com/SELMAM>
8. MA'AM BRENDA TABERA - <https://tinyurl.com/TABERAB>
9. SIR DAVON JHAY TIDOY - <https://tinyurl.com/TIDOYD>
\n
(Page 9 of 10)`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673514736/talisay-city-college/evaluation/online-evaluation-10_gflnjp.webp',
        info: `Check post for the complete instructions.
\n &nbsp;
\n
**NSTP DEPARTMENT**
\n
1. SIR FROILAN DELOS SANTOS - <https://tinyurl.com/DELOSSANTOSFR>
2. SIR CHAD DIOKO - <https://tinyurl.com/DIOKOCH>
3. SIR JOHN BERT SEGARRA - <https://tinyurl.com/SEGARRAJ>
\n
(Page 10 of 10)`,
      },
    ],
  },
  {
    id: 6,
    subject: 'class resumption',
    createdAt: 'Dec 28, 2022',
    title: 'Announcement',
    description: `As we gracefully end 2022 with a grateful heart, we would like to remind everyone for the **schedule of the resumption of classes and activities for 2023**.
\n &nbsp;
\n
(same schedule applies for the Online Mode of Learning set-up)
\n &nbsp;
\n
Thank you!`,
    media: [
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1674271163/talisay-city-college/class-resumption-2022-2023/page-1_bhk0mk.webp',
      },
    ],
  },
  {
    id: 7,
    subject: 'intramurals',
    createdAt: 'Dec 19, 2022',
    title: `TCC Intramural Days 2022`,
    description: `CONGRATULATIONS RED KNIGHTS!!! ❤️❤️❤️
\n &nbsp;
\n
Pop-Jazz Dance Competition CHAMPION!!!
\n
- 1st Runner-up: YELLOW VIKINGS 💛
\n
- 2nd Runner-up: PURPLE SAMURAIS 💜`,
    media: [
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868455/talisay-city-college/intramurals%402022/pop-jazz-red-knights_2022_vpkqfh.webp',
        title: `CONGRATULATIONS RED KNIGHTS!!! ❤️❤️❤️`,
        info: `TCC Intramural Days 2022
\n &nbsp;
\n
Pop-Jazz Dance Competition CHAMPION!!!`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868459/talisay-city-college/intramurals%402022/pop-jazz-yellow-vikings_2022_tup0vm.webp',
        title: `CONGRATULATIONS YELLOW VIKINGS!!! 💛💛`,
        info: `TCC Intramural Days 2022
\n &nbsp;
\n
Pop-Jazz Dance Competition 1st Runner-up!`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868455/talisay-city-college/intramurals%402022/pop-jazz-purple-samurai_2022_zkbkke.webp',
        title: `CONGRATULATIONS PURPLE SAMURAIS!!! 💜💜`,
        info: `TCC Intramural Days 2022
\n &nbsp;
\n
Pop-Jazz Dance Competition 2nd Runner-up!`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868452/talisay-city-college/intramurals%402022/pop-jazz-grey-spartans_2022_cphnc5.webp',
        title: `CONGRATULATIONS GREY SPARTANS!!!`,
        info: `TCC Intramural Days 2022
\n &nbsp;
\n
Pop-Jazz Dance Competition 3rd Runner-up!`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868454/talisay-city-college/intramurals%402022/pop-jazz-blue-trojans_2022_kpfl5u.webp',
        title: `CONGRATULATIONS BLUE TROJANS!!!`,
        info: `TCC Intramural Days 2022
\n &nbsp;
\n
Pop-Jazz Dance Competition 4th Runner-up!`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868460/talisay-city-college/intramurals%402022/pop-jazz-green-immortals_2022_mdlg5n.webp',
        title: `CONGRATULATIONS GREEN IMMORTALS!!!`,
        info: `TCC Intramural Days 2022
\n &nbsp;
\n
Pop-Jazz Dance Competition 5th Runner-up!`,
      },
      {
        image:
          'https://res.cloudinary.com/dwiivmg3b/image/upload/v1673868460/talisay-city-college/intramurals%402022/pop-jazz-pink-ninjas_2022_y5epzc.webp',
        title: `CONGRATULATIONS PINK NINJAS!!!`,
        info: `TCC Intramural Days 2022
\n &nbsp;
\n
Pop-Jazz Dance Competition 6th Runner-up!`,
      },
    ],
  },
  {
    id: 8,
    subject: `intramurals`,
    createdAt: `Dec 5, 2022`,
    title: `Step up, heads up, and gear yourselves up! TATAK TALISALITES, are you ready?`,
    description: `For the past two years, the pandemic has shut down the spirit of competitiveness and teamwork that the Intramurals exudes and constricted us to the virtual setting of such important events. But, now that restrictions has been lowered, the most awaited INTRAMURALS 2022 returns with a bang! And as the HEARTS and MINDS of everyone forged to one, the spirit of competitiveness and teamwork was awakened.
\n &nbsp;
\n
Sharpen your physical, mental and intellectual skill and polish your prowess as the time is fast approaching for the upcoming ***TALISAY CITY COLLEGE INTRAMURALS 2022*** with a theme ***"Changing Talisalites, Forging Teamwork in the Spirit of Sportsmanship"***
\n &nbsp;
\n
This December 10-16, 2022.  Held your head up high and raise your flag with pride as you give your loudest cheer and support for your teams! 
\n &nbsp;
\n
As we fasten our seatbelts and ready to drive to the battle area, let us first know the different teams participating in this biggest sports event in the institution. Check out the participating teams below:
\n &nbsp;
\n
**PURPLE SAMURAIS**
\n
**RED KNIGHTS**
\n
**PINK NINJAS**
\n
**GRAY SPARTANS**
\n
**YELLOW VIKINGS**
\n
**BLUE TROJANS**
\n
**GREEN IMMORTALS**
\n &nbsp;
\n
In this upcoming **TALISAY CITY COLLEGE INTRAMURALS** 2022, amidst the division of the overall body, we, as united as one, should shout with pride **"SOAR HIGH, TALISALITES!"**
\n
Caption | Hon. Ana Gil and Hon. Hyacinth Suello
\n
Video Graphics | Hon. Rolin L. Mejala`,
    media: [{ video: `https://www.youtube.com/embed/pLKeDy3tgic` }],
  },
  {
    id: 9,
    subject: `library`,
    createdAt: `Dec 2, 2022`,
    title: `Book Week Contest Winners`,
    description: `Congratulations to our **Show Us Your #Shelfie Contest** Winners!!!
\n &nbsp;
\n
**1st Place** - Neich Elmer S. Libaton (BS IndTech 1 - Elate)
\n
**2nd Place** -  John Alwin Otadoy (BSHM 2 - Maple)
\n
**3rd Place** - Lowegie Indiola (BSHM 1 - Morpheus)
\n &nbsp;
\n
Winners will receive Cash Gift and Certificates. Consolation Prizes will also be given to our non-winning participants.
See you at the Talisay City College Library for the awarding of contest winners!`,
    media: [
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674273430/talisay-city-college/library-book-week-contest-2022/1st-place_rhjjqs.webp`,
        info: `**1st Place** - Neich Elmer S. Libaton (BS IndTech 1 - Elate)
\n
with a total of 63 valid heart ❤️reactions
\n &nbsp;
\n

---

\n &nbsp;
\n
Winners will receive Cash Gift and Certificates.
\n
See you at the Talisay City College Library for the awarding of contest winners!`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674273430/talisay-city-college/library-book-week-contest-2022/2nd-place_h4f7rh.webp`,
        info: `**2nd Place** - John Alwin Otadoy (BSHM 2 - Maple)
\n
with a total of 16 valid heart ❤️reactions
\n &nbsp;
\n

---

\n &nbsp;
\n
Winners will receive Cash Gift and Certificates.
\n
See you at the Talisay City College Library for the awarding of contest winners!`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674273432/talisay-city-college/library-book-week-contest-2022/3rd-place_qitk0a.webp`,
        info: `**3rd Place** - Lowegie Indiola (BSHM 1 - Morpheus)
\n
with a total of 9 valid heart ❤️reactions
\n &nbsp;
\n

---

\n &nbsp;
\n
Winners will receive Cash Gift and Certificates.
\n
See you at the Talisay City College Library for the awarding of contest winners!`,
      },
    ],
  },
  {
    id: 10,
    subject: `intramurals`,
    createdAt: `Dec 1, 2022`,
    title: `Here are your official candidates for the Mr. Intramurals 2022.`,
    description: `**Mechanics for Mr. and Ms. Texters' Choice (powered by Smart Communication, Inc.)**
\n
To vote, **text mistertccintramurals <space> <team name> send to 744474**
\n &nbsp;
\n
Start of polling date and time: December 01, 2022 at 3pm
\n
End of polling date and time: December 09, 2022 at 5PM`,
    media: [
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674274452/talisay-city-college/intramurals%402022/Mr.%20Intramurals/red-knights_gbjmcr.webp`,
        title: `RED KNIGHTS`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674274451/talisay-city-college/intramurals%402022/Mr.%20Intramurals/pink-ninjas_r34i4w.webp`,
        title: `PINK NINJAS`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674274451/talisay-city-college/intramurals%402022/Mr.%20Intramurals/yellow-vikings_xgkht4.webp`,
        title: `YELLOW VIKINGS`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674274452/talisay-city-college/intramurals%402022/Mr.%20Intramurals/purple-samurais_ndhtlh.webp`,
        title: `PURPLE SAMURAIS`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674274450/talisay-city-college/intramurals%402022/Mr.%20Intramurals/gray-spartans_tckzpa.webp`,
        title: `GRAY SPARTANS`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674274452/talisay-city-college/intramurals%402022/Mr.%20Intramurals/green-immortals_omeko8.webp`,
        title: `GREEN IMMORTALS`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674274451/talisay-city-college/intramurals%402022/Mr.%20Intramurals/blue-trojans_gbnxc7.webp`,
        title: `BLUE TROJANS`,
      },
    ],
  },
  {
    id: 11,
    subject: `intramurals`,
    createdAt: `Dec 1, 2022`,
    title: `Here are your official candidates for the Miss Intramurals 2022.`,
    description: `**Mechanics for Mr. and Ms. Texters' Choice (powered by Smart Communication, Inc.)**
\n
To vote, **for Miss Intramurals, text misstccintramurals <space> <team name> send to 744474**
\n &nbsp;
\n
Start of polling date and time: December 01, 2022 at 3pm
\n
End of polling date and time: December 09, 2022 at 5PM`,
    media: [
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674275365/talisay-city-college/intramurals%402022/Ms.%20Intramurals/red-knights_k3jkka.webp`,
        title: `RED KNIGHTS`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674275367/talisay-city-college/intramurals%402022/Ms.%20Intramurals/pink-ninjas_pcp7j3.webp`,
        title: `PINK NINJAS`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674275366/talisay-city-college/intramurals%402022/Ms.%20Intramurals/yellow-vikings_riknqy.webp`,
        title: `YELLOW VIKINGS`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674275557/talisay-city-college/intramurals%402022/Ms.%20Intramurals/purple-samurais_fkargc.webp`,
        title: `PURPLE SAMURAIS`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674275365/talisay-city-college/intramurals%402022/Ms.%20Intramurals/gray-spartans_cg61gu.webp`,
        title: `GRAY SPARTANS`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674275365/talisay-city-college/intramurals%402022/Ms.%20Intramurals/green-immortals_ykakga.webp`,
        title: `GREEN IMMORTALS`,
      },
      {
        image: `https://res.cloudinary.com/dwiivmg3b/image/upload/v1674275365/talisay-city-college/intramurals%402022/Ms.%20Intramurals/blue-trojans_zdhbwu.webp`,
        title: `BLUE TROJANS`,
      },
    ],
  },
];

/* ########## COURSES ########## */

export const courses = [
  /* BEEd */
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675520393/talisay-city-college/courses/beed_skxbcv.webp',
    course: 'Bachelor of Elementary Education',
    department: 'Education',
    currentlyEnrolled: '2k+',
    graduates: '8k+',
    enrollmentLink: '#',
  },
  /* BSEd */
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675520394/talisay-city-college/courses/bsed-english_fvisn6.webp',
    course: 'Bachelor of Secondary Education',
    department: 'Education',
    major: 'English',
    currentlyEnrolled: '2k+',
    graduates: '8k+',
    enrollmentLink: '#',
  },
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675520393/talisay-city-college/courses/bsed-filipino_tuwqoh.webp',
    course: 'Bachelor of Secondary Education',
    department: 'Education',
    major: 'Filipino',
    currentlyEnrolled: '2k+',
    graduates: '8k+',
    enrollmentLink: '#',
  },
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675520392/talisay-city-college/courses/bsed-mathematics_vhafyf.webp',
    course: 'Bachelor of Secondary Education',
    department: 'Education',
    major: 'Mathematics',
    currentlyEnrolled: '2k+',
    graduates: '8k+',
    enrollmentLink: '#',
  },
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675520393/talisay-city-college/courses/bsed-social-studies_kcl2ok.webp',
    course: 'Bachelor of Secondary Education',
    department: 'Education',
    major: 'Social Studies',
    currentlyEnrolled: '2k+',
    graduates: '8k+',
    enrollmentLink: '#',
  },
  /* BSHM */
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675520393/talisay-city-college/courses/bshm_nf4cwv.webp',
    course: 'Bachelor of Science in Hospitality Management',
    department: 'HM',
    currentlyEnrolled: '2k+',
    graduates: '8k+',
    enrollmentLink: '#',
  },
  /* BSIT */
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675520393/talisay-city-college/courses/it-comptech_hjdl5x.webp',
    course: 'Bachelor of Science in Industrial Technology',
    department: 'IT',
    major: 'Computer Technology',
    currentlyEnrolled: '2k+',
    graduates: '8k+',
    enrollmentLink: '#',
  },
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675520394/talisay-city-college/courses/it-electrotect_hybief.webp',
    course: 'Bachelor of Science in Industrial Technology',
    department: 'IT',
    major: 'Electronics Technology',
    currentlyEnrolled: '2k+',
    graduates: '8k+',
    enrollmentLink: '#',
  },
  /* Special Program */
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675520393/talisay-city-college/courses/special-program_xgkata.webp',
    course: 'Diploma in Professional Education',
    department: 'Special Program',
    currentlyEnrolled: '2k+',
    graduates: '8k+',
    enrollmentLink: '#',
  },
];

/* ########## OFFICIALS ########## */

export const officials = {
  dean: [
    {
      name: 'Helmer B. Montejo, ED.D.',
      position:
        'Associate Dean, General Education/ Languages Coordinator, Research Director',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_fill,h_96,w_96/v1677488304/talisay-city-college/officials/helmer_montejo_fnxvl4.webp',
    },
    {
      name: 'Imie C. Villaver, MBA-HRM',
      position: 'Dean, Hospitality Management Program',
    },
    {
      name: 'Deletah DG. Polinar, ED.D.',
      position: 'Dean, Teacher Education Program',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,h_96,w_96/v1677488304/talisay-city-college/officials/deletah_polinar_jrmhgu.webp',
    },
    {
      name: 'Hermenegilda O. Rosinto, MAED',
      position: 'Dean, Teacher Education Program',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,h_96,w_96/v1677488305/talisay-city-college/officials/hermenegilda_rosinto_lejjch.webp',
    },
    {
      name: 'Helen S. Bacalso, MST-MATH',
      position: 'Associate Dean, Industrial Technology Program',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,w_96/v1677488304/talisay-city-college/officials/helen_bacalso_cjmqwa.webp',
    },
  ],
  coordinators: [
    {
      name: 'Alicia B. Plantar',
      position: 'Program Director, DPA/ Field Study Coordinator',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_fill,h_96,w_96/v1677488303/talisay-city-college/officials/alicia_plantar_q67tnm.webp',
    },
    {
      name: 'Isabelita T. Abellanosa, D.M',
      position: 'Math/ Science Coordinator',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_fill,h_96,w_96/v1677488305/talisay-city-college/officials/isabelita_abellanosa_x5wlo5.webp',
    },
    {
      name: 'Carmelo N. Torino, MAED',
      position: 'Social/ Behavioral Sciences Coordinator',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,w_96/v1677488304/talisay-city-college/officials/carmelo_torino_krt6kc.webp',
    },
    {
      name: 'Evelyn D. Mancao, ED-PE',
      position:
        'Physical Education Coordinator, Prefect of Discipline for Women',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_fill,h_96,w_96/v1677488304/talisay-city-college/officials/evelyn_mancao_qz3dvo.webp',
    },
    {
      name: 'Riza S. Archival, MAED-AS',
      position: 'ReEd/ ValEd Coordinator/ Campus Ministry In-Charge',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,w_96/v1677488305/talisay-city-college/officials/riza_archival_d5mxft.webp',
    },
  ],
  courseInCharge: [
    {
      name: 'Baby Vellela',
      position: 'BEED/ BSHM Course In-Charge',
    },
    {
      name: 'Lira L. Dela Torre',
      position: 'BSED/ DPE Course In-Charge',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_fill,w_96/v1677488305/talisay-city-college/officials/lira_delatorre_vmxzsy.webp',
    },
    {
      name: 'Ruel B. Dejan',
      position: 'BSIT Course In-Charge',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,w_96/v1677488307/talisay-city-college/officials/ruel_dejan_zwmrcg.webp',
    },
  ],
  services: [
    {
      name: 'Wendelyn O. Labajo, LPT',
      position: 'College Registrar',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,w_96/v1677488306/talisay-city-college/officials/wendelyn_labajo_fzjv7p.webp',
    },
    {
      name: 'Teresa B. Bordalba, MPA',
      position: 'Treasury In-Charge/ UNIFAST Focal Person',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_fill,h_96,w_96/v1677488306/talisay-city-college/officials/teresa_bordalba_pc9mwt.webp',
    },
    {
      name: 'Ma. Lourdes F. Mediano, RL',
      position: 'College Librian',
    },
    {
      name: 'Flordelis A. Piala, RL, MLIS',
      position: 'College Librian',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,w_96/v1677488304/talisay-city-college/officials/flordelis_piala_ao7hsv.webp',
    },
    {
      name: 'Fe O. Cuenco, ED.D.',
      position: 'Administrative Asst.-External & Alumni Affairs',
    },
    {
      name: 'Joselito C. Bacolcol, CSASS',
      position:
        'Administrative Assistant-Student Affairs Services and Discipline',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_fill,h_96,w_96/v1677488304/talisay-city-college/officials/joselito_bacolcol_debn6q.webp',
    },
    {
      name: 'Nhikie M. Del Socorro, LPT',
      position: 'Student Affairs Services Asisstant/ SSC Adviser',
    },
    {
      name: 'Mae R. Abellana, LPT',
      position: 'Student Affairs Assistant',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_fill,h_96,w_96/v1677488305/talisay-city-college/officials/mae_abellana_b5hbus.webp',
    },
    {
      name: 'Adelaida C. Coyoca, MAED-AS',
      position: 'Community Extension Services Coordinator',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_fill,w_96/v1677488303/talisay-city-college/officials/adelaida_coyoca_uvahme.webp',
    },
    {
      name: 'Benjie A. Cabigas',
      position: 'NSTP Director/ Scholarship Coordinator',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,w_96/v1677488303/talisay-city-college/officials/benjie_cabigas_yl0ey6.webp',
    },
    {
      name: 'Rhogeem Shane A. Rubio, RN',
      position: 'Head, Medical Personnel',
    },
    {
      name: 'Brenda B. Tabera, RGC',
      position: 'Guidance Counselor',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,w_96/v1677488303/talisay-city-college/officials/brenda_tabera_at2hn7.webp',
    },
    {
      name: 'Keren Rile Javier, RPM, LPT',
      position: 'Guidance Counselor',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,w_96/v1677488305/talisay-city-college/officials/kerenrile_javier_jbp1pc.webp',
    },
    {
      name: 'Corazon De Jesus T. Uy, ED.D.',
      position: 'Guidance Counselor',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,h_96,w_96/v1677488304/talisay-city-college/officials/corazondejesus_uy_plglwn.webp',
    },
    {
      name: 'Dionic B. Rosales',
      position: 'Head Maintenance Dept./ Property Custodian',
      image:
        'https://res.cloudinary.com/dwiivmg3b/image/upload/c_fill,h_96,w_96/v1677488303/talisay-city-college/officials/dionic_rosales_lzn3ed.webp',
    },
    {
      name: 'Joevenor F. Carin',
      position: 'OIC-Safety & Security',
    },
    {
      name: 'Ernesto A. Echavez, JR.',
      position: 'College Monitoring System In-Charge',
    },
  ],
};
/* ########## CONTACTS ########## */

export const contacts = [
  {
    office: `Registrar's`,
    tel: '346-7503',
    email: 'talisaycitycollege2004@gmail.com',
    facebookPath: 'https://www.facebook.com/profile.php?id=100064037861894',
    icon: 'clarity:envelope-solid',
  },
  {
    office: `Scholarship Center`,
    tel: '346-7503',
    email: 'talisaycitycollege2004@gmail.com',
    facebookPath: 'https://www.facebook.com/profile.php?id=100069043275667',
    icon: 'mingcute:medal-fill',
  },
  {
    office: `Clinic`,
    tel: '346-7503',
    email: 'talisaycitycollege2004@gmail.com',
    facebookPath: 'https://www.facebook.com/profile.php?id=100063967033360',
    icon: 'icon-park-solid:medicine-chest',
  },
  {
    office: `Supreme Student Council`,
    tel: '346-7503',
    email: 'tcc_studentcouncil@yahoo.com',
    facebookPath: 'https://www.facebook.com/TCCStudentCouncil',
    icon: 'mdi:court-hammer',
  },
  {
    office: `Guidance Center`,
    tel: '346-7503',
    email: 'tcc_studentcouncil@yahoo.com',
    facebookPath: 'https://www.facebook.com/TCCGuidanceCenter',
    icon: 'ep:avatar',
  },
  {
    office: `Balud Dance Company`,
    tel: '346-7503',
    email: 'tccpa.baluddc@gmail.com',
    facebookPath: 'https://www.facebook.com/BaludDC/',
    icon: 'mdi:dance-ballroom',
  },
  {
    office: `Junior Computer Organization`,
    tel: '346-7503',
    email: 'talisaycitycollege2004@gmail.com',
    facebookPath: 'https://www.facebook.com/profile.php?id=100087451633441',
    icon: 'icon-park-solid:folder-code',
  },
];

/* ########## DEVELOPERS ########## */
export const developers = [
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/c_crop,h_900,w_700/v1675001788/talisay-city-college/developers/ritchie_ftqrpm.webp',
    name: 'Ritchie John Gumera',
    title: 'Front-end Web Developer',
    socialLinks: [
      {
        url: `https://www.facebook.com/richie.gumera.7`,
        icon: 'ri:facebook-box-fill',
      },
      {
        url: `https://twitter.com/Bewareofdoggs`,
        icon: 'mdi:twitter',
      },
      {
        url: `https://github.com/Mrching08`,
        icon: 'mdi:github',
      },
      {
        url: `https://www.linkedin.com/in/ritchie-john-gumera-976057265/?fbclid=IwAR1sC1XrKiMtt3fGWHoa1oHs9BUw5RVF345UkR1fXKfwPXgzyZbJhaG3jYk`,
        icon: 'mdi:linkedin',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,h_900,w_700/v1675006116/talisay-city-college/developers/andales_p1jrua.webp',
    name: 'Ricky Andales Jr.',
    title: 'Researcher',
    socialLinks: [
      {
        url: `https://www.facebook.com/profile.php?id=100006666975804`,
        icon: 'ri:facebook-box-fill',
      },
      {
        url: `https://www.tiktok.com/@glazeshora`,
        icon: 'mingcute:tiktok-fill',
      },
      {
        url: `#`,
        icon: 'mdi:github',
      },
      {
        url: `#`,
        icon: 'mdi:linkedin',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/c_crop,h_900,w_700/v1675006359/talisay-city-college/developers/tuason_biitqc.webp',
    name: 'Jeffrey Tuason',
    title: 'Reactjs Developer',
    socialLinks: [
      {
        url: `https://www.facebook.com/Tuason06/`,
        icon: 'ri:facebook-box-fill',
      },
      {
        url: `https://twitter.com/jepoyduque06`,
        icon: 'mdi:twitter',
      },
      {
        url: `https://github.com/Tuason066`,
        icon: 'mdi:github',
      },
      {
        url: `https://www.linkedin.com/in/jeffreytuason/`,
        icon: 'mdi:linkedin',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/c_crop,h_900,w_700/v1675133761/talisay-city-college/developers/bernardo_h56tbh.webp',
    name: 'Justin Bernardo',
    title: 'Java Developer',
    socialLinks: [
      {
        url: `https://www.facebook.com/bjunich`,
        icon: 'ri:facebook-box-fill',
      },
      {
        url: `#`,
        icon: 'mdi:twitter',
      },
      {
        url: `#`,
        icon: 'mdi:github',
      },
      {
        url: `#`,
        icon: 'mdi:linkedin',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/c_crop,h_900,w_700/v1675133762/talisay-city-college/developers/parsacala_zgyr7f.webp',
    name: 'Jane Marielle Parsacala',
    title: 'Researcher',
    socialLinks: [
      {
        url: `https://www.facebook.com/parsacalajane`,
        icon: 'ri:facebook-box-fill',
      },
      {
        url: `#`,
        icon: 'mdi:twitter',
      },
      {
        url: `#`,
        icon: 'mdi:github',
      },
      {
        url: `#`,
        icon: 'mdi:linkedin',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/c_crop,h_900,w_700/v1675133762/talisay-city-college/developers/drona_bfhql7.webp',
    name: 'Jennifer Droña',
    title: 'Researcher',
    socialLinks: [
      {
        url: `https://www.facebook.com/rojhane.montejar.9`,
        icon: 'ri:facebook-box-fill',
      },
      {
        url: `#`,
        icon: 'mdi:twitter',
      },
      {
        url: `#`,
        icon: 'mdi:github',
      },
      {
        url: `#`,
        icon: 'mdi:linkedin',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/c_crop,h_900,w_700/v1675133763/talisay-city-college/developers/remollo_v8lagl.webp',
    name: 'Girrah Remollo',
    title: 'Researcher',
    socialLinks: [
      {
        url: `https://www.facebook.com/girrah.remollo.3`,
        icon: 'ri:facebook-box-fill',
      },
      {
        url: `#`,
        icon: 'mdi:twitter',
      },
      {
        url: `#`,
        icon: 'mdi:github',
      },
      {
        url: `#`,
        icon: 'mdi:linkedin',
      },
    ],
  },
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/c_crop,h_900,w_700/v1675133762/talisay-city-college/developers/parba_n9w97a.webp',
    name: 'Resalyn Mae Parba',
    title: 'Researcher',
    socialLinks: [
      {
        url: `https://www.facebook.com/resamae.parba`,
        icon: 'ri:facebook-box-fill',
      },
      {
        url: `#`,
        icon: 'mdi:twitter',
      },
      {
        url: `#`,
        icon: 'mdi:github',
      },
      {
        url: `#`,
        icon: 'mdi:linkedin',
      },
    ],
  },
];
