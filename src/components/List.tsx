import styles from './List.module.css'

import { PlusCircle } from 'phosphor-react'
import { Task } from './Task'
import { EmptyList } from './EmptyList'

export function List() {
    return (
        <div className={styles.list}>
            <form className={styles.taskForm}>
                <input type="text" name="" id="" placeholder='Adicione uma nova tarefa' />
                <button>Criar <PlusCircle size={24} /></button>
            </form>
            <div>
                <div className={styles.listStatus}>
                    <div>
                        <p>Tarefas criadas</p>
                        <span>5</span>
                    </div>
                    <div>
                        <p>Concluídas</p>
                        <span>2 de 5</span>
                    </div>
                </div>
                <div className={styles.listContent}>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        </div>
    )
}