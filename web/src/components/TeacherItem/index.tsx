import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/46007512?s=460&v=4"
          alt="Marcos Ribeiro"
        />
        <div>
          <strong>Marcos Ribeiro</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores técnicas matématicas avançadas.
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, esse
        fuga rem totam suscipit sunt doloremque adipisci eligendi obcaecati
        perferendis!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 70,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
