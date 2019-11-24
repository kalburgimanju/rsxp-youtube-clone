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

const videos = [
  {
    id: 3,
    thumbnail_url: "http://i3.ytimg.com/vi/keMIEpZxQNI/maxresdefault.jpg",
    title: "Podcast FalaDev #03 - Não sei inglês, e agora?",
    video_uri: "https://cutt.ly/keZSH7W",
    view_count: "15k",
    created_at: "3 days ago",
    user: {
      title: "Rocketseat",
      avatar_url:
        "https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_400x400.jpg"
    }
  },
  {
    id: 2,
    thumbnail_url: "http://i3.ytimg.com/vi/SE76RtsU1VE/maxresdefault.jpg",
    title: "Podcast FalaDev #02 - jQuery morreu? E agora?",
    video_uri: "https://cutt.ly/leZSHX7",
    view_count: "15k",
    created_at: "3 days ago",
    user: {
      title: "Rocketseat",
      avatar_url:
        "https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_400x400.jpg"
    }
  },
  {
    id: 1,
    thumbnail_url: "http://i3.ytimg.com/vi/ixbvCw-YiOA/maxresdefault.jpg",
    title: "Podcast FalaDev #01 - AdonisJS, vale a pena utilizar?",
    video_uri: "https://cutt.ly/CeZSG5v",
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
        data={videos}
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
