import React from "react";
import { ScrollView, View, TextInput, Text } from "react-native";
import { Button } from "native-base";

import { GoogleSignin, GoogleSigninButton, statusCodes } from "react-native-google-signin";

GoogleSignin.configure({
  iosClientId: "697909354633-djknpnl7a10qve1op0b4bnb2phakuv1l.apps.googleusercontent.com" // only for iOS
});

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "suzan@hada.digital",
      pass: "6962"
    };
  }

  signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    alert(userInfo)
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      alert(statusCodes.SIGN_IN_CANCELLED)
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
      alert(statusCodes.IN_PROGRESS)

    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      alert(statusCodes.PLAY_SERVICES_NOT_AVAILABLE)

    } else {
      // some other error happened
      alert('else')

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

            <GoogleSigninButton
              style={{ width: 48, height: 48 }}
              size={GoogleSigninButton.Size.Icon}
              color={GoogleSigninButton.Color.Dark}
              onPress={alert('dsasdfasdf')}
            />
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
