import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableHighlight, Image } from "react-native";
import { LinearGradient } from 'expo';
import { getIcon } from '../../helpers'

class PlanListItem extends Component {
  render() {
    const checkMark = getIcon("checkmark");
    const { navigation, plan, theme } = this.props;
    const extendStyles = StyleSheet.create({
      container: {
        backgroundColor: variants[theme].background
      },
      label: {
        color: variants[theme].color
      }
    });

    return (
      <TouchableHighlight
        underlayColor="#FFF"
        onPress={() => navigation.push("SubscriptionDetails", { plan: plan })}
      >
        <View style={styles.row}>
          <LinearGradient style={styles.linearGradientContainer} colors={['#096dff', '#00b1ff']} start={[0.0, 0.0]} end={[1.0, 1.0]}>
            <View style={[styles.planStorageContainer]}>
              <Text style={[styles.planStorage]}>
                {plan.amount}
                {plan.unit}
              </Text>
            </View>
          </LinearGradient>
          <Text style={styles.planPrice}>
            <Text style={{ fontFamily: 'CircularStd-Bold' }}>{plan.price}</Text>{plan.period ? <Text style={{ color: '#7e848c' }}>/{plan.period}</Text> : ""}
          </Text>
          <Image source={checkMark} />
        </View>
      </TouchableHighlight>
    );
  }
}

const variants = {
  light: {
    color: "#000000",
    background: "#ffffff",
  },
  medium: {
    color: "#000000",
    background: "#ffffff",
  },
  dark: {
    color: "#fff",
    background: "#4385f4"
  }
}

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  linearGradientContainer: {
    margin: 9,
    padding: 1,
    borderRadius: 4
  },
  planStorageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 94,
    height: 57,
    borderRadius: 4,
    backgroundColor: '#FFF'
  },
  planStorage: {
    fontFamily: "CircularStd-Black",
    fontSize: 18,
    color: "#000",
    letterSpacing: -0.1
  },
  planPrice: {
    fontFamily: "CircularStd-Book",
    fontSize: 18,
    letterSpacing: -0.3,
    color: "#000",
    margin: 11
  }
});

export default PlanListItem;
