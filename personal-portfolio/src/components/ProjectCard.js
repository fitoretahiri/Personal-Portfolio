import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, demo }) =>
{
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <br />
                    <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
            </div>
        </Col>
    )
}