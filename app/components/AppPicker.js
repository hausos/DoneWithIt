import React, { useState } from 'react';
import { View, StyleSheet, Modal, Button, TouchableWithoutFeedback, FlatList} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';
import Screen from './Screen';
import AppButton from './AppButton';
import PickerItem from './PickerItem';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function AppPicker({icon, items, placeholder, onSelectItem, selectedItem}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
    
                <View style={styles.container}>
                    {icon && 
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={colors.medium}
                            style={styles.icon}
                        />
                    }
                    {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : (
                        <AppText style={styles.placeholder}>{placeholder}</AppText>
                    )}
                    <MaterialCommunityIcons
                            name="chevron-down"
                            size={20}
                            color={colors.medium}
                        />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>

                    <AppButton title="close" onPress={() => setModalVisible(false)} />
                    <FlatList 
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({item}) => 
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            /> }
                        />

                </Screen>
            </Modal>

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    },
    placeholder: {
        flex: 1,
        color: colors.medium,
    }

})

export default AppPicker;