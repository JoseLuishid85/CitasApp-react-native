import React, { useState, useEffect } from 'react'
import { Modal, SafeAreaView, Text, StyleSheet, View, TextInput, ScrollView, Pressable, Alert } from 'react-native'
import DatePicker from 'react-native-date-picker'

const Formulario = ({
    modalVisible,
    cerrarModal,
    pacientes,
    setPacientes,
    paciente: pacienteObj,
    setPaciente: setPacienteApp
}) => {

    const [id, setId] = useState('')
    const [paciente, setPaciente] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [sintoma, setSintoma] = useState('')

    useEffect(() => {
        if (Object.keys(pacienteObj).length > 0) {
            setId(pacienteObj.id)
            setPaciente(pacienteObj.paciente)
            setPropietario(pacienteObj.propietario)
            setEmail(pacienteObj.email)
            setTelefono(pacienteObj.telefono)
            setSintoma(pacienteObj.sintoma)
        }
    }, [pacienteObj])

    const hanleCitas = () => {
        if ([paciente, propietario, email, sintoma].includes('')) {
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios',
                [{ text: 'Aceptar' }]
            )
            return
        }

        const nuevoPaciente = {
            paciente,
            propietario,
            email,
            telefono,
            sintoma
        }

        if (id) {

            nuevoPaciente.id = id;
            const pacienteActu = pacientes.map(p =>
                p.id === nuevoPaciente.id ? nuevoPaciente : p
            );

            setPacientes(pacienteActu);
            setPacienteApp({})

        } else {
            nuevoPaciente.id = Date.now();
            setPacientes([...pacientes, nuevoPaciente]);
        }

        cerrarModal();
        setId('');
        setPaciente('')
        setPropietario('')
        setEmail('')
        setTelefono('')
        setSintoma('')
    }

    return (
        <Modal
            animationType='slide'
            visible={modalVisible}
        >

            <SafeAreaView style={styles.contenido}>
                <ScrollView>
                    <Text style={styles.titulo} >{pacienteObj.id ? 'Editar' : 'Nueva'} {''}
                        <Text style={styles.tituloBold}>Citas</Text>
                    </Text>

                    <Pressable
                        style={styles.btnCancelar}
                        onLongPress={() => {
                            setPacienteApp({})
                            setId('');
                            setPaciente('')
                            setPropietario('')
                            setEmail('')
                            setTelefono('')
                            setSintoma('')
                            cerrarModal()
                        }}
                    >
                        <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                    </Pressable>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Mascota</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Mascota'
                            placeholderTextColor={'#666'}
                            value={paciente}
                            onChangeText={setPaciente}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Nombre Propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Nombre Propietario'
                            placeholderTextColor={'#666'}
                            value={propietario}
                            onChangeText={setPropietario}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Email Propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Email Propietario'
                            placeholderTextColor={'#666'}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.label}>Telefono Propietario</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Telefono Propietario'
                            placeholderTextColor={'#666'}
                            keyboardType='number-pad'
                            value={telefono}
                            onChangeText={setTelefono}
                            maxLength={12}
                        />
                    </View>

                    <View style={[styles.campo, styles.sintomasInput]}>
                        <Text style={styles.label}>Sintomas</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={'#666'}
                            value={sintoma}
                            onChangeText={setSintoma}
                            multiline={true}
                            numberOfLines={4}
                        />
                    </View>

                    <Pressable
                        style={styles.btnNuevaCita}
                        onPress={hanleCitas}
                    >
                        <Text style={styles.btnNuevaCitaTexto}>{pacienteObj.id ? 'Editar' : 'Agregar'} Paciente</Text>
                    </Pressable>

                </ScrollView>
            </SafeAreaView>

        </Modal >
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#6d28d9',
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
    btnCancelar: {
        marginTop: 10,
        backgroundColor: '#5827a4',
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    btnCancelarTexto: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 18
    },
    campo: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    label: {
        color: '#fff',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600'
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
    },
    sintomasInput: {
        height: 100,
        marginBottom: 45
    },
    btnNuevaCita: {
        marginVertical: 30,
        marginHorizontal: 10,
        backgroundColor: '#F59E0B',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    btnNuevaCitaTexto: {
        textAlign: 'center',
        color: '#5827a4',
        fontWeight: '900',
        fontSize: 18
    }


})

export default Formulario