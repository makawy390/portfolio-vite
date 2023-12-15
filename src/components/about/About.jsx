import "./about.css";
import { Container, Typography, Grid } from "@mui/material";
import { FcGraduationCap, FcDiploma1 } from "react-icons/fc";

const About = () => {
  return (
    <div className="about">
      <Container>
        <Typography variant="caption" component="h5" className="h5">
          Get to know me
        </Typography>
        <Typography variant="h4" component="h2">
          About Me
        </Typography>
        <Typography variant="p" component="p">
          I am Junior Front-End Developer ReactJS, I have a solid foundation in
          web development technologies and <br /> a passion for creating dynamic
          and interactive user interfaces. I am proficient in HTML,CSS, and{" "}
          <br /> JavaScript, and have experience working with React JS. <br />
          I am committed to delivering high-quality web applications that are
          optimized for performance and user experience.
          <br /> I am eager to learn new technologies and best practices in the
          industry and <br /> I am excited about the opportunity to work
          collaboratively with designers <br /> and back-end developers to bring
          innovative ideas to life.
        </Typography>
        <div className="education">
          <Typography variant="h4" component="h2">
            Education
          </Typography>
          <span className="graduation">
            {" "}
            <FcGraduationCap />
          </span>

          <Grid container spacing={2} sx={{ paddingLeft: "40px" }}>
            <Grid item md={3}>
              <FcDiploma1 /> <span>Oct 2017 – July 2021</span>
            </Grid>
            <Grid item md={6}>
              <span>
                Bachelor's Degree, Faculty of Computers and Informatics <br />{" "}
                Zagazig University
                <br /> Grade: Good
              </span>
            </Grid>
          </Grid>
        </div>
        <div className="language">
          <Typography variant="h4" component="h4">
            Languages
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default About;
