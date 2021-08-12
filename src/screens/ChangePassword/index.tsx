import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native';
import { isNullOrEmpty, isStrongPassword } from '../Register/registerUtils';
import { connect } from 'react-redux';
import AppMenu from '../../components/AppMenu';
import strings from '../../../assets/lang/strings';
import { tailwind } from '../../helpers/designSystem';
import * as Unicons from '@iconscout/react-native-unicons'
import { doChangePassword } from './changePasswordUtils'
import Toast from 'react-native-toast-message'

function ChangePassword(props: any) {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleOnPress = () => {
    setIsLoading(true)
    doChangePassword({ password, newPassword }).then(() => {
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Password changed',
        visibilityTime: 5000,
        autoHide: true,
        bottomOffset: 100
      });
      setPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }).catch(
      (err: Error) => {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: err.message,
          visibilityTime: 5000,
          autoHide: true,
          bottomOffset: 100
        });
      }
    ).finally(() => {
      setIsLoading(false)
    })
  }

  const isValidPassword = !isNullOrEmpty(password)
  const isValidNewPassword = isStrongPassword(newPassword);
  const passwordConfirmed = confirmPassword && newPassword === confirmPassword;

  const activeButton = isValidPassword && isValidNewPassword && passwordConfirmed
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [newPasswordFocus, setNewPasswordFocus] = useState(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

  return <View style={{
    backgroundColor: 'white',
    flex: 1
  }}>
    <AppMenu
      title={strings.components.inputs.password}
      onBackPress={() => {
        props.navigation.goBack()
      }}
      hideSearch={true} hideOptions={true} />
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Change password</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.subtitleText}>Remember that if you change your password, you will be signed out in all your devices. You will need these credentials for logining in again.</Text>
      </View>
      <View style={styles.container}>
        <View style={[tailwind('input-wrapper my-2'), tailwind(isValidPassword ? 'input-valid' : 'input-error')]}>
          <TextInput
            style={tailwind('input')}
            value={password}
            onChangeText={value => setPassword(value)}
            placeholder={strings.components.inputs.password}
            placeholderTextColor="#666"
            secureTextEntry={true}
            textContentType="password"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <Unicons.UilEye
            style={tailwind('input-icon')}
            color={passwordFocus && isValidPassword ? '#42BE65' : '#7A869A'} />
        </View>
        <View style={[tailwind('input-wrapper my-2'), tailwind(isValidNewPassword ? 'input-valid' : 'input-error')]}>
          <TextInput
            style={tailwind('input')}
            value={newPassword}
            onChangeText={value => setNewPassword(value)}
            placeholder='New password'
            placeholderTextColor="#666"
            secureTextEntry={true}
            textContentType="password"
            onFocus={() => setNewPasswordFocus(true)}
            onBlur={() => setNewPasswordFocus(false)}
          />
          <Unicons.UilEye
            style={tailwind('input-icon')}
            color={newPasswordFocus && isValidNewPassword ? '#42BE65' : '#7A869A'} />
        </View>
        <View style={[tailwind('input-wrapper my-2'), tailwind(passwordConfirmed ? 'input-valid' : 'input-error')]}>
          <TextInput
            style={tailwind('input')}
            value={confirmPassword}
            onChangeText={value => setConfirmPassword(value)}
            placeholder={strings.components.inputs.confirm_password}
            placeholderTextColor="#666"
            secureTextEntry={true}
            textContentType="password"
            onFocus={() => setConfirmPasswordFocus(true)}
            onBlur={() => setConfirmPasswordFocus(false)}
          />
          <Unicons.UilEye
            style={tailwind('input-icon')}
            color={confirmPasswordFocus && passwordConfirmed ? '#42BE65' : '#7A869A'} />
        </View>
        <TouchableHighlight
          style={[tailwind('btn btn-primary my-5'), (activeButton && !isLoading) ? null: { backgroundColor: '#A6C8FF' }]}
          underlayColor="#4585f5"
          onPress={handleOnPress}
          disabled={!activeButton || isLoading}>
          <Text style={tailwind('text-base btn-label')}>Change password</Text>
        </TouchableHighlight>
      </View>
    </View>
  </View>

}

const mapStateToProps = (state: any) => {
  return { ...state }
};

export default connect(mapStateToProps)(ChangePassword);

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    padding: 6
  },
  titleText: {
    color: '#091E42',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'NeueEinstellung-Regular'
  },
  subtitleText: {
    textAlign: 'center',
    color: '#253858',
    fontFamily: 'NeueEinstellung-Regular'
  },
  mainContainer: {
    paddingHorizontal: 40
  },
  container: {
    padding: 8
  }
});