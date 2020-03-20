import React from 'react';

const Task = ({todo,del}) => {
    if(todo.length !== 0) {
        var List = todo.map(task => {
            return (
                <div className=" list-group-item list-group-item-primary rounded-pill p-3 my-3 " key = {task.id} onClick={() => {del(task.id)}}>
                    <h3>{task.ToDo}</h3>
                </div>
            );
        });
    }
    else{
        List = <h1 className="text-primary">Nothing Left!!</h1>
    }
    return <div>{List}</div>
};

export default Task;