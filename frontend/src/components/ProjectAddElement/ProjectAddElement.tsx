import './ProjectAddElement.scss';

import React from 'react';

interface ProjectAddElementProps {
    onAdd: () => void;
}

const ProjectAddElement: React.FC<ProjectAddElementProps> = ({ onAdd }) => {
    return (
        <div className="project-add-element" onClick={onAdd}>
            <span className="project-add-button" >
                +
            </span>
        </div>
    );
};


export default ProjectAddElement;