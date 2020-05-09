import React from 'react';
import "../styles/navbar.css";

class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DOB: '',
            DOB2: '',
            search: ''
        
        };

        this.handleChangeDOB = this.handleChangeDOB.bind(this);
        this.handleChangeDOB2 = this.handleChangeDOB2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
    }

    handleChangeDOB(event) {
        this.setState({DOB: event.target.DOB});
    }
    handleChangeDOB2(event) {
        this.setState({DOB2: event.target.DOB2});
    }
    handleChangeSearch(event) {
        this.setState({search: event.target.search});
    }

    handleSubmit(event) {
        alert('A name was submited: ' + this.state.search);
        event.preventDefault();
    }


    render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit} >
            <label>
            DOB
               <input type="date" value={this.state.DOB} onChange={this.handleChangeDOB} />
               <input type="date" value={this.state.DOB2} onChange={this.handleChangeDOB2} />
               <input type="text" value={this.state.search2} onChange={this.handleChangeSearch} />
               <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </label>
            </form>
        </div>
    )
}
}


export default Searchbar;