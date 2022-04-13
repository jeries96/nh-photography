import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import MyStack from "./routes/navigation";

export default function App() {
  useEffect(async () => {
    try {
      makeRequest("https://demo.parklolo.com/api/ping", "GET").then(
        (currentUser => {
          /**
           * 1) Store current User useCurrentUser()
           * 2)
           * how to creat a custom hook to store react native data
           */
        }).catch(() => {
          /**
           * navigate to login page because of ping error
           */
        })
      );
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
