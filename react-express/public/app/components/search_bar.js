import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props){
        
        super()
        
        this.state = {
                term:'',
                count: 0}
    }
    
    render(){
        return (
            <div>
                
                <input 
                    className="form-control" 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
                
                <button onClick= {(event)=>this.setState({count:this.state.count+1})} > Increase</button>
                <button onClick= {()=>this.setState({count:this.state.count -1})} > Decrease</button>

                <h2>Valueof Count: {this.state.count}</h2>
                
            </div>
        )
    }
   
    onInputChange(term){
        this.setState({term})
        this.props.onSearchTermChange(term)
        
        
        
        
    }
    
    
}

export default SearchBar