// @flow
import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

// theme
import { Colors, Metrics } from "../../shared/themes"

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: Colors.background,
    borderColor: Colors.primary,
    borderWidth: 2,
    width: Metrics.mobile.buttons.height,
    height: Metrics.mobile.buttons.height,
    borderRadius: Metrics.mobile.buttons.height / 2,
    justifyContent: "center",
  },
})

type Props = {|
  +onPress: () => void,
  +children: string,
|}

export default class Button extends React.PureComponent<Props> {
  render() {
    const { children, onPress } = this.props
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>{children}</Text>
      </TouchableOpacity>
    )
  }
}
