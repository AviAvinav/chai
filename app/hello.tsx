import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Hello = () => {
  return (
    <SafeAreaView className="flex-1 flex items-center justify-center space-y-8">
      <Text className="text-xl">Hi 👋, this is another page</Text>
      <Link className="text-center w-48 bg-violet-400 text-md p-2" href="/">
        Go to Home Page
      </Link>
    </SafeAreaView>
  );
};

export default Hello;
