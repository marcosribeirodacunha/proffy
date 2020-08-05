import React from 'react';

import ITeacher from '../../interfaces/teacher';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css';

interface Props {
  teacher: ITeacher;
}

const TeacherItem: React.FC<Props> = ({
  teacher: { subject, cost, user_id, name, avatar, whatsapp, bio },
}) => {
  function createNewConnection() {
    api.post('connections', { user_id });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {cost}</strong>
        </p>
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
