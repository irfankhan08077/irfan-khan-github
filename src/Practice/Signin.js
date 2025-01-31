import React from 'react';
import { View, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from '@react-native-fbsdk-next';

const Signin = () => {
  const signInWithFacebook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(["public_profile", "email"]);
      if (result.isCancelled) return;

      const data = await AccessToken.getCurrentAccessToken();
      if (!data) throw new Error("Something went wrong obtaining access token");

      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      await auth().signInWithCredential(facebookCredential);
      console.log("Facebook Sign-In Successful!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Sign In with Facebook" onPress={signInWithFacebook} />
    </View>
  );
};

export default Signin;
