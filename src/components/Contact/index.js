import './index.scss'
import Canvas1 from '../Canvas/Canvas1'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Form from '../Form'
import Map from '../Map'

const Contact = () => {
  const strArray = ['C', 'o', 'n', 't', 'a', 'c', 't', '\xa0', 'M', 'e']
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
    <div className="container contact">
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
          I’m interested in Software Development opportunities. However, if you
          have other request or questions, don’t hesitate to use the form.
        </p>

        <Form />
      </div>

      <Map />
    </div>
  )
}

export default Contact
