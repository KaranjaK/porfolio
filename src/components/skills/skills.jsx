import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../resources/meter1.svg"
import meter2 from "../resources/meter2.svg"
import meter3 from "../resources/meter3.svg"
import colorSharp from "../resources/color-sharp.png"
import { Container } from 'react-bootstrap';

const Skills = () => {
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
        <Container className="skill" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="skill-bx wow zoomIn">
                                <h2>Skills</h2>
                                <p>
                                    Throughout my career, I have interacted with various industry professionals and working environments gaining various skills both technical and soft skills.
                                    <br />
                                    This has seen me partake in various cutting-edge web-based applications that are in use and some still in their testing stage.
                                </p>
                                <section className='tech-skill'>
                                    <h1>Technical Skills</h1>
                                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                        <div className="item">
                                            <h2><span className='counter' data-target="90">90</span><sup>%</sup><br />Python</h2>
                                        </div>
                                        <div className="item">
                                            <img src={meter2} alt="Image" />
                                            <h5>Flask</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter3} alt="Image" />
                                            <h5>Django</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter1} alt="Image" />
                                            <h5>Javascript</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter3} alt="Image" />
                                            <h5>React</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter1} alt="Image" />
                                            <h5>HTML</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter1} alt="Image" />
                                            <h5>CSS</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter3} alt="Image" />
                                            <h5>SaSS</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter2} alt="Image" />
                                            <h5>Nodejs</h5>
                                        </div>
                                    </Carousel>
                                </section>
                                <section className='soft-skill'>
                                    <h1>Soft Skills</h1>
                                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                        <div className="item">
                                            <img src={meter1} alt="Image" />
                                            <h5>Effective Communication</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter2} alt="Image" />
                                            <h5>Leadership</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter3} alt="Image" />
                                            <h5>Time Management</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter1} alt="Image" />
                                            <h5>Critical Thinking</h5>
                                        </div>
                                        <div className="item">
                                            <img src={meter3} alt="Image" />
                                            <h5>Team Work</h5>
                                        </div>
                                    </Carousel>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="background-image-left" src={colorSharp} alt="Image" />
        </Container>
    )
}


export default Skills