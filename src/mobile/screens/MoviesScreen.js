// @flow
import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import { connect } from "react-redux"
import i18n from "i18n-js"

// components
import { Button, ListItem } from "../components"
import { Colors } from "../../shared/themes"

// redux
import { onGetMoviesRequest } from "../../shared/redux/MoviesRedux"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
})

type Props = {|
  onGetMoviesRequest: typeof onGetMoviesRequest,
|}

class MoviesScreen extends React.PureComponent<Props> {
  renderMovie = movie => <ListItem>{movie.title}</ListItem>

  render() {
    const { onGetMoviesRequest, movies } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <Button onPress={() => onGetMoviesRequest()}>
          {i18n.t("moviesScreen.button")}
        </Button>
        {movies.map(this.renderMovie)}
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movies: state.movies.items,
})

const mapDispatchToProps = {
  onGetMoviesRequest,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesScreen)
