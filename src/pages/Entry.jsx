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

const SmallEntryContent = styled.section`
    height: calc(100% - 80px);
    width: 100%;
    display: flex;
    align-items: flex-start;

    .left {
        width: 100%;
        height: fit-content;
        margin-top: 50px;

        .title {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        h1 {
            font-size: 35px;
        }


        h2 {
            font-size: 15px;
        }
    }
`

const Entry = () => {

    const isNonMobileScreen = window.matchMedia('(min-width: 1000px)').matches

    const isSmallScren = window.matchMedia('(max-width: 800px)').matches

    console.log(isSmallScren)

    return (
        <>
            {isSmallScren && (
                <Section id="home">
                    <NavBar />
                    <SmallEntryContent>
                        <LeftEntry isSmallScren={isSmallScren}/>
                    </SmallEntryContent>
                    <div className='mouse'>
                        <div className='ball' />
                    </div>
                </Section>
            )}

            {!isSmallScren && (
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
            )}
        </>
    )
}


export default Entry;