import styled from 'styled-components';
import NavBar from '../components/NavBar';
import LeftEntry from '../components/LeftEntry';
import RightEntry from '../components/RightEntry';


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  position: relative;
`

const EntryContent = styled.div`
    height: calc(100% - 80px);
    width: 100%;
    display: flex;
`

const Entry = () => {

    return (
        <Section id="home">
            <NavBar />
            <EntryContent>
                <LeftEntry />
                <RightEntry />
            </EntryContent>
            <div className='mouse'>
                <div className='ball' />
            </div>
        </Section>
    )
}


export default Entry;