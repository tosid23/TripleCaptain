import { Link } from "expo-router";
import { Text, View } from "react-native";
import Crown from "../../../assets/images/crown.svg";

export default function Index() {
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
      <Link href="/league">League</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}
