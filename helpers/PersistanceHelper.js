import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistanceHelper {
  setValue = async (key, value, isEncrypted = false) => {
    if (isEncrypted) {
      //implement encrypted storage
      try {
        //await EncryptedStorage.setItem(key, value);
      } catch (error) {
        //error
      }
    } else {
      try {
        await AsyncStorage.setItem(key, value);
        console.log('written successfully');
      } catch (exception) {
        console.log('write error: ' + exception);
      }
    }
  };

  getValue = async (key, isEncrypted = false) => {
    if (isEncrypted) {
      try {
        //const value = await EncryptedStorage.getItem(key);
        //return value;
      } catch (error) {
        //Error
      }
    } else {
      try {
        const value = await AsyncStorage.getItem(key);
        return value;
      } catch (error) {
        console.log('write error: ' + error);
      }
    }
  };

  setObject = (key, value) => {
    if (typeof value === 'object' || typeof value === 'array') {
      const serializedObject = JSON.stringify(value);
      this.setValue(key, serializedObject);
    }
  };

  getObject = async key => {
    const serializedObject = await this.getValue(key);
    return JSON.parse(serializedObject);
  };
}

export default new PersistanceHelper();
