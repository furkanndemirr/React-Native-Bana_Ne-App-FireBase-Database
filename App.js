import React from "react";
import { SafeAreaView,Text,Button } from "react-native";
import auth from "@react-native-firebase/auth";
import database from '@react-native-firebase/database';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/pages/auth/Login/Login";
import Sign from "./src/pages/auth/Sign/Sign";
import FlashMessage from "react-native-flash-message";
import Messages from "./src/pages/Messages/Messages";
import color from "./src/styles/color";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const Stack = createStackNavigator();

export default()=>{
    const [userSession,setUserSession]=React.useState();

    React.useEffect(() => {
        auth().onAuthStateChanged((user)=>{
            setUserSession(!!user);
        })
    },[]);
    const AuthStack = () => {
        return(
            <Stack.Navigator screenOptions={{headerShown: false}}>

                <Stack.Screen name="LoginPage" component={Login}></Stack.Screen>
                <Stack.Screen name="SignPage" component={Sign}></Stack.Screen>

            </Stack.Navigator>
        )
    }
    return(
        <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
        <Stack.Screen name="AuthStack" component={AuthStack} options={{headerShown: false}} />
        ) : (
        
          <Stack.Screen 
            name="MessagesPage" 
            component={Messages} options={{
              title: 'Durum Mesajları',
              headerTintColor: color.babyblue,
              headerTitleAlign: 'center',
              headerRight: () => 
                <Icon 
                  name='logout' 
                  size={30}
                  color={color.babyblue}
                  onPress={() => auth().signOut()} />
            }}
          />
        
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
    )
}
