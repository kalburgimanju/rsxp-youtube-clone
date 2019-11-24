import React from "react";
import { Image, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Feed from "../screens/Feed";
import Video from "../screens/Video";

import youtubeLogo from "../../assets/youtubeLogo.png";
import rocketseatLogo from "../../assets/rocketseatLogo.png";

const MainStack = createStackNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: {
        headerLeft: <Image source={youtubeLogo} style={{ marginLeft: 20 }} />,
        headerRight: (
          <>
            <TouchableOpacity>
              <Icon
                name="videocam"
                style={{ marginRight: 20, color: "#EEEEEE" }}
                size={26}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="search"
                style={{ marginRight: 20, color: "#EEEEEE" }}
                size={26}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={rocketseatLogo}
                style={{
                  marginRight: 20,
                  width: 26,
                  height: 26,
                  borderRadius: 13
                }}
              />
            </TouchableOpacity>
          </>
        )
      }
    },
    Video: {
      screen: Video,
      navigationOptions: {
        headerShown: false
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#282828",
        borderBottomWidth: 0,
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 }
      }
    }
  }
);

export default createAppContainer(MainStack);
