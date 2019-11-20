import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity
} from "react-native";

const mock = [
  {
    id: 1,
    thumbnail_url: "http://i3.ytimg.com/vi/SE76RtsU1VE/hqdefault.jpg",
    title: "Podcast FalaDev #02 - jQuery morreu? E agora?",
    video_uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    view_count: "15k",
    created_at: "3 days ago",
    user: {
      title: "Rocketseat",
      avatar_url:
        "https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_400x400.jpg"
    }
  }
];

export default function Feed({ navigation }) {
  function renderVideoCards({ item: video }) {
    return (
      <View style={styles.videoCard}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Video", { video })}
        >
          <Image
            style={styles.thumbnail}
            source={{ uri: video.thumbnail_url }}
          />
        </TouchableOpacity>

        <View style={styles.videoInfoContainer}>
          <View>
            <Image
              style={styles.avatar}
              source={{ uri: video.user.avatar_url }}
            />
          </View>
          <View>
            <Text style={styles.title} numberOfLines={2}>
              {video.title}
            </Text>
            <Text style={styles.videoInfo}>
              {video.user.title} · {video.view_count} views · {video.created_at}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.videoList}
        data={mock}
        renderItem={renderVideoCards}
        keyExtractor={video => `video-card-${video.id}`}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828"
  },
  videoList: {
    paddingTop: 10
  },
  videoCard: {
    marginBottom: 16
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 1.77
  },
  videoInfoContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10
  },
  title: {
    color: "#EEE",
    fontSize: 16,
    fontWeight: "bold",
    maxWidth: "85%"
  },
  videoInfo: {
    color: "#A4A4A4",
    fontSize: 16
  }
});
