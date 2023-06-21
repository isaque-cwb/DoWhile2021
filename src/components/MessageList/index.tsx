import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './styles'

import { Message } from '../Message'
import { COLORS } from '../../theme'
import { Button } from '../Button'

export function MessageList() {


    const message = {
        id: '1',
        text: 'Mesnagem de Teste mocado',
        user: {
            name: 'Isaque Lourenço',
            avatar_url: 'https://github.com/isaque-cwb.png'
        }
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps='never'
        >
            <Message data={message} />
            <Message data={message} />
            <Message data={message} />
            <Message data={message} />
           


        </ScrollView>
    )
}