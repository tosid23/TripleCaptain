import { Link } from "expo-router";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Crown from "../../../assets/images/crown.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import * as fplApi from "../../../src/api/fplApi";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fplData, setFplData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fplApi.getBootstrapStatic();
        setFplData(data);
        setDataLoaded(true);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="bg-white h-full">
        <Text>Error: {error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Crown width={50} height={50} />
      <Text className="font-bold text-lg my-10">Welcome to Triple Captain</Text>
      <Link href="/sign-in">Sign-In</Link>
    </View>
  );
};

export default Index;
