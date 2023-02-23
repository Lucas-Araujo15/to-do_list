import styles from './Task.module.css'

import { Trash, Check } from 'phosphor-react'
import * as Checkbox from "@radix-ui/react-checkbox";
import { useState } from 'react';

interface TaskProps {
    title: string,
    isDone: boolean,
    onToggleTask: (title: string) => void
    onDeleteTask: (title: string) => void
}

export function Task({ isDone, onToggleTask, title, onDeleteTask }: TaskProps) {

    function handleToggleTask() {
        onToggleTask(title)
    }

    function handleDeleteTask() {
        onDeleteTask(title)
    }

    return (
        <div className={styles.task}>
            <Checkbox.Root
                checked={isDone}
                onCheckedChange={handleToggleTask}
                className={styles.checkbox}>
                <Checkbox.Indicator>
                    <Check />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <p aria-checked={isDone}>{title}</p>
            <Trash onClick={handleDeleteTask} size={24} />
        </div>
    )
}