import React from 'react'

import { List } from 'react-native-paper'

import { StyleSheet, Text, View } from 'react-native'

const CryptosPage = () => {

    return <View style={styles.mainContainer}>
        <List.Section title="Accordions">
            <List.Accordion
                title="Uncontrolled Accordion"
                left={props => <List.Icon {...props} icon="folder" />}>
                <List.Item title="First item" />
                <List.Item title="Second item" />
            </List.Accordion>
            <List.Accordion
                title="Controlled Accordion"
                left={props => <List.Icon {...props} icon="folder" />}
                expanded={true}
                onPress={e => alert(e)}>
                <List.Item title="First item" />
                <List.Item title="Second item" />
            </List.Accordion>
        </List.Section>
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#262626",
        height: "70%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "60%",
        borderWidth: 10,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingTop: 10
    }
})

export default CryptosPage
