// @flow
import React from "react"
import { StyleSheet, Text, View } from "react-native"

// theme
import { Colors, Metrics } from "../../shared/themes"

const styles = StyleSheet.create({
  item: {},
})

type Props = {|
  +onPress: () => void,
  +children: string,
|}

export default class ListItem extends React.PureComponent<Props> {
  render() {
    const { children } = this.props
    return (
      <View style={styles.item}>
        <Text>{children}</Text>
      </View>
    )
  }
}
