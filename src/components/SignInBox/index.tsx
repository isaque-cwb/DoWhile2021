import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { COLORS } from '../../theme'
import { Button } from '../Button'

export function SignInBox() {
    return (
        <View style={styles.container}>
            <Button
                title='ENTRAR COM GITHUB'
                color={COLORS.BLACK_SECONDARY}
                backgroundColor={COLORS.YELLOW}
                icon='github'
                
            />
        </View>
    )
}