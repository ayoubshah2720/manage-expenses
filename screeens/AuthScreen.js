import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AuthScreen = ({ navigation }) => {
  const handleSignup = () => {
    // Logic for signup
  };

  const handleLogin = () => {
    // Logic for login
  };

  const handleSocialLogin = (provider) => {
    // Logic for social login with the selected provider
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Signup" onPress={handleSignup} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>

      <View style={styles.socialLoginContainer}>
        <Text style={styles.socialLoginText}>Or sign in with:</Text>
        <View style={styles.socialButtonContainer}>
          <Button
            title="Facebook"
            onPress={() => handleSocialLogin('facebook')}
            color="#3b5998"
          />
          <Button
            title="Google"
            onPress={() => handleSocialLogin('google')}
            color="#db4437"
          />
          {/* Add more social login buttons as needed */}
        </View>
      </View>

      <View style={styles.noAccountContainer}>
        <Text style={styles.noAccountText}>
          Continue Without Account
        </Text>
        <Text
          style={styles.noAccountLink}
          onPress={() => navigation.navigate('currencyScreen')}
        >
          Go to Main Screen
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '70%',
  },
  socialLoginContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  socialLoginText: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  noAccountContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  noAccountText: {
    fontSize: 16,
    marginBottom: 10,
  },
  noAccountLink: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default AuthScreen;
