import { ClipboardText } from 'phosphor-react'

import styles from './EmptyList.module.css'

export function EmptyList() {
    return (
        <div className={styles.emptyList}>
            <ClipboardText size={56} />
            <div>
                <p>
                    <strong>Você ainda não tem tarefas cadastradas</strong><br />
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>
        </div>
    )
}