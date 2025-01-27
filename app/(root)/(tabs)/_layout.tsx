import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { HomeIcon as HomeOutline } from "react-native-heroicons/outline";
import { HomeIcon as HomeSolid } from "react-native-heroicons/solid";
import { UserIcon as UserOutline } from "react-native-heroicons/outline";
import { UserIcon as UserSolid } from "react-native-heroicons/solid";
import { TrophyIcon as TrophyOutline } from "react-native-heroicons/outline";
import { TrophyIcon as TrophySolid } from "react-native-heroicons/solid";

type TabIconProps = {
  focused: boolean;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  title: string;
};

const TabIcon = ({ focused, icon: Icon, title }: TabIconProps) => {
  return (
    <View className="items-center justify-center gap-1">
      <Icon size={24} color={focused ? "black" : "#888"} />
      <Text
        className={`text-xs ${focused ? "font-semibold" : "font-medium"}`}
        style={{ color: focused ? "black" : "#888" }}
      >
        {title}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "white",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={focused ? HomeSolid : HomeOutline}
              title="Home"
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="league"
        options={{
          title: "League",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={focused ? TrophySolid : TrophyOutline}
              title="League"
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={focused ? UserSolid : UserOutline}
              title="Profile"
            />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default TabsLayout;
