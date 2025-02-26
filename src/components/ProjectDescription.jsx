import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDescription = () => {
  const { projectName } = useParams();
  console.log(projectName);
  return (
    <div className='project-description'>
      <div className='description'>
        
      </div>
      <div className='image'>
      </div>
    </div>
  );
};

export default ProjectDescription;