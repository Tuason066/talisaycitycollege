
const DescriptiveCalendar = ({
  schoolYear,
  firstSemester,
  secondSemester,
  summer,
  schoolDays,
}) => {


  return (
    <div className='grid gap-y-4 max-w-lg mx-auto'>
      {/* FIRST SEMESTER TABLE */}
      <table className='w-full'>
        <thead>
          <tr>
            <td
              colSpan='2'
              className='uppercase font-semibold bg-customBlue-600 text-white'
            >
              first semester {schoolYear}
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{firstSemester.startOfClasses}</td>
            <td className='bg-orange-300'>Start of Classes</td>
          </tr>
          <tr>
            <td>{firstSemester.endOfClasses}</td>
            <td className='bg-violet-300'>End of Classes</td>
          </tr>

          <tr>
            <th colSpan={'2'} className='uppercase font-semibold bg-green-300'>
              Holidays
            </th>
          </tr>

          {Object.keys(firstSemester.holidays).map((holiday, index) => {
            const { date, event } = firstSemester.holidays[holiday];

            return (
              <tr key={index}>
                <td>{date}</td>
                <td>{event}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* SECOND SEMESTER TABLE */}
      <table className='w-full'>
        <thead>
          <tr>
            <td
              colSpan='2'
              className='uppercase font-semibold bg-customBlue-600 text-white'
            >
              second semester {schoolYear}
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{secondSemester.startOfClasses}</td>
            <td className='bg-orange-300'>Start of Classes</td>
          </tr>
          <tr>
            <td>{secondSemester.endOfClasses}</td>
            <td className='bg-violet-300'>End of Classes</td>
          </tr>

          <tr>
            <th colSpan={'2'} className='uppercase font-semibold bg-green-300'>
              Holidays
            </th>
          </tr>

          {Object.keys(secondSemester.holidays).map((holiday, index) => {
            const { date, event } = secondSemester.holidays[holiday];

            return (
              <tr key={index}>
                <td>{date}</td>
                <td>{event}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* SUMMER */}
      <table className='w-full'>
        <thead>
          <tr>
            <td
              colSpan='2'
              className='uppercase font-semibold bg-customBlue-600 text-white'
            >
              summer {schoolYear}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{summer.startOfClasses}</td>
            <td className='bg-orange-300'>Start of Classes</td>
          </tr>
          <tr>
            <td>{summer.endOfClasses}</td>
            <td className='bg-violet-300'>End of Classes</td>
          </tr>
        </tbody>
      </table>
      {/* NO. OF SCHOOL DAYS */}
      {/* first semester */}
      <table className='w-full'>
        <thead>
          <tr>
            <td
              colSpan={'4'}
              className='uppercase font-semibold bg-customBlue-600 text-white'
            >
              no. of school days
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan={'2'} className='uppercase font-semibold'>
              1st semester
            </th>
          </tr>
          {schoolDays.firstSemester.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.month ? item.month : item.total}</td>
                <td>{item.days} Days</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* second semester */}
      <table className='w-full'>
        <thead>
          <tr>
            <td
              colSpan={'2'}
              className='uppercase font-semibold bg-customBlue-600 text-white'
            >
              no. of school days
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan={'2'} className='uppercase font-semibold'>
              2nd semester
            </th>
          </tr>
          {schoolDays.secondSemester.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.month ? item.month : item.total}</td>
                <td>{item.days} Days</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* summer */}
      <table className='w-full'>
        <thead>
          <tr>
            <th
              colSpan={'2'}
              className='uppercase font-semibold bg-customBlue-600 text-white'
            >
              no. of school days
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan={'2'} className='uppercase font-semibold'>
              summer
            </th>
          </tr>
          {schoolDays.summer.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.month ? item.month : item.total}</td>
                <td>{item.days} Days</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default DescriptiveCalendar;
