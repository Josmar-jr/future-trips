import styled from 'styled-components';

export const Container = styled.main`
  max-width: 960px;
  width: 100%;
  margin: 2rem auto;
  min-height: 100vh;
`;

export const TopBar = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Heading = styled.h1`
  font-size: var(--large);
  font-weight: 600;
  color: var(--primary);
`;
export const Description = styled.div`
  margin-top: 1rem;
  h3 {
    color: var(--primary);
    font-size: var(--small);
    margin-top: 1rem;
  }
  p + p {
    margin-top: 1rem;
  }
`;

export const Slide = styled.section`
  max-width: 760px;
  width: 100%;
  margin: 2rem auto;
  padding: 2rem;

  position: relative;

  .swiper-button-prev {
    position: absolute;
    top: 40%;
    left: -40px;
    width: 42px;
    height: 42px;
    cursor: pointer;
    border-radius: 50%;
    background-image: url('/arrow.svg');
    background-repeat: no-repeat;
    background-position: center center;
    transform: rotate(90deg);
    &:after {
      display: none;
    }
  }
  .swiper-button-next {
    width: 42px;
    height: 42px;
    position: absolute;
    top: 40%;
    right: -40px;
    cursor: pointer;
    background-image: url('/arrow.svg');
    background-repeat: no-repeat;
    background-position: center center;
    transform: rotate(-90deg);
    &:after {
      display: none;
    }
  }
`;

export const ImageContainer = styled.div`
  height: 400px;
  width: 100%;

  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`;
export const ImageItem = styled.div`
  height: 100px;
  width: 100%;
`;
