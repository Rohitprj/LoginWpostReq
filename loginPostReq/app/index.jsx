import { Redirect } from "expo-router";

export default function Index() {
  Redirect({ href: "AuthStack/LoginPage" });
}

// import { View, Text } from "react-native";
// import React from "react";

// export default function index() {
//   return (
//     <View>
//       <Text>index</Text>
//     </View>
//   );
// }
