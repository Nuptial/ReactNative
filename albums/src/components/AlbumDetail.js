import React from 'react';
import { Text,View,Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {

    const {title,artist,image,url} = album;

    const {
        headerContentStyle,
        imageContainerStyle,
        imageStyle,
        headerTextStyle,
        imageContentStyle
    } = styles;

    //props.children render inside elements

    return (
        <Card>
            <CardSection>
                <View style={imageContainerStyle}>
                    <Image style={imageStyle} source={{uri:image}}/>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text> 
                    <Text>{artist}</Text> 
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageContentStyle} source={{uri:image}}/>
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    },
    headerTextStyle:{
        fontSize:18
    },
    imageStyle:{
        height:50,
        width:50
    },
    imageContainerStyle:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10,
        marginRight:10
    },
    imageContentStyle: {
        height:300,
        flex:1,
        width:null
    }
};

export default AlbumDetail;