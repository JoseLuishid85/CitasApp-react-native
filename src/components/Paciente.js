import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const Paciente = ({
    item,
    setModalVisible,
    pacienteEditar,
    pacienteEliminar,
    setModalPaciente,
    setPaciente
}) => {

    const { paciente, sintoma, id } = item;

    return (
        <Pressable
            onLongPress={() => {
                    setModalPaciente(true)
                    setPaciente(item)
                }
            }
        >
            <View style={styles.contenedor}>
                <Text style={styles.label}>Pacientes:</Text>
                <Text style={styles.texto}>{paciente}</Text>
                <Text style={styles.sintoma}>{sintoma}</Text>

                <View style={styles.contenedorBotones}>
                    <Pressable
                        style={[styles.btn, styles.btnEditar]}
                        onLongPress={() => {
                            setModalVisible(true);
                            pacienteEditar(id);
                        }
                        }
                    >
                        <Text style={styles.btnTexto}>Editar</Text>
                    </Pressable>

                    <Pressable
                        onLongPress={() => {
                            pacienteEliminar(id)
                        }}
                        style={[styles.btn, styles.btnEliminar]}>
                        <Text style={styles.btnTexto}>Eliminar</Text>
                    </Pressable>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomColor: '#94a3b8',
        borderBottomWidth: 1
    },
    label: {
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',
        marginTop: 5
    },
    texto: {
        color: '#6D28d9',
        fontSize: 24,
        fontWeight: '700',
        marginTop: 5
    },
    sintoma: {
        color: '#374151',
    },
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    btn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    btnEditar: {
        backgroundColor: '#f59e0b'
    },
    btnEliminar: {
        backgroundColor: '#eF4444'
    },
    btnTexto: {
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
        color: '#fff'
    }

})

export default Paciente