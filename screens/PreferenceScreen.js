import React, { useState } from "react";
import { Text, StyleSheet, View, Switch, ScrollView } from "react-native";
import Button from "../components/Button";
import TabBtn from "../components/TabBtn";

export default PreferenceScreen = ({ navigation }) => {
  const footballCategory = [
    "EPL",
    "Champs. League",
    "La Liga",
    "Serie A",
    "Eredivise",
    "Ligue 1",
    "MLS",
    "Bundesliga",
    "AFCON",
    "Europa League",
    "Euro 2024",
    "Europa Conf. League",
    "FA Cup",
    "Belgian PL",
    "WSL",
    "NCAA",
    "EFL",
  ];
  const tennisCategory = [
    "AO",
    "French Open",
    "Wimbledon",
    "US Open",
    "Indian Wells Masters",
    "ATP 250",
    "ATP 500",
    "ATP 750",
    "ATP 1000",
    "Nitto ATP Finals",
    "NCAA",
    "Dallas Open",
    "Qatar Open",
    "Rio Open",
    "Accapulo Open",
  ];

  const [footballToggleOn, setFootballToggleOn] = useState(false);
  const [tennisToggleOn, setTennisToggleOn] = useState(false);
  const [selectedTabs, setSelectedTabs] = useState([]);

  const onPress = () => {
    navigation.navigate("Dashboard");
  };

  const onPressTab = (text) => {
    // console.log(text);
    if (selectedTabs.includes(text)) {
      setSelectedTabs((prevTabs) => prevTabs.filter((tab) => tab !== text));
    } else {
      setSelectedTabs((prevTabs) => [...prevTabs, text]);
    }
    // console.log(selectedTabs);
  };

  const toggleFootball = () => {
    if (!footballToggleOn) {
      console.log("football Toggle Switched On");
    } else {
      console.log("football Toggle Switched Off");
    }
    setFootballToggleOn((previousState) => !previousState);
  };

  const toggleTennis = () => {
    if (!tennisToggleOn) {
      console.log("tennis Toggle Switched On");
    } else {
      console.log("tennis Toggle Switched Off");
    }
    setTennisToggleOn((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.pageTitle}>Select your sport</Text>
          <Text style={styles.pageSubtitle}>
            Tap your favourite sport (or both) and choose your preferred
            leagues. We are curious!
          </Text>
        </View>
        <ScrollView>
          <View style={styles.toggleSection}>
            <View style={styles.toggleContainer}>
              <Text style={styles.toggleText}>Football</Text>
              <Switch
                style={styles.toggle}
                trackColor={{ false: "#fff", true: "#A5CCF9" }}
                thumbColor={footballToggleOn ? "#fff" : "#fff"}
                onValueChange={toggleFootball}
                value={footballToggleOn}
              />
            </View>

            <View style={footballToggleOn ? styles.tabs : styles.hidden}>
              {footballCategory.map((text, index) => (
                <TabBtn
                  text={text}
                  onPress={() => onPressTab(text)}
                  key={index}
                  style={[
                    styles.button,
                    selectedTabs.includes(text) && styles.selectedTabBtn,
                  ]}
                />
              ))}
            </View>

            <View style={styles.toggleContainer}>
              <Text style={styles.toggleText}>Tennis</Text>
              <Switch
                style={styles.toggle}
                trackColor={{ false: "#fff", true: "#A5CCF9" }}
                thumbColor={tennisToggleOn ? "#fff" : "#fff"}
                onValueChange={toggleTennis}
                value={tennisToggleOn}
              />
            </View>

            <View style={tennisToggleOn ? styles.tabs : styles.hidden}>
              {tennisCategory.map((text, index) => (
                <TabBtn
                  text={text}
                  onPress={() => onPressTab(text)}
                  key={index}
                  style={[
                    styles.button,
                    selectedTabs.includes(text) && styles.selectedTabBtn,
                  ]}
                />
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.btnContainer}>
          <Button onPress={onPress} buttonText={"Finish"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.appBackgroundColor,
  },
  pageContainer: {
    flex: 1,
    marginHorizontal: 24,
  },
  toggleSection: {
    marginBottom: 280,
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  toggleText: {
    fontFamily: "Manrope-Bold",
    fontSize: 18,
    // fontWeight: 700,
    lineHeight: 26,
    letterSpacing: 0.45,
    color: COLORS.primaryTextColor,
  },
  toggle: {
    transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }],
  },
  textContainer: {
    marginVertical: 40,
  },
  pageTitle: {
    fontFamily: "Manrope-Bold",
    fontSize: 28,
    // fontWeight: 700,
    lineHeight: 36,
    color: COLORS.primaryTextColor,
    paddingBottom: 8,
  },
  pageSubtitle: {
    fontFamily: "Manrope-Regular",
    fontSize: 16,
    // fontWeight: 400,
    lineHeight: 23.8,
    letterSpacing: 0.3,
    color: COLORS.secondaryTextColor,
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  hidden: {
    display: "none",
  },
  selectedTabBtn: {
    borderColor: COLORS.thirdTextColor,
  },
});
