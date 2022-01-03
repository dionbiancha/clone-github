import React from 'react';

import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input placeholder="Search or jump to..." />
      </SearchForm>
    </Container>
  );
};

export default Header;