import { Stack } from "expo-router";
import "./globals.css";
import { useEffect } from "react";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
