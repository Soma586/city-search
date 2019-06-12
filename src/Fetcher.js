import React, {Component} from 'react'
import Form from './Form'
import CityResult from './cityResult'


class Fetcher extends Component{

    state = {
        cities : []
    }

    search = () =>{

        console.log("hello")
        let input = document.getElementById("search").value;
        console.log(typeof input)
        let res = input.toUpperCase();
        //input = input.toUpperCase();
        
        //change to caps
        fetch("http://ctp-zip-api.herokuapp.com/city/" + res)
        .then(response => response.json())
            .then(data =>{
                console.log(data)
                console.log("hello")
               
                this.setState({
                    cities : data
                    

                })
                
            })
    }

    render(){
        //const results = this
        let index = 0;
        let results = this.state.cities.map(city => <CityResult Zip = {city}/>)

      

        return(
            <div>
                <h1>city search</h1>
                <Form search = {this.search}/>
                {results}

            </div>
        )
    }
    

}
export default Fetcher;