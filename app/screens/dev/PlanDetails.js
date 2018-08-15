import React from "react";
import { View } from "react-native";
import { Content, Card, CardItem, Text, Body, Button } from "native-base";

export default class PlanDetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Detalhes",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  render() {
    const { item } = this.props.navigation.state.params;
    console.log("item", item);

    return (
      <View style={{ flex: 1 }}>
        <DetailsCard plan={item} />
      </View>
    );
  }
}

const DetailsCard = props => {
  const { plan } = props;
  return (
    <Content padder>
      <Card>
        <CardItem header bordered>
          <View>
            <Text>{plan.nome}</Text>
            <Text>{plan.operadora}</Text>
          </View>
        </CardItem>
        <CardItem>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>COBERTURA: </Text>
              <Text>{plan.cobertura}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>ABRANGÊNCIA: </Text>
              <Text>{plan.abrangencia_cobertura.toUpperCase()}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>SEGMENTAÇÃO: </Text>
              <Text>{plan.segmentacao_assistencial}</Text>
            </View>
          </View>
        </CardItem>
        <CardItem bordered>
          <Body>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>CONTRATAÇÃO: </Text>
              <Text>{plan.tipo_contratacao}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>ACOMODOÇÃO: </Text>
              <Text>{plan.acomodacao_hospitalar}</Text>
            </View>
          </Body>
        </CardItem>
        <CardItem footer bordered style={{justifyContent: 'center'}}>
          <Button
            style={{ alignSelf: "center", padding: 20 }}
            success
            onPress={() => {
            }}
          >
          <View>
            <Text style={{ fontWeight: 'bold' }}>REDE CREDENCIADA</Text>
            <Text style={{ fontSize: 14}}>Hospitais, Consultórios e Clínicas</Text>
          </View>
          </Button>
        </CardItem>
      </Card>
    </Content>
  );
};
