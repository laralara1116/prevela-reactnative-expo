import { View, Text } from "react-native";
import React from "react";
import { BottomNavigation } from "react-native-paper";

const routes = [
    { key: 'home', title: 'Home', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'desejos', title: 'Desejos', focusedIcon: 'album' },
    { key: 'perfil', title: 'Perfil', focusedIcon: 'history' },
];

const BottomTab = () => {
    const [index, setIndex] = React.useState(0);
    const renderScene = BottomNavigation.SceneMap({
        home: () => <View><Text>Home</Text></View>,
        desejos: () => <View><Text>Desejos</Text></View>,
        perfil: () => <View><Text>Perfil</Text></View>,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default BottomTab;