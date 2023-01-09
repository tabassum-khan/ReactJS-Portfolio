const SkillCard = ({ num, skill }) => {
  return (
    <div className="skills-card" style={{ '--num': num }}>
      <div className="percent">
        <div className="dot"></div>
        <svg>
          <circle cx="38" cy="38" r="38"></circle>
          <circle cx="38" cy="38" r="38"></circle>
        </svg>
        <div className="number">
          <h2>{skill}</h2>
          <p>{num}%</p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
