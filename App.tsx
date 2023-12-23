import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [randomBackground, setRandomBackground] = useState('black');
  const [randomBackgroundtop, setRandomBackgroundtop] = useState('seagreen');
  const [randomBackgroundbottom, setRandomBackgroundbottom] =
    useState('yellow');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    generateColorTop();
    generateColorBottom();
    setRandomBackground(color);
  };
  const generateColorTop = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackgroundtop(color);
  };
  const generateColorBottom = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackgroundbottom(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground}></StatusBar>
      <View style={[styles.Section, {backgroundColor: randomBackground}]}>
        <View
          style={[
            styles.topSection,
            {backgroundColor: randomBackgroundtop},
          ]}></View>
        <View
          style={[
            styles.topSection,
            {backgroundColor: randomBackgroundtop},
          ]}></View>
      </View>
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionTxt}>Press me ! ! !</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.Section, {backgroundColor: randomBackground}]}>
        <View
          style={[
            styles.topSection,
            {backgroundColor: randomBackgroundbottom},
          ]}></View>
        <View
          style={[
            styles.topSection,
            {backgroundColor: randomBackgroundbottom},
          ]}></View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B$D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionTxt: {
    fontSize: 24,
    color: 'white',
    textTransform: 'uppercase',
  },
  topSection: {
    height: 120,
    width: 120,
    backgroundColor: 'black',
    borderRadius: 12,
  },
  bottomSection: {},
  Section: {
    height: 350,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
