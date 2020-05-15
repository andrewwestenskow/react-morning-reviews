import React, { Component } from 'react'
import './form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      year: '',
      posterImg: '',
    }
  }

  handleAdd(e) {}

  handleChange(e) {}

  render() {
    return (
      <form className="Form">
        <input name="title" placeholder="Title" />
        <input name="year" placeholder="Year" />
        <input name="posterImg" placeholder="Poster url" />
        <button type="submit">Add Movie</button>
      </form>
    )
  }
}
export default Form
