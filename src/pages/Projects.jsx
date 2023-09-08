import styled from 'styled-components';
import { motion } from 'framer-motion';
import universe from '../img/universe.jpg';


const Section = styled.section`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
`

const Projects = () => {

    const handleMouseMove = (e) => {
        const descriptionElement = e.currentTarget.querySelector('.description')
        descriptionElement.style.visibility = 'visible'
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const rotateX = ((y / rect.height) - 0.5) * 40
        const rotateY = ((x / rect.width) - 0.5) * -40
        e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      };
    
      const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
        e.currentTarget.parentElement.querySelector('.description').style.visibility = 'hidden'
        const descriptionElement = e.currentTarget.querySelector('.description')
        descriptionElement.style.visibility = 'hidden'
      };

    return (
        <Section id='projects'>
            <div className="container projects">
                <div className='grid-1'>
                    <motion.div
                        className='project'
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={universe} alt=""/>
                        <div className='description'>
                            <h2>Todreams App</h2>
                            <p>An application to save your most important annotations.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className='project'
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={universe} alt=""/>
                        <div className='description'>
                            <h2>Netflix Clone</h2>
                            <p>An application to save your most important annotations.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className='project'
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={universe} alt=""/>
                        <div className='description'>
                            <h2>Haircut Website</h2>
                            <p>An application to save your most important annotations.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className='project'
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={universe} alt=""/>
                        <div className='description'>
                            <h2>Shop Skills</h2>
                            <p>An application to save your most important annotations.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    )
}


export default Projects;