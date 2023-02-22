import { useState } from 'react'

import styles from './App.module.css'
import './global.css'

import { Header } from './components/Header'
import { List } from './components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <List />
        </main>
      </div>
    </div>
  )
}

export default App
