import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";
// import { BlurView, VibrancyView } from "@react-native-community/blur";
// import { BlurView } from "@react-native-community/blur";
import { BlurView } from "expo-blur";
import ProgressBar from "./ProgressBar";
import { Video } from "expo-av";

export function Uploading({ image, video, progress }) {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        },
      ]}
    >
      <BlurView
        intensity={30}
        tint="light"
        style={StyleSheet.absoluteFill}
      ></BlurView>
      <BlurView
        style={
          // styles.blurContainer
          {
            width: "70%",
            paddingVertical: 16,
            rowGap: 12,
            margin: 16,
            alignItems: "center",
            overflow: "hidden",
            borderRadius: 20,
          }
        }
        intensity={100}
        tint="light"
      >
        {image && (
          <Image
            source={{ uri: image }}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              borderRadius: 6,
            }}
          />
        )}
        {video && (
          <Video
            source={{
              uri: video,
            }}
            videoStyle={{}}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="contain"
            // shouldPlay
            // isLooping
            style={{ width: 200, height: 200 }}
            // useNativeControls
          />
        )}
        <Text style={{ fontSize: 12 }}>Uploading...</Text>
        {/* <ProgressBar progress={progress} /> */}
        <ProgressBar progress={progress} />
        <View
          style={{
            height: 1,
            borderWidth: StyleSheet.hairlineWidth,
            width: "100%",
            borderColor: "#00000020",
          }}
        />
        <TouchableOpacity>
          <Text style={{ fontWeight: "500", color: "#3478F6", fontSize: 17 }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
  },
  background: {
    flex: 1,
    flexWrap: "wrap",
    ...StyleSheet.absoluteFill,
  },
  box: {
    width: "25%",
    height: "20%",
  },
  boxEven: {
    backgroundColor: "orangered",
  },
  boxOdd: {
    backgroundColor: "gold",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
  },
});
