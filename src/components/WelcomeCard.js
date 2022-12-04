import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {Metric} from '../utils';
import {Colors, Fonts, Images} from '../constants';
import Separator from './Separator';

const WelcomeCard = ({title, content, image}) => {
  return (
    <View style={styles.container}>
      <Image source={Images[image]} style={styles.image} resizeMode="contain" />
      <Text style={styles.titleText}>{title}</Text>
      <Separator height={Metric.verticalScale(2)} />
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Metric.horizontalScale(100),
  },
  image: {
    height: Metric.verticalScale(30),
    width: Metric.horizontalScale(60),
  },
  titleText: {
    color: Colors.DEFAULT_BLACK,
    fontSize: Metric.moderateScale(7.9),
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  contentText: {
    fontSize: Metric.moderateScale(6.5),
    textAlign: 'center',
    marginHorizontal: Metric.horizontalScale(6),
    fontFamily: Fonts.POPPINS_REGULAR,
  },
});
