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
  margin-bottom: 1.5rem;
`

const Areas = () => {
  return (
    <ContainerAreasWorked>
        <AreasWorkedSize>
          <TitleArea>Areás de atuação</TitleArea>
          <ContainerCardAreas>
            <CardArea
              backgroundImage="/empresarialcolor.jpeg"
              title="Direito Empresarial"
              subtitle="Opening a door to the future"
              content="> Contratos e Negociações"
              content2="> Assessoria Estratégica"/>
          <CardArea
              backgroundImage="/previdenciacolor.jpg"
              title="Direito Previdenciário"
              subtitle="Opening a door to the future"
              content="> Regime Próprio / Militar"
              content2="> Regime Geral / INSS"
              content3="> Planejamento Previdenciário" />
          <CardArea
              backgroundImage="/familiacolor.jpeg"
              title="Direito das Famílias"
              subtitle="Opening a door to the future"
              content="> Inventário"
              content2="> Regularização de bens imóveis"
              content3="> Planejamento sucessório"
              content4="> Divórcio"
              content5="> Alimentos"
              content6="> União / Dissolução de União Estável"/>
          <CardArea
              backgroundImage="/bgaboutcoor.jpg"
              title="Direito Humanizado"
              subtitle="Opening a door to the future"
              content="> Mediação familiar"
              content2="> Mediação de conflitos"
              content3="> Divórcio humanizado"/>
          </ContainerCardAreas>
        </AreasWorkedSize>
    </ContainerAreasWorked>
  )
}

export default Areas
