import React from 'react'
import './TodoItem.css'

const TodoItem = ({id,isDone,content,date,onUpdate,onDelete}) => {

    const onChangeCheckbox=()=>{
        onUpdate(id)
    }

    const onDeleteAll=()=>{
        onDelete(id)
    }

    return (
        <div className={`TodoItem ${isDone? "done":""}`}>
            <input 
            onChange={onChangeCheckbox}
            type="checkbox" 
            readOnly 
            checked={isDone}/>
            <div className="content">
                {content}
            </div>
            <div className="date">
                {new Date(date).toLocaleDateString()}
            </div>
            <button onClick={onDeleteAll}>삭제</button>
        </div>
    )
}

export default TodoItem