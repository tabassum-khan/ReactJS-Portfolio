import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Canvas1 from '../Canvas/Canvas1'
import './skills.scss'
import './experience.scss'
import SkillCard from './SkillCard'
import ExperienceCard from './ExperienceCard'
import experiences from './job'

const Skills = () => {
  const strArray = [
    'S',
    'k',
    'i',
    'l',
    'l',
    's',
    '\xa0',
    '&',
    '\xa0',
    'E',
    'x',
    'p',
    'e',
    'r',
    'i',
    'e',
    'n',
    'c',
    'e',
  ]
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const changeAnimationClass = () =>
      setTimeout(() => setLetterClass('text-animate-hover'), 5000)
    changeAnimationClass()
  }, [])

  return (
    <div className="container skills">
      {/* <Canvas1 /> */}

      <div className="top-container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              idx={5}
            />
          </h1>

          <p>
            I have been working on different Software Development opportunities
            with{' '}
            <strong style={{ color: '#ffd000' }}>HTML, CSS, JavaScript </strong>
            being my main forte. I also have a good understanding of fundamental
            <strong style={{ color: '#ffd000' }}> Data Structures</strong> and
            possess a sound knowledge in
            <strong style={{ color: '#ffd000' }}> Java</strong> language.
          </p>
        </div>

        <div className="skills-container">
          <SkillCard num={85} skill="HTML" />
          <SkillCard num={70} skill="CSS" />
          <SkillCard num={60} skill="Sass" />
          <SkillCard num={60} skill="JS" />
          <SkillCard num={70} skill="NodeJS" />
          <SkillCard num={50} skill="ReactJS" />
          <SkillCard num={70} skill="Java" />
          <SkillCard num={60} skill="SQL" />
          <SkillCard num={60} skill="MongoDB" />
          <SkillCard num={80} skill="Git" />
        </div>
      </div>

      <div className="experience-container">
        <ExperienceCard experience={experiences.digisolutions} />
        <ExperienceCard experience={experiences.accenture} />
        <ExperienceCard experience={experiences.saif} />
        <ExperienceCard experience={experiences.hayatt} />
        {/* <ExperienceCard experience={experiences.digisolutions} /> */}
      </div>
    </div>
  )
}

export default Skills
