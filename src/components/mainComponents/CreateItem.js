import React from 'react'

const CreateItem = (props) => {
    return (
    <>
        <h1>Hello from create item</h1>
        <button onClick={()=>props.switch("board")}>back</button>
    </>
    )
}

export default CreateItem
