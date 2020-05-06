import React from 'react';

// Icons
import { FiChevronRight } from 'react-icons/fi';

// IMG
import logoImg from '../../assets/logo.svg';

// Styles
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/37560590?s=460&u=cd98db7f6a0c78349b7b8ce1f29ce1fc573e0db2&v=4"
            alt="Lucas Sousa"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly ReactJS & React Native forms</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/37560590?s=460&u=cd98db7f6a0c78349b7b8ce1f29ce1fc573e0db2&v=4"
            alt="Lucas Sousa"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly ReactJS & React Native forms</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/37560590?s=460&u=cd98db7f6a0c78349b7b8ce1f29ce1fc573e0db2&v=4"
            alt="Lucas Sousa"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly ReactJS & React Native forms</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
