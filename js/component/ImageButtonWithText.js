/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback, Image} from 'react-native';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ImageButton extends Component{

    static propTypes = {
        text: PropTypes.string,
        image: PropTypes.number,
        icon: PropTypes.string,
        onPress: PropTypes.func,
        imgSize: PropTypes.number,
        fontSize: PropTypes.number,
        color: PropTypes.string,
        btnWidth: PropTypes.number,
        btnHeight: PropTypes.number,
        backgroundColor: PropTypes.string
    };

    static defaultProps = {
        imgSize: px2dp(40),
        fontSize: px2dp(13),
        backgroundColor: 'transparent'
    };

    render() {
        const {text, image, icon, onPress, color, imgSize, fontSize, btnWidth, btnHeight, backgroundColor} = this.props;

        if (Platform.OS === 'ios') {
            if (image) {
                return (
                    <TouchableOpacity onPress={onPress}>
                        <View style={[styles.view, {
                            width: btnWidth,
                            height: btnHeight,
                            backgroundColor: backgroundColor
                        }]}>
                            <Image source={image} style={{width: imgSize, height: imgSize}}/>
                            <Text style={[styles.text, {fontSize: fontSize, color: color}]}>{text}</Text>
                        </View>
                    </TouchableOpacity>
                );
            } else if (icon) {
                return (
                    <TouchableOpacity onPress={onPress}>
                        <View style={[styles.view, {
                            width: btnWidth,
                            height: btnHeight,
                            backgroundColor: backgroundColor
                        }]}>
                            <Icon name={icon} size={imgSize} color={color}/>
                            <Text style={{fontSize: fontSize, color: color}}>{text}</Text>
                        </View>
                    </TouchableOpacity>
                );
            }
        } else if (Platform.OS === 'android') {
            if (image) {
                return (
                    <TouchableNativeFeedback onPress={onPress}>
                        <View style={[styles.view, {
                            width: btnWidth,
                            height: btnHeight,
                            backgroundColor: backgroundColor
                        }]}>
                            <Image source={image} style={{width: imgSize, height: imgSize}}/>
                            <Text style={[styles.text, {fontSize: fontSize, color: color}]}>{text}</Text>
                        </View>
                    </TouchableNativeFeedback>
                );
            } else if (icon) {
                return (
                    <TouchableNativeFeedback onPress={onPress}>
                        <View style={[styles.view, {
                            width: btnWidth,
                            height: btnHeight,
                            backgroundColor: backgroundColor
                        }]}>
                            <Icon name={icon} size={imgSize} color={color}/>
                            <Text style={{fontSize: fontSize, color: color}}>{text}</Text>
                        </View>
                    </TouchableNativeFeedback>
                );
            }
        }
    }
}

const styles = StyleSheet.create({
    view:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'rgba(255,255,255,0.7)'
    }
});