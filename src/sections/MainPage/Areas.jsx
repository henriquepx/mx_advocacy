import styled from 'styled-components';
import { fontPrimary } from '../../GlobalStyles';
import CardArea from '../../components/CardArea';

const ContainerAreasWorked = styled.div`
    height: 100%;
    background-color: #f8f8f8;
    padding: 3rem 0rem;
`
const AreasWorkedSize = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`
const TitleArea = styled.h1`
  font-family: ${fontPrimary};
  color: #000;
  font-size: 1.5rem;
  font-weight: 600;
`
const ContainerCardAreas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`

const Areas = () => {
  return (
    <ContainerAreasWorked>
        <AreasWorkedSize>
          <TitleArea>Areás de atuação</TitleArea>
          <ContainerCardAreas>
            <CardArea
              backgroundImage="/empresarial.jpeg"
              title="Direito Empresarial"
              subtitle="Opening a door to the future"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
          />
          <CardArea
              backgroundImage="/previdencia.jpg"
              title="Direito Previdenciário"
              subtitle="Opening a door to the future"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
          />
          <CardArea
              backgroundImage="/familia.jpeg"
              title="Direito das Famílias"
              subtitle="Opening a door to the future"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
          />
          <CardArea
              backgroundImage="/bgabout.jpg"
              title="Direito Humanizado"
              subtitle="Opening a door to the future"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit."
            />
          </ContainerCardAreas>
        </AreasWorkedSize>
    </ContainerAreasWorked>
  )
}

export default Areas
