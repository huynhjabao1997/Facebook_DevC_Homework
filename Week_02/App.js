import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Ionicons, Feather, FontAwesome, EvilIcons } from "@expo/vector-icons";

const POLO_BLUE_COLOR = "rgb(51,60,87)";
const FOLLOW_COLOR = "rgb(71,113,246)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";
const imgData = [
  { id: 1, imgSource: require("./assets/Nature-1.jpg") },
  { id: 2, imgSource: require("./assets/Nature-2.jpg") },
  { id: 3, imgSource: require("./assets/Nature-3.jpg") },
  { id: 4, imgSource: require("./assets/Nature-4.jpg") },
  { id: 5, imgSource: require("./assets/Nature-5.jpg") },
  { id: 6, imgSource: require("./assets/Nature-6.jpg") }
];
const centerImgData = Math.floor(imgData.length / 2);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appNavigation}>
        <Ionicons style={{flex: 0.5, marginLeft: 20}} name="ios-arrow-back" size={28} color="black" onPress={() => alert("Back")}/>
        <FontAwesome style={{flex: 0.5, position: 'absolute', right: 20}} name="th-large" size={28} color="black" onPress={() => alert("Filter")}/>
      </View>
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.imageAvartar}
            source={require("./assets/avartar.png")}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.nameText}>Alexander Huynh</Text>
          <Text style={styles.jobText}>Developer</Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.followButton} onPress={() => alert("Followed")}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sendMessageButton} onPress={() => alert("Message Sended")}>
              <Feather name="send" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.countArea}>
        <View style={styles.countGroup}>
          <Text style={styles.numberCount}>1000</Text>
          <Text>Photos</Text>
        </View>
        <View style={styles.countGroup}>
          <Text style={styles.numberCount}>15M</Text>
          <Text>Follower</Text>
        </View>
        <View style={styles.countGroup}>
          <Text style={styles.numberCount}>980</Text>
          <Text>Following</Text>
        </View>
      </View>
      <View style={styles.imageArea}>
        <ScrollView
          contentContainerStyle={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}>
          <View style={{ flexDirection: "column" }}>
            {imgData.slice(0, centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.imageSlide} key={item.id}/>;
            })}
          </View>
          <View style={{ flexDirection: "column" }}>
            {imgData.slice(centerImgData).map(item => {
              return <Image source={item.imgSource} style={styles.imageSlide} key={item.id}/>;
            })}
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomFunction}>
        <Ionicons name="ios-menu" size={30} color="black" onPress={() => alert("Menu")}/>
        <EvilIcons name="plus" size={30} color="black" onPress={() => alert("Add More")}/>
        <Feather name="user" size={30} color="black" onPress={() => alert("User")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 0.20,
    flexDirection: "row"
  },
  countArea: {
    flex: 0.10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  imageArea: {
    flex: 0.5,
    flexDirection: "column",
    marginLeft: 5,
  },
  appNavigation: {
    flex: 0.10,
    flexDirection: "row",
    alignItems: 'flex-end'
  },
  bottomFunction: {
    flex: 0.10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  imageAvartar: {
    width: 120,
    height: 120
  },
  imageWrapper: {
    flex: 0.45,
    justifyContent: "center",
    alignItems: "center"
  },
  userInfo: {
    flex: 0.55,
    flexDirection: "column",
    justifyContent: "space-around",
    marginVertical: 20
  },
  followButton: {
    backgroundColor: FOLLOW_COLOR,
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  sendMessageButton: {
    backgroundColor: SEND_MESSAGE_COLOR,
    width: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginLeft: 5
  },
  buttonWrapper: {
    flexDirection: "row"
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  jobText: {
    fontSize: 18,
    fontWeight: "400",
    color: "gray"
  },
  followText: {
    color: "white",
    fontSize: 17,
    fontWeight: "800"
  },
  countGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  numberCount: {
    fontSize: 25,
    fontWeight: "bold"
  },
  imageSlide: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 10
  }
});
