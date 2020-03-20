import React, { Component } from 'react';

class Addtask extends Component{
    state = {
        ToDo: null,
        id: null
    };
    Change = e => {
        this.setState(
            {
                ToDo: e.target.value,
                id : Math.random() * 10 
            }
        );
    };
    Submit = e => {
        e.preventDefault();
        if(document.getElementById("input")===""){
            alert("You cannot add Empty To-do");
        }
        else
        {
            document.getElementById("input").value = "";
            this.props.addTask(this.state);
        }
    }
    render(){
        return(
            <form className="form-group my-4 " onSubmit={this.Submit} >
                <p>Click on any To-Do to Cancel</p>
                <div className="input-group-lg mb-3 rounded-pill">
                    <input  className="form-control rounded" placeholder="Create a To-do" id="input" onChange = { this.Change}/>
                </div>
                <button className = "btn btn-primary btn-lg rounded float-right" type = "submit">Add To-Do</button>
            </form>
        );
    }
}

export default Addtask;