import React from 'react';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NewProject from '../components/NewProject';
import EditProject from '../components/EditProject';

const Projects = () => {
  return (
    <div>
      <Container>
        This is a projects page

        <Button variant="text" size="small">
          <Link to="/Projects/NewProject">New Project</Link>
        </Button>
        <Button variant="text" size="small">
          <Link to="/Projects/EditProject">Edit Project</Link>
        </Button >
      </Container>
    </div>
  )

}

export default Projects
