import styled from 'styled-components';
import { motion } from 'framer-motion';
import todreams from '../img/todreams.png';


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Projects = () => {

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // posição x dentro do elemento
        const y = e.clientY - rect.top;  // posição y dentro do elemento
        const rotateX = ((y / rect.height) - 0.5) * 40;  // calcular rotação em torno do eixo X
        const rotateY = ((x / rect.width) - 0.5) * -40;  // calcular rotação em torno do eixo Y
        e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
    
      const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
      };

    return (
        <Section id='projects'>
            <h1>My projects</h1>
            <div className="container projects">
                <div className='grid-1'>
                    <motion.div
                        className='project'
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={todreams} alt="" />
                        <h2>Todreams App</h2>
                        <p></p>
                    </motion.div>
                    <motion.div
                        className='project'
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2>Todreams App</h2>
                        <p></p>
                    </motion.div>
                    <motion.div
                        className='project'
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2>Todreams App</h2>
                        <p></p>
                    </motion.div>
                    <motion.div
                        className='project'
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2>Todreams App</h2>
                        <p></p>
                    </motion.div>
                    <motion.div
                        className='project'
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2>Todreams App</h2>
                        <p></p>
                    </motion.div>
                    <motion.div
                        className='project'
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h2>Todreams App</h2>
                        <p></p>
                    </motion.div>
                </div>
            </div>
        </Section>
    )
}


export default Projects;