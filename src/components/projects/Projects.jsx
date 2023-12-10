import React from 'react'
import axios from 'axios'
import { api } from '../../api/api';
import {  Container ,Typography , CardActions , CardContent , Button,CardMedia,Card , Grid} from '@mui/material';

const Projects = () => {
    const [project , setProject] = React.useState([]);
    React.useEffect(()=>{
      axios.get(`${api}api/projects`)
      .then(res => setProject(res.data.data))
      .catch(err => console.log(err))
    },[]);
    console.log(project);
    const filtrationProjects = project.map((project)=>(
        <Grid item md={4} xs={12} key={project._id}>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={project.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.technolgies}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Grid>
    ))
  return (
    <div className='projects'>
      <Container fixed>
<Grid container spacing={2}>
        {filtrationProjects}
      </Grid>
      </Container>
        </div>
  )
}

export default Projects