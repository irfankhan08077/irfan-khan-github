import React from 'react';
import { View, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import appleAuth from '@invertase/react-native-apple-authentication';

const AppleSignIn = () => {
  const signInWithApple = async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
      });

      const { identityToken } = appleAuthRequestResponse;
      if (!identityToken) throw new Error("Apple Sign-In failed");

      const appleCredential = auth.AppleAuthProvider.credential(identityToken);
      await auth().signInWithCredential(appleCredential);
      console.log("Apple Sign-In Successful!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Sign In with Apple" onPress={signInWithApple} />
    </View>
  );
};

export default AppleSignIn;
