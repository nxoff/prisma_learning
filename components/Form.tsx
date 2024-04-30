'use client'

import { useState } from "react"

const Form = () => {
const [title, setTitle] = useState("")
const [content, setContent] = useState("")
const [description, setDescription] = useState("")

const handleTitleChange = (e : any) => {
    setTitle(e.target.value)
}

const handleContentChange = (e : any) => {
    setTitle(e.target.value)
}

const handleDescriptionChange = (e : any) => {
    setTitle(e.target.value)
}

const handleSubmit = (e : any) => {
    e.preventDefault()

    setTitle('')
    setContent('')
    setDescription('')
}

return (
    <form>
        <div className="input-wrapper">
            <span>TITLE</span><br/>
            <input type="text" onChange={handleTitleChange} required />
        </div>
        <div className="input-wrapper">
            <span>CONTENT</span><br/>
            <textarea cols={30} rows={10} onChange={handleContentChange} required ></textarea>
        </div>
        <div className="input-wrapper">
            <span>DESCRIPTION</span><br/>
            <input type="text" onChange={handleDescriptionChange} required />
        </div>
        <div className="input-wrapper">
            <input type="submit" value="publish" onSubmit={handleSubmit} />
        </div>
    </form>
  )
}

export default Form