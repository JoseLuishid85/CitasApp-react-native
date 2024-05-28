import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Modal, Pressable, SafeAreaView, StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacioPaciente from './src/components/InformacioPaciente';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalPaciente, setModalPaciente] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState([]);

  const pacienteEditar = id => {
    const pacienteEdit = pacientes.filter(paciente => paciente.id === id);
    setPaciente(pacienteEdit[0]);
  }

  const pacienteEliminar = id => {
    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        { text: 'Cancelar' },
        {
          text: 'Eliminar', onPress: () => {
            const pacienteActu = pacientes.filter(p => p.id !== id)
            setPacientes(pacienteActu);
          }
        }
      ]
    )
  }

  const cerrarModal = () => {
    setModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => {
          setModalVisible(true)
        }}
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {
        pacientes.length === 0 ?
          <Text style={styles.noPacientes}>No hay pacientes aún</Text> :
          <FlatList
            style={styles.listado}
            data={pacientes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <Paciente
                  item={item}
                  setModalVisible={setModalVisible}
                  pacienteEditar={pacienteEditar}
                  pacienteEliminar={pacienteEliminar}
                  setModalPaciente={setModalPaciente}
                  setPaciente={setPaciente}
                />
              )
            }}
          />
      }

      {
        modalVisible && (
          <Formulario
            modalVisible={modalVisible}
            cerrarModal={cerrarModal}
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
        )
      }



      <Modal visible={modalPaciente} animationType='fade'>
        <InformacioPaciente
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
    marginTop: 35,
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6d28d9'
  },
  btnNuevaCita: {
    backgroundColor: '#6d25d9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '900'
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600'
  },
  listado: {
    marginTop: 40,
    marginHorizontal: 10
  }
});
