import React, { useState, useRef, useEffect } from "react";
import { Image, FlatList, StyleSheet, View, Animated } from "react-native";
import OnboardingItem from "../components/OnboardingItem";
import onboardingSlides from "../utils/onboardingSlides";
import OnboardingPaginator from "../components/OnboardingPaginator";
import Button from "../components/Button";
import SkipBtn from "../components/SkipBtn";
import COLORS from "../utils/colors";

export default OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const onboardingSlidesRef = useRef(null);
  const totalSlides = onboardingSlides.length;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < totalSlides - 1) {
      onboardingSlidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const onPressSkip = () => {
    navigation.navigate("GetStartedScreen");
  };

  const [buttonText, setButtonText] = useState("Next");

  useEffect(() => {
    if (currentIndex === totalSlides - 1) {
      setButtonText("Get Started");
    } else {
      setButtonText("Next");
    }
  }, [currentIndex, totalSlides]);

  const onPress = () => {
    if (currentIndex < totalSlides - 1) {
      scrollTo();
    } else {
      navigation.navigate("GetStartedScreen");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.skipCtn}>
          <SkipBtn onPressSkip={onPressSkip} />
        </View>
        <FlatList
          data={onboardingSlides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={onboardingSlidesRef}
        />
      </View>
      <View style={styles.btnCtn}>
        <View>
          <OnboardingPaginator data={onboardingSlides} scrollX={scrollX} />
        </View>
        <View style={styles.btn}>
          <Button
            scrollTo={scrollTo}
            onPress={onPress}
            buttonText={buttonText}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.getStartedBgColor,
  },
  skipCtn: {
    marginTop: 16,
    marginBottom: 17,
  },
  btnCtn: {
    paddingHorizontal: 24,
    height: "100%",
    backgroundColor: COLORS.appBackgroundColor,
  },
  btn: {
    marginTop: 84,
  },
});
