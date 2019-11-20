import React from "react";
import { SafeAreaView, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

import { Video } from "expo-av";

export default function VideoCard({ navigation }) {
  const video = navigation.getParam("video");

  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={{
          uri: video.video_uri
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping
        useNativeControls
        style={{
          aspectRatio: 1,
          width: "100%"
        }}
      />
      <Text>{video.name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828"
  }
});
