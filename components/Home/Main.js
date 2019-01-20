import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Nav, { navHeight } from '../CustomNav';
import Stories from './Stories';

const viewPort = Dimensions.get('window');
const { width, height } = viewPort;

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <Stories />
          <ScrollView style={styles.mainArea}>
            <Text style={styles.text}>Main</Text>
            <View style={styles.sections}>
              <Text style={styles.text}>1</Text>
            </View>
            <View style={styles.sections}>
              <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.sections}>
              <Text style={styles.text}>3</Text>
            </View>
            <View style={styles.sections}>
              <Text style={styles.text}>4</Text>
            </View>
            <View style={styles.sections}>
              <Text style={styles.text}>5</Text>
            </View>
            <View style={styles.sections}>
              <Text style={styles.text}>6</Text>
            </View>
          </ScrollView>
        </SafeAreaView>

        <Nav>
          <Icon.Button name="home" size={25} color="#000" backgroundColor="transparent" />
          <Icon.Button
            name="search"
            size={25}
            color="#000"
            backgroundColor="transparent"
            onPress={() => {
              this.props.navigation.navigate('Explore');
            }}
          />
          <TouchableOpacity style={styles.addButton}>
            <Icon name="plus" size={15} color="#000" />
          </TouchableOpacity>
          <Icon.Button name="heart" size={25} color="#000" backgroundColor="transparent" />
          <Icon.Button name="user" size={25} color="#000" backgroundColor="transparent" />
        </Nav>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width,
    height,
    paddingVertical: 10
  },
  mainArea: {
    width,
    height: height - navHeight,
    borderColor: 'red',
    borderWidth: 1
  },
  sections: {
    width,
    height: 40,
    borderWidth: 1,
    borderColor: '#777777',
    marginVertical: 5,
    borderRadius: 5
  },
  text: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 40
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    width: 30,
    height: 30,
    borderRadius: 6,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
