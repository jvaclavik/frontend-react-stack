import React from "react"
import renderer from "react-test-renderer"

// components
import Button from "../Button"

test("renders correctly", () => {
  const tree = renderer
    .create(<Button onPress={() => null}>Ahoj</Button>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
