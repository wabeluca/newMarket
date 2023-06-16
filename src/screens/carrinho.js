import React from "react";
import { Text, StyleSheet, Dimensions, Image, View, TouchableOpacity, ScrollView } from "react-native";

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import asado_tira from '../../assets/produtos/asado_tira.png'
import denver_steak from '../../assets/produtos/denver_steak.png'
import flat_iron from '../../assets/produtos/flat_iron.png'
import prime_rib from '../../assets/produtos/prime_rib.png'
import tomahawk from '../../assets/produtos/tomahawk.png'

const width = Dimensions.get('screen').width
export default function Carrinho(){
    return<ScrollView>
        <Text style={estilos.tituloCarrinho}>Carrinho</Text>
        <Text style={estilos.cestaCarnes}>
            Resumo das Compras
        </Text>

        <View style={estilos.blocoCarnes}>
            <Image source={asado_tira} style={estilos.imagemCarnes}/>
            <Text style={estilos.itens}>Asado de Tira</Text>
            <Text style={estilos.valorIndividual}>148,98</Text>
            <TouchableOpacity style={estilos.botaoAdicionar}>
            <Text style={estilos.textoBotaoAdicionar} >
                Remover
            </Text>
            </TouchableOpacity>
        </View>
        <View style={estilos.blocoCarnes}>
            <Image source={tomahawk} style={estilos.imagemCarnes}/>
            <Text style={estilos.itens}>Tomahawk</Text>
            <Text style={estilos.valorIndividual}>189,90</Text>
            <TouchableOpacity style={estilos.botaoAdicionar}>
            <Text style={estilos.textoBotaoAdicionar} >
                Remover
            </Text>
            </TouchableOpacity>
        </View>
        <Text style={estilos.tituloCarrinho}>Total</Text>
        
        <TouchableOpacity style={estilos.botaoComprar}>
            <Text style={estilos.textoBotao} >
                Play
            </Text>
        </TouchableOpacity>
        

    </ScrollView>
}

const estilos = StyleSheet.create({
    tituloCarrinho: {
        fontWeight:"bold",
        textAlign: "center",
        fontSize: 18
    },
    cestaCarnes:{
        color:"#464646",
        fontSize:26,
        lineHeight: 42,
        fontWeight: "bold",
        textAlign: "center",
        color: "red",
    },
    topo:{
        width: "100%",
        height: 578 / 768 * width
    },
    acougue:{
        flexDirection:"row",
        paddingVertical: 12
    },
    nomeAcougue:{
        fontSize: 16,
        lineHeight: 40,
        marginLeft:12,
        fontWeight: "bold",
    },
    imagemAcougue:{
        width: 42,
        height: 42
    },
    descricao:{
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        paddingHorizontal: 12,
    },
    precoCesta:{
        color: "#880000",
        fontWeight: "bold",
        fontSize: 32,
        lineHeight: 42,
        marginTop: 8,
        paddingHorizontal: 12,
    },
    botaoComprar:{
        margin:16,
        marginTop:16,
        backgroundColor: "#B22222",
        paddingVertical:16,
        borderRadius:6,
    },

    botaoAdicionar:{
        marginLeft:20,
        justifyContent: "center",
        alignSelf: "center",
        height: 10,
        width: 90,
        backgroundColor: "#b22222",
        paddingVertical:16,
        borderRadius:6,
        marginRight: 10
    },
    textoBotao:{
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },

    textoBotaoAdicionar:{
        textAlign: "center",
        alignSelf: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
    textoCesta:{
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
    },
    itens:{
        fontSize: 16,
        lineHeight: 55,
        marginLeft:12,
        fontWeight:"bold",
        textAlign:"center",
    },
    valorIndividual:{
        fontSize: 16,
        lineHeight: 55,
        marginLeft:12,
        fontWeight:"bold",
        textAlign:"center",
        color: "#880000"
    },
    imagemCarnes:{
        width:60,
        height:60,
    },
    blocoCarnes:{
        flexDirection:"row",
        paddingVertical: 20,
        justifyContent: "space-between"
        
    }
    
})