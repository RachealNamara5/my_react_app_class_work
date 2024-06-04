import React from 'react';

class Tables extends React.Component {
    render() {
        return (
            <div className="tables">
                <h1>Table showing students information {this.props.className}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Names</th>
                            <th>Cohort</th>
                            <th>Location</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Namara</td>
                            <td>Cohort 3</td>
                            <td>Kisaasi</td>
                            <td>18</td>
                        </tr>

                        <tr>
                            <td>Racheal</td>
                            <td>cohort 2</td>
                            <td>Kamwokya</td>
                            <td>17</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tables;