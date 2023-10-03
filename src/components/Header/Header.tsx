import './Header.scss';

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header-link">Выбор проекта</Link>
      <Link to="/tasks" className="header-link">Задачи</Link>
    </div>
  );
}

export default Header;
