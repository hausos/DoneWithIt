import React from 'react';

import Screen from '../components/Screen';
import {ListItem} from '../components/lists';
import SettingsLinks from '../components/SettingsLinks';
import colors from '../config/colors';
import { StyleSheet, View, FlatList } from 'react-native';


const menuItems = [
    {
        title: 'My listing',
        icon: 'format-list-bulleted',
        iconColor: colors.primary,
    },
    {
        title: 'My messages',
        icon: 'email',
        iconColor: colors.secondary,
    },

]

function AccountScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <ListItem
                    title='Aurora Makovac'
                    subTitle='heeejjj jowwww'
                    image = {require('../assets/mosh.jpg')}
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor = {menuItem => menuItem.title}
                    renderItem={({item}) =>
                        <SettingsLinks 
                            title={item.title}
                            icon={item.icon}
                            iconColor={item.iconColor}
                            onPress={() => console.log()}
                        />
                    }
                ></FlatList>
            </View>

            <SettingsLinks
                title='Log Out'
                icon='logout'
                iconColor={colors.yellow}
                onPress={() => console.log()}
            />
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    }
})

export default AccountScreen;