import React from 'react';
import { FiChevronRight} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () =>
(
  <>
    <img src={logoImg} alt="github Explore" />;
    <Title>Explore Repositorios no GitHub</Title>
    < Form >
      <input placeholder="Digite aqui o Repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="">
        <img
          src="https://avatars.githubusercontent.com/u/62813340?s=460&u=15aa490979a82df0277ad00fbe36b42947b3d10e&v=4"
          alt="Guilherme Jordão"
        />
        <div>
          <strong>Actual Soluções</strong>
          <p>Aqui é a descrição da Empresa</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="">
        <img
          src="https://avatars.githubusercontent.com/u/62813340?s=460&u=15aa490979a82df0277ad00fbe36b42947b3d10e&v=4"
          alt="Guilherme Jordão"
        />
        <div>
          <strong>Actual Soluções</strong>
          <p>Aqui é a descrição da Empresa</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="">
        <img
          src="https://avatars.githubusercontent.com/u/62813340?s=460&u=15aa490979a82df0277ad00fbe36b42947b3d10e&v=4"
          alt="Guilherme Jordão"
        />
        <div>
          <strong>Actual Soluções</strong>
          <p>Aqui é a descrição da Empresa</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="">
        <img
          src="https://avatars.githubusercontent.com/u/62813340?s=460&u=15aa490979a82df0277ad00fbe36b42947b3d10e&v=4"
          alt="Guilherme Jordão"
        />
        <div>
          <strong>Actual Soluções</strong>
          <p>Aqui é a descrição da Empresa</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>

)


export default Dashboard;
