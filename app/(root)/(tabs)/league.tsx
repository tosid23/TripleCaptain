import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";

const League = () => {
  return (
    <SafeAreaView className="bg-white h-full">
          <ScrollView contentContainerClassName="flex-1 justify-center items-center">
            <Text className="text-lg font-semibold">League Table</Text>
    </ScrollView>
        </SafeAreaView>
  )
}

export default League