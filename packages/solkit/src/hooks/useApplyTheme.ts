import { useEffect, useState } from "react";
import {
  ThemeConfig,
  ThemeConfigWithDarkMode,
} from "../themes";

const isServer = typeof window === "undefined";

function isNeedDarkMode(theme: ThemeConfig): theme is ThemeConfigWithDarkMode {
  const themWithDarkMode = theme as ThemeConfigWithDarkMode;

  return !!themWithDarkMode.lightMode || !!themWithDarkMode.darkMode;
}

export const useApplyTheme = (userTheme?: ThemeConfig) => {
  const [currentTheme, setCurrentTheme] = useState<string>();

  useEffect(() => {
    if (isServer || !userTheme) return;

    if (isNeedDarkMode(userTheme)) {
    } else {
      if (userTheme.className) {
        changeTheme(userTheme.className, currentTheme);
        setCurrentTheme(userTheme.className);
      }
    }
  }, [userTheme, currentTheme]);
};

const changeTheme = (newTheme: string, currentTheme?: string) => {
  if (!document) return;

  const el = document.documentElement;

  if (currentTheme) {
    el.classList.remove(currentTheme);
  }
  el.classList.add(newTheme);
};
