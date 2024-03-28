import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Keyboard,
  Modal,
  TouchableWithoutFeedback,
  useWindowDimensions,
  FlatList,
} from "react-native";
import Button from "../components/Button";
import COLORS from "../utils/colors";

import Input from "../components/Input";

export default SignupScreenFill = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        let areaData = data.map((item) => {
          codeData = item.idd;
          function getCallingCode(codeData) {
            const prefix = codeData.root;
            const suffixes = codeData.suffixes;
            if (!prefix || !suffixes || suffixes.length === 0) {
              return null;
            }
            let callingCodes = suffixes.map((suffix) => prefix + suffix);
            callingCodes = callingCodes.map((code) => code.slice(0, 4));
            const callingCode = callingCodes[0];
            return callingCode;
          }

          const callingCode = getCallingCode(codeData);

          return {
            code: item.cca2,
            item: item.name.common,
            callingCode: callingCode,
            flag: item.flags.png,
          };
        });
        areaData.sort((a, b) => {
          const nameA = a.item.toLowerCase();
          const nameB = b.item.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        setAreas(areaData);
        const defaultData = areaData.filter((a) => a.code === "US");
        if (defaultData.length > 0) {
          setSelectedArea(defaultData[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error);
      });
  }, []);

  const validateLogin = () => {
    Keyboard.dismiss();
    let errors = {};
    if (!number) errors.number = "Number is required";

    if (number) {
      const regex = /^[0-9]+$/;

      if (!regex.test(number)) {
        errors.number = "Enter a valid Number";
      }
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateLogin()) {
      setNumber("");
      setErrors({});
      navigation.navigate("SignupScreenAuth");
    }
  };

  const renderAreasCodesModal = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={styles.modalContainerDrpdwn}
          onPress={() => {
            setSelectedArea(item), setModalVisible(false);
          }}
        >
          <Image
            source={{ uri: item.flag }}
            resizeMode="contain"
            style={styles.modalImg}
          />
          <Text style={styles.modalTxt}>{item.item}</Text>
        </TouchableOpacity>
      );
    };
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={[styles.modal, { width: width * 0.8 }]}>
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                showsVerticalScrollIndicator={false}
                style={styles.ftc}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
        <View style={styles.pageHeader}>
          <Pressable onPress={() => navigation.navigate("GetStartedScreen")}>
            <Image
              source={require("../assets/icons/x.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.pageTitle}>Almost done!</Text>
          <Text style={styles.pageSubtitle}>
            Enter your phone number and we’ll text you a code to activate your
            account.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.countryField}>
            <TouchableOpacity
              style={styles.countryInput}
              onPress={() => setModalVisible(true)}
            >
              <View style={styles.flagContainer}>
                <Image
                  source={{ uri: selectedArea?.flag }}
                  resizeMode="contain"
                  style={styles.image}
                />
              </View>
              <View>
                <Text style={styles.countryCode}>
                  {selectedArea?.callingCode}
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.inputField}>
            <Input
              keyboardType={"number-pad"}
              placeholder={errors.number ? `${errors.number}` : "8 8 8 9 9 9"}
              placeholderTextColor={
                errors.number
                  ? COLORS.primaryBtnColor
                  : COLORS.secondaryTextColor
              }
              style={[
                styles.inputPlaceholder,
                !errors.number && styles.inputPlaceholder,
                errors.number && styles.inputPlaceholderErr,
              ]}
              onChangeText={(text) => {
                if (errors.number) {
                  setErrors({});
                }
                setNumber(text);
              }}
              value={errors.number ? "" : number}
            />
          </View>
        </View>
        <View style={styles.signinContainer}>
          <Button onPress={handleSubmit} buttonText={"Get code"} />
        </View>
        {renderAreasCodesModal()}
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
    marginTop: 44,
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainerDrpdwn: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  modal: {
    marginTop: 160,
    height: 400,
    color: COLORS.primaryTextColor,
    backgroundColor: COLORS.inputBgColor,
    borderRadius: 12,
  },
  ftc: {
    padding: 20,
    marginBottom: 20,
  },
  pageHeader: {
    paddingVertical: 16,
  },
  image: {
    width: 24,
    height: 24,
  },
  textContainer: {
    marginVertical: 24,
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
  signinContainer: {
    marginTop: 145,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  countryField: {
    width: "27.5%",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderColor: COLORS.inputBgColor,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORS.inputBgColor,
  },
  countryInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagContainer: {
    marginRight: 12,
  },
  inputField: {
    flexDirection: "row",
    width: "67.5%",
  },
  inputPlaceholder: {
    width: "100%",
    fontFamily: "Manrope-Regular",
    fontSize: 16,
    // fontWeight: 400,
    lineHeight: 26,
    letterSpacing: 0.4,
    color: COLORS.primaryTextColor,
  },
  countryCode: {
    width: "100%",
    fontFamily: "Manrope-Bold",
    fontSize: 16,
    // fontWeight: 700,
    lineHeight: 26,
    letterSpacing: 0.4,
    color: COLORS.primaryTextColor,
  },
  inputPlaceholder: {
    width: "100%",
    fontFamily: "Manrope-Regular",
    fontSize: 16,
    // fontWeight: 400,
    lineHeight: 26,
    letterSpacing: 0.4,
    color: COLORS.primaryTextColor,
  },
  inputPlaceholderErr: {
    fontSize: 18,
  },
  modalImg: {
    height: 24,
    width: 24,
    marginRight: 16,
  },
  modalTxt: {
    fontSize: 16,
    color: COLORS.primaryTextColor,
  },
});
