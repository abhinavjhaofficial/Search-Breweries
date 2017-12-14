import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from 'react-native';

import { Content, ListItem, List } from 'native-base' 

class SearchBody extends Component {
    render() { 

        const beerData = this.props.beerData

        return (

            <Content>

                <ListItem itemDivider style={{ flexDirection: "row", justifyContent: "center" }} >
                    <Image source={{ uri: beerData.labels.large }} style={{ height: 200, width: 200 }} />
                </ListItem>
                
               <List style= {{ backgroundColor: "white" }} >
                   <ListItem itemDivider>
                        <Text>Name</Text>
                   </ListItem>
                   <ListItem style= {{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <View>
                            <Text> {beerData.name} </Text>
                        </View>
                        <View>
                            <Button 
                                onPress= { () => this.addToFavourites(beerData.name) } title='+Favourites'>
                            </Button>
                        </View>
                   </ListItem>
                    <ListItem itemDivider>
                        <Text>Category</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{beerData.style.category.name}</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>Description</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{beerData.description}</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>Rating</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{beerData.abv}</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>Is Organic ?</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{beerData.isOrganic == 'Y' ? 'Yes' : 'No' }</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>Availablity</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{beerData.available.description ? beerData.available.description : 'No Information' }</Text>
                    </ListItem>

               </List>
            </Content>

        );
    }
}
export default SearchBody;