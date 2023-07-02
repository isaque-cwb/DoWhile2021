import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { UserPhoto } from '../UserPhoto'
import { MotiView } from 'moti'


export type MessageProps = {
    id: string;
    text: string;
    user:{
        name: string;
        avatar_url: string;
    }
}

type Props = {
    data: MessageProps
}

export function Message({ data }:Props) {
  return (
    <MotiView 
    from={{opacity: 0, translateY: -50}}
    animate={{opacity: 1, translateY: 0}}
    transition={{type: 'timing', duration: 800}}
    style={styles.container} 
    >
      <Text style={styles.message}>{data.text}</Text>
      <View style={styles.footer}>
        <UserPhoto  
        sizes='SMALL'
        imageUri={ data.user.avatar_url }
        />
        <Text  style={styles.userName}>
            {data.user.name}
        </Text>
      </View>
    </MotiView>
  )
}