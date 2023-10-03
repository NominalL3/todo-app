import './ProjectSelectionPage.scss';

import React from 'react';
import ProjectElement from '../../components/ProjectElement/ProjectElement.tsx';
import ProjectAddElement from '../../components/ProjectAddElement/ProjectAddElement.tsx';

const ProjectSelectionPage = () => {
  const handleDel = () => {
    console.log('del');
  }

  const handleAdd = () => {
    console.log('add');
  }

  return (
    <>
      <header>
        <h1>Выбор проекта</h1>
      </header>
      <div className="project-selection-page">
        <div className="projects-list">
          <ProjectElement title="Задача" description="Описание" onDelete={handleDel} />
          <ProjectElement title="Задача" description="Описание" onDelete={handleDel} />
          <ProjectElement title="Задача" description="Описание" onDelete={handleDel} />
          <ProjectElement title="Задача" description="Описание" onDelete={handleDel} />
          <ProjectElement title="Задача" description="Описание" onDelete={handleDel} />
          <ProjectAddElement onAdd={handleAdd} />
        </div>
      </div>
    </>
  );
};

export default ProjectSelectionPage;