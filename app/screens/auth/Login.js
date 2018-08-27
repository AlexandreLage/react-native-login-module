import React from "react";
import { ScrollView, View, TextInput, Text, AsyncStorage } from "react-native";
import { Button } from "native-base";

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from "react-native-google-signin";

GoogleSignin.configure({
  iosClientId:
    "697909354633-djknpnl7a10qve1op0b4bnb2phakuv1l.apps.googleusercontent.com" // only for iOS
});

// In React Native applications
import Parse from "parse/react-native";
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize("N5HzTm2AikuVlrTLHwh5NnPcKDHUgcFXQJC7enzX", "unused");
//javascriptKey is required only if you have it on server.

Parse.serverURL = "http://192.168.0.7:1337/parse";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "suzan@hada.digital",
      pass: "6962"
    };
  }

  _linkWith(type, authData) {
    console.log("authData: ", authData);

    const options = {
      authData: authData
    };

    let user = new Parse.User();
    user._linkWith(type, options).then(
      function(user) {
        // user
        console.log("user: ", user);
        alert('LoginComSucesso')
      },
      function(error) {
        console.log("Error linking/creating user: " + error);
        alert("Error linking/creating user: " + error);
        // TODO handle error
      }
    );
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("userInfo: ", userInfo);

      let authData = {
        id: userInfo.id,
        id_token: userInfo.idToken,
        access_token: userInfo.accessToken
      };

      this._linkWith("google", authData);

      this.setState({ userInfo });
    } catch (error) {
      console.log("error: ", error);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: "white", top: 80 }}>
          <View style={{ flex: 1, justifyContent: "center", margin: 10 }}>
            <View
              style={{
                alignSelf: "center",
                backgroundColor: "green",
                width: 100,
                height: 100,
                borderRadius: 10,
                marginBottom: 40
              }}
            />
            <TextInput
              style={{
                height: 40,
                padding: 10,
                borderColor: "green",
                borderWidth: 1,
                borderRadius: 10,
                margin: 5,
                textAlign: "center"
              }}
              placeholder="E-mail"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry={true}
              style={{
                height: 40,
                padding: 10,
                borderColor: "green",
                borderWidth: 1,
                borderRadius: 10,
                margin: 5,
                textAlign: "center"
              }}
              placeholder="Senha"
              onChangeText={pass => this.setState({ pass })}
              value={this.state.pass}
            />
            <Button
              style={{
                alignSelf: "center",
                paddingHorizontal: 30,
                margin: 5,
                borderRadius: 25
              }}
              onPress={() => alert("NavigateToHome")}
              success
            >
              <Text>ENTRAR</Text>
            </Button>

            <View style={{ flex: 1, justifyContent: "center" }}>
              <Button
                style={{
                  alignSelf: "center",
                  paddingHorizontal: 30,
                  margin: 5,
                  borderRadius: 25,
                  backgroundColor: "#2447c3"
                }}
                onPress={() => alert("NavigateToHome")}
                success
              >
                <Text style={{ color: "white" }}>Login com Facebook</Text>
              </Button>
              <Button
                style={{
                  alignSelf: "center",
                  paddingHorizontal: 30,
                  margin: 5,
                  borderRadius: 25
                }}
                onPress={this.signIn}
                success
              >
                <Text>Login com +Google</Text>
              </Button>
            </View>

            <Text
              onPress={() => alert("NavigateToRecoverPassword")}
              style={{ alignSelf: "center", marginTop: 40 }}
            >
              Recuperar senha
            </Text>
          </View>
        </ScrollView>
        <Button
          style={{
            alignSelf: "stretch",
            justifyContent: "center",
            paddingHorizontal: 30,
            borderRadius: 0
          }}
          success
          onPress={() => alert("NavigateToCadastro")}
        >
          <Text style={{ textAlign: "center" }}>CADASTRE-SE</Text>
        </Button>
      </View>
    );
  }
}
