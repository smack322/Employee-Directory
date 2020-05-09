import React from 'react';

class Table extends React.Component {
    state = {
        result: {},
        search: ""
    };

    componentDidMount() {
        this.search
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                            <td>IMG</td>
                            <td>Scott</td>
                            <td>800-800-8080</td>
                            <td>test@aol.com</td>
                            <td>10/08/1990</td>
                        </tr>
                        <tr>
                            <td>IMG</td>
                            <td>Scott</td>
                            <td>800-800-8080</td>
                            <td>test@aol.com</td>
                            <td>10/08/1990</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }

}

export default Table;