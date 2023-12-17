import React, { Fragment } from "react";
import axios from "axios";
import { api } from "../../api/api";
import { Image } from "primereact/image";
import { ScrollTop } from "primereact/scrolltop";
import { FcOk } from "react-icons/fc";

import "./project.css";

import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import SpinnerApp from "../root/Spinner";

const Projects = () => {
  const [project, setProject] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`${api}api/projects`)
      .then((res) => setProject(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(project);
  const filtrationProjects = project.map((project) => (
    <Fragment key={project._id}>
      <Grid item md={6} xs={12}>
        <Image src={project.image} alt="Image" preview />
      </Grid>
      <Grid item md={6} xs={12}>
        <div className="box">
          <h3>{project.title}</h3>
          <Grid container spacing={1}>
            {project?.technolgies?.split(",")?.map((ele, index) => (
              <Grid item xs={6} key={index}>
                <FcOk /> <span>{ele}</span>
              </Grid>
            ))}
          </Grid>
          <ul className="listed-link">
            <li>
              <Link to={project.repo_link} target="_blank">
                View Code
              </Link>
            </li>
            <li>
              <Link to={project.demo_link} target="_blank">
                View Project
              </Link>
            </li>
          </ul>
        </div>
      </Grid>
    </Fragment>
  ));
  return (
    <div className="projects">
      <Container fixed>
        <h3>OUR Projects</h3>
        <Grid container spacing={2}>
          {project.length === 0 ? <SpinnerApp /> : <>{filtrationProjects}</>}
          <ScrollTop />
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
