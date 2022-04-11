import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          <li>Grocery Shop</li>
          <li>Wash Car</li>
          <li>Clean Garage</li>
          <li>Exercise</li>
        </ul>

        <form>
          <input/>
          <button>+</button>
        </form>

        <button>-</button>
      </div>
    )
  }
}
//initial submit