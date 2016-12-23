import React, { Component } from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBSzLFPwlNQ5QV04GVCMTI4wjU65IFT_Js'



class App extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            videos:[],
            selectedVideo: null
            
        }
        
        this.videoSearch('telugu songs')
        
        
        
    }
    videoSearch(term){
        YTSearch({key:API_KEY, term:term}, (videos) => {
            
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
                
            })

        })
    }
    
    
    render(){
        return(
            
            <div>
            This is react Component!! 
            <h1>Hira</h1>
            <SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
            <VideoList 
                onVideoSelect = {selectedVideo =>this.setState({selectedVideo})}
                videos={this.state.videos} />
            <VideoDetail video={this.state.selectedVideo}/>
            </div>
            
        )
     }
    
}

ReactDom.render(<App />, document.getElementById('app'))