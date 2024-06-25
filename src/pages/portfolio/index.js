import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img from "../../assets/images/system.jpg";
import { meta } from "../../content_option";
import "./style.css";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About our Project</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Project Title</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Quality Education</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">SDG Connect</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>In our project, we have designed a comprehensive educational platform that aligns closely with the principles of equitable access to quality education and inclusivity. Through our website, we offer free access to a diverse range of educational resources, including courses and books, ensuring that learners worldwide can benefit regardless of their geographical or socio-economic backgrounds. User registration and profile management features facilitate inclusivity by enabling students to engage in lifelong learning opportunities. Course enrollment functionalities further enhance accessibility, allowing students to overcome physical barriers and complete primary and secondary education remotely. Additionally, our platform supports mentor-led course creation, promoting the diversity and relevance of educational content available. By emphasizing equal access to educational resources for all, irrespective of gender, our project actively contributes to advancing gender equality in education, as outlined in SDG 4.5.</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
  <Col lg="5">
    <h3 className="color_sec py-4">System Thinking Approach</h3>
  </Col>
  <Col lg="7" className="d-flex align-items-center">
    <div>
      <p>
        - **Identify Goals and Objectives**:
        <ul>
          <li>Primary Goal: To provide quality education through an interactive and resourceful web app.</li>
          <li>Sub-Goals:</li>
          <ul>
            <li>Enable users to access and enroll in courses.</li>
            <li>Allow mentors to create and manage courses.</li>
            <li>Provide a repository of books as learning resources.</li>
          </ul>
        </ul>

        - **Understand the Interactions**:
        <ul>
          <li>User Interactions:</li>
          <ul>
            <li>Register, login, and browse courses.</li>
            <li>Enroll in courses, access course materials, and interact with mentors.</li>
          </ul>
          <li>Mentor Interactions:</li>
          <ul>
            <li>Create, update, and manage courses.</li>
            <li>Track student progress and provide guidance.</li>
          </ul>
          <li>Admin Interactions:</li>
          <ul>
            <li>Manage user roles (promote users to mentors).</li>
            <li>Create and manage books in the repository.</li>
          </ul>
        </ul>

        - **Analyze the Flow of Information**:
        <ul>
          <li>Frontend (React):</li>
          <ul>
            <li>UI components for user registration, login, course browsing, and enrollment.</li>
            <li>Mentor-specific UI for course creation and management.</li>
            <li>Admin-specific UI for book management.</li>
          </ul>
          <li>Backend:</li>
          <ul>
            <li>User: Authentication, role management, course enrollment tracking.</li>
            <li>Mentor: Course creation, course content management, student tracking.</li>
            <li>Courses: CRUD operations (Create, Read, Update, Delete), enrollment management.</li>
            <li>Books: CRUD operations, linking to courses.</li>
          </ul>
        </ul>

        - **Feedback Loops and Iterations**:
        <ul>
          <li>Student Feedback: Collect feedback from users on courses and mentors, which can be used to improve course quality.</li>
          <li>Mentor Feedback: Mentors can provide feedback on the platform and suggest improvements.</li>
          <li>Admin Monitoring: Admins can monitor platform usage and make decisions on adding new features or resources based on data.</li>
        </ul>

        - **Dependencies and Interdependencies**:
        <ul>
          <li>User and Mentor Interdependence: A user's role can evolve into a mentor, creating a pathway for user growth.</li>
          <li>Courses and Books Interdependence: Courses can recommend books, and books can enhance course content.</li>
        </ul>
      </p>
    </div>
  </Col>
</Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Problem Statement</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>To provide accessible and inclusive education, our E-learning platform offers free education to empower learners from diverse backgrounds. We aim to promote skill development and lifelong learning, in line with Sustainable Development Goal 4.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">System Architecture</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>
                Our project employs a  architecture using Spring Boot for the backend, React for the frontend, and a relational database accessed via JPA. The backend is structured into controllers, configurations, entities, models, repositories, and services. Controllers handle HTTP requests and define routes. Configuration files set up backend-to-frontend connections. Entities represent data structures, while models serve as data transfer objects to prevent direct database access. Repositories interact with the database using JPA, and services implement business logic. The frontend is organized into pages for each route, assets for static resources, reusable UI components, and defined routes for navigation. This architecture ensures modularity, scalability, and ease of maintenance.
              </p>
              <img src={img} alt="System Architecture Diagram" className="img-fluid mt-4" />
            </div>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Final Outcome</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Here are some results:</p>
              <img src={img1} alt="System Architecture Diagram" className="img-fluid mt-4" />
              <img src={img2} alt="System Architecture Diagram" className="img-fluid mt-4" />
              <img src={img3} alt="System Architecture Diagram" className="img-fluid mt-4" />
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
  <Col lg="5">
    <h3 className="color_sec py-4">Reflection</h3>
  </Col>
  <Col lg="7">
    <ul>
      <li>
        <strong>Technical Proficiency:</strong> Deepened proficiency in utilizing Spring Boot for backend development and React for frontend implementation. Grasped advanced concepts such as RESTful API design, state management in React, and database integration using JPA.
      </li>
      <li>
        <strong>System Design and Architecture:</strong> Learned the importance of systematic planning and considering interdependencies between components. Optimized system performance, ensured data integrity, and implemented robust error handling mechanisms.
      </li>
      <li>
        <strong>Agile Methodologies:</strong> Embraced agile methodologies (Scrum/Kanban) for adapting quickly to changing requirements and delivering iterative improvements. Highlighted the significance of feedback cycles and continuous integration practices.
      </li>
      <li>
        <strong>Collaboration and Communication:</strong> Enhanced communication skills through collaborative work. Emphasized clear documentation, effective task delegation, and maintaining alignment with project goals.
      </li>
      <li>
        <strong>Problem-Solving and Adaptability:</strong> Sharpened problem-solving abilities by addressing challenges throughout the project lifecycle. Approached issues analytically, sought innovative solutions, and adapted strategies based on emerging needs.
      </li>
      <li>
        <strong>User-Centric Approach:</strong> Prioritized UX and incorporated user feedback into design iterations. Guided feature prioritization and refinement to meet user expectations effectively.
      </li>
      <li>
        <strong>Continuous Learning:</strong> Reinforced commitment to continuous learning in software development. Stayed updated with industry trends, explored new technologies, and refined skills continuously.
      </li>
    </ul>
    <p>
      Overall, this project provided transformative learning experiences, equipping me with practical skills, insights, and perspectives essential for future endeavors in software development and beyond.
    </p>
  </Col>
</Row>

        {/* <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row> */}
        {/* <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7"> */}
        {/* {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })} */}
        {/* </Col> */}
        {/* </Row> */}
        {/* <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}
      </Container>
    </HelmetProvider>
  );
};
