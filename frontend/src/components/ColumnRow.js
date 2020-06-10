import React, { Component } from 'react'

class ColumnRow extends Component {
    render() {
        const { type, filename, description, date, uploader } = this.props.file

        return (
            <tr>
                <td>{type}</td>
                <td>{filename}</td>
                <td>{description}</td>
                <td>{uploader}</td>
                <td>{(new Date(date)).toLocaleDateString('en-UK')}</td>
            </tr>
        )
    }
}

export default ColumnRow