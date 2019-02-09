import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import Camera from './Camera/Camera';
import Main from './Main/Main';
import Messages from './Messages/Messages';

const viewport = Dimensions.get('window');
const { width, height } = viewport;

class Home extends Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    console.disableYellowBox;
  }

  handleBackPress = index => {
    this.scrollRef.scrollTo({ x: width * index - width, y: 0 });
  };

  render() {
    return (
      <ScrollView
        horizontal
        bounces={false}
        pagingEnabled={true}
        contentOffset={{ x: width * 1, y: 0 }}
        nestedScrollEnabled={true}
        style={styles.container}
        ref={ref => (this.scrollRef = ref)}
      >
        <Camera />
        <Main {...this.props} onPress={this.handleBackPress} />
        <Messages xRef={this.scrollRef} onBackPress={this.handleBackPress} />
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40
  }
});
