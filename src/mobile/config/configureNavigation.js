import { createStackNavigator, createAppContainer } from "react-navigation"

// screens
import MoviesScreen from "../screens/MoviesScreen"

const AppRouteConfigs = {
  Movies: {
    screen: MoviesScreen,
  },
}

const AppNavigator = createAppContainer(createStackNavigator(AppRouteConfigs))

export default AppNavigator
