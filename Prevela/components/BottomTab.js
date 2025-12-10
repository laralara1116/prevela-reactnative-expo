import React from "react";
import { BottomNavigation } from "react-native-paper";

import Home from "../pages/Home";
import Desejos from "../pages/Desejos";
import Perfil from "../pages/Perfil";

const routes = [
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'desejos', title: 'Desejos', focusedIcon: 'cards-heart', unfocusedIcon: 'cards-heart-outline' },
    { key: 'perfil', title: 'Perfil', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
];

const BottomTab = () => {
    const [index, setIndex] = React.useState(0);
    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        desejos: Desejos,
        perfil: Perfil,
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