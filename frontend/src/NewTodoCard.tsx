import React from 'react';

type Props {

}


export default function NewTodoCard(props: Props) {
    return (
        <div className={"todo-card new-todo"}>
            <input type="text" />
            <button>Save</button>
        </div>
    );
}
