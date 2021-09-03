import React from 'react';
import { useTranslation } from "react-i18next";

import ScreenWrapper from "../../components/ScreenWrapper";
import Selector from "../../components/LanguageSelector";

function SettingScreen(){
  const { t } = useTranslation();
  return(
    <ScreenWrapper headerTitle={t("common:selectLanguage")}>
      <Selector />
    </ScreenWrapper>
  )
}

export default SettingScreen;
