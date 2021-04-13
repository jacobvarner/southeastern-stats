import React from "react";
import { Link } from "react-router-dom";

interface INavMenuProps { };

interface INavMenuState {
  collapsed: boolean;
}

export default class NavMenu extends React.Component<INavMenuProps, INavMenuState> {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <div className="container">
            <a className="navbar-brand" tag={Link} to="/">SoutheasternStats</a>
            <button onClick={this.toggleNavbar} className="mr-2 navbar-toggler" />
            <div className="navbar-collapse d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <li className="nav-item">
                  <Link tag={Link} className="nav-link text-dark" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link tag={Link} className="nav-link text-dark" to="/counter">Counter</Link>
                </li>
                <li className="nav-item">
                  <Link tag={Link} className="nav-link text-dark" to="/fetch-data">Fetch data</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
