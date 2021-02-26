import React from 'react';
import Axois from 'axios'

interface Task {
    id: number
    title: string
    description: string
    date: number
    status: number
    user_id: string
}
const fetchTasks = async (): Promise<Array<Task> | string> => {
    const api = ''
    try {
        const response = await fetch(api)
        const { data } = await response.json()
        return data
    } catch (error) {
        if (error) {
            return error.message
        }
    }
}
const baseApi = ''
const taskApi = ''

const fetchAllTasks = async (url: string): Promise<Task[]> => {
    const response = await fetch(url)
    const { data } = await response.json()
    return data
}

const fetchTask = async (url: string, id: number): Promise<Record<string, string>> => {
    const response = await fetch(`${url}/${id}`)
    const { data } = await response.json()
    return data
}


const runAsyncFunctions = async () => {
    try {
        const Tasks = await fetchAllTasks(baseApi)
        Promise.all(
            tasks.map(async tasks => {
                // eslint-disable-next-line no-unused-vars
                const Tasks = await fetchTask(taskApi, task.id)
                return tasks
            })
        )
    } catch (error) {
        console.log(error)
    }
}
runAsyncFunctions()
