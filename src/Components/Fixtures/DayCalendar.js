
const DayCalendar = ({program}) => {

    return (
        <div className='Fixtures-footer mt-5'>
            {
                program.program.map((group, index)=> (
                    <div className='rang' data-time={group.time} key={index}>
                        <div className='boxes'>
                            {
                            group.courses.map((cours, index) => (
                                <div className='box-items' key={index}>
                                    <a href='#!'  className='items-info'>
                                        <span className='elipse'>{cours.category}</span>
                                        <div className='group'>
                                            <h4 className='items-title'>{cours.title}</h4>
                                            <p className='box-text'>{cours.description}</p>
                                            <a href='#!' className='items-icon'><i className="fa-solid fa-info"></i></a>
                                        </div>
                                    </a>
                                </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DayCalendar