import React from "react";
import { View, Text, Pressable } from "native-base";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants";
import Colors from "../../colors";

const Selector = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguageCode = i18n.language;

  const setLanguage = code => {
    return i18n.changeLanguage(code);
  };

  return (
    <View px={6}>
      <View flexDirection="row" alignItems="center" justifyContent="space-between">
        <Text color="#fff" fontSize={28} fontWeight="600" mb={18}>{t("common:languageSelector")}</Text>
        <Ionicons color="#fff" size={28} name="ios-language-outline" />
      </View>
      {LANGUAGES.map(language => {
        const selectedLanguage = language.code === selectedLanguageCode;
        return (
          <Pressable
            key={language.code} mt={2} disabled={selectedLanguage}
            onPress={() => setLanguage(language.code)}>
            <Text
              fontSize={18} fontWeight="600" py={1}
              color={selectedLanguage ? Colors.orange : Colors.white}
            >{language.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Selector;
