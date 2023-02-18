import { useEffect, useState } from 'react'
import './index.scss'
import Canvas1 from '../Canvas/Canvas1'
import AnimatedLetters from '../AnimatedLetters'
import StageCube from '../StageCube'

const About = () => {
  const strArray = ['A', 'b', 'o', 'u', 't', '\xa0', 'M', 'e']
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const changeAnimationClass = () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }

    changeAnimationClass()
  }, [])

  return (
    <div className="container about">
      <Canvas1 />

      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={strArray}
            idx={5}
          />
        </h1>

        <p>
          I'm an avid, passionate software developer located in
          <strong style={{ color: '#ffd700' }}> Mumbai, India.</strong>
        </p>
        <p>
          I am looking for a role in an established IT company with the
          opportunity to work with the latest technologies on challenging and
          diverse projects.
        </p>
        <p>
          I'm naturally curious, and perpetually working on improving my chops
          on design and problems one at a time.
        </p>
        <p>
          I also have a natural inclination to writing and have been exploring
          that hobby by writing technical articles on{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@tabassum_k"
          >
            Medium
          </a>
          .
        </p>
        <p>
          Visit my{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/tabassum-khan"
          >
            LinkedIn
          </a>{' '}
          or{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/tabassum-khan"
          >
            Github
          </a>{' '}
          profile to know more.
        </p>
      </div>

      <StageCube />
    </div>
  )
}

export default About
