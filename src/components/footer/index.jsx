import React from 'react';
import Socials from '../socials';
import './styles.css';

export default ({ page }) => {
  if (!page) {
    return (
      <div className="footer">
        <div className="footer-wrapper">
          <p className="spacing">
						Создано с любовью в{' '}
            <a href="https://web.levelupworlds.com" rel="noopener norefferrer"  target="_blank">Levelup Web</a>
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="footer onPage">
      <div className="footer-wrapper">
        <div className="left">
						Создано в <a href="https://web.levelupworlds.com" rel="noopener norefferrer">Levelup Web</a> с любовью
        </div>
        <div className="right">
          <Socials />
        </div>
      </div>
    </div>
  );
};

