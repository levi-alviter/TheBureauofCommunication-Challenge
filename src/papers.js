import React, {useState} from 'react';
import nickCover from './assets/nickCover.jpg';
import catDog from './assets/catDog.png';
import bobEsponja from './assets/bobEsponja.png'
import Form from './Form';
import Letter from './Letter';
import './css/book.css';

function Papers(){
    const [answers, setAnswers] = useState({
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        answer5: "",
        answer6: "",
        answer7: "",
        answer8: "",
        answer9: "",
        answer10: "",
        answer11: "",
        answer12: "",
        answer13: "",
        answer14: "",
        answer15: "",
        answer16: "",
        answer17: "",
        answer18: "",
        answer19: "",
        answer20: ""
      });
    return(
        <React.Fragment>
            <section className="paper">
                <div className="front">
                    <div className="front-content">
                        <img id="cover-img" src={nickCover} alt={''}/>
                    </div>
                </div>
                <div className="back">
                    <div className="back-content">
                        <Form fill={setAnswers} show={answers}/>
                    </div>
                </div>
            </section>
            <section className="paper">
                <div className="front">
                    <div className="front-content">  
                        <Letter show={answers}/>
                    </div>
                </div>
                <div className="back" id="back-cover-container">
                    <div className="back-content" id="back-cover">
                        <div className="credits">
                            <h1>Made by:</h1>
                            <div>
                                <h4>José Hernandez Montiel</h4>
                                <h4>Luis Donaldo Gómez Mendoza</h4>
                                <h4>Jonatan Levi Oliva Alviter (A'lars)</h4>
                            </div>
                        </div>
                    </div>
                    <img id="cat-dog" src={catDog} alt={''}/>
                    <img id="spongebob" src={bobEsponja} alt={''}/>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Papers;