import React from 'react';
import ItemCard from '../ItemCard/ItemCard';

class List extends React.Component {
  constructor() {
    super()

    this.state = {
      listItems: {}
    }
  }
  componentDidMount() {
    this.getLocalItems()
  }

  getLocalItems() {
    const listItems = localStorage.getItem('Items');

    if (listItems) {
      const parsedList = JSON.parse(listItems);
      this.setState({ listItems: parsedList })
    }
  }

  render() {
    const { listItems } = this.state;
    const mappedList = Object.keys(listItems).map(item => <ItemCard title={item} description={listItems[item]} />)
    return(
      <div className="list-container">
        {mappedList}
      </div>
    )
  }
}

export default List;