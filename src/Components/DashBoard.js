import React, { Component } from 'react';

class DashBoard extends Component {

render() {

    return (
        <div className="App">
            <div>
            <h1>Pet Hotel</h1>
            </div>
           <form>
               
                <input type="text" placeholder="Pet Name"></input>
                <input type="text" placeholder="Pet Color"></input>
                <input type="text" placeholder="Pet Breed"></input>
                <select>
                    <option>Owner Name</option>
                    <option>Danielle Martain</option>
                    <option>Blake Peterson</option>
                    <option>Tim Heck</option>
                    <option>Sam Flavin</option>
                </select>
                <button type="submit">Submit</button>
                    
               
            </form>
        </div>
    );
}

}

export default DashBoard;