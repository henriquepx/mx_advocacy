import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerAreaAtuacao = styled.div`
  body {
    background: #f1f1f1;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  box-shadow: 0 3px 7px -1px rgba(#000, 0.1);
  margin-bottom: 1.6%;
  background: #fff;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;

  &:hover {
    .photo {
      transform: scale(1.3) rotate(3deg);
    }
  }

  .meta {
    position: relative;
    z-index: 0;
    height: 200px;
  }

  .photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.2s;
  }

  .description {
    padding: 1rem;
    background: #fff;
    position: relative;
    z-index: 1;

    h1 {
      line-height: 1;
      margin: 0;
      font-size: 1.7rem;
      margin-bottom: .5rem;
    }
    h2 {
      margin-bottom: 1.5rem;
    }
    p {
      font-size: .5rem;
    }
  }

  @media (min-width: 640px) {
    flex-direction: row;
    width: 650px;
    max-width: 570px;
    height: 300px;

    .meta {
      flex-basis: 55%;
      height: auto;
    }

    .description {
      flex-basis: 65%;

      &:before {
        transform: skewX(-3deg);
        content: "";
        background: #fff;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
      }
    }
  }
`;
const LinkToKnowMoreArea = styled.a`
  position: absolute;
  bottom: 5%;
`

const CardArea = ({ backgroundImage, title, subtitle, content, content2, content3, content4, content5, content6 }) => {
  return (
    <ContainerAreaAtuacao>
      <BlogCard>
        <div className="meta">
          <div
            className="photo"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          ></div>
        </div>
        <div className="description">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{content}</p>
          <p>{content2}</p>
          <p>{content3}</p>
          <p>{content4}</p>
          <p>{content5}</p>
          <p>{content6}</p>
          <LinkToKnowMoreArea>link to</LinkToKnowMoreArea>
        </div>
      </BlogCard>
    </ContainerAreaAtuacao>
  );
};

CardArea.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    content2: PropTypes.string.isRequired,
    content3: PropTypes.string.isRequired,
    content4: PropTypes.string.isRequired,
    content5: PropTypes.string.isRequired,
    content6: PropTypes.string.isRequired,
  };

export default CardArea;
