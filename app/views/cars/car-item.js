// @flow
import React, { Component, PureComponent } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Car } from "../../services/cars";

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150
    }
});

export default class CarItem extends PureComponent {
    _onPress = () => {
        if (this.props.onPressItem) {
            this.props.onPressItem(this.props.car);
        }
    };

    render() {
        let car: Car = this.props.car;
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text> {car.name} </Text>
                    <Text> {"€" + car.price + "/day"} </Text>

                    <Image
                        style={styles.image}
                        source={{ uri: car.imageUrl }}
                    />

                    <Text> {car.hasAC ? "Yes" : "No"} </Text>
                    <Text> {car.class} </Text>
                    <Text> {car.transmission} </Text>
                </View>
            </TouchableOpacity>
        );
    }
}