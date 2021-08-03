import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler'
import * as Unicons from '@iconscout/react-native-unicons'

interface SettingsItemProps {
  onPress: () => void
  text: string | JSX.Element
  icon?: typeof Unicons
}

export default function SettingsItem(props: SettingsItemProps): JSX.Element {
  return <TouchableHighlight
    underlayColor="#FFFFFF"
    style={styles.itemContainer}
    onPress={props.onPress}
  >
    <View style={styles.settingsContainer}>
      {props.icon && <props.icon color={'#0F62FE'} size={25} style={styles.icon} />}

      {typeof props.text === 'string' ? <Text style={styles.itemText}>{props.text}</Text> : props.text}

    </View>
  </TouchableHighlight>

}

const styles = StyleSheet.create({
  settingsContainer: {
    flexDirection: 'row'
  },
  icon: {
    marginRight: 15
  },
  itemContainer: {
    justifyContent: 'center',
    paddingBottom: 15,
    paddingTop: 5,
    paddingLeft: 24,
    paddingRight: 24
  },
  itemText: {
    color: '#000',
    fontFamily: 'NeueEinstellung-Regular',
    fontSize: 19,
    fontWeight: '500',
    justifyContent: 'center',
    flexGrow: 1
  }
});
