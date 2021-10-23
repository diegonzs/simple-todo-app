export type TTodo = {
  userId: string
  completed: boolean
  id: string
  title: string
}

export const getTodods = async () => {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    const json = await data.json()
    return json as TTodo[]
  } catch (error) {
    throw error
  }
}