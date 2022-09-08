// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
// import meter3 from "../assets/img/meter3.svg";
import angular from "../assets/img/angular-icon.svg";
import css from "../assets/img/css-3.svg";
import django from "../assets/img/django.svg";
import mongo from "../assets/img/mongo.svg";
import python from "../assets/img/python.svg";
import html from "../assets/img/html.svg";
import javascript from "../assets/img/js.svg";
import react from "../assets/img/react.svg";

import 'react-multi-carousel/lib/styles.css';

import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>HTML | JavaScript | CSS | Git | Github | React JS | Angular | Python | Node | Express.js | AWS
</p>
                        <h3>Additional Skills</h3>
                        <p>Bilingual: English (Fluent) & Spanish (Native) ⎸ Collaboration and Leadership ⎸ Logic Pro X ⎸ Pro Tools ⎸ Guitar
</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={javascript} alt="Image" />
                               
                        
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                               
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                               
                            </div>
                            <div className="item">
                                <img src={django} alt="Image" />
                               
                            </div>
                            <div className="item">
                                <img src={angular} alt="Image" />
                              
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                       
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                               
                           
                            </div>
                            <div className="item">
                                <img  src={mongo} alt="Image" />
                               
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}