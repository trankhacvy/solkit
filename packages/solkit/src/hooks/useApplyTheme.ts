import { useEffect, useState } from "react";
import cx from "classnames";
import { SolkitTheme, ThemeType } from "../themes";

const isServer = typeof window === "undefined";

export const useApplyTheme = (userTheme?: SolkitTheme) => {
  const [_, setCurrentTheme] = useState<ThemeType | string>("light");

  const changeCurrentTheme = (type: ThemeType | string) => {
    setCurrentTheme((ct) => (ct !== type ? type : ct));
  };

  const changeTypeBaseEl = (el: HTMLElement) => {
    const themeValue = getDocumentTheme(el);

    themeValue && changeCurrentTheme(themeValue);
  };

  useEffect(() => {
    changeTypeBaseEl(document?.documentElement);
    const observer = new MutationObserver((mutation) => {
      if (
        mutation &&
        mutation.length > 0 &&
        mutation[0]?.target.nodeName === "BODY"
      ) {
        const documentTheme = document?.body?.dataset?.theme;
        documentTheme && changeCurrentTheme(documentTheme);
      } else {
        changeTypeBaseEl(document?.documentElement);
      }
    });
    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style"],
    });
    observer.observe(document?.body, {
      attributes: true,
      attributeFilter: ["data-theme", "style"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isServer || !userTheme) return;

    if (userTheme.className) {
      changeTheme(userTheme.className);
    }
  }, [userTheme]);
};

const changeTheme = (theme: string) => {
  if (!document) return;

  const el = document.documentElement;

  const prevClasses =
    el
      ?.getAttribute("class")
      ?.split(" ")
      .filter(
        (cls) =>
          !cls.includes("theme") &&
          !cls.includes("light") &&
          !cls.includes("dark")
      ) || [];

  const prevStyles =
    el
      ?.getAttribute("style")
      ?.split(";")
      .filter((stl) => !stl.includes("color-scheme") && stl.length)
      .map((el) => `${el};`) || [];

  const themeName = getThemeName(theme);

  el?.setAttribute("class", cx(prevClasses, `${themeName}-theme`));
  el?.setAttribute("style", cx(prevStyles, `color-scheme: ${themeName};`));
};

export const getThemeName = (theme: string) => {
  if (typeof theme === "string") {
    return theme?.includes("-theme") ? theme?.replace("-theme", "") : theme;
  }

  return theme;
};

export const getDocumentTheme = (el: HTMLElement) => {
  const styleAttrValues =
    el
      ?.getAttribute("style")
      ?.split(";")
      .map((el) => el.trim())
      .filter((el) => el.includes("color-scheme")) || [];

  const colorScheme =
    styleAttrValues.length > 0
      ? styleAttrValues[0].replace("color-scheme: ", "").replace(";", "")
      : "";

  const documentTheme = el?.getAttribute("data-theme");

  return documentTheme || colorScheme;
};
