import React from 'react';

import { Link } from 'react-router-dom';

import Container from '../Container';

import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div>
          <Link className={s.headerLink} to="/">
            <span className={s.headerTitle}>Главная</span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
