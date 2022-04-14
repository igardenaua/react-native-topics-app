import React from 'react';
import { StyleSheet, LogBox, FlatList, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import GallerySwiper from "react-native-gallery-swiper";
import * as Animatable from 'react-native-animatable';

import Api from "../network/api";
import URLs from "../network/urls";

LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

export default function Gallery() {
	const [images, setImages] = React.useState([]);
	const [isGalleryVisible, toggleGallery] = React.useState(false);

	React.useEffect(() => {Api.fetch(URLs.gallery, setImages); }, []);

	return <View style={styles.gridContainer}>
		
	    { isGalleryVisible ? <Animatable.View animation="fadeIn" duration={500}>
	    	<GallerySwiper
			    images={images.map(i => ({ uri: i.image }))}
			    style={{...styles.gallery }}
			    // initialNumToRender={2}
			    onSwipeUpReleased={() => toggleGallery(false)}
			    onSwipeDownReleased={() => toggleGallery(false)}
			/>
	    </Animatable.View> : <FlatList
			data={images}
			keyExtractor={i => i.id.toString()}
			numColumns={3}
			style={styles.gridList}
			renderItem={({item, index}) => (
				<TouchableOpacity onPress={() => toggleGallery(true)}>
					<Animatable.View style={styles.imageOuter} animation="fadeInUp" delay={index * 50}>
						<Image source={{ uri: item.image }} style={styles.image} />
					</Animatable.View>
				</TouchableOpacity>
			)}
		/> }
    </View>;
}

const styles = StyleSheet.create({
  	gallery: {
  		backgroundColor: 'rgba(0,0,0,0.8)',
  		width: screenWidth,
  		height: screenHeight,
  		// position: 'absolute',
  		flex: 1,
  	},
  	gridContainer: {
  		flex: 1,
  		alignItems: 'center',
  		justifyContent: 'center',
  		// backgroundColor: 'rgba(0,0,0,0.5)'
  	},
  	gridList: {

  	},
  	image: {
  		// borderRadius: 5,
  		width: screenWidth/3,
  		height: screenWidth/3,
  	},
  	imageOuter: {
  		flex: 1,
  		width: screenWidth/3,
  		height: screenWidth/3,
  		// alignItems: 'center',
  		// justifyContent: 'center',
  	},
});