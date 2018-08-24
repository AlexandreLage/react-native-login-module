import React from "react";
import { View, TextInput, Text } from "react-native";
import { Button } from "native-base";
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pass: ""
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>


        <View style={{ flex: 1, justifyContent: "center", margin: 10 }}>
        <View
          style={{
            alignSelf: "center",
            backgroundColor: "blue",
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
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
              margin: 5
            }}
            placeholder="E-mail"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            style={{
              height: 40,
              padding: 10,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
              margin: 5
            }}
            placeholder="Senha"
            onChangeText={pass => this.setState({ pass })}
            value={this.state.pass}
          />
          <Button
            style={{ alignSelf: "center", paddingHorizontal: 10, margin: 5 }}
            success
          >
            <Text>ENTRAR</Text>
          </Button>
        </View>
      </View>
    );
  }
}
