import React from "react";
import { View, Image } from "react-native";

import styles from "./styles";

const Profile = () => {
  return (
    <View>
      <Image
        style={styles.user_profile}
        source={{
          uri:
            "https://avatars3.githubusercontent.com/u/57350762?s=460&u=5c28607a6573c3f9ae703ebc9e23c31c916e3ab3&v=4",
        }}
      />
    </View>
  );
};

export default Profile;
