import React, { useState, useRef } from "react";
import { FlatList, StyleSheet, View, Animated } from "react-native";

import OnboardingItem from "../components/OnboardingItem";
import onboardingSlides from "../utils/onboardingSlides";
import OnboardingPaginator from "../components/OnboardingPaginator";
import Button from "../components/Button";
import SkipBtn from "../components/SkipBtn";

export default Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const onboardingSlidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      onboardingSlidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("Last Item");
    }
  };

  const onPressSkip = () => {
    console.log("Skipped");
  };

  return (
    <View style={styles.container}>
      <SkipBtn onPressSkip={onPressSkip} />
      <View style={{ flex: 3 }}>
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
      <OnboardingPaginator data={onboardingSlides} scrollX={scrollX} />
      <Button scrollTo={scrollTo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
