import { React, Component } from 'react'
import './index.scss'
import './canvasSmoke.js'
import canvasSmoke from './canvasSmoke.js'

class Canvas1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      class: 'canvas',
    }
  }

  componentDidMount() {
    this.setState({ class: 'canvas-mounted' })
  }

  componentDidUpdate() {
    canvasSmoke(this.state.class)
  }

  render() {
    return <canvas className={this.state.class}></canvas>
  }
}

export default Canvas1
