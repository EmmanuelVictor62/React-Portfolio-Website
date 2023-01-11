import React from "react";
import './_home.scss';
import { Typewriter } from 'react-simple-typewriter';

export interface HomeProps{
    toggle?:boolean
}

export const Home = (props:HomeProps) => {
    return(
        <div className="home-page__container" id="home">
            <p className="home-page__heading">
                
                <span data-toggle={props.toggle}>
                    <Typewriter 
                        words={[
                            'Hello, I am Emmanuel',
                            'A Frontend Developer',
                            'And A Web Developer'
                        ]}
                        loop={false}
                        cursor
                        cursorStyle='|'
                        typeSpeed={180}
                        deleteSpeed={100}
                        delaySpeed={1000}
                    />
                </span>
            </p>
            <p className="home-page__description">
                A Product Designer working at Facebook. 
                Separated they live in Bookmarksgrove right at the coast 
                of the Semantics, a large language ocean.
            </p>
            <div className="home-page__button-box">
                <button className="home-page__button">
                    <a href="">
                    Start a project
                    </a>  
                </button>
                <a href="" className="home-page__link">
                    royalmanuel62@gmail.com
                </a>
            </div>
        </div>
    )
}

export default Home;