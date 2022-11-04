import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

interface HeaderProps {
  title: string;
}

export default class Header extends Component<HeaderProps, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const colors = {
  background: "steelblue",
  titleText: "#fff",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingTop: 35,
    paddingBottom: 10,
    flexDirection: "row",
  },
  title: {
    flex: 1,
    color: colors.titleText,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
