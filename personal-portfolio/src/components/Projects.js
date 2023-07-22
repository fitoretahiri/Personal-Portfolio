import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import networked from '../assets/img/networked.png';
import gjejpune from '../assets/img/GjepPune.png';
import furniture from '../assets/img/Furniture.png';
import nuget from '../assets/img/nuget.png';
import draw from '../assets/img/draw.png';
import colorSharp2 from "../assets/img/color-sharp2.png";
import networkedMp4 from "../assets/videos/networked.mp4";
import gjejPuneMp4 from "../assets/videos/GjejPune.mp4"
import furnitureMp4 from "../assets/videos/furniture.mp4"
import drawmp4 from '../assets/videos/draw.mp4';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () =>
{

    var link = 'https://www.nuget.org/packages/Networked.Utilities.FileManager';
    const projects = [
        {
            title: "Social Network: NetWorked",
            description: "NetWorked is a social media made in Microservices Architecture. Techologies: .NET7, node.js, MsSQL, MongoDB",
            imgUrl: networked,
            demo: networkedMp4,
        },
        {
            title: "Furniture ordering website",
            description: "Technologies: PHP, Sql",
            imgUrl: furniture,
            demo: furnitureMp4,
        },
        {
            title: "File Package",
            description: "This is a nuget package made with .net to manage files. It contains functions to download, upload, delete.",
            imgUrl: nuget,
            demo: link,
        },
        {
            title: "Job Portal: GjejPune",
            description: "Technologies: .net 6, react.js, MSSQL",
            imgUrl: gjejpune,
            demo: gjejPuneMp4,
        },
        {
            title: "Drawing app",
            description: "Java desktop application",
            imgUrl: draw,
            demo: drawmp4,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>During my 3 year studies, I have constantly worked on individual as well as group projects. Here is some of my best work.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) =>
                                                        {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}