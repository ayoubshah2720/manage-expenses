import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AuthScreen = ({navigation}) => {
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
      <Button title="Signup" onPress={handleSignup} />
      <Button title="Login" onPress={handleLogin} />

      {/* Social Login Buttons */}
      <View style={styles.socialLoginContainer}>
        <Button title="Facebook" onPress={() => handleSocialLogin('facebook')} />
        <Button title="Google" onPress={() => handleSocialLogin('google')} />
        {/* Add more social login buttons as needed */}
      </View>

      <View style={styles.socialLoginContainer}>
        <Text onPress={()=> navigation.navigate('currencyScreen')}> Continue Without account. </Text>
        {/* Add more social login buttons as needed */}
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
  socialLoginContainer: {
    marginTop: 20,
  },
});

export default AuthScreen;
