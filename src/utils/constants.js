/* SCHOOL YEAR */
const schoolYearStart = 2022;
const schoolYearEnd = 2023;

export const schoolCalendar = {
  schoolYear: `${schoolYearStart} - ${schoolYearEnd}`,
  firstSemester: {
    startOfClasses: `august 22, ${schoolYearStart}`,
    endOfClasses: `january 14, ${schoolYearEnd}`,
    holidays: [
      {
        date: `August 6, ${schoolYearStart}`,
        event: `Cebu Province Charter Day`,
      },
      {
        date: `August 21, ${schoolYearStart}`,
        event: `Ninoy Aquino Day`,
      },
      {
        date: `August 29, ${schoolYearStart}`,
        event: 'National Heor`s Day',
      },
      {
        date: `September 9, ${schoolYearStart}`,
        event: `Sergio Osmeña Day`,
      },
      {
        date: `October 15, ${schoolYearStart}`,
        event: `City of Talisay Fiesta`,
      },
      {
        date: `November 1 & 2, ${schoolYearStart}`,
        event: 'All Saint`s & All Soul`s Day',
      },
      {
        date: `November 30, ${schoolYearStart}`,
        event: `Bonifacio Day`,
      },
      {
        date: `December 8, ${schoolYearStart}`,
        event: `Immaculate Conception`,
      },
      {
        date: `Dec 19, ${schoolYearStart} to Jan 1, ${schoolYearEnd}`,
        event: `Christmas Vacation`,
      },
      {
        date: `December 24 - 25, ${schoolYearStart}`,
        event: `Christmas Holidays`,
      },
      {
        date: `December 30 & 31, ${schoolYearStart}`,
        event: `Rizal Day & Last Day of ${schoolYearStart}`,
      },
      {
        date: `January 1, ${schoolYearEnd}`,
        event: 'New Year`s Day',
      },
      {
        date: `January 12, ${schoolYearEnd}`,
        event: `City of Talisay Charter Day`,
      },
      {
        date: `January 22, ${schoolYearEnd}`,
        event: 'Chinese New Year`s Day',
      },
    ],
  },
  secondSemester: {
    startOfClasses: `February 13, ${schoolYearEnd}`,
    endOfClasses: `July 1, ${schoolYearEnd}`,
    holidays: [
      { date: `February 25, ${schoolYearEnd}`, event: `EDSA Revolution` },
      { date: `March 26, ${schoolYearEnd}`, event: `Takas Sa Talisay` },
      { date: `April 6, ${schoolYearEnd}`, event: `Maundy Thursday` },
      { date: `April 7, ${schoolYearEnd}`, event: `Good Friday` },
      { date: `April 8, ${schoolYearEnd}`, event: `Black Saturday` },
      { date: `April 9, ${schoolYearEnd}`, event: `The Day of Valor` },
      { date: `April 22, ${schoolYearEnd}`, event: `Eid'l Fitr` },
      { date: `May 1, ${schoolYearEnd}`, event: `Labor Day` },
      { date: `June 12, ${schoolYearEnd}`, event: `Independence Day` },
      { date: `June 28, ${schoolYearEnd}`, event: `Eid'l Adha` },
      {
        date: `August 6, ${schoolYearEnd}`,
        event: `Cebu Province Charter Day`,
      },
    ],
  },
  summer: {
    startOfClasses: `July 10, ${schoolYearEnd}`,
    endOfClasses: `August 5, ${schoolYearEnd}`,
  },
  schoolDays: {
    firstSemester: [
      {
        month: 'august',
        days: 8,
      },
      {
        month: 'september',
        days: 25,
      },
      {
        month: 'october',
        days: 25,
      },
      {
        month: 'november',
        days: 23,
      },
      {
        month: 'december',
        days: 14,
      },
      {
        month: 'january',
        days: 11,
      },
      { total: 'total', days: '106' },
    ],
    secondSemester: [
      {
        month: 'february',
        days: 13,
      },
      {
        month: 'march',
        days: 27,
      },
      {
        month: 'april',
        days: 21,
      },
      {
        month: 'may',
        days: 26,
      },
      {
        month: 'june',
        days: 25,
      },
      { total: 'total', days: '112' },
    ],
    summer: [
      { month: 'July', days: 19 },
      { month: 'August', days: 5 },
      { total: 'total', days: 24 },
    ],
  },
  calendar: [
    {
      month: '',
      days: [
        {
          day: 1,
          state: 'break',
        },
      ],
    },
  ],
};

/* 
type: {
  student: {
    course: 'BS-IndTech',
    yearLevel: 3,
    section: 'Faithful',
    status: 'Regular', // or Irregular
  },
  teacher: {
    position: '',
    status: 'Regular', // or Part-time
  },
},
*/

export const messages = [
  {
    id: 1,
    name: 'Ritchie John Gumera',
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/c_crop,h_900,w_700/v1675001788/talisay-city-college/developers/ritchie_ftqrpm.webp',
    type: {
      student: {
        course: 'BS-IndTech',
        yearLevel: 3,
        section: 'Faithful',
        status: 'Regular', // or Irregular
      },
    },
    messages: '',
  },
  {
    id: 2,
    name: 'Ricky Jr. Andales',
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/c_scale,h_900,w_700/v1675006116/talisay-city-college/developers/andales_p1jrua.webp',
    type: {
      student: {
        course: 'BS-IndTech',
        yearLevel: 3,
        section: 'Faithful',
        status: 'Regular', // or Irregular
      },
    },
    messages: '',
  },
  {
    id: 3,
    name: 'Elmer Montejo',
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/c_fill,h_96,w_96/v1677488304/talisay-city-college/officials/helmer_montejo_fnxvl4.webp',
    type: {
      teacher: {
        position: 'Associate Dean',
        status: 'Regular', // or Part-time
      },
    },
    messages: '',
  },
];

export const developers = [
  {
    image:
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675001788/talisay-city-college/developers/ritchie_ftqrpm.webp',
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
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675006116/talisay-city-college/developers/andales_p1jrua.webp',
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
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675006359/talisay-city-college/developers/tuason_biitqc.webp',
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
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675133761/talisay-city-college/developers/bernardo_h56tbh.webp',
    name: 'Justin Bernardo',
    title: 'Researcher',
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
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675133762/talisay-city-college/developers/parsacala_zgyr7f.webp',
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
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675133762/talisay-city-college/developers/drona_bfhql7.webp',
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
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675133763/talisay-city-college/developers/remollo_v8lagl.webp',
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
      'https://res.cloudinary.com/dwiivmg3b/image/upload/v1675133762/talisay-city-college/developers/parba_n9w97a.webp',
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
