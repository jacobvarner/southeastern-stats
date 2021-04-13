import React from "react";
import NavMenu from "./NavMenu";

interface ILayoutProps { };
interface ILayoutState { };

export default class Layout extends React.Component<ILayoutProps, ILayoutState> {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
