import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import { Video } from "expo-av";

export default function VideoCard({ navigation }) {
  const video = navigation.getParam("video");

  const [videoRef, setVideoRef] = useState();

  function handleVideoRef(component) {
    setVideoRef(component);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        }}
        ref={handleVideoRef}
        rate={1.0}
        auto
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        paused={true}
        useNativeControls={false}
        style={{
          aspectRatio: 1.77,
          width: "100%"
        }}
      >
        <View style={styles.videoControls}>
          <TouchableOpacity onPress={() => videoRef.playAsync()}>
            <Text style={styles.title}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => videoRef.pauseAsync()}>
            <Text style={styles.title}>Pause</Text>
          </TouchableOpacity>
        </View>
      </Video>
      <Text style={styles.title}>{video.title}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828"
  },
  title: {
    color: "#EEE",
    fontSize: 16,
    fontWeight: "bold",
    maxWidth: "85%"
  },
  videoControls: {
    flex: 1,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
