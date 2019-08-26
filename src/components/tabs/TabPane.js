import React from "react";
import PropTypes from "prop-types";

class TabPane extends React.Component{

    static name = "TabPane";

    render(){

        return(<div>{this.props.children}</div>)
    }
}

export default TabPane;