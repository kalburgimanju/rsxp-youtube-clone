import React from "react";
import { View } from "react-native";

import { Video } from "expo-av";

// import { Container } from './styles';

export default function VideoCard({ uri }) {
  return (
    <View>
      <Video
        source={{
          uri
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping
        useNativeControls
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}
