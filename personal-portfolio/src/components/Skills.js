import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png'
import dotnet from '../assets/img/dotnet.png';
import sql from '../assets/img/sql.png';
import git from '../assets/img/git.png';
import java from '../assets/img/java.png';
import reactlogo from '../assets/img/reactlogo.png';
import python from '../assets/img/python.png'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import mongo from '../assets/img/mongo.png'

export const Skills = () =>
{
    const responsive = {
        superLargeDesktop: {
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
                            <p>Throughout my academic journey, I have diligently cultivated and honed a diverse array of skills.<br></br>I have 1+ years of experience in .Net and React.js. Additionally, I have worked on various technologies as listed below.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={dotnet} alt="dotnet" />
                                </div>
                                <div className="item">
                                    <img src={reactlogo} alt="react" />
                                </div>
                                <div className="item">
                                    <img src={git} alt="git" />
                                </div>
                                <div className="item">
                                    <img src={java} alt="java" />
                                </div>
                                <div className="item">
                                    <img src={sql} alt="sql" />
                                </div>
                                <div className="item">
                                    <img src={python} alt="python" />
                                </div>
                                <div className="item">
                                    <img src={html} alt="html" />
                                </div>
                                <div className="item">
                                    <img src={css} alt="css" />
                                </div>
                                <div className="item">
                                    <img src={mongo} alt="mongo" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="colorsharp" />
        </section>
    )
}