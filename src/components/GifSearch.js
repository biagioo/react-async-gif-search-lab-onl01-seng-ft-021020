import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        searchWord: ''
      }

    handleChange = e => {
        this.setState({
            searchWord : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.search(this.state.searchWord)
    }
    
    
    render() {
        // console.log(this.state.searchWord)
        return (
        <form onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleChange} value={this.state.searchWord} />
            <input type='submit' />
        </form>
        )
    }
}
