import './App.css'
import {Todo} from "./Todo.ts";
import TodoCard from "./TodoCard.tsx";
import {useEffect, useState} from "react";
import * as axios from "axios";
import TodoColumn from "./TodoColumn.tsx";
import {allPossibleTodos} from "./TodoStatus.ts";


const columns: string[] = ["OPEN", "In_PROGRES", "DONE"]
function App() {


    const [todos, setTodos] = useState<Todo[]>()


    useEffect(
        () => {
            axios.get("/api/todo")
                .then(response => {
                    setTodos(response.data)
                })
        }, []
    )

    if(!todos) {
        return "Lade..."
    }

// TESTDATEN
//    const todos: Todo = [
//        {"id": "abc123",
//            "description": "kochen",
//            "status": "OPEN"
//        },
//        {"id": "abc124",
//            "description": "putzen",
//            "status": "OPEN"
//        }
//    ]

  return (
    <>
        <div className={"page"}>
            <h1>TODOs</h1>
            {
                allPossibleTodos.map(status => {
                    const filteredTodos = todos.filter(todo => todo.status === status)
                    return <TodoColumn status={status} todos={filteredTodos}/>

                })
            }
        </div>
    </>
  )
}

export default App
