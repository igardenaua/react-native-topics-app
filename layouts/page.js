import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, ImageBackground, RefreshControl, Dimensions } from 'react-native';
import HTML from "react-native-render-html";

import Carousel from 'react-native-snap-carousel';
import { scrollInterpolator, animatedStyles } from '../utils/animations';

import * as Animatable from 'react-native-animatable';

import FadeIn from '../animations/fade-in';
import Api from '../network/api';
import Loader from '../shared/loader';


export default function Page({ data, dataUrl = false }) {
	const [page, setPage] = React.useState(data);
	const [carouselIndex, setCarouselIndex] = React.useState(0);
	const [isRefreshing, setRefreshing] = React.useState(false);

	const CarouselItemWidth = Dimensions.get('window').width - 55;
	const WindowWidth = Dimensions.get('window').width;

	const Graphics = () => page.gallery && page.gallery.length ? <Carousel
      	data={page.gallery}
      	renderItem={({item}) => (
      		<View style={styles.slideImageContainer}>
      			<Image source={{ uri: item }} style={{ width: CarouselItemWidth, ...styles.slideImage }} />
      		</View>
      	)}
      	layout="default"
      	autoplay={true}
      	loop={true}
      	autoplayInteval={5000}
      	itemWidth={CarouselItemWidth}
      	containerCustomStyle={styles.carousel}
      	sliderWidth={WindowWidth}
      	slideStyle={{
      		shadowColor: "#555",
			shadowOffset: {
				width: 0,
				height: 1,
			},
			shadowOpacity: 0.22,
			shadowRadius: 2.22,
			elevation: 3,
      	}}
        // scrollInterpolator={scrollInterpolator}
    /> : <ImageBackground 
    	style={styles.backdrop}
    	source={{ uri: page.image }}>
    		<View style={styles.headline}>
    			<Text style={styles.title}>{page.title}</Text>
    		</View>
  	</ImageBackground>;

  	return (
	    isRefreshing ? <Loader /> :
	    <Animatable.View
	    	animation="zoomIn"
	    	duration={550}
	    >
	    <ScrollView
	    	contentContainerStyle={styles.container}
	    	refreshControl={dataUrl ? <RefreshControl
		        refreshing={isRefreshing}
		        onRefresh={() => Api.fetch(dataUrl, setPage, [setRefreshing], page => console.log(page))}
		    /> : null}
	    >
		    
		    {page.subtitle != null && page.subtitle.length > 0 && <Text style={styles.subtitle}>{page.subtitle}</Text>}

		    <Graphics />

		    <View style={styles.body}>
		    	<HTML
		    		containerStyle={{ padding: 20, textAlign: 'justify' }}
		    		baseFontStyle={{ fontSize: 15, textAlign: 'justify' }}
		    		source={{ html: page.body }}
		    		contentWidth={CarouselItemWidth}
		    		tagsStyles={{
		    			p: {
		    				padding: 0,
		    				textAlign: 'justify'
		    			}
		    		}} />
		    </View>
	    </ScrollView>
	    </Animatable.View>
  	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
	    fontSize: 21,
	    textAlign: 'center',
	    color: 'white'
	},
	subtitle: {
		flex: 1,
		padding: 10,
		fontSize: 15,
		// backgroundColor: '#B0DEFF',
		backgroundColor: '#ddd',
		color: "#333",
		textAlign: 'center',
		width: "100%",
		shadowColor: "#555",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	},
	body: {
		// padding: 13,
	},
	backdrop: {
	    width: '100%',
	    height: 300
	},
	headline: {
		flex: 1,
		padding: 13,
	    justifyContent: 'center', //Centered vertically
	   	alignItems: 'center', // Centered horizontally
	    backgroundColor: 'rgba(0,0,0,0.34)'
	},
	carousel: {
		paddingTop: 21
	},
	slideImage: {
		height: 300,
		borderRadius: 5,
	},
	slideImageContainer: {
		shadowColor: "#555",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3,
	}
});