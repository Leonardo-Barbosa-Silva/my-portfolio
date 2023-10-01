import styled from 'styled-components';
import NavBar from '../components/NavBar';
import LeftEntry from '../components/LeftEntry';
import RightEntry from '../components/RightEntry';


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  position: relative;
  margin-bottom: 100px;
`

const EntryContent = styled.div`
    height: calc(100% - 80px);
    width: 100%;
    display: flex;
`

const Entry = () => {

    const isNonMobileScreen = window.matchMedia('(min-width: 1000px)').matches

    return (
        <Section id="home">
            <NavBar />
            <EntryContent>
                <LeftEntry isNonMobileScreen={isNonMobileScreen}/>
                <RightEntry isNonMobileScreen={isNonMobileScreen}/>
            </EntryContent>
            <div className='mouse'>
                <div className='ball' />
            </div>
        </Section>
    )
}


export default Entry;