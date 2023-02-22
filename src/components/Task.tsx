import styles from './Task.module.css'

import { Trash, Check } from 'phosphor-react'
import * as Checkbox from "@radix-ui/react-checkbox";
import { useState } from 'react';

export function Task() {
    const [checked, setChecked] = useState(false)

    function handleToggleTask() {
        setChecked(!checked)
    }

    return (
        <div className={styles.task}>
            <Checkbox.Root checked={checked} onCheckedChange={handleToggleTask} className={styles.checkbox}>
                <Checkbox.Indicator>
                    <Check />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <p aria-checked={checked} defaultChecked={checked}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <Trash size={24} />
        </div>
    )
}