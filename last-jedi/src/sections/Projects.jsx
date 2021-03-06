import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import ProjectCard from '../components/Cards/ProjectCard';
import data from '../data';

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (min-width: 780px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Projects = () => {
  return (
    <Layout bg="#18171c" title="Projects" id="projects" centerY>
      <ProjectsContainer>
        {data.projects.map((project, index) => {
          return (
            <a
              key={`Link-${project.name}-${index}`}
              href={project.link}
              target="__blank"
            >
              <ProjectCard
                title={project.name}
                img={project.imag}
                alt={project.name}
                github={project.github}
                hostLink={project.link}
                stacks={project.stacks}
                detail={project.detail}
                delay={parseInt(`${index}00`, 10)}
              />
            </a>
          );
        })}
      </ProjectsContainer>
    </Layout>
  );
};

export default Projects;
