const Grades = () => {
  return (
    <main className='py-8 md:py-12 lg:py-14 min-h-[76dvh]'>
      <div className='center-element text-center capitalize'>
        <h3 className='uppercase mb-6 md:mb-8 text-center text-xl md:text-3xl lg:text-4xl font-bold tracking-widest border-double border-b-4 border-customBlue-750 w-fit mx-auto text-customBlue-750'>
          My Grades
        </h3>
        {/* THIRD YEAR */}
        <section>
          {/* TITLE COMPONENT */}
          <header className='my-6 md:my-8'>
            <h4 className='text-xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase text-customBlue-750 '>
              Third Year
            </h4>
            <p className='text-base md:text-lg lg:text-xl font-semibold tracking-wider text-customBlue-750 border-t-4 border-double border-customBlue-750 w-fit mx-auto'>
              Academic Year 2022 - 2023
            </p>
          </header>
          <div className='grid gap-y-4'>
            {/* TABLE FIRST SEM */}
            <table className='w-full'>
              <thead>
                <tr>
                  <th
                    colSpan={'4'}
                    className='uppercase bg-indigo-200 font-bold tracking-wider md:tracking-widest'
                  >
                    first semester
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Course Code</th>
                  <th>Description</th>
                  <th>Units</th>
                  <th>Remarks</th>
                </tr>
                <tr>
                  <td>GE Eth 7</td>
                  <td>Ethics</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>TEM Elec</td>
                  <td>The Entrepreneurial Mind</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Rizal</td>
                  <td>Life and Works of Rizal</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Tech 315</td>
                  <td>Networking</td>
                  <td>5</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Tech 316</td>
                  <td>Web Development</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Ind'l Mgt 311A</td>
                  <td>Technology Research 1</td>
                  <td>2</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Ind'l Mgt 312</td>
                  <td>Occupational Health & Safety</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>FL 1</td>
                  <td>Foerign Language 1</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className='font-bold'>Total Units: 25</td>
                  <td className='font-bold'>GPA: 2.1</td>
                </tr>
              </tbody>
            </table>
            {/* TABLE SECOND SEM */}
            <table className='w-full'>
              <thead>
                <tr>
                  <th
                    colSpan={'4'}
                    className='uppercase bg-indigo-200 font-bold tracking-wider md:tracking-widest'
                  >
                    second semester
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Course Code</th>
                  <th>Description</th>
                  <th>Units</th>
                  <th>Remarks</th>
                </tr>
                <tr>
                  <td>GE CW 8</td>
                  <td>The Contemporary World</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>LITE Elec</td>
                  <td>Living in the IT Era</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Tech 326</td>
                  <td>Programming</td>
                  <td>5</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Ind'l Mgt 311B</td>
                  <td>Technology Research 2</td>
                  <td>2</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Ind'l Mgt 323</td>
                  <td>Industrial Organization and Personnel Management</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Ind'l Mgt 324</td>
                  <td>Shop Supervision and Apprenticeship Training</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td className='font-medium'>FL 2</td>
                  <td>Foreign Language 2</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className='font-bold'>Total Units: 22</td>
                  <td className='font-bold'>GPA: 2.1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* END OF THIRD YEAR */}
        {/* SECOND YEAR */}
        <section>
          {/* TITLE COMPONENT */}
          <header className='my-6 md:my-8'>
            <h4 className='text-xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase text-customBlue-750 border-b-4 border-double border-customBlue-750 w-fit mx-auto'>
              Second Year
            </h4>
            <p className='text-base md:text-lg lg:text-xl font-semibold tracking-wider text-customBlue-750'>
              Academic Year 2021 - 2022
            </p>
          </header>
          <div className='grid gap-y-4'>
            {/* TABLE FIRST SEM */}
            <table className='w-full'>
              <thead>
                <tr>
                  <th
                    colSpan={'4'}
                    className='uppercase bg-indigo-200 font-bold tracking-wider md:tracking-widest'
                  >
                    first semester
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Course Code</th>
                  <th>Description</th>
                  <th>Units</th>
                  <th>Remarks</th>
                </tr>
                <tr>
                  <td>Lit</td>
                  <td>Literature of the Philippines and the World</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>GE US 1</td>
                  <td>Understanding the Self</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>GE MATH 4</td>
                  <td>Mathematics in the Modern World</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Math 2B</td>
                  <td>Plane Trigometry</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>RVA Elec</td>
                  <td>Reading Visual Arts</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Tech 213</td>
                  <td>Computer System Hardware and Servicing</td>
                  <td>5</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Draw 213</td>
                  <td>Working Drawing and Blueprint Reading 1 with CAD</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>PE 3</td>
                  <td>
                    Physical Activity Towards Health and Fitness (PATH-FIT 1)
                  </td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className='font-bold'>Total Units: 25</td>
                  <td className='font-bold'>GPA: 2.1</td>
                </tr>
              </tbody>
            </table>
            {/* TABLE SECOND SEM */}
            <table className='w-full'>
              <thead>
                <tr>
                  <th
                    colSpan={'4'}
                    className='uppercase bg-indigo-200 font-bold tracking-wider md:tracking-widest'
                  >
                    second semester
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Course Code</th>
                  <th>Description</th>
                  <th>Units</th>
                  <th>Remarks</th>
                </tr>
                <tr>
                  <td>GE Art 2</td>
                  <td>Art Appreciation</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>GE Com 5</td>
                  <td>Purposive Communication</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>GE HIST 6</td>
                  <td>Reading Philippine History</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Phys</td>
                  <td>Electricity, Magnetism, Sound, Heat and Light</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Tech 224</td>
                  <td>Computer System Software</td>
                  <td>5</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Draw 224</td>
                  <td>
                    Advanced Technical Drawing, Planning and Blueprint Reading 2
                    w/ CAD
                  </td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>PE 4</td>
                  <td>Physical Activity Towards Health and Fitness 2</td>
                  <td>2</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className='font-bold'>Total Units: 25</td>
                  <td className='font-bold'>GPA: 2.1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* END OF SECOND YEAR */}
        {/* FIRST YEAR */}
        <section>
          {/* TITLE COMPONENT */}
          <header className='my-6 md:my-8'>
            <h4 className='text-xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase text-customBlue-750'>
              First Year
            </h4>
            <p className='text-base md:text-lg lg:text-xl font-semibold tracking-wider text-customBlue-750 border-t-4 border-double border-customBlue-750 w-fit mx-auto'>
              Academic Year 2020 - 2021
            </p>
          </header>
          <div className='grid gap-y-4'>
            {/* TABLE FIRST SEM */}
            <table className='w-full'>
              <thead>
                <tr>
                  <th
                    colSpan={'4'}
                    className='uppercase bg-indigo-200 font-bold tracking-wider md:tracking-widest'
                  >
                    first semester
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Course Code</th>
                  <th>Description</th>
                  <th>Units</th>
                  <th>Remarks</th>
                </tr>
                <tr>
                  <td>Engl 1</td>
                  <td>Communication Arts</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Fil 1</td>
                  <td>Makabagong Filipino sa Makabagong Panahon</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Math 1</td>
                  <td>Fundamentals of Mathematics</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Comp 1</td>
                  <td>Office Productivity Application Software</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Tech 111</td>
                  <td>Basic Electricity and Electronics</td>
                  <td>5</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Draw 111</td>
                  <td>Fundamentals of Technical Drawing</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>PE 1</td>
                  <td>Movement Enhancement</td>
                  <td>2</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>NSTP 1</td>
                  <td>National Service Training Program 1</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>REED</td>
                  <td>Religious Education</td>
                  <td>(1.5)</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>HRG</td>
                  <td>Homeroom Guidance</td>
                  <td></td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className='font-bold'>Total Units: 25</td>
                  <td className='font-bold'>GPA: 2.1</td>
                </tr>
              </tbody>
            </table>
            {/* TABLE SECOND SEM */}
            <table className='w-full'>
              <thead>
                <tr>
                  <th
                    colSpan={'4'}
                    className='uppercase bg-indigo-200 font-bold tracking-wider md:tracking-widest'
                  >
                    second semester
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Course Code</th>
                  <th>Description</th>
                  <th>Units</th>
                  <th>Remarks</th>
                </tr>
                <tr>
                  <td>Fil 2</td>
                  <td>Retorika</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>GE STS 3</td>
                  <td>Science, Technology and Society</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Math 2</td>
                  <td>College Algebra</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Tech 122</td>
                  <td>Digital Electronics</td>
                  <td>5</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Draw 122</td>
                  <td>Technical Sketching and Mechanical Drawing</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>PE 2</td>
                  <td>Fitness Exercises</td>
                  <td>2</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>NSTP 2</td>
                  <td>National Service Training Program 2</td>
                  <td>3</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td>Val Ed</td>
                  <td>Values Education</td>
                  <td>(1.5)</td>
                  <td>2.1</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td className='font-bold'>Total Units: 22</td>
                  <td className='font-bold'>GPA: 2.1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        {/* END OF FIRST YEAR */}
      </div>
    </main>
  );
};
export default Grades;
