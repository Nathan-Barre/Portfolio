import React, {useState} from "react";
import "./Home.scss"

function goToPortfolio(language, props) {
    if (language === 'uk') {
        console.log("This is shakespeare")
    } else if (language === 'fr') {
        console.log("C'est Moliere")
    }
}

const Home = () => {
    const [ukSide, setUkSide] = useState(false);
    const [frSide, setFrSide] = useState(false);

    return (
        <div className='Home'>
            <div
                className="English"
                align='left'
                onMouseOver={(e) => setFrSide(true)}
                onMouseOut={(e) => setFrSide(false)}
                hidden={ukSide}>
                Welcome to my resume in English
                <div>
                    <button
                        className='HomeButton'
                        onClick={(e) => {
                            goToPortfolio('uk')
                        }}>
                        Continue
                    </button>
                </div>
            </div>
            <div
                className="French"
                align='right'
                onMouseOver={(e) => setUkSide(true)}
                onMouseOut={(e) => setUkSide(false)}
                hidden={frSide}>
                Bienvenue sur mon CV en Français
                <div>
                    <button className='HomeButton'
                            onClick={(e) => {
                                goToPortfolio('fr', frSide)
                            }}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;