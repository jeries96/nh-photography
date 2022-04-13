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




/**
 * Move to a file
 */


// const useCurrentUser = () => {
//   const [currentUser, setCurrentUser] = useState();

//   useEffect(() => {
//     const loadProfile = async () => { 
//       try {
//         const user = await fetchProfile();
//         setCurrentUser(user);
//       } catch (e) {
//         //TODO error
//         console.log(e);
//       }
//     };
//     loadProfile();
//   }, []);

//   return { currentUser };
// };

// export default useCurrentUser;





// Example

// export async function fetchProfile(userId: string): Promise<ProfileDataResponse> {
//   const url = 'ping url'
//   const response = await fetch(url, getFetchInit('GET'));

//   if (!response.ok) {
//     throw new Error('Error while fetching profile');
//   }

//   const json = await response.json();
//   return json as ProfileDataResponse;
// }






