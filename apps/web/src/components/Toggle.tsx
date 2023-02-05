import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export const Toggle = () => {
  const { theme, systemTheme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      {currentTheme === "light" ? (
        <SunIcon className="h-5 w-5 text-slate-400" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-400" />
      )}
    </button>
  );
};
