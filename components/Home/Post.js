import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const viewPort = Dimensions.get('window');
const { width, height } = viewPort;

class Post extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.postWrapper}>
        {/* USER logo, username, location */}
        <View style={styles.postHeader}>
          <Image />
          <View>
            {/* username, location */}
            <Text>shams.91</Text>
            <Text>Dushanbe, Tajikistan</Text>
          </View>
          <Icon name="ellipsis-h" />
        </View>
        <View style={styles.postImage}>
          <Image />
        </View>

        {/* like comment forward menus */}
        <View>
          <View>
            <Icon name="heart" />
            <Icon name="comment" />
            <Icon name="telegram-plane" />
          </View>
          <View />
          <View>
            <Icon name="bookmark" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postWrapper: {},
  postHeader: {},
  postImage: {}
});
export default Post;
