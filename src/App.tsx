import { useContext } from 'react'
import styles from './App.module.scss'
import { LoginBox } from './LoginBox'
import { MessageList } from './MessageList'
import { AuthContext } from './contexts/auth'
import { SendMessageForm } from './SendMessageForm'


export function App() {

  const { user } = useContext(AuthContext)
  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <MessageList />
      {!!user ? <SendMessageForm/> : <LoginBox />}
    </main>
  )
}

