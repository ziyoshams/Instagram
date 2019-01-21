import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swipeout from 'react-native-swipeout';

import Nav, { navHeight, TopNav, NavButton } from '../../CustomNav';
import users from '../../../data/users.json';

const viewPort = Dimensions.get('window');
const { width, height } = viewPort;
const ICON_SIZE = 24;
const swipeoutBtns = [
  {
    text: 'Mute',
    type: 'secondary',
    backgroundColor: '#ecf0f1',
    color: '#353538',
    onPress: () => {
      alert('rowData');
    }
  },
  {
    text: 'Delete',
    type: 'delete',
    onPress: () => {
      alert('Delete');
    }
  }
];
class Messages extends Component {
  constructor(props) {
    super(props);
  }

  searchComponent = () => <TextInput />;
  renderRows = ({ item }) => {
    let { image, username, post_text } = item;
    if (post_text.length > 30) post_text = post_text.slice(0, 30).concat('...');
    return (
      <Swipeout right={swipeoutBtns} backgroundColor="transparent">
        <View style={styles.swipableRow}>
          <View style={styles.swipableUserImage}>
            <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />
          </View>
          <View style={styles.swipableUserExerpt}>
            <Text style={{ fontWeight: '500' }}>{username}</Text>
            <Text style={{ fontWeight: '300', color: '#777777' }}>{post_text}</Text>
          </View>
          <View style={styles.swipableIcon}>
            <NavButton style={{ padding: 0 }} name="camera" onPress={() => alert('camera mi')} />
          </View>
        </View>
      </Swipeout>
    );
  };

  keys = item => item.id.toString();

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <TopNav>
            <NavButton
              name="arrow-left"
              size={ICON_SIZE}
              onPress={() => this.props.onBackPress(2)}
            />
            <Text style={{ fontSize: 25 }}>Messages</Text>
            <Icon name="plus" size={ICON_SIZE} />
          </TopNav>

          <ScrollView style={styles.mainArea} nestedScrollEnabled={true}>
            <FlatList
              data={users}
              renderItem={this.renderRows}
              keyExtractor={this.keys}
              initialNumToRender={20}
              ListHeaderComponent={this.searchComponent()}
            />
          </ScrollView>
        </SafeAreaView>

        <Nav>
          <NavButton name="camera" size={25} color="#3498db" onPress={alert}>
            <Text style={{ color: '#3498db' }}>Camera</Text>
          </NavButton>
        </Nav>
      </View>
    );
  }
}

export default Messages;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width,
    height,
    paddingVertical: 10
  },
  mainArea: {
    width,
    height: height - navHeight
  },
  swipableRow: {
    width,
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 15,
    marginVertical: 8
  },
  swipableUserImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#333',
    overflow: 'hidden'
  },
  swipableUserExerpt: {
    flex: 3,
    paddingHorizontal: 7,
    justifyContent: 'center'
  },
  swipableIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 5
    
  }
});
