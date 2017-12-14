import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header, Icon, Item, Input } from 'native-base';

class SearchHeader extends Component {
    render() {
        return (
            <Header
                style={{ height: 80}}
                searchBar
                rounded
            >
                <Item>
                    <Icon name= "ios-search" />
                    <Input
                        placeholder= "Enter Beer Name"
                        onChangeText= {this.props.onChangeText}
                        returnKeyType= "search"
                        onSubmitEditing= {this.props.beerSearch}
                    />
                </Item>
            </Header>
        );
    }
}

export default SearchHeader;