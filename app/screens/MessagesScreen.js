import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';
import ListDeleteAction from '../components/ListItemDeleteAction';


const initialMessage = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessage);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        // this function deletes the message from messages
        // it needs to call the server
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList 
                data={messages} keyExtractor={message => message.id.toString()}
                renderItem= {
                ({item}) => <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("Message selected", item)}
                    renderRightActions={() => (
                        <ListDeleteAction onPress={() => handleDelete(item)}/>
                    )}
                      />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => 
                    setMessages([
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require('../assets/mosh.jpg')
                        }
                    ])
                }
            />

        </Screen>
    );
}

const styles = StyleSheet.create({

    
})

export default MessagesScreen;