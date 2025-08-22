import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg2 from '../assets/img/header3.png'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
        };
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
                                    {/* <h1>{`Hi! I'm Fitore Tahiri`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "Data Scientist", "Data Engineer" ]'><span className="wrap">{text}</span></span></h1> */}
                                    <h1>{`Hi there! I'm Fitore Tahiri!`}</h1>
                                    <h2>{`Software and Data Engineer`}</h2>
                                    <Carousel
                                        responsive={responsive}
                                        infinite
                                        autoPlay
                                        autoPlaySpeed={6000}
                                        showDots
                                        arrows={false}
                                        >
                                        <div>
                                            <p>
                                            I am a passionate Software and Data Engineer with more than 2 years of
                                            experience in the field. Currently working in the banking sector as a
                                            Software Developer in the Data and Reporting team, I have gained
                                            valuable experience and skills in the field. My day to day work
                                            involves developing and maintaining software applications, as well as
                                            automating ETL processes using Python, Django, SQL, Javascript,
                                            React.js, Azure Synapse, and more, for financial data reporting. In
                                            addition to my technical skills, I am a strong communicator and
                                            collaborator, able to work effectively in team environments and engage
                                            with stakeholders to understand their needs and deliver solutions that
                                            meet their requirements.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                            Furthermore, I have a solid academic background, having completed my
                                            Bachelor's degree in Computer Science and Engineering with focus on
                                            Software and Systems Engineering. Right now, I am pursuing a Master's
                                            degree in Data Science and Artificial Intelligence to further enhance
                                            my knowledge and skills in the field. I posses a strong foundation in
                                            computer science principles, algorithms, and data structures, as well
                                            as experience with various programming languages and tools.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                            Overall, I am a dedicated and driven professional with a passion for
                                            technology and a commitment to continuous learning and growth. My goal 
                                            is to continue advancing my career as a Data Engineer, tackling projects
                                             that push both my technical and analytical boundaries.
                                            </p>
                                        </div>
                                        </Carousel>
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
