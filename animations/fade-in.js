import React from 'react';
import { Animated, View } from 'react-native';

export default function FadeIn (props) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: props.duration || 340,
    }).start();
  }, [fadeAnim]);

  const Element = Animated[props.element || 'View'];
  const {contentContainerStyle, refreshControl} = props;

  return (
    <Element
      style={{
        ...props.style || {},
        opacity: fadeAnim,
      }}
      contentContainerStyle={contentContainerStyle}
      refreshControl={refreshControl}
    >
      {props.children}
    </Element>
  );
};