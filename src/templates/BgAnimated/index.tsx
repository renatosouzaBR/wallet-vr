import { ReactNode } from 'react'
import { View } from 'react-native'

import { BG_ANIMATED_STYLES } from './styles'

interface BgAnimatedProps {
  children: ReactNode
}

export function BgAnimated({ children }: BgAnimatedProps) {
  return (
    <View style={BG_ANIMATED_STYLES.container}>
      <View 
        style={[
          BG_ANIMATED_STYLES.bgDetail, 
          BG_ANIMATED_STYLES.bgDetailTop
        ]} 
      />

      {children}

      <View 
        style={[
          BG_ANIMATED_STYLES.bgDetail, 
          BG_ANIMATED_STYLES.bgDetailBottom
          ]}
      />
    </View>
  )
}