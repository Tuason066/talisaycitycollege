/* SCHOOL YEAR */
const schoolYearStart = 2022;
const schoolYearEnd = 2023;

export const schoolCalaendar = {
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
