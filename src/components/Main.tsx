import React, {useEffect} from 'react';
import {FlatList, ScrollView, StatusBar, Text, View, RefreshControl} from "react-native";
import styled from "styled-components/native";
import {newsApi} from "../axios/requests";
import axios from "axios";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";

const MainDiv = styled.View`
  margin-top: 10px;
  padding: 10px;
`;

const fontsize = {
    H3FONTSIZE: '20px',
}
const UserContainer = styled.Text`
  font-weight: 700;
  font-size: ${fontsize.H3FONTSIZE};
`;




function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator();






export const Main = () => {

    const [test, setTest] = React.useState<Array<any>>([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setTest(res.data)
                console.log(res)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])


    return (

        <MainDiv>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Settings" component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>

                    {/*<Text style={{color: 'red'}}>hello world</Text>*/}
                    {/*<StatusBar barStyle={'default'}/>*/}
                    {/*<FlatList*/}
                    {/*    data={test}*/}
                    {/*    keyExtractor={u => u.id}*/}
                    {/*    renderItem={({item}) => {*/}
                    {/*    return (*/}
                    {/*        <>*/}
                    {/*            <UserContainer>{item.username}</UserContainer>*/}
                    {/*            <Text>{item.address.city}</Text>*/}
                    {/*        </>*/}
                    {/*    )*/}
                    {/*}}/>*/}
                    {/*<Text style={{color: 'black'}}>ghjbmluhyirfghcvbn</Text>*/}
                    {/*<Text style={{color: 'black'}}>yguighjk</Text>*/}
                    {/*<Text style={{color: 'black'}}>sdfdsfsdfsdf</Text>*/}
                    {/*<Text style={{color: 'black'}}>uighjkghj</Text>*/}
                    {/*<Text style={{color: 'black'}}>sdfdsfsdfsdf</Text>*/}
                    {/*<Text style={{color: 'black'}}>hgjkhjkhjkhjk</Text>*/}
                    {/*<Text style={{color: 'black'}}>sdfdsfsdfsdf</Text>*/}
                    {/*<Text style={{color: 'black'}}>sdfsdfghjghjk</Text>*/}
                    {/*<Text style={{color: 'black'}}>sdfsdfghjghjk</Text>*/}
                    {/*<Text style={{color: 'black'}}>sdfsdfghjghjk</Text>*/}


        </MainDiv>
    );
};

