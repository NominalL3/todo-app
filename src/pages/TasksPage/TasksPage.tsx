import './TasksPage.scss';

import React from 'react';
import Task from '../../components/Task/Task.tsx';

const TasksPage = () => {
    return (
        <div className="tasks-page">
            <div className="task-status">
                <p>Queue</p>
                <Task />
            </div>
            <div className="task-status">
                <p>Development</p>
            </div>
            <div className="task-status">
                <p>Done</p>
            </div>
        </div>
    );
};

export default TasksPage;