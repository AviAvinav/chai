import LoadingScreen from "@components/loadingscreen";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

const AppLayout = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // before your app loads up.

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you do not want any extra delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  return (
    <>
      {/* If app is ready (fonts loaded, API calls made, etc) then app loads else splash screen is shown */}
      {!appIsReady ? <LoadingScreen /> : <Slot />}
    </>
  );
};

export default AppLayout;
