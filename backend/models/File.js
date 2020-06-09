import mongoose from 'mongoose'

export const File = mongoose.model("File", {
    filename: String,
    description: String,
    uploader: String,
    date: Date,
    type: String
})