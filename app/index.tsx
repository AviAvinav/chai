import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, View } from "react-native";
import { Link } from "expo-router";
import { useStore } from "@lib/store";
import { useCallback } from "react";

const App = () => {
  const click = useStore(useCallback((state) => state.click, []));
  return (
    <SafeAreaView className="flex-1 flex items-center justify-center space-y-8">
      <View>
        <Image
          className="w-56 h-56 rounded-md"
          source={require("@assets/images/tea.jpg")}
        />
        <Text>Photo by Rumman Amin on Unsplash</Text>
      </View>
      <Text className="text-xl">Welcome to Chai ☕ Stack</Text>
      <Link
        className="text-center w-48 bg-violet-400 text-md p-2"
        href="/hello"
      >
        Go to Another Page
      </Link>
      <Text className="text-xl">Look at the number of clicks: {click}</Text>
      <Link
        className="text-center w-48 bg-violet-400 text-md p-2"
        href="/clicks"
      >
        Go to Clicks Page
      </Link>
    </SafeAreaView>
  );
};

export default App;
