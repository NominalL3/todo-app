import './ProjectElement.scss';

import React from 'react';

interface ProjectElementProps {
    title: string;
    description: string;
    onDelete: () => void;
}

const ProjectElement: React.FC<ProjectElementProps> = ({ title, description, onDelete }) => {
    return (
        <div className="project-element">
            <button className="delete-button" onClick={onDelete}>
                &#10006;
            </button>
            <a className="project-link" href="#">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
            </a>
        </div>
    );
};
export default ProjectElement;