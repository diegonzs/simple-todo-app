import type { NextPage } from 'next'
import React from 'react'
import { useQuery } from 'react-query'
import { getTodods, TTodo } from '../api/todos'

const Home: NextPage = () => {
  const [todos, setTodos] = React.useState<TTodo[]>([])
  const { data, isLoading, isError } = useQuery('todos', getTodods)

  React.useEffect(() => {
    if (data) {
      setTodos(data.slice(0, 20))
    }
  }, [data])

  const updateTodo = (todo: TTodo) => {
    setTodos(todos.map(elem => {
      if (elem.id === todo.id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return elem
    }))
  }

  return (
    <div className="bg-black px-4 py-10 text-white min-h-screen">
      <h1 className="text-3xl mb-2 font-bold">March 9, 2020</h1>
      <p className="text-[#575767] mb-4 text-sm font-semibold">5 incomplete, 5 completed</p>
      <div className="mb-4 h-0.5 bg-[#575767] w-full"></div>    
        {isLoading ? (
          <div>
            <h1>ESTO ESTA CARGANDO!!!!!!!</h1>
          </div>
        ) : null}
        
        {isError ? (
          <div>
            <h1>HA OCURRIDO UN ERROR HORRIBLE Y ESTA PAGINA NO SIRVE :P</h1>
          </div>
        ) : null}

        {todos.length ? (
          <>
            <div className="mb-8">
              <h2 className="text-lg mb-4 font-bold">Incomplete</h2>
              <ul>
                {todos.filter(todo => !todo.completed).map(todo => (
                  <li className="flex mb-4">
                    <div className="rounded mr-4 bg-[#2B2D37] w-6 h-6 cursor-pointer" onClick={() => updateTodo(todo)}></div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-medium mb-1 leading-none">{todo.title}</h3>
                      <p className="text-[#575767] text-sm">💰 Finance</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <h2 className="text-lg mb-4 font-bold">Completed</h2>
              <ul>
                {todos.filter(todo => todo.completed).map(todo => (
                  <li className="flex mb-4">
                    <div className="rounded mr-4 bg-green-200 w-6 h-6 cursor-pointer" onClick={() => updateTodo(todo)}></div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-medium mb-1 leading-none">{todo.title}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ): null}
    </div>
  )
}

export default Home