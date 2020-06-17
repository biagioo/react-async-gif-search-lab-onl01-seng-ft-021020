import React, { Component } from 'react'

export default class GifList extends Component {
    render() {
        // console.log(this.props.gifs)
        return (
            <div>
                <ul>
                    {this.props.gifs.map(gif =>(
                        <li>
                            <h3>{gif.title}</h3>
                            <img src={gif.url} alt='' />
                        </li>
                    ))}
                </ul>   
            </div>
        )
    }
}
