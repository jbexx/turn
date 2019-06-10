import React from 'react';

class ItemAdd extends React.Component{
  constructor() {
    super()

    this.state = {
      title: '',
      description: '',
    }
  }

  handleInput(type, input) {
    this.setState({
      [type]: input
    });
  }

  saveToLocal = () => {
    console.log('this.state::', this.state);
    // localStorage.setItem(
    //   "Item",
    //   JSON.stringify(this.state)
    // );
  }

  render() {
    return (
      <div className="register-div">
        <h2 className="register-header">Create a new account</h2>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.saveToLocal();
          }}
        >
          <input
            placeholder="Title"
            className="name-input"
            onChange={e => this.handleInput("title", e.target.value)}
          />
          <input
            placeholder="Description"
            className="email-input"
            onChange={e => this.handleInput("description", e.target.value)}
          />
          
          <input
            className="register-button"
            type="submit"
            disabled={
              !this.state.title || !this.state.description
                ? true
                : false
            }
          />
        </form>
      </div>
    )
  }
}

export default ItemAdd;