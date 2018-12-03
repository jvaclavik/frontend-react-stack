// @flow
import React from "react"

// theme
import { Colors, Metrics } from "../../shared/themes"

const styles = {
  container: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 2,
    height: Metrics.web.buttons.height,
    borderRadius: Metrics.web.buttons.height / 2,
    textAlign: "center",
  },
  button: {
    color: "white",
  },
}

type Props = {|
  +onClick: () => void,
  +children: string,
  +style: any,
|}

export default class Button extends React.PureComponent<Props> {
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
