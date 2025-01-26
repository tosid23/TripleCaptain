import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="flex-1 justify-center items-center">
          <Text className="text-lg font-semibold">Sign In</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
