import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Separator} from '../components';
import {Colors} from '../constants';
import {Metric} from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
const SIgnIn = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
      />
      <Separator height={Metric.verticalScale(7)} />
      <View>
        <Ionicons />
      </View>
    </View>
  );
};

export default SIgnIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
