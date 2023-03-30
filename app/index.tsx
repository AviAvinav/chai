import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Link } from "expo-router";
import { useStore } from "@lib/store";
import { useCallback } from "react";

const App = () => {
  const click = useStore(useCallback((state) => state.click, []));
  return (
    <SafeAreaView className="flex-1 flex items-center justify-center space-y-8">
      <Text className="text-xl">Welcome to Chai ☕ Stack</Text>
      <Link
        className="text-center w-48 bg-violet-500 text-md p-2"
        href="/hello"
      >
        Go to Another Page
      </Link>
      <Text>Look at the number of clicks: {click}</Text>
      <Link
        className="text-center w-48 bg-violet-500 text-md p-2"
        href="/clicks"
      >
        Go to Clicks Page
      </Link>
    </SafeAreaView>
  );
};

export default App;
