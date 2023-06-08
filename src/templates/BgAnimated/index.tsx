import { ReactNode, useEffect } from 'react'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

import { BG_ANIMATED_STYLES } from './styles'

interface BgAnimatedProps {
  children: ReactNode;
  animate?: boolean;
}

export function BgAnimated({ children, animate = false }: BgAnimatedProps) {
  const animationTopViewValue = useSharedValue(-120);
  const animationTopViewStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: '-34deg' },
        { translateX: -100 },
        { translateY: withTiming(animationTopViewValue.value, { duration: 800, easing: Easing.bounce }) }
      ],
      width: 450,
      height: 300
    }
  })

  const animationBottomViewValue = useSharedValue(-120);
  const animationBottomViewStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: '-214deg' },
        { translateX: -50 },
        { translateY: withTiming(animationBottomViewValue.value, { duration: 800, easing: Easing.bounce }) }
      ],
      width: 450,
      height: 300
    }
  })

  useEffect(() => {
    setTimeout(() => {
      animationTopViewValue.value = -78;
      animationBottomViewValue.value = -50;
    }, 100);
  }, [])

  return (
    <Animated.View style={BG_ANIMATED_STYLES.container}>
      <Animated.View 
        style={[
          BG_ANIMATED_STYLES.bgDetail, 
          BG_ANIMATED_STYLES.bgDetailTop,
          animate && animationTopViewStyle
        ]} 
      />

      {children}

      <Animated.View 
        style={[
          BG_ANIMATED_STYLES.bgDetail, 
          BG_ANIMATED_STYLES.bgDetailBottom,
          animate && animationBottomViewStyle
        ]}
      />
    </Animated.View>
  )
}