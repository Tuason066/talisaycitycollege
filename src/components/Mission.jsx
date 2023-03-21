function Mission() {
  return (
    <section className='section'>
      <div className='section-center'>
        <h2
          className='text-xl md:text-2xl lg:text-4xl font-black uppercase tracking-wide md:tracking-wider lg:tracking-widest text-center mb-4 md:mb-8 underline'
          data-aos='zoom-in'
          data-aos-duration='700'
        >
          Mission
        </h2>
        <div className='max-w-md mx-auto md:max-w-xl text-justify'>
          <p data-aos='zoom-in' data-aos-duration='700'>
            This Mission propelledby the institution's commitment to:
          </p>
          <br />
          <ol className='list-decimal pl-4'>
            <li data-aos='zoom-in' data-aos-duration='700'>
              Provide quality education through affordable tertiary education
            </li>
            <li data-aos='zoom-in' data-aos-duration='700'>
              Involve actively in community outreach projects aligned in the
              college's thrusts; and
            </li>
            <li data-aos='zoom-in' data-aos-duration='700'>
              Engage in researched-based activities relevant to socio-economic
              development
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Mission;
