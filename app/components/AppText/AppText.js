import React from 'react';
import { Text} from 'react-native';

import styles from './styles';

function AppText(props) {
    return <Text class={styles.text}>{props.children}</Text>;
}



export default AppText;