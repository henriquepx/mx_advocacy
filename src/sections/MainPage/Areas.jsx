import styled from 'styled-components';

const ContainerAreasWorked = styled.div`
    height: 60vh;
    background-color: #ebebeb;
    padding: 6rem 0rem;
`
const AreasWorkedSize = styled.div`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
`
const Areas = () => {
  return (
    <ContainerAreasWorked>
        <AreasWorkedSize>
            <h2>Areás de atuação</h2>
        </AreasWorkedSize>
    </ContainerAreasWorked>
  )
}

export default Areas