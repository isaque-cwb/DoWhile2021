import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { MessageList } from '../../components/MessageList'
import { Button } from '../../components/Button'
import { COLORS } from '../../theme'
import { SignInBox } from '../../components/SignInBox'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <MessageList/>
      <SignInBox/>
    </View>
  )
}