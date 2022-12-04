import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Colors, Fonts, ONBOARDING} from '../constants';
import {Metric} from '../utils';
import {Separator, WelcomeCard} from '../components';

const pageStyle = isActive =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: Colors.DEFAULT_GREY};

const Pagination = ({PageIndex}) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(ONBOARDING.length).keys()].map((_, i) =>
        i === PageIndex ? (
          <View style={pageStyle(true)} key={i} />
        ) : (
          <View style={pageStyle(false)} key={i} />
        ),
      )}
    </View>
  );
};

const WelcomeScreen = ({navigation}) => {
  const [OnboardingIndex, setOnboardingIndex] = useState(0);
  const Onboarding = useRef();
  const onViewRef = useRef(({changed}) => {
    setOnboardingIndex(changed[0].index);
  });
  // console.log(OnboardingIndex);
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const PageScroll = () => {
    Onboarding.current.scrollToIndex({
      index: OnboardingIndex < 2 ? OnboardingIndex + 1 : OnboardingIndex,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <Separator height={Metric.verticalScale(8)} />
      <View style={styles.flatListContainer}>
        <FlatList
          ref={Onboarding}
          data={ONBOARDING}
          keyExtractor={item => item.title}
          horizontal
          pagingEnabled //this will prevent extra scrolling
          showsHorizontalScrollIndicator={false}
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({item}) => <WelcomeCard {...item} />}
        />
      </View>
      <Separator height={Metric.verticalScale(4)} />
      <Pagination PageIndex={OnboardingIndex} />
      <Separator height={Metric.verticalScale(8)} />
      {OnboardingIndex === 2 ? (
        <TouchableOpacity
          style={styles.gettingStartedButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Signin')}
        >
          <Text style={styles.gettingStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => Onboarding.current.scrollToEnd()}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => PageScroll()}
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  flatListContainer: {
    height: Metric.verticalScale(60),
  },
  pageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  page: {
    height: Metric.verticalScale(0.8),
    width: Metric.horizontalScale(4),
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: Metric.moderateScale(2),
    marginHorizontal: Metric.horizontalScale(1),
    marginVertical: Metric.verticalScale(1),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Metric.horizontalScale(90),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 16 * 1.5,
  },
  button: {
    backgroundColor: Colors.LIGHT_GREEN,
    paddingVertical: Metric.verticalScale(1),
    paddingHorizontal: Metric.horizontalScale(4),
    borderRadius: Metric.moderateScale(15),
  },
  gettingStartedButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingVertical: Metric.verticalScale(1),
    paddingHorizontal: Metric.horizontalScale(20),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  gettingStartedButtonText: {
    fontSize: Metric.moderateScale(7.5),
    color: Colors.DEFAULT_WHITE,
    lineHeight: Metric.moderateScale(8) * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
});
