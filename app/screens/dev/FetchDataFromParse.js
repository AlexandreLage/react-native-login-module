import React from "react";
import { FlatList, View, AsyncStorage } from "react-native";
import {
  Content,
  Button,
  Text,
  List,
  ListItem,
  Icon,
  Right,
  Left,
  Body
} from "native-base";

// In React Native applications
import Parse from "parse/react-native";
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize("N5HzTm2AikuVlrTLHwh5NnPcKDHUgcFXQJC7enzX", "unused");
//javascriptKey is required only if you have it on server.

Parse.serverURL = "http://192.168.0.7:1337/parse";

class Plan extends Parse.Object {
  constructor() {
    // Pass the ClassName to the Parse.Object constructor
    super("Plan");
    // All other initialization
    this.sound = "Rawr";
  }

  // hasSuperHumanStrength() {
  //   return this.get('strength') > 18;
  // }
  //
  // static spawn(strength) {
  //   var monster = new Monster();
  //   monster.set('strength', strength);
  //   return monster;
  // }
}

// Specify the Object subclasses (after defining the class)...
Parse.Object.registerSubclass("Plan", Plan);

const planos = [
  {
    id: 57362,
    id_PLANO: 17537823,
    codigo: 480122189,
    nome: "Bradesco Saúde Top 129 SPP E CE I",
    registro: "005711",
    operadora: "BRADESCO SAUDE S.A.",
    modalidade_code: 28,
    modalidade_operadora: "SEGURADORA",
    porte_operadora: "GRANDE",
    vigencia_plano: "P",
    contratacao_code: 2,
    tipo_contratacao: "COLETIVO EMPRESARIAL",
    contratacao: "COLETIVO",
    segmentacao_code: 6,
    tipo_segmentacao_assistencial: "AMBULATORIAL + HOSPITALAR COM OBSTETRÍCIA",
    segmentacao_assistencial: "AMB + HOSP C/ OBST",
    cobertura: "MÉDICO-HOSPITALAR",
    tipo_financiamento: "Pós-estabelecido",
    abrangencia_cobertura_code: 3,
    abrangencia_cobertura: "Estadual",
    fator_moderador: "AUSENTE",
    log_fator_moderador: 0,
    acomodacao_hospitalar: "COLETIVA",
    status_plano: "ATIVO",
    data_status_plano: "02/03/2018 19:00:40"
  },
  {
    id: 87829,
    id_PLANO: 16417716,
    codigo: 470918147,
    nome: "Bradesco Saúde Hospitalar Nacional 2 Q CE B",
    registro: "005711",
    operadora: "BRADESCO SAUDE S.A.",
    modalidade_code: 28,
    modalidade_operadora: "SEGURADORA",
    porte_operadora: "GRANDE",
    vigencia_plano: "P",
    contratacao_code: 2,
    tipo_contratacao: "COLETIVO EMPRESARIAL",
    contratacao: "COLETIVO",
    segmentacao_code: 2,
    tipo_segmentacao_assistencial: "HOSPITALAR COM OBSTETRÍCIA",
    segmentacao_assistencial: "HOSP C/ OBST",
    cobertura: "MÉDICO-HOSPITALAR",
    tipo_financiamento: "Pre-estabelecido",
    abrangencia_cobertura_code: 1,
    abrangencia_cobertura: "Nacional",
    fator_moderador: "AUSENTE",
    log_fator_moderador: 0,
    acomodacao_hospitalar: "INDIVIDUAL",
    status_plano: "ATIVO",
    data_status_plano: "19/03/2014 19:27:31"
  },
  {
    id: 96838,
    id_PLANO: 16743322,
    codigo: 477953173,
    nome: "Perfil PE E CE copart",
    registro: "005711",
    operadora: "BRADESCO SAUDE S.A.",
    modalidade_code: 28,
    modalidade_operadora: "SEGURADORA",
    porte_operadora: "GRANDE",
    vigencia_plano: "P",
    contratacao_code: 2,
    tipo_contratacao: "COLETIVO EMPRESARIAL",
    contratacao: "COLETIVO",
    segmentacao_code: 6,
    tipo_segmentacao_assistencial: "AMBULATORIAL + HOSPITALAR COM OBSTETRÍCIA",
    segmentacao_assistencial: "AMB + HOSP C/ OBST",
    cobertura: "MÉDICO-HOSPITALAR",
    tipo_financiamento: "Pre-estabelecido",
    abrangencia_cobertura_code: 4,
    abrangencia_cobertura: "Grupo de municípios",
    fator_moderador: "CO-PARTICIPACÃO",
    log_fator_moderador: 1,
    acomodacao_hospitalar: "COLETIVA",
    status_plano: "ATIVO",
    data_status_plano: "17/03/2017 19:05:46"
  },
  {
    id: 96839,
    id_PLANO: 16743349,
    codigo: 477954171,
    nome: "Perfil PE Q CE",
    registro: "005711",
    operadora: "BRADESCO SAUDE S.A.",
    modalidade_code: 28,
    modalidade_operadora: "SEGURADORA",
    porte_operadora: "GRANDE",
    vigencia_plano: "P",
    contratacao_code: 2,
    tipo_contratacao: "COLETIVO EMPRESARIAL",
    contratacao: "COLETIVO",
    segmentacao_code: 6,
    tipo_segmentacao_assistencial: "AMBULATORIAL + HOSPITALAR COM OBSTETRÍCIA",
    segmentacao_assistencial: "AMB + HOSP C/ OBST",
    cobertura: "MÉDICO-HOSPITALAR",
    tipo_financiamento: "Pre-estabelecido",
    abrangencia_cobertura_code: 4,
    abrangencia_cobertura: "Grupo de municípios",
    fator_moderador: "AUSENTE",
    log_fator_moderador: 0,
    acomodacao_hospitalar: "INDIVIDUAL",
    status_plano: "ATIVO",
    data_status_plano: "17/03/2017 19:06:11"
  },
  {
    id: 98454,
    id_PLANO: 17530701,
    codigo: 479942189,
    nome: "Bradesco Saúde Efetivo II E CA 6",
    registro: "005711",
    operadora: "BRADESCO SAUDE S.A.",
    modalidade_code: 28,
    modalidade_operadora: "SEGURADORA",
    porte_operadora: "GRANDE",
    vigencia_plano: "P",
    contratacao_code: 3,
    tipo_contratacao: "COLETIVO POR ADESÃO",
    contratacao: "COLETIVO",
    segmentacao_code: 6,
    tipo_segmentacao_assistencial: "AMBULATORIAL + HOSPITALAR COM OBSTETRÍCIA",
    segmentacao_assistencial: "AMB + HOSP C/ OBST",
    cobertura: "MÉDICO-HOSPITALAR",
    tipo_financiamento: "Pre-estabelecido",
    abrangencia_cobertura_code: 1,
    abrangencia_cobertura: "Nacional",
    fator_moderador: "AUSENTE",
    log_fator_moderador: 0,
    acomodacao_hospitalar: "COLETIVA",
    status_plano: "ATIVO",
    data_status_plano: "06/02/2018 19:39:37"
  }
];

export default class FetchDataFromParseScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planos_online: []
    };
  }

  //create class if it does not exist
  createPlanObject(jsonObject) {
    let plan = new Plan();
    plan.set(jsonObject); // fill it in

    //save it
    plan.save(null, {
      success: function(plan) {
        // Execute any logic that should take place after the object is saved.
        alert("New plan created with objectId: " + plan.id);
      },
      error: function(plan, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert("Failed to create new plan, with error code: " + error.message);
      }
    });
  }

  queryAllPlans() {
    console.log("queryAllPlans()");

    var Plan = Parse.Object.extend("Plan");
    var query = new Parse.Query(Plan);

    query
      .find()
      .then(results => {
        console.log("results: ", results);

        //convert to common json objects
        let json = results.map(item => {
          return item.toJSON();
        });

        console.log("json: ", json);

        return json;
      })
      .then(json => {
        this.setState({ planos_online: json });
      });
  }

  render() {
    console.log("this.state: ", this.state);

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20
          }}
        >
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Salvar planos: transforma um array de planos (const planos = [...])
            em array de Plan e envia cada objeto para o server.
          </Text>
          <Button
            style={{ alignSelf: "center", margin: 10 }}
            success
            onPress={() => {
              planos.map(item => {
                this.createPlanObject(item);
              });
            }}
          >
            <Text>PUSH 5 PLANOS</Text>
          </Button>
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Atualizar lista: query todos os Plan do server, transforma em array
            de JSON, popula o state e atualiza o Flatlist.
          </Text>
          <Button
            style={{ alignSelf: "center", margin: 10 }}
            onPress={() => {
              this.queryAllPlans();
            }}
          >
            <Text>FETCH PLANOS</Text>
          </Button>
        </View>

        <Content>
          <List
            dataArray={this.state.planos_online}
            renderRow={item => (
              <ListItem icon>
                <Left>
                  <Button style={{ backgroundColor: "#007AFF" }}>
                    <Icon active name="medkit" />
                  </Button>
                </Left>
                <Body>
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={{fontSize: 10, fontWeight: 'bold'}}>{item.nome}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text>{item.operadora}</Text>
                    </View>
                  </View>
                </Body>
                <Right>
                  <Icon active name="arrow-forward" />
                </Right>
              </ListItem>
            )}
          />
        </Content>
      </View>
    );
  }
}
