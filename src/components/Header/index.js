import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo_2.svg';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Tiago Padilha</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/116/abott@adorable.png"
              alt="Tiago Padilha"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
