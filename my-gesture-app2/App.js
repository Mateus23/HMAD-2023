import { GestureHandlerRootView, GestureDetector, Gesture } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated";
import { useState } from "react";

export default function AnimatedStyleUpdateExample() {
  const position = useSharedValue({x: 0, y: 0})
  const [enableMove, setEnableMove] = useState(true);

  const moveGesture = Gesture.Pan()
    .enabled(enableMove)
    .onUpdate((e) => {
      position.value = {x: e.translationX, y: e.translationY}
    })
    .onEnd((e) => {
      position.value = {x: 0, y: 0}
      setEnableMove(false)
    })

  const animationConfig = () => ({
    duration: position.value.x === 0 ? 2000 : 0,
    easing: Easing.exp
  })

  const animationCallback = () => {
    if (position.value.x === 0) {
      setTimeout(() => setEnableMove(true), 50)
    }
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withTiming(position.value.x, animationConfig(), animationCallback)},
        {translateY: withTiming(position.value.y, animationConfig(), animationCallback)}
      ]
    }
  })

  return (
    <GestureHandlerRootView style={styles.view}>
      <GestureDetector gesture={moveGesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fdc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#59d',
    zIndex: 100,
  },
  text: {
    marginLeft: 20,
  },
});
