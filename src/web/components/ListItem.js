// @flow
import React from "react"

// theme
import { Colors, Metrics } from "../../shared/themes"

const styles = {
  container: {
    borderColor: Colors.primary,
    borderWidth: 1,
    height: Metrics.web.buttons.height,
  },
  button: {},
}

type Props = {|
  +onClick: () => void,
  +children: string,
  +style: any,
|}

export default class ListItem extends React.PureComponent<Props> {
  onClick = () => {}

  render() {
    const { children, onClick, style } = this.props
    return (
      <div style={styles.container}>
        <a onClick={onClick} style={styles.button}>
          {children}
        </a>
      </div>
    )
  }
}
