const DesktopScheduleTable = () => {
  return (
    <table className='text-center w-11/12 mx-auto my-8 md:my-12 lg:my-14 border border-customBlue-750'>
      <thead className='tracking-wider'>
        <tr>
          <th colSpan='4' className='bg-orange-300'>
            BS IndTech 3 Faithful
          </th>
        </tr>
        <tr>
          <th colSpan='4' className='bg-violet-300'>
            Second Semester A.Y. 2022 - 2023
          </th>
        </tr>
      </thead>
      <tbody>
        {/* monday */}
        <tr className='uppercase'>
          <th
            colSpan='4'
            className='pl-4 tracking-wider bg-customBlue-500 text-white'
          >
            monday
          </th>
        </tr>
        <tr className='uppercase'>
          <th className='font-semibold'>room</th>
          <th className='font-semibold'>time</th>
          <th className='font-semibold'>subject</th>
          <th className='font-semibold'>instructor</th>
        </tr>
        <tr>
          <td>10</td>
          <td>5:30 - 7:30 PM</td>
          <td>Living in the IT Era</td>
          <td>Mr. Ling P.N. Sumbe</td>
        </tr>
        <tr>
          <td>10</td>
          <td>7:30 - 9:30 PM</td>
          <td>Foreign Language</td>
          <td>Mr. Vinz Patrick Silvosa Virador</td>
        </tr>
        {/* end of monday */}
        {/* tuesday */}
        <tr className='uppercase'>
          <th
            colSpan='4'
            className='pl-4 bg-customBlue-500 text-white tracking-wider'
          >
            tuesday
          </th>
        </tr>
        <tr className='uppercase'>
          <th className='font-semibold'>room</th>
          <th className='font-semibold'>time</th>
          <th className='font-semibold'>subject</th>
          <th className='font-semibold'>instructor</th>
        </tr>
        <tr>
          <td>10</td>
          <td>5:30 - 8:30 PM</td>
          <td>Programming</td>
          <td>Mr. Richard Cebel Cupal</td>
        </tr>
        <tr>
          <td>10</td>
          <td>8:30 - 9:30 PM</td>
          <td>The Contemporary World</td>
          <td>Mrs. Laarni Parohinog Jerusalem</td>
        </tr>
        {/* end of tuesday */}
        {/* wednesday */}
        <tr className='uppercase'>
          <th
            colSpan='4'
            className='pl-4 bg-customBlue-500 text-white tracking-wider'
          >
            wednesday
          </th>
        </tr>
        <tr className='uppercase'>
          <th className='font-semibold'>room</th>
          <th className='font-semibold'>time</th>
          <th className='font-semibold'>subject</th>
          <th className='font-semibold'>instructor</th>
        </tr>
        <tr>
          <td>10</td>
          <td>5:30 - 8:30 PM</td>
          <td>Occupational Health and Safety</td>
          <td>Mrs. Nida Mangubat</td>
        </tr>
        <tr>
          <td>10</td>
          <td>8:30 - 9:30 PM</td>
          <td>Foreign Language</td>
          <td>Mr. Vinz Patrick Silvosa Virador</td>
        </tr>
        {/* end of wednesday */}
        {/* thurdays */}
        <tr className='uppercase'>
          <th
            colSpan='4'
            className='pl-4 bg-customBlue-500 text-white tracking-wider'
          >
            thursday
          </th>
        </tr>
        <tr className='uppercase'>
          <th className='font-semibold'>room</th>
          <th className='font-semibold'>time</th>
          <th className='font-semibold'>subject</th>
          <th className='font-semibold'>instructor</th>
        </tr>
        <tr>
          <td>10</td>
          <td>5:30 - 7:30 PM</td>
          <td>Programming</td>
          <td>Mr. Richard Cebel Cupal</td>
        </tr>
        <tr>
          <td>10</td>
          <td>8:30 - 9:30 PM</td>
          <td>The Contemporary World</td>
          <td>Mrs. Laarni Parohinog Jerusalem</td>
        </tr>
        {/* end of thursday */}
        {/* friday */}
        <tr className='uppercase'>
          <th
            colSpan='4'
            className='pl-4 bg-customBlue-500 text-white tracking-wider'
          >
            friday
          </th>
        </tr>
        <tr className='uppercase'>
          <th className='font-semibold'>room</th>
          <th className='font-semibold'>time</th>
          <th className='font-semibold'>subject</th>
          <th className='font-semibold'>instructor</th>
        </tr>
        <tr>
          <td>10</td>
          <td>5:30 - 6:30 PM</td>
          <td>Living in the IT Era</td>
          <td>Mrs. Ling P.N. Sumbe</td>
        </tr>
        <tr>
          <td>10</td>
          <td>6:30 - 9:30 PM</td>
          <td>Shop Supervision and Peronnel Management</td>
          <td>Mr. Syrael Soque</td>
        </tr>
        {/* end of friday */}
        {/* saturday */}
        <tr className='uppercase'>
          <th
            colSpan='4'
            className='pl-4 bg-customBlue-500 text-white tracking-wider'
          >
            saturday
          </th>
        </tr>
        <tr className='uppercase'>
          <th className='font-semibold'>room</th>
          <th className='font-semibold'>time</th>
          <th className='font-semibold'>subject</th>
          <th className='font-semibold'>instructor</th>
        </tr>
        <tr>
          <td>10</td>
          <td>6:00 - 8:00 PM</td>
          <td>Practical Research</td>
          <td>Mrs. Charlote Amista</td>
        </tr>
        {/* end of saturday */}
      </tbody>
    </table>
  );
};
export default DesktopScheduleTable;
