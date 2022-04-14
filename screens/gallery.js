import React from 'react';
import {
    FlatList,
    Image,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Api from '../network/api';
import URLs from '../network/urls';
import Loader from '../shared/loader';

const { width, height } = Dimensions.get('window');
const IMAGE_SIZE = 80;
const SPACING = 10;

export default () => {
    const [gallery, setGallery] = React.useState(null);
    const [activeIndex, setActiveIndex] = React.useState(0);

    React.useEffect(() => {
        Api.fetch(URLs.gallery, setGallery);
    });

    const topRef = React.useRef();
    const thumbRef = React.useRef();
    const scrollToActiveIndex = index => {
        setActiveIndex(index);
        topRef?.current?.scrollToOffset({
            offset: index * width,
            animated: true
        });

        thumbRef?.current?.scrollToOffset({
            offset: index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2 ?
                index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2:
                0,
            animated: true
        });
    };

    if (!gallery) return <Loader/>;

    return <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <FlatList
            ref={topRef}
            data={gallery}
            keyExtractor={i => i.id.toString()}
            horizontal
            pagingEnabled
            onMomentumScrollEnd={ev => {
                scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width));
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <View style={{ width, height }}>
                    <Image
                        source={{ uri: item.image }}
                        style={{
                            width,
                            height: height - IMAGE_SIZE
                        }}
                    />
                </View> 
            )}
        />
        <FlatList
            ref={thumbRef}
            data={gallery}
            keyExtractor={i => i.id.toString()}
            horizontal
            style={{
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,.5)',
                paddingTop: 13,
                paddingBottom: 21,
                bottom: 0
            }}
            contentContainerStyle={{
                paddingHorizontal: SPACING
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) =>  (
                <TouchableOpacity
                    onPress={() => scrollToActiveIndex(index)}
                >
                    <Image
                        source={{ uri: item.image }}
                        style={{
                            width: IMAGE_SIZE,
                            height: IMAGE_SIZE,
                            borderRadius: 12,
                            borderWidth: 2,
                            borderColor: activeIndex == index ? '#fff' : 'transparent',
                            marginRight: SPACING
                        }}
                    />
                </TouchableOpacity>
            )}
        />
    </View>;
};
