import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import styles from './App.module.css'
import './global.css'

import { Header } from './components/Header'
import { Task } from './components/Task'
import { PlusCircle } from 'phosphor-react'
import { EmptyList } from './components/EmptyList'

interface TaskContent {
  isDone: boolean
  title: string
}

function App() {
  const [tasks, setTasks] = useState<TaskContent[]>([])
  const [newTaskText, setNewTaskText] = useState<TaskContent>({ isDone: false, title: '' })

  function handleNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...(tasks as TaskContent[]), (newTaskText as TaskContent)])

    setNewTaskText({
      isDone: false,
      title: ''
    })
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText({ isDone: false, title: event.target.value })
  }

  function handleToggleTask(title: string) {
    const newTasksList = tasks.map((task) => {
      if (task.title === title) {
        const updatedTask: TaskContent = {
          ...task,
          isDone: !task.isDone
        }
        return updatedTask
      }
      return task
    })

    setTasks(newTasksList)
  }

  function handleDeleteTask(title: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.title !== title
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewTaskEmpty = newTaskText.title.length === 0

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <div className={styles.list}>
            <form onSubmit={handleNewTask} className={styles.taskForm}>
              <input
                type="text"
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                value={newTaskText!.title}
                required
                placeholder='Adicione uma nova tarefa' />
              <button disabled={isNewTaskEmpty} type='submit'>Criar <PlusCircle size={24} /></button>
            </form>
            <div>
              <div className={styles.listStatus}>
                <div>
                  <p>Tarefas criadas</p>
                  <span>{tasks.length}</span>
                </div>
                <div>
                  <p>Concluídas</p>
                  <span>{tasks.filter(task => { return task.isDone === true }).length} de {tasks.length}</span>
                </div>
              </div>
              <div className={styles.listContent}>

                {
                  tasks.length === 0
                    ?
                    <EmptyList />
                    :
                    tasks.map(task => {
                      return (
                        <Task
                          isDone={task.isDone}
                          title={task.title}
                          onToggleTask={handleToggleTask}
                          onDeleteTask={handleDeleteTask}
                          key={task.title} />
                      )
                    })
                }
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
