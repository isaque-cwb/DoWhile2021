import styles from './App.module.scss'
import { LoginBox } from './LoginBox'
import { MessageList } from './MessageList'


export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  )
}

