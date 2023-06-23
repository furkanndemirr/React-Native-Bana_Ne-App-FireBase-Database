import { StyleSheet } from "react-native";

import colors from "../../styles/color";

const base_style = StyleSheet.create ({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    button_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
    }
})

export default {
    primary: StyleSheet.create ({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: colors.babyblue,
        },
        title: {
            ...base_style.title,
            color: 'white',
        }
    }),
    secondary: StyleSheet.create ({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
            borderColor: colors.babyblue,
            borderWidth: 1,
        },
        title: {
            ...base_style.title,
            color: colors.babyblue,
        }
    })
}