import React from 'react'
import { Grid, View, useTheme, Card } from '@aws-amplify/ui-react';
import './Header.css'

function Header() {

    const CategoryData = [{
        name: 'All'
    },
    { name: 'React' },
    {
        name: 'JavaScript'
    },
    {
        name: 'Phython'
    },
    {
        name: 'AWS'
    }

    ]



    return (
        <div>
            <div className='header_container'  >
                <div className="job_title">
                    <h1 className="job_main_text">REACT MAIN JOB</h1>
                    <p className="job_sub_text">The best React jobs today</p>
                </div>

                <div className="job_date">
                    <h1 className="current_date">Friday 17th February</h1>
                </div>
            </div>


            <div className="category_section_and_filter">
                <div className="category">
                    {
                        CategoryData.map((category, index) => {
                            return (
                                <div className='category_name' >
                                    {category.name}
                                </div>
                            )
                        })
                    }
                </div>

                <div className="filter">
                    <button className='filter_btn'  >Filter</button>
                </div>
            </div>
        </div>
    )
}

export default Header