import styled from 'styled-components';

export const Content = styled.section`
  max-width: 960px;
  width: 100%;
  margin: 2rem auto;
  min-height: 100vh;
`;

export const Heading = styled.h1`
  font-size: var(--large);
  color: var(--primary);
  margin-bottom: var(--large);
`;

export const Body = styled.div`
  p {
    &:nth-child(2),
    &:nth-child(3) {
      margin-top: 1rem;
    }
  }
  ul {
    list-style: none;
    margin-left: 1rem;
  }
`;

export const Profile = styled.div`
  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
`;
