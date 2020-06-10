import React, { Component } from 'react'
import ColumnRow from './ColumnRow'

class Column extends Component {
    render() {
        if (!this.props.files) {
            return (
                <>
                </>
            )
        }

        return (
            <div className="column">
                <column>
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Filename</th>
                            <th>Description</th>
                            <th>Uploader</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.files.map((file) => (
                            <ColumnRow key={file['_id']} file={file} />
                        ))}
                    </tbody>
                </column>
            </div>
        )
    }
}

export default Column 