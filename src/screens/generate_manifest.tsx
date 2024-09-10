import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useMediaQuery } from "react-responsive";
import type { ManifestForm } from "../types/ManifestType";


const Generate_manifest: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // Detecta si es una pantalla grande
  const [formData, setFormData] = useState<ManifestForm>({
    fechaRecoleccion: '',
    numeroManifiesto: 0,
    razonSocial: '',
    municipio: '',
    estado: '',
    transporte: '',
    operador: '',
    fechaEntrega: '',
    numeroPlacas: 0,
    recat: 0,
    fechaEntregaScursal: '',
    observaciones: '',
  });

  const handleChange = (name: keyof ManifestForm, value: string | number) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);   
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={isDesktop ? styles.row : {}}> 
      <View style={styles.column}>
        <Text style={styles.label}>Fecha de Recolección</Text>
        <TextInput 
          style={styles.input} 
          value={formData.fechaRecoleccion}
          onChangeText={(value) => handleChange('fechaRecoleccion', value)}
          placeholder="Fecha de Recolección"
        />
      </View>

      <View style={styles.column}>
        <Text style={styles.label}>Número de Manifiesto</Text>
        <TextInput 
          style={styles.input} 
          value={String(formData.numeroManifiesto)} 
          onChangeText={(value) => handleChange('numeroManifiesto', Number(value))}
          placeholder="Número de Manifiesto"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.column}>
        <Text style={styles.label}>Razón Social</Text>
        <TextInput 
          style={styles.input} 
          value={formData.razonSocial}
          onChangeText={(value) => handleChange('razonSocial', value)}
          placeholder="Razón Social"
        />
      </View>
  

  
      <View style={styles.column}>
        <Text style={styles.label}>Municipio</Text>
        <TextInput 
          style={styles.input} 
          value={formData.municipio}
          onChangeText={(value) => handleChange('municipio', value)}
          placeholder="Municipio"
        />
      </View>

      <View style={styles.column}>
        <Text style={styles.label}>Estado</Text>
        <TextInput 
          style={styles.input} 
          value={formData.estado}
          onChangeText={(value) => handleChange('estado', value)}
          placeholder="Estado"
        />
      </View>

      <View style={styles.column}>
        <Text style={styles.label}>Transporte</Text>
        <TextInput 
          style={styles.input} 
          value={formData.transporte}
          onChangeText={(value) => handleChange('transporte', value)}
          placeholder="Transporte"
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Operador</Text>
        <TextInput 
          style={styles.input} 
          value={formData.operador}
          onChangeText={(value) => handleChange('operador', value)}
          placeholder="Operador"
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Fecha entrega</Text>
        <TextInput 
          style={styles.input} 
          value={formData.fechaEntrega}
          onChangeText={(value) => handleChange('fechaEntrega', value)}
          placeholder="Fecha entrega"
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Numero de placa</Text>
        <TextInput 
          style={styles.input} 
          value={String(formData.numeroPlacas)}
          onChangeText={(value) => handleChange('numeroPlacas', Number(value))}
          placeholder="Numero de placa"
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Numero Recat</Text>
        <TextInput 
          style={styles.input} 
          value={String(formData.fechaEntrega)}
          onChangeText={(value) => handleChange('recat', Number(value))}
          placeholder="Numero Recat"
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Fecha entrega sucursal</Text>
        <TextInput 
          style={styles.input} 
          value={formData.fechaEntregaScursal}
          onChangeText={(value) => handleChange('fechaEntregaScursal', value)}
          placeholder="Fecha entrega sucursal"
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Observaciones</Text>
        <TextInput 
          style={styles.input} 
          value={formData.observaciones}
          onChangeText={(value) => handleChange('observaciones', value)}
          placeholder="Observaciones"
        />
      </View>
    </View>

    <View style={isDesktop ? styles.buttonWrapper : {}}>
      <Button 
        style={styles.buttonContainer}   
        mode="text"
        buttonColor='#04AA6D'
        textColor='white'
        onPress={handleSubmit}>
              Guardar
      </Button>
  </View>
</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  column: {
    flexBasis: '30%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonContainer:{
    marginTop: 16,
    borderRadius: 8,
  },
  buttonWrapper:{
      width: '100%',
      alignItems: 'center',
  }
});

export default Generate_manifest;
