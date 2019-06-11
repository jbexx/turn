import React from 'react';

class ItemAdd extends React.Component{
  constructor() {
    super()

    this.state = {
      title: '',
      description: '',
      existingItems: {}
    }
  }

  componentDidMount() {
    this.getItemsFromLocal();
  }

  getItemsFromLocal() {
    let existingItems;
    const items = localStorage.getItem('Items');
    if (items) {
      existingItems = JSON.parse(items)
      this.setState({ existingItems })
    }
    console.log('EXISTING ITEMS:: ', existingItems)
  }

  handleInput(type, input) {
    this.setState({
      [type]: input
    });
  }

  saveToLocal = () => {
    const { title, description, existingItems } = this.state;
    const itemsToStore = Object.assign({}, existingItems, {[title]: description});
    this.setState({title: '', description: '', existingItems: itemsToStore});
    localStorage.setItem(
      "Items",
      JSON.stringify(itemsToStore)
    );
  }

  render() {
    const {title, description} = this.state;
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
            value={title}
            onChange={e => this.handleInput("title", e.target.value)}
          />
          <input
            placeholder="Description"
            className="email-input"
            value={description}
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