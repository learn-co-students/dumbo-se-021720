import React, { Component } from 'react'

// class component
// use state
// lifecycle methods
class ListingCard extends Component {

  // must have a render method that returns JSX
  render() {
    // props -> this.props
    console.log(this)
    const { image, name, city, rating, price } = this.props
    return (
      <div>
        <img src={image} alt={name} width={300} height={300} />
        <h4>{name}</h4>
        <p>{city}</p>
        <em>{rating}</em> | <em>$ {price}</em>
      </div>
    )
  }
}

// // function component: takes in props, returns JSX
// const ListingCard = props => {
//   console.log(props)
//   const { image, name, city, rating, price } = props
//   // React
//   return (
//     <div>
//       <img src={image} alt={name} width={300} height={300} />
//       <h4>{name}</h4>
//       <p>{city}</p>
//       <em>{rating}</em> | <em>$ {price}</em>
//     </div>
//   )
// }

export default ListingCard