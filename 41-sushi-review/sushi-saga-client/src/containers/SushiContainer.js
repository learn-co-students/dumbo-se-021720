import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends React.Component {
  state = {
    index: 0
  }

  // 
  // this.handleMoreButtonClick()
  handleMoreButtonClick = () => {
    this.setState({
      index: this.state.index + 4
    })
  }

  getDisplayedSushi() {
    return this.props.sushis
      .slice(this.state.index, this.state.index + 4) // get the first 4
      .map(sushiObj => <Sushi
        key={sushiObj.id}
        sushi={sushiObj}
        handleEatSushi={this.props.handleEatSushi}
      />) // return JSX
  }

  render() {
    console.log(this.state)
    // how 2 render just 4 sushis?

    return (
      <Fragment>
        <div className="belt">
          {this.getDisplayedSushi()}
          <MoreButton handleMoreButtonClick={this.handleMoreButtonClick} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer