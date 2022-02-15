export default function Card(props) {
	return (
		<View style={styles.card}>
	      { item.image != null && item.image.length > 0 && (
	        <View style={styles.imageContainer}>
	          <Image source={{uri: item.image }} style={styles.image} />
	        </View>
	      )}
	  		<View style={styles.content}>
	  			<Text style={styles.cardTitle}>{item.title}</Text>
	        {item.subtitle.length > 0 && <Text style={styles.cardSubtitle}>{item.subtitle}</Text>}
	  		</View>
		</View>
	);
}