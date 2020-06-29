import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default ResultsDetail;
