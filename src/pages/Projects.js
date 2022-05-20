import React from 'react';
import { Container, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import '../App.css'


const Projects = () => {
  return (
    <div>
      <Container>
        <h3>This is a projects page</h3>
        <Button className='btn' variant="contained" size="small">
          <Link className="menu-a " to="/projects/NewProject">New Project</Link>
        </Button>
        <Button className='btn' variant="contained" size="small">
          <Link className="menu-a " to="/projects/EditProject">Edit Project</Link>
        </Button >

        <Outlet />

        

      </Container>
    </div>
  )

}

export default Projects
