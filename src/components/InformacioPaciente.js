import React from 'react'
import { SafeAreaView, Text, View, Pressable, StyleSheet } from 'react-native'

const InformacioPaciente = ({ paciente, setModalPaciente, setPaciente }) => {
    return (
        <SafeAreaView style={styles.contenedor}>

            <Text style={styles.titulo}>Informacio  {''}
                <Text style={styles.tituloBold}>Paciente</Text>
            </Text>

            <View>
                <Pressable
                    style={styles.btnCerrar}
                    onLongPress={() => {
                            setModalPaciente(false)
                            setPaciente([])
                        }
                    }
                >
                    <Text style={styles.btnCerrarTexto}> X Cerrar</Text>
                </Pressable>
            </View>

            <View style={styles.contenido}>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Mascota:</Text>
                    <Text style={styles.valor}>{paciente.paciente}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Nombre Propietario:</Text>
                    <Text style={styles.valor}>{paciente.propietario}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.valor}>{paciente.email}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Telefono:</Text>
                    <Text style={styles.valor}>{paciente.telefono}</Text>
                </View>
                <View style={styles.campo}>
                    <Text style={styles.label}>Sintoma:</Text>
                    <Text style={styles.valor}>{paciente.sintoma}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#f59e0b',
        flex: 1
    },
    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        margin: 20,
        color: '#fff'
    },
    tituloBold: {
        fontWeight: '900'
    },
    btnCerrar: {
        marginTop: 10,
        backgroundColor: '#E06900',
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    btnCerrarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 18
    },
    contenido: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginTop: 15,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    campo: {
        marginBottom: 10
    },
    label: {
        textTransform: 'uppercase',
        color: '#374151',
        fontWeight: '600',
        marginBottom: 3
    },
    valor: {
        fontWeight: '700',
        fontSize: 22,
        color: '#334155'
    }
})

export default InformacioPaciente