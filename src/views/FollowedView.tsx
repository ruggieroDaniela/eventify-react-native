import { useNavigation } from "@react-navigation/native";
import { Alert, ScrollView, StyleSheet } from "react-native";
import { ProfileStackNavigationProp } from "../navigators/ProfileStack";
import { AppHeader } from "../components/AppHeader/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserCard, UserCardVariant } from "../components/UserCard/UserCard";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ListUsersController } from "../controllers/ListUsersController";
import { useAuth } from "../contexts/AuthContext";
import { FollowUserController } from "../controllers/FollowUserController";

export function FollowedView() {
  const { t } = useTranslation();
  const navigation = useNavigation<ProfileStackNavigationProp>();
  const [search, setSearch] = useState("");
  const [followed, setFollowed] = useState<{ followedId: string, followedName: string, followedProfileImage: string, followed: boolean }[] | null>(null);
  const { user, session } = useAuth();

  const getFollowed = async () => {
    try {
      if (!session) return
      const response: { followedId: string, followedName: string, followedProfileImage: string, followed: boolean }[] = await ListUsersController.getFollowed(session?.access_token, user!.id);
      setFollowed(response);
    } catch (error) {
      console.error("Error in getFollowed:", error);
      Alert.alert("Error", (error as Error).message);
    }
  };

  useEffect(() => {
    getFollowed();
  }, []);

  const handleSearchChange = (text: string) => {
    setSearch(text);
  };

  const handleUnfollow = async (userId: string) => {
    if (!session) return
    try{
      const response = await FollowUserController.unfollowUser(session?.access_token, user!.id, userId);
      if(response.success){
        getFollowed();
      }
    }catch(error){
      console.error("Error in handleUnfollow:", error);
      Alert.alert("Error", (error as Error).message);
    }
  };

  const filteredFollowed = followed?.filter((follow) => 
    follow.followedName.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <AppHeader title={t("profile.followed")} goBack={navigation.goBack} />
        <SearchBar
          onChangeText={handleSearchChange}
          value={search}
        />
        {filteredFollowed?.map((followed) => (
          <UserCard
            key={followed.followedId}
            profileImage={followed.followedProfileImage}
            username={followed.followedName}
            onPressButton={() => {handleUnfollow(followed.followedId)}}
            variant={UserCardVariant.WITH_BUTTON}
            actionLabel={followed.followed ? t("common.unfollow") : t("common.follow")}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
});
