import React, { useState } from 'react'

import { KeyboardAvoidingView, TextInput, View, Platform, Alert } from 'react-native'

import { styles } from './styles'
import { Button } from '../Button'
import { COLORS } from '../../theme'
import { api } from '../../services/api'
import { Keyboard } from 'react-native'

export function SendMessageForm() {

    const [message, setMessage] = useState('')
    const [sendingMessage, setSendingMessage] = useState(false)
    const [inputSize, setInputSize] = useState(0)

    async function handleMessageSubmit() {
        const messageFormatted = message.trim()

        if (messageFormatted.length > 0) {
            setSendingMessage(true)
            await api.post('/messages', { message: messageFormatted })

            setMessage('')
            Keyboard.dismiss()
            setTimeout(() => setSendingMessage(false), 2000)
            Alert.alert('Mensagem enviada com sucesso!!')

        } else {
            Alert.alert('Escreva a mesangem para enviar.')
        }

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View
                style={[styles.container, { height: inputSize + 20 }]}
            >
                <View
                    style={styles.input}
                >
                    <TextInput
                        style={[styles.input, { height: inputSize }]}
                        multiline
                        onChangeText={setMessage}
                        value={message}

                        editable={!sendingMessage}
                        onContentSizeChange={(e) => { setInputSize(e.nativeEvent.contentSize.height + 12) }}
                        placeholder='Qual sua expectativa para o evento?'
                        placeholderTextColor={COLORS.GRAY_PRIMARY}
                        maxLength={140}
                    />
                </View>
            </View >
            <View style={styles.buttonContainer} >
                <Button
                    title='ENVIAR MENSAGEM'
                    backgroundColor={COLORS.PINK}
                    color={COLORS.WHITE}
                    onPress={handleMessageSubmit}
                    isLoading={sendingMessage}
                />

            </View>
        </KeyboardAvoidingView>


    )
}