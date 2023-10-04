import React, { useState, ChangeEvent } from 'react';

interface TaskProps {
  number: number;
  title: string;
  description: string;
  creationDate: string;
  workTime: string;
  endDate: string;
  priority: string;
  status: string;
  comments: string[];
}

const Task: React.FC = () => {
  const [task, setTask] = useState<TaskProps>({
    number: 1,
    title: 'Заголовок задачи',
    description: 'Описание задачи',
    creationDate: '01.01.2023',
    workTime: '2 часа',
    endDate: '10.01.2023',
    priority: 'Высокий',
    status: 'В работе',
    comments: [],
  });

  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    if (newComment.trim() === '') return;

    const updatedComments = [...task.comments, newComment];
    setTask({ ...task, comments: updatedComments });
    setNewComment('');
  };

  const editTask = () => {
    // Реализуйте логику редактирования задачи
  };

  return (
    <div className="task">
      <h3>Задача #{task.number}</h3>
      <div>
        <strong>Заголовок:</strong> {task.title}
      </div>
      <div>
        <strong>Описание:</strong> {task.description}
      </div>
    </div>
  );
};

export default Task;
