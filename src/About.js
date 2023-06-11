import React from 'react'
import Stack from '@mui/material/Stack';
import './about.css'
import Card from './Card'
import { TeamList } from './helpers/TeamList'
// import { createTheme } from '@mui/material/styles';


const About = () => {

    return (
        <>
            <section className="story">
                <div className="row story3">
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <div className="col">
                            <img src="https://d1idiaqkpcnv43.cloudfront.net/assets/webimages/map.png" alt="" className='img-responsive story-img' width={550} height={600} />
                        </div>
                        <div className="col story">
                            <div className="row">
                                <p className='headone'>THE EDUVANZ STORY</p>
                                <h1 className='subhead'>Supporting the Success of Learners & Leaders</h1>
                                <br />
                                <br />
                            </div>
                            <p className="line3">
                                Eduvanz is a digital Fintech NBFC helping Learners discover and finance their Learning & Career Goals with fast, convenient, and affordable No Cost Financing Solutions.
                                <br />
                                <br></br>

                                Eduvanz was founded to offer convenient and flexible financial assistance to Students and Leaders who want Quick Results, Attractive Benefits and Transparent Conversations.
                            </p>
                        </div>
                    </Stack>


                </div>
            </section>
            <section className='bg2'>
                <div className="flex-container">
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                        <div><h3 className="heading">Vision Statement</h3>
                            <p>"Eduvanz - Building the world's largest ecosystem for learners."</p></div>
                        <div><h3 className="heading">Mission Statement</h3>
                            <p>Empowering learners globally by enabling discovery and access to a universe of infinite opportunities.
                                We are committed to providing high quality and reliable solutions to all our stakeholders through innovative
                                technology products.</p></div>
                    </Stack>
                </div>
            </section>
            <section className="bg3">
                <div className='team-title'>
                    <p className='headone'>Management Team</p>
                    <h1 className='subhead'>Eduvanz is founded by a group of Dreamers who want to fulfil the aspiration
                        of the next generation of Leaders. So, Eduvanz created innovative Products for all kinds of
                        Learners from all
                        Walks of Life across all kinds of Learning.</h1>

                </div>
                <div className="team-cards">
                    {/* <Stack
                        direction={{ xs: 'column', sm: 'column', md: 'row' }}
                        spacing={{ xs: 1, sm: 2, md: 3 }}
                    > */}
                        {TeamList.map(data => {
                            return <Card props={data}/>
                        })}

                    {/* </Stack> */}
                </div>

            </section>
        </>
    )
}

export default About