import { View, Text } from "react-native";
import React from "react";
import { BottomNavigation } from "react-native-paper";

const routes = [
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'desejos', title: 'Desejos', focusedIcon: 'cards-heart', unfocusedIcon: 'cards-heart-outline' },
    { key: 'perfil', title: 'Perfil', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
];

const BottomTab = () => {
    const [index, setIndex] = React.useState(0);
    const renderScene = BottomNavigation.SceneMap({
        home: () => <View></View>,
        desejos: () => <View></View>,
        perfil: () => <View></View>,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{ backgroundColor: '#fff0fa' }}
            theme={{ colors: { secondaryContainer: '#ffc9ef' } }}
            activeColor="#210011"
            inactiveColor="#210011"
        />
    );
};

export default BottomTab;