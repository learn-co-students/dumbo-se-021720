import React from 'react'
// import App from './App'
// import data from '../porkers_data'

class HogDisplay extends React.Component {
  state = {
    showDeets: true
  }

  toggleDetails = () => {
    this.setState({
      showDeets: !this.state.showDeets
    })
  }

  render() {
    const { hog } = this.props
    // Bay of Pigs -> bay_of_pigs
    const imageName = hog.name.replace(/ /g, "_").toLowerCase()
    // or 
    // const imageName = hog.name.split(" ").join("_").toLowerCase()
    // import(`../hog-imgs/${imageName}.jpg`)
    //   .then()
    //   .catch()

    return (
      <div onClick={this.toggleDetails}>
        <h2>{hog.name}</h2>
        <img src={require(`../hog-imgs/${imageName}.jpg`)} alt={hog.name} />
        {this.state.showDeets ? <div>
          Specialty: {hog.specialty}
          <br />
          Greased? {hog.greased ? "yup" : "nope"}
          <br />
          Weight: {hog.weight}
          <br />
          Medal: {hog["highest medal achieved"]}
          <br />
        </div> : null}
      </div>
    )
  }
}

export default HogDisplay