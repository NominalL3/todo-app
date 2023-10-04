import './TasksPage.scss';

import React, { useState } from 'react';
import Task from '../../components/Task/Task.tsx';

const TasksPage = () => {
    const [searchInputVisible, setSearchInputVisible] = useState(false);

  const toggleSearchInput = () => {
    setSearchInputVisible(!searchInputVisible);
  };
    return (
        <>
            <div className="tasks-page">
                <header className="tasks-page-header">
                    <a className="tasks-page-header-link" href='/'>Проекты</a>
                </header>
                <h2 className="tasks-page-title">Задача</h2>
                <p className="tasks-page-description">Описание Описание ОписаниеОпи ниеОписа ниеОпи сание</p>
                <div className="tasks-page-search">
                    <span className="tasks-page-search-icon" onClick={() => toggleSearchInput()}>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        className={`search-input ${searchInputVisible ? 'visible' : ''}`}
                        disabled={!searchInputVisible}
                        placeholder="Поиск..."
                    />
                </div>
                <div className="tasks-page-section">
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
            </div>
        </>
    );
};

export default TasksPage;