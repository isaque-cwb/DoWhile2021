import { View, Text, TouchableOpacity, TouchableOpacityProps, ColorValue } from 'react-native'
import React from 'react'
import { styles } from './styles'

type Props = TouchableOpacityProps &{
    title: string,
    color: ColorValue,
    backgroundColor: ColorValue
}

export function Button({ title, color, backgroundColor, ...rest }: Props) {
    return (
        <TouchableOpacity 
        style={[styles.container, { backgroundColor }]}
        {...rest}
        >
            <Text
            style={[styles.title, {color}]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}