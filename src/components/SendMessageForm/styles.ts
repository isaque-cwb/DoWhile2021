import { StyleSheet } from 'react-native'
import { COLORS } from '../../theme'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 90,
        backgroundColor: COLORS.BLACK_TERTIARY,
        paddingTop: 16,
        paddingHorizontal: 24,

    },
    input: {
        width: '100%',
        height: 25,
        textAlignVertical: 'top',
        color: COLORS.WHITE,
    },
    buttonContainer: {
        width: '100%',
        height: 90,
        backgroundColor: COLORS.BLACK_TERTIARY,
        paddingTop: 10,
        paddingHorizontal: 24,
    }
})