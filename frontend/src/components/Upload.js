import React, { Component } from 'react'

class Upload extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return (
            <div className="form">
                <form id="uploadForm" action="http://localhost:8080/upload" method="post" encType="mutlipart/form-data">

                    <input type="file" className="custom-file-input" name="sampleFile" />
                    <input type="text" className="custom-text-input" name="decription" placeholder="description" />
                    <input type="text" className="custom-text-input" name="uploader" placeholder="uploaded by" />
                    <input type="submit" className="custom-submit-input" value="Upload" />
                </form>
            </div>
        )
    }
}

export default Upload