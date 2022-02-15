import React from 'react';
import { FlatList, StyleSheet, Text, Image, View, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import COLORS from '../constants/colors';

import Loader from '../shared/loader';
import Api from '../network/api';
import * as Animatable from 'react-native-animatable';

export default function CardList({ data, refreshUrl, navigate, renderItem = null }) {
	const [content, setContent] = React.useState(data);
	const [isRefreshing, setRefreshing] = React.useState(false);
	const navigation = useNavigation();

	if (!renderItem) renderItem = ({item, index}) => <TouchableOpacity onPress={() => navigation.navigate(...navigate(item))} underlayColor="white">
		<Animatable.View style={styles.card} animation="zoomIn" delay={index * 130} duration={340}>
      { item.image != null && item.image.length > 0 && (
        <View style={styles.cardImageContainer}>
          <Image source={{uri: item.image }} style={styles.image} />
        </View>
      )}
  		<View style={styles.cardContent}>
  			<Text style={styles.cardTitle}>{item.title}</Text>
        {item.subtitle.length > 0 && <Text style={styles.cardSubtitle}>{item.subtitle}</Text>}
  		</View>
	  </Animatable.View>
	</TouchableOpacity>;

	return (
	    isRefreshing ? <Loader /> :
	    <View style={styles.container}>
     	  <View style={styles.cardListView}>
        	<FlatList
            	data={content}
            	keyExtractor={i => i.id.toString()}
            	refreshing={isRefreshing}
            	renderItem={renderItem}
            	onRefresh={() => Api.fetch(refreshUrl, setContent, [setRefreshing])}
            	contentContainerStyle={styles.cardList}
          />
      	</View>
      </View>
  	);
}

const styles = StyleSheet.create({
  	container: {
    	flex: 1,
    	alignItems: 'center',
    	justifyContent: 'center',
    	padding: 0,
    	backgroundColor: '#fff'
  	},
	  cardListView: {
  		flex: 1,
  	},
  	cardList: {
  		paddingVertical: 20,
  		paddingHorizontal: 13
  	},
  	card: {
      borderRadius: 5,
      borderColor: COLORS.CARD.BORDER,
      borderWidth: 1,
      backgroundColor: COLORS.CARD.BACKGROUND,
      marginHorizontal: 4,
      marginVertical: 6,
    	shadowColor: COLORS.CARD.SHADOW,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      width: 320
    },
    cardContent: {
      marginHorizontal: 18,
      marginVertical: 21,
      marginBottom: 20,
    },
    image: {
    	width: "100%",
    	height: 200,
    	borderTopLeftRadius: 5,
    	borderTopRightRadius: 5,
    },
    cardImageContainer: {},
    cardTitle: {
      fontWeight: 'bold'
    },
    cardSubtitle: {
      fontSize: 13,
      color: COLORS.CARD.SUBTITLE
    },
});