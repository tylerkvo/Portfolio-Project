import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Project() {
  const { projectId } = useParams();
  const [ProjectComponent, setProjectComponent] = useState(null);

  useEffect(() => {
    async function loadComponent() {
      try {
        const component = await import(`./Projects/${projectId}`);
        setProjectComponent(() => component.default);
      } catch (error) {
        console.error("Error loading the project component", error);
        setProjectComponent(null);
      }
    }

    loadComponent();
  }, [projectId]);

  if (!ProjectComponent) {
    return       <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',  
      fontSize: '24px',  
      fontWeight: 'bold'  
    }}>
      This Project Page is in Progress
    </div>

  }

  return <ProjectComponent />;
}

export default Project;
