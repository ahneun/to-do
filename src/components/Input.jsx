import React, { useState } from "react";
import setTodo from "./script/data"

function Input({ todoList, setTodoList }) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleChangeTitle = (event) => setTitle(event.target.value)
    const handleChangeContent = (event) => setContent(event.target.value)
    const handleChangeList = () => {
        const list = [...todoList]
        const todo = setTodo(title, content)

        list.push(todo)
        setTodoList(list)

        setTitle('')
        setContent('')
    }

    return (
        <div className="input-list">
            <div className="input-list-detail">
                <label className="labels">제목</label>
                <input
                    className="input-place"
                    type="text"
                    id="title-input"
                    value={title}
                    onChange={handleChangeTitle}
                />
                <label className="labels">내용</label>
                <input
                    className="input-place"
                    type="text"
                    id="content-input"
                    value={content}
                    onChange={handleChangeContent}
                />
            </div>
            <button className="submit-btn" onClick={handleChangeList}>추가하기</button>
        </div>
    ) 
}

export default Input