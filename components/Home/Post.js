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
    const { image, username, post_text, post_likes, city, country } = this.props.post;
    return (
      <View style={styles.postWrapper}>
        {/* USER logo, username, location */}
        <View style={styles.postHeader}>
          <View style={styles.postHeaderImage}>
            <View style={styles.postHeaderImageCircle}>
              {image ? (
                <Image
                  style={{ width: 40, height: 40 }}
                  source={{ uri: image }}
                  resizeMode="cover"
                />
              ) : (
                <Icon name="user" size={16} />
              )}
            </View>
          </View>
          <View style={styles.postHeaderUsername}>
            {/* username, location */}
            <Text style={styles.boldText}>{username}</Text>
            <Text>{`${city}, ${country}`}</Text>
          </View>
          <View style={styles.postHeaderActions}>
            <Icon name="ellipsis-h" size={ICON_SIZE - 5} />
          </View>
        </View>
        <View style={styles.postImage}>
          {image ? (
            <Image style={{ width, height: width }} source={{ uri: image }} resizeMode="contain" />
          ) : (
            <Icon name="image" size={60} color="#353538" />
          )}
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
            <Icon style={styles.icon} name="bookmark" size={ICON_SIZE + 1} />
          </View>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={[styles.boldText, { marginBottom: 5 }]}>
            <Text style={{ fontSize: 14 }}>{`${post_likes} `}</Text>
            <Text>likes</Text>
          </Text>
          <Text>
            <Text style={styles.boldText}>{`${username} `}</Text>
            <Text>{post_text}</Text>
          </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden'
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
  postFooter: { flexDirection: 'row', height: 50 },
  postFooterColumn1: { flex: 1, justifyContent: 'center', flexDirection: 'row' },
  postFooterColumn2: { flex: 1 },
  postFooterColumn3: { flex: 1, alignItems: 'flex-end' },
  icon: {
    marginVertical: 5,
    marginHorizontal: 10
  },
  boldText: { fontWeight: '700' }
});
export default Post;
