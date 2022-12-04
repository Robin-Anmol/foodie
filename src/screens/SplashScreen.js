import React, {useEffect} from 'react';
import {Text, View, StatusBar, StyleSheet, Image} from 'react-native';
import {Colors, Fonts, Images} from '../constants';
import {Metric} from '../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
      />
      <Image source={Images.PLATE} resizeMode="contain" style={styles.image} />
      <Text style={styles.titleText}>Food Delivery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  image: {
    width: Metric.horizontalScale(60),
    height: Metric.verticalScale(20),
  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: Metric.moderateScale(13),
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
});

export default SplashScreen;
