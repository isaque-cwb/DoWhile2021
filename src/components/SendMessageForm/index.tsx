import React, { useState } from 'react'

import { KeyboardAvoidingView, TextInput, View, Platform } from 'react-native'

import { styles } from './styles'
import { Button } from '../Button'
import { COLORS } from '../../theme'

export function SendMessageForm() {

    const [message, setMessage] = useState('')
    const [sendingMessage, setSendingMessage] = useState(false)
    const [inputSize, setInputSize] = useState(0)

    return (
        <>
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
                            editable={!sendingMessage}
                            onContentSizeChange={(e) => { setInputSize(e.nativeEvent.contentSize.height + 12) }}
                            placeholder='Qual sua expectativa para o evento?'
                            placeholderTextColor={COLORS.GRAY_PRIMARY}
                            maxLength={140}
                        />
                    </View>
                </View >
            </KeyboardAvoidingView>


            <View style={styles.buttonContainer} >
                <Button
                    title='ENVIAR MENSAGEM'
                    backgroundColor={COLORS.PINK}
                    color={COLORS.WHITE}
                />

            </View>
        </>
    )
}