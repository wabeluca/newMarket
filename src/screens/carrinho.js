import React from "react";
import { Text, StyleSheet, Dimensions, Image, View, TouchableOpacity, ScrollView } from "react-native";

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import capaCd from '../../assets/produtos/capa.png'

const width = Dimensions.get('screen').width
export default function Carrinho(){
    return<ScrollView style={estilos.fundo}>
        <Text style={estilos.tituloReproduzindo}>Reproduzindo</Text>

        <View style={estilos.blocoCapa}>
            <Image source={capaCd} style={estilos.imagemCapa}/>
        </View>
        
        <Text style={estilos.tituloMusica}>Sinonimos</Text>
        <Text style={estilos.tituloArtista}>Chitãozinho & Xororó part. Ana Castela</Text>
        
        <TouchableOpacity style={estilos.botaoPlay}>
            <Text style={estilos.textoBotao} >
                Play
            </Text>
        </TouchableOpacity>


        <Text style={estilos.reproduzindo}> Reproduzindo - Sinonimos </Text>
        

    </ScrollView>
}

const estilos = StyleSheet.create({
    tituloReproduzindo: {
        fontWeight:"bold",
        textAlign: "center",
        fontSize: 18,
        color: "#fefffc",
        marginTop: 5
    },

    tituloMusica: {
        fontWeight:"bold",
        textAlign: "left",
        marginLeft: 20,
        fontSize: 18,
        color: "#fefffc",
        marginTop: -10
    },

    tituloArtista: {
        fontWeight:"bold",
        textAlign: "left",
        marginLeft: 20,
        fontSize: 18,
        color: "#fefffc",
        marginBottom: 25
    },
    
    
    fundo:{
        backgroundColor: "#4f4f4f"
    },

    botaoPlay:{
        margin:16,
        marginTop:16,
        marginLeft: 38,
        backgroundColor: "#008001",
        paddingVertical:16,
        width: 300,
        borderRadius:6,
    },

    
    textoBotao:{
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
    },

    textoBotaoAdicionar:{
        textAlign: "center",
        alignSelf: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },

    
    imagemCapa:{
        width:350,
        height:350,
        marginLeft: 15
    },
    blocoCapa:{
        flexDirection:"row",
        paddingVertical: 20,
        justifyContent: "space-between"
                
    },

    reproduzindo:{
        textAlign: "center",
        marginLeft: 20,
        color: "#fefffc",
        marginTop: 50
    }
    
})