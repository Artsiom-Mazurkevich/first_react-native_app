import {StatusBar} from 'expo-status-bar';
import {FlatList, Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {Main} from "./src/components/Main";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

const data = [
    {model: 'BMW 2 Series Gran Coupe', price: 36350, url: 'https://im.kommersant.ru/Issues.photo/AUTO_News/2019/10/16/KMO_152985_05031_1_t218_115607.jpg'},
    {model: 'BMW 2 Series Coupe', price: 35700, url: 'https://cdn.euroncap.com/media/67764/bmw-2-series-coupe.png'},
    {model: 'BMW 3 Series Sedan', price: 41450, url: 'http://avatars.mds.yandex.net/get-verba/1540742/2a00000180d7fa047e2e09e71e665301c310/cattouchretcr'},
    {model: 'BMW 4 Series Coupe', price: 45800, url: 'https://s.auto.drom.ru/i24206/c/photos/fullsize/bmw/4-series/bmw_4-series_685385.jpg'},
    {model: 'BMW 4 Series Gran Coupe', price: 45200, url: 'https://motor.ru/imgs/2021/06/09/08/4709349/20db9b8342d65ce434c26462f2573117fafc5787.jpg'},
    {model: 'BMW 4 Series Convertible', price: 53300, url: 'https://www.bmw.by/content/dam/bmw/common/all-models/4-series/convertible/2020/highlights/bmw-4-series-convertible-st-xxl.jpg'},
    {model: 'BMW 5 Series Sedan', price: 54200, url: 'https://www.bmw.by/content/dam/bmw/common/all-models/5-series/sedan/2021/Highlights/bmw-5-series-sedan-gallery-image-Individual-01_890.jpg'},
    {model: 'BMW 7 Series Sedan', price: 86800, url: 'https://s.auto.drom.ru/i24229/c/photos/fullsize/bmw/7-series/bmw_7-series_872444.jpg'},
    {model: 'BMW 8 Series Coupe', price: 85000, url: 'https://s.auto.drom.ru/i24222/c/photos/fullsize/bmw/8-series/bmw_8-series_818882.jpg'},
    {model: 'BMW 8 Series Gran Coupe', price: 85000, url: 'https://a.d-cd.net/xgAAAgOcveA-960.jpg'},
    {model: 'BMW 8 Series Convertible', price: 94400, url: 'https://www.bmw.co.uk/content/dam/bmw/common/all-models/8-series/convertible/2022/technical-data/bmw-8-series-convertible-technical-data-sp-desktop.jpg'},
];


function HomeScreen() {
    const dimensions = useWindowDimensions();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <Text style={{color: 'white', zIndex: 2, position: 'absolute', top: 150, fontSize: 35, fontWeight: '700'}}>Freude am Fahren</Text>
            <Image style={{width: dimensions.width, height: dimensions.height}} source={{uri:'https://i.pinimg.com/550x/28/76/45/287645a299278424d8c830a4b1fc07c7.jpg'}}/>
        </View>
    );
}

function SettingsScreen() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <FlatList data={data} renderItem={({item, index, separators}) => {
                return <View style={{backgroundColor: 'white'}}>
                    <Image source={{uri: item.url}} style={{
                        width: windowWidth * 0.8,
                        height: 200,
                        marginBottom: 20,
                        marginTop: 30,
                        borderRadius: 10,
                        marginHorizontal: windowWidth *0.1
                    }}/>
                    <Text style={{width: windowWidth, fontSize: 15, fontWeight: '500'}}>{item.model}</Text>
                    <Text style={{width: windowWidth, fontSize: 15, fontWeight: '500'}}>{item.price}$</Text>
                </View>
            }}/>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName: string = '';

                        if (route.name === 'Home') {
                            iconName = 'home'
                        } else if (route.name === 'Price List') {
                            iconName = 'cash-outline'
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Price List" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}


