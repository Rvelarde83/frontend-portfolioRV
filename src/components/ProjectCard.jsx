import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, link, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className= "imgcard" src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span> 
          <br></br> 
          <a href= {link} target= "_blank"> Live Website</a>
        </div>
      </div>
    </Col>
  )
}