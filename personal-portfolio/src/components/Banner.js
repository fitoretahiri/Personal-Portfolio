import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg2 from '../assets/img/header3.png'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import CV from '../assets/img/CV-FitoreTahiri.pdf';

export const Banner = () =>
{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Software Engineer", "Web Developer", "Data Engineer"];
    const period = 2000;

    useEffect(() =>
    {
        let ticker = setInterval(() =>
        {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () =>
    {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting)
        {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText)
        {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '')
        {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else
        {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    // const handleDownload = () =>
    // {
    //     const anchor = document.createElement('a');
    //     anchor.href = CV;
    //     anchor.download = 'cv.pdf';
    //     anchor.click();
    // };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Fitore Tahiri`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Web Developer", "Data Engineer" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>
                                        I am a passionate Computer Science enthusiast with a strong focus on Software Engineering. My dedication to continuous improvement drives me to actively engage in various learning opportunities such as attending conferences, participating in training sessions, and collaborating on group projects. I possess valuable experience in Object-Oriented Programming using .NET and Java, and my proficiency extends to frontend technologies including HTML, JavaScript, CSS, and React.js. Additionally, I have a deep appreciation for data and a strong affinity for Python.
                                        <br />I can't wait to join like-minded professionals in creating cutting-edge solutions and driving progress in the ever-evolving tech landscape.
                                    </p>
                                    {/* <button onClick={handleDownload}>Download CV <ArrowRightCircle size={25} /></button> */}                                   
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg2} alt="Header Img" className="foto" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
