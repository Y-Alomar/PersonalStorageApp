import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';

export default function downloadVidsScreen(){
    const [text, setText] = useState('');
    const [mediaType, setMediaType] = useState<'mp3' | 'mp4'>('mp3');
    const [otherOption, setOtherOption] = useState('');
    return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Insert Video URL"
          value={text}
          onChangeText={setText}
        />
      </View>


      {/* Dropdown Menu 1 for media selection */}
        {/* <Text style={styles.label}>Select media type:</Text> */}
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={mediaType}
            onValueChange={(itemValue) => setMediaType(itemValue)}
            mode="dropdown"
            style={styles.picker}
          >
            <Picker.Item label="MP3" value="mp3" />
            <Picker.Item label="MP4" value="mp4" />
          </Picker>
        </View>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={otherOption}
            onValueChange={(itemValue) => setOtherOption(itemValue)}
            mode="dropdown"
            style={styles.picker}
          >
            {/* Empty for now */}
          </Picker>
        </View>


    </SafeAreaView>
  );
    


}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 10,
    flex: 1,
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});
