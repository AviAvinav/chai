import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Link } from "expo-router";

const App = () => {
  return (
    <SafeAreaView className="flex-1 flex items-center justify-center space-y-8">
      <Text className="text-xl">Welcome to Chai ☕ Stack</Text>
      <Link
        className="text-center w-48 bg-violet-500 text-md p-2"
        href="/hello"
      >
        Go to Another Page
      </Link>
    </SafeAreaView>
  );
};

export default App;
