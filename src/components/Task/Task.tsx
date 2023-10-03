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
      <div>
        <strong>Дата создания:</strong> {task.creationDate}
      </div>
      <div>
        <strong>Время в работе:</strong> {task.workTime}
      </div>
      <div>
        <strong>Дата окончания:</strong> {task.endDate}
      </div>
      <div>
        <strong>Приоритет:</strong> {task.priority}
      </div>
      <div>
        <strong>Текущий статус:</strong> {task.status}
      </div>
      <div>
        <strong>Вложенные файлы:</strong> {/* Здесь нужно реализовать загрузку и отображение файлов */}
      </div>
      <div>
        <h4>Комментарии:</h4>
        <ul>
          {task.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <textarea
          rows={3}
          placeholder="Добавить комментарий"
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={addComment}>Добавить комментарий</button>
      </div>
      <button onClick={editTask}>Редактировать задачу</button>
    </div>
  );
};

export default Task;
