import styled from 'styled-components';

export const Content = styled.section`
  max-width: 960px;
  width: 100%;
  margin: 2rem auto;
  min-height: 100vh;

  h3 {
    color: var(--primary);

    font-size: var(--small);
  }
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

export const Flex = styled.div`
  margin: 2rem auto 0 auto;
  display: flex;
  justify-content: center;
  max-width: 600px;
  gap: 3rem;
  border: 1px solid #c1c2cc;
  border-radius: 12px;
  padding: 1rem 0.5rem;
`;

export const Profile = styled.div`
  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
`;

export const AboutDeveloper = styled.aside`
  width: 50%;

  span {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
