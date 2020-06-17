import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
export default class GifListContainer extends Component {
    
    constructor(){
        super()
        this.state = {
            gifsArr : []
        }
    }
    
    componentDidMount(){
     this.fetchGifs()
    }

    fetchGifs = (searchWord = 'miata') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=OSiUsDE8pj0x5rGPJleFtTgj5r7iPTZG&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
              gifsArr: data.data.slice(0, 3).map(function (gif) {return {title: gif.title, url: gif.images.original.url} })
            }, )
          })
        
    }
    
    render() {
        // console.log(this.state.gifsArr)
        return (
            <div>
            <GifSearch search={this.fetchGifs}/>
            <GifList gifs={this.state.gifsArr} />    
            </div>
        )
    }
}
