import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      input: "",
      tasks: []
    };
  }



  render() {
    return(
        <div>
          <h1>Tasks</h1>
          <ul>
            {this.state.tasks.map((tasks,i) => 
              <li key ={i}>
                {tasks}
                <button data-index={i} className="delete" onClick={this.deleteButton}>
                  Done
                </button>
              </li>
            )}
          </ul>
            <div>
              <input onChange={this.handleChange} value = {this.state.input}>
            </input>
                <button onClick={this.addTask}>Add Tasks</button>
            </div>
            <div>
              <h2>Number of tasks:{this.state.tasks.length}</h2>
            </div>

        </div>


    );
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  }
//add task funct
  addTask = () => {
    const input = this.state.input;
    if(input.length > 0) {

    
    this.setState(state => ({
      tasks: [...state.tasks, state.input],
      input: ""
    }))
      }
  }

// delete button funct
deleteButton = (event) => {
  const index = event.target.dataset.index
  this.setState(state => {
    const tasks = [...state.tasks];
    tasks.splice(index, 1); 
    return {
      tasks: tasks
    }
      
    
  })
}

}


export default App;