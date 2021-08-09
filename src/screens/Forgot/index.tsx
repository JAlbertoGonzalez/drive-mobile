import { isValidEmail, sendDeactivationsEmail } from './ForgotUtils';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';
import React, { useEffect, useState } from 'react'
import { normalize } from '../../helpers';
import { connect } from 'react-redux';
import strings from '../../../assets/lang/strings';
import InternxtLogo from '../../../assets/logo.svg'
import globalStyle from '../../styles/global.style';
import { tailwind } from '../../helpers/designSystem';
import * as Unicons from '@iconscout/react-native-unicons'
import { Reducers } from '../../redux/reducers/reducers';

interface ForgotProps extends Reducers {
  navigation: any
}

function Forgot(props: ForgotProps): JSX.Element {
  const [currentContainer, setCurrentCointainer] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Get email form field
  const [email, setIsEmail] = useState('');
  const isValidEmailField = isValidEmail(email);

  useEffect(() => { // do something after isLoading has updated
    if (isLoading === true) {
      if (!isValidEmailField) {
        setIsLoading(false)
        return Alert.alert('Warning', 'Enter a valid e-mail address');
      }
    }

  }, [isLoading])

  const sendDeactivationEmail = () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true)
    sendDeactivationsEmail(email).then(() => {
      setIsLoading(false)
      setCurrentCointainer(2)

    }).catch(() => {
      setIsLoading(false)
      return Alert.alert('Error', 'Connection to server failed');
    });

  }

  if (currentContainer === 1) {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View
          style={[
            styles.containerCentered,
            isLoading ? styles.halfOpacity : {}
          ]}
        >
          <View style={styles.containerHeader}>
            <View style={tailwind('items-center pb-10')}>
              <InternxtLogo />
              <Text style={styles.subTitle}>Security</Text>
            </View>
            <Text style={[tailwind('text-sm'), styles.explication]}>
              {strings.screens.forgot_password.subtitle_1}

              <Text style={styles.bold}>{strings.screens.forgot_password.bold}</Text>

              {strings.screens.forgot_password.subtitle_2}
            </Text>

            <View style={tailwind('input-wrapper')}>
              <TextInput
                style={tailwind('input')}
                value={email}
                onChangeText={(value) => setIsEmail(value)}
                placeholder={strings.components.inputs.email}
                placeholderTextColor="#666666"
                maxLength={64}
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <Unicons.UilEnvelope
                color={'#AAA'}
                style={tailwind('input-icon')} />
            </View>

            <View style={globalStyle.buttonInputStyle.wrapper}>
              <TouchableHighlight
                style={tailwind('btn btn-primary')}
                onPress={() => sendDeactivationEmail()}
              >
                <Text style={tailwind('text-base btn-label')}>
                  {strings.components.buttons.continue}
                </Text>
              </TouchableHighlight>
            </View>
            <View style={tailwind('py-5')}>
              <TouchableWithoutFeedback
                style={tailwind('m-5')}
                onPress={() => props.navigation.replace('Login')}
              >
                <Text style={[globalStyle.text.link, globalStyle.text.center]}> Back to login</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );

  }

  if (currentContainer === 2) {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View
          style={[
            styles.containerCentered,
            isLoading ? styles.halfOpacity : {}
          ]}
        >
          <View style={styles.containerHeader}>
            <View style={tailwind('items-center pb-10')}>
              <InternxtLogo />
              <Text style={styles.subTitle}>Security</Text>
            </View>
            <Text style={[tailwind('text-sm'), styles.explication]}>
              {strings.screens.deactivation_screen.subtitle_1}
              {strings.screens.deactivation_screen.subtitle_2}
            </Text>

            <View style={styles.buttonWrapper}>
              <TouchableHighlight
                style={[styles.button, styles.buttonOn]}
                underlayColor="#00aaff"
                onPress={() => sendDeactivationEmail()}
              >
                <Text style={[styles.buttonOnLabel, styles.buttonLabel]}>
                  {strings.components.buttons.deactivation}
                </Text>
              </TouchableHighlight>
            </View>

            <View style={tailwind('py-5')}>
              <TouchableWithoutFeedback
                style={tailwind('m-5')}
                onPress={() => props.navigation.replace('Login')}
              >
                <Text style={[globalStyle.text.link, globalStyle.text.center]}> Back to login</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );

  }

  return <></>;

}
const mapStateToProps = (state: any) => {
  return { ...state };
};

export default connect(mapStateToProps)(Forgot)

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'NeueEinstellung-Bold'
  },
  button: {
    alignItems: 'center',
    borderRadius: 10,
    height: normalize(55),
    justifyContent: 'center',
    marginTop: normalize(10),
    width: '45%'
  },
  buttonOn: {
    backgroundColor: '#4585f5',
    flex: 1
  },
  buttonOnLabel: {
    color: '#fff',
    fontFamily: 'NeueEinstellung-Medium',
    fontSize: normalize(15)
  },
  buttonWrapper: {
    flexDirection: 'row',
    marginTop: normalize(15)
  },
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: normalize(40),
    paddingRight: normalize(40)
  },
  containerCentered: {
    alignSelf: 'center',
    height: normalize(600),
    justifyContent: 'center',
    width: '100%'
  },
  containerHeader: {
  },
  halfOpacity: {
    opacity: 0.5
  },
  explication: {
    textAlign: 'center',
    paddingBottom: 30
  },
  subTitle: {
    color: '#42526E',
    alignSelf: 'center',
    paddingTop: 15
  },
  buttonLabel: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    flexGrow: 1
  }
});