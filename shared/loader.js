import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function Loader({size, color}) {
	return (
	  <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size={size || "large"} color={color || "blue"} style={styles.loader} />
    </View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
});