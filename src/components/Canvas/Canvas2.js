import { React, Component } from 'react'
import canvasSmoke from './canvasSmoke'

class Canvas2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      class: 'canvas',
    }
  }

  componentDidMount() {
    this.setState({ class: 'canvas-mounted2' })
  }

  componentDidUpdate() {
    canvasSmoke(this.state.class)
  }

  render() {
    return <canvas className={this.state.class}></canvas>
  }
}

export default Canvas2
