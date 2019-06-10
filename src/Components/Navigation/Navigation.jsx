import React from 'react';
import { Route, NavLink, Switch } from "react-router-dom";
import Home from '../Home/Home';
import ItemAdd from '../ItemAdd/ItemAdd';
import List from '../List/List';

const Navigation = () => {
  return(
    <div className="nav-container">
      <header className="page-header">
          <NavLink to="/" className="home-link">
            Home
          </NavLink>
          <NavLink to="/items" className="items-link">
            Items
          </NavLink>
          <NavLink to="/add" className="add-link">
            Add Item
          </NavLink>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={List} />
        <Route exact path="/add" component={ItemAdd} />
      </Switch>
    </div>
  )
}

export default Navigation;