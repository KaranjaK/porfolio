import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaArrowAltCircleRight } from "react-icons/fa";
import me from "../resources/edit.png"



const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Full Stack Developer", "Web Designer", "UI/UX Designer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }


    return (
        <section className="banner" id="home">
            <Container >
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Code with Passion, Deliver with Precision</span>
                        <h1>{`Hi there I'am Karanja Kelvin`}<br /> <span className="wrap" >{text}</span></h1>
                        <p>With six years of extensive experience in full stack development, I have honed my skills in both front-end and back-end technologies, delivering seamless and efficient digital solutions. My expertise spans across various programming languages, frameworks, and tools, allowing me to create robust and scalable applications that meet diverse business needs.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <FaArrowAltCircleRight size={25} /></button>
                    </Col>
                    <Col s={12} md={6} xl={5}>
                        <img src={me} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner