import { useTheme } from "next-themes";

export const Toggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      toggle - {theme}
    </button>
  );
};
