import styled from 'styled-components';

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
        <ul
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '30%',
          }}
        ></ul>
      </nav>
    </StyledHeader>
  );
};

const StyledHeader = styled.section(() => ({
  width: '100%',
  height: 80,
}));

export default Header;
