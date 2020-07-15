import React from 'react';

// import React, { Component } from 'react';
// class Title extends Component {};
class Title extends React.Component { 
    render() {
        return(
            <div className={this.props.color}>
                <h1 className="text-center">
                    In file, hello {this.props.studentName}  
                </h1>
                <p>{this.props.age} ans</p>
            </div>
        ) //This est la classe Title
    }
}

export default Title;