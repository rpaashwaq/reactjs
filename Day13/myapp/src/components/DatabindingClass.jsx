import React, { Component } from "react";


class DatabindingClass extends Component {

    constructor(props) {
        super(props);
        //useState
        this.state = {
            fullName: 'pradeep shet',
            firstName: 'pradeep'
        }

        this.addressRef = React.createRef();//useRef
    }

    handleClick = (e, str) => {
        e.target.value = "Clicked Me";
        e.target.style.backgroundColor = 'yellow';
        alert('Message=' + str);

        setTimeout(() => {
            e.target.value = "Click Me";
        }, 1000);

        addressRef.current.value = "Mumbai";
        addressRef.current.style.backgroundColor = "red";
    }

    handleTextChange = (e) => {
        this.setState({
            fullName: e.target.value
        });
    }

    render() {
        let name = "test";
        const { fullName } = this.state;
        return (
            <>
                <p>Name = {name}</p>

                <input type="text" value={fullName} onChange={(e) => this.handleTextChange(e)} />
                <p>Full Name = {fullName}</p>
                <i>Full Name = {fullName}</i>

                <br />

                <input type="button" value="Click Me" onClick={(e) => this.handleClick(e, 'Hello')} />

                <br />
                Enter Address: <input type="text" ref={this.addressRef} />

            </>
        )
    }
}

export default DatabindingClass;