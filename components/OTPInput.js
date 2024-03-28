import React, { useRef } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import COLORS from "../utils/colors";

export default OTPInput = ({ length, value, disabled, onChange }) => {
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    handleValueChange(text, index);
    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus();
    }

    return inputRefs?.current[index - 1]?.focus();
  };
  const handleBackspace = (event, index) => {
    const { nativeEvent } = event;

    if (nativeEvent.key === "Backspace") {
      handleChange("", index);
    }
  };

  const handleValueChange = (text, index) => {
    const newValue = value.map((item, valueIndex) => {
      if (valueIndex === index) {
        return text;
      }
      return item;
    });
    onChange(newValue);
  };

  return (
    <View style={styles.inputField}>
      {[...new Array(length)].map((item, index) => (
        <TextInput
          ref={(ref) => {
            if (ref && !inputRefs.current.includes(ref)) {
              inputRefs.current = [...inputRefs.current, ref];
            }
          }}
          key={index}
          style={styles.input}
          maxLength={1}
          keyboardType="decimal-pad"
          testID={`OTPInput-${index}`}
          contextMenuHidden
          selectTextOnFocus
          editable={!disabled}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(event) => handleBackspace(event, index)}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  inputField: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 56,
    borderColor: COLORS.inputBgColor,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: "center",
    paddingHorizontal: 16,
    backgroundColor: COLORS.inputBgColor,
    color: COLORS.primaryTextColor,
    fontSize: 16,
  },
});
