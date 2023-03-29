import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoadingScreen = () => {
  return (
    <SafeAreaView className="flex-1 flex items-center justify-center">
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};

export default LoadingScreen;
