import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Djinstagram from "../assets/img/Djinstagram.png";
import blackeye from "../assets/img/blackeye.png";
import thdsite from "../assets/img/thdsite.png";
import guacamole from "../assets/img/Guacamole.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Djinstagram",
      description: "A functional Instagram clone (School project)",
      link: "https://djinstagram-was-taken.herokuapp.com/",
      imgUrl: Djinstagram,
    },
    {
      title: "Black Eye Coffee",
      description: "Web Site for Business (school project)",
      link: "https://blackeye-coffee.netlify.app/",
      imgUrl: blackeye,
    },
    {
      title: "These Handsome Devils Website",
      description: "Website for Band in California (School project",
      link: "https://62fdac0aa3bda147129bb1fc--starlit-nougat-cd25d0.netlify.app/shows",

      imgUrl: thdsite,
    },

  ];
  const music = [
    {
      title: "Guacamole Music",
      description: "A music portfolio site designed by Ramon with all his music",
      link: "https://www.guacamolemusic.com/",
      imgUrl: guacamole,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Full Stack Developer driven by creativity, passion for adding value and meaningful collaboration. I believe in technology as a tool to connect people- it has been the core goal of my career, beginning with work in Psychology, twenty years of creating music, and now the opportunity to build platforms and apps to engage, enrich and excite.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Music</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Brand</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p>Full Stack Developer driven by creativity, passion for adding value and meaningful collaboration.          
                    I believe in technology as a tool to connect people- it has been the core goal of my career, beginning with work in Psychology, twenty years of creating music, and now the opportunity to build platforms and apps to engage, enrich and excite. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    {
                          music.map((music, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                 
                                {...music}
                                />
                            )
                          })
                        }
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Full Stack Developer driven by creativity, passion for adding value and meaningful collaboration.          
                    I believe in technology as a tool to connect people- it has been the core goal of my career, beginning with work in Psychology, twenty years of creating music, and now the opportunity to build platforms and apps to engage, enrich and excite. </p>
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