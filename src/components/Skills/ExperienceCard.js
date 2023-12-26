import { Component } from 'react'
import initiateVanillaTilt from './vanilla-tilt'

class ExperienceCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      element: 'experience-card',
      company: this.props.experience.company,
      designation: this.props.experience.designation,
      year: this.props.experience.year,
      description: this.props.experience.description,
      tech: this.props.experience.tech,
    }
  }

  getDescription = () => {
    const description = this.state.description
    return (
      <ul>
        {description.map((task, i) => {
          return (
            <li key={i + task}>
              <p>{task}</p>
            </li>
          )
        })}
      </ul>
    )
  }

  getTech = () => {
    const tech = this.state.tech
    const length = tech.length

    return tech.map((tech, i) => {
      if (i === length - 1) return tech
      else return tech + ', '
    })
  }

  componentDidMount() {
    this.setState({
      description: this.getDescription(),
      tech: this.getTech(),
    })

    initiateVanillaTilt(this.state.element)
  }

  // componentDidUpdate() {
  //   console.log(this.state.tech)
  // }

  render() {
    return (
      <div className="experience-card">
        <div className="content">
          <div className="heading">
            <h2>{this.state.company}</h2>
            <p className="designation">
              {this.state.designation} / {this.state.year}
            </p>
          </div>

          <div className="description">{this.state.description}</div>

          <div className="tech">
            <h3>Technologies Worked on</h3>
            <p>{this.state.tech}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ExperienceCard
