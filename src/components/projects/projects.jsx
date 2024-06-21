import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import farmerlifelearn from '../resources/farmerlifelearn.png';
import hex_rgb from '../resources/hex-rgb-project.png'
import accordion from '../resources/accordion.png'
import cropscan from '../resources/cropsan.png'
import portfolio from '../resources/portfolio.png'

import colorSharp2 from "../resources/color-sharp2.png";
import ProjectCard from "./projectCard";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { type } from "@testing-library/user-event/dist/type";

const Projects = () => {
    const projects = [
        {
            title: "Farmer Lifelearn",
            pro_stack: "Django-Python",
            description: "Learning Management System built on Django Python",
            imgUrl: farmerlifelearn,
            projectUrl: "http://codeittech.co.ke/",
        },
        {
            title: "HEX and RGB Color Generator",
            pro_stack: "React",
            description: "React Project to generate Random colors giving Hex and Rgb Color Codes",
            imgUrl: hex_rgb,
            projectUrl: "https://hex-rgb-colorgen.netlify.app/",
        },
        {
            title: "Accordion",
            pro_stack: "React",
            description: "React Project producing accordion effect on cards. It has a button switching between multi and single select",
            imgUrl: accordion,
            projectUrl: "https://accordion-select.netlify.app/",
        },
        {
            title: "CropScan",
            pro_stack: "Django-Python",
            description: "Full Stack application that scans crops in the farm, queries an API(Plantrix API) and sends a text message to the farmer based on findings in relation to crop diseases, pests and nutrients needed",
            imgUrl: cropscan,
            projectUrl: "https://cropscan.co.ke/",
        },
        {
            title: "KaranjaKelvin",
            pro_stack: "React",
            description: "This is a link of this portfolio project",
            imgUrl: portfolio,
            projectUrl: "https://main--karanjakelvin.netlify.app/",
        },
    ];


    // Extract unique pro_stack values
    const proStacks = [...new Set(projects.map(project => project.pro_stack))];

    // Set the default pro_stack
    const defaultProStack = proStacks[0];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>A key driving mechanism for me is delivering cutting-edge applications that have a well thought after backend process, keenly structured query mechanism and breathe taking user interfaces to deliver that covertable user experience.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey={defaultProStack}>
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            {proStacks.map((stack, index) => (
                                                <Nav.Item key={index}>
                                                    <Nav.Link eventKey={stack}>{stack}</Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            {proStacks.map((stack, index) => (
                                                <Tab.Pane eventKey={stack} key={index}>
                                                    <Row>
                                                        {projects.filter(project => project.pro_stack === stack).map((project, idx) => (
                                                            <ProjectCard
                                                                key={idx}
                                                                {...project}
                                                            />
                                                        ))}
                                                    </Row>
                                                </Tab.Pane>
                                            ))}
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

export default Projects