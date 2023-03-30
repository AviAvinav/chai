import {
  Text,
  View,
  TouchableOpacity,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useStore } from "@lib/store";
import { useCallback } from "react";

const Clicks = () => {
  const click = useStore(useCallback((state) => state.click, []));
  const incrementClick = useStore(
    useCallback((state) => state.incrementClick, [])
  );
  const decrementClick = useStore(
    useCallback((state) => state.decrementClick, [])
  );

  return (
    <SafeAreaView className="flex-1 flex items-center justify-center space-y-8">
      <Text className="text-xl w-56">
        Hi, this is a page where you can update the number of clicks with
        zustand page
      </Text>
      <View className="flex flex-row space-x-2 items-center justify-center">
        <TouchableOpacity className="bg-blue-500 p-1" onPress={decrementClick}>
          <Text className="text-md">-</Text>
        </TouchableOpacity>
        <Text>{click}</Text>
        <TouchableOpacity className="bg-blue-500 p-1" onPress={incrementClick}>
          <Text className="text-md">+</Text>
        </TouchableOpacity>
      </View>
      <Link className="text-center w-48 bg-violet-500 text-md p-2" href="/">
        Go to Home Page
      </Link>
    </SafeAreaView>
  );
};

export default Clicks;
