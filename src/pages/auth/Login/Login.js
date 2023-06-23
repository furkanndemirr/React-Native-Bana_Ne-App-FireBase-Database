import React, { useState } from "react";
import { View, Text } from "react-native";
import { Formik } from "formik";
import auth from "@react-native-firebase/auth";

import styles from "./Login.style";
import Input from  "../../../components/Input";
import Button from "../../../components/Button";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";

import {showMessage} from "react-native-flash-message";


const initialFormValues = {
    usermail: '',
    password: '',
};

const Login = ({navigation}) => {

    function handleSignUp () {
        navigation.navigate('SignPage')
    }

    const [loading, setLoading] = useState(false);

    async function handleFormSubmit(formValues) {
        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password
            )
            navigation.navigate('MessagesPage')
            setLoading(false)  
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "info",
            }),
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>bana ne?</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({values, handleChange, handleSubmit}) => (
                    <>
                        <Input 
                            placeholder="E-Posta"
                            iconName='calendar-account'
                            onType={handleChange('usermail')}
                            value={values.usermail}
                        />
                        <Input 
                            placeholder="Şifre"
                            isSecure
                            iconName='lock-outline'
                            onType={handleChange('password')}
                            value={values.password}
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </>
                )}
            </Formik>
            <Button text="Kayıt Ol" theme='secondary' onPress={handleSignUp} />
        </View>
    )
}

export default Login