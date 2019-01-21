import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../colors';

const viewPort = Dimensions.get('window');
const { width, height } = viewPort;
const ICON_SIZE = 24;
class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.postWrapper}>
        {/* USER logo, username, location */}
        <View style={styles.postHeader}>
          <View style={styles.postHeaderImage}>
            <View style={styles.postHeaderImageCircle}>
              <Icon name="user" size={16} />
              {/* <Image  /> */}
            </View>
          </View>
          <View style={styles.postHeaderUsername}>
            {/* username, location */}
            <Text>shams.91</Text>
            <Text>Dushanbe, Tajikistan</Text>
          </View>
          <View style={styles.postHeaderActions}>
            <Icon name="ellipsis-h" size={ICON_SIZE - 5} />
          </View>
        </View>
        <View style={styles.postImage}>
          {/* <Image /> */}
          <Icon name="image" size={60} color="#353538" />
        </View>

        {/* like comment forward menus */}
        <View style={styles.postFooter}>
          <View style={styles.postFooterColumn1}>
            <Icon style={styles.icon} name="heart" size={ICON_SIZE} />
            <Icon style={styles.icon} name="comment" size={ICON_SIZE} />
            <Icon style={styles.icon} name="telegram-plane" size={ICON_SIZE} />
          </View>
          <View style={styles.postFooterColumn2} />
          <View style={styles.postFooterColumn3}>
            <Icon style={styles.icon} name="bookmark" size={ICON_SIZE + 3} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postWrapper: { marginBottom: 15 },
  postHeader: { flexDirection: 'row', height: 60 },
  postHeaderImage: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  postHeaderImageCircle: {
    width: 40,
    height: 40,
    borderColor: 'purple',
    borderWidth: 2,
    backgroundColor: '#1abc9c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  postHeaderUsername: {
    flex: 4,
    justifyContent: 'center',
    padding: 5
  },
  postHeaderActions: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15
  },
  postImage: {
    minHeight: height / 4,
    width,
    marginBottom: 8,
    backgroundColor: colors.borderColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postFooter: { flexDirection: 'row', height: 60 },
  postFooterColumn1: { flex: 1, justifyContent: 'center', flexDirection: 'row' },
  postFooterColumn2: { flex: 1 },
  postFooterColumn3: { flex: 1, alignItems: 'flex-end' },
  icon: {
    marginVertical: 5,
    marginHorizontal: 10
  }
});
export default Post;
