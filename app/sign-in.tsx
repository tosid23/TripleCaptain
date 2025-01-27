import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

const SignIn = () => {
  const handleBack = () => {};

  const handleLogin = () => {};

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex-row items-center p-4">
        {/* Back Button */}
        <TouchableOpacity onPress={handleBack} className="p-2">
          <ArrowLeftIcon size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerClassName="flex-1 justify-center items-center">
        <Text className="text-lg font-semibold">Sign In</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
