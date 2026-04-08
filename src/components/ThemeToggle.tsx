import { Sun, Moon, Monitor } from "./Icons";
import { useTheme } from "./ThemeProvider";

const options = [
  { value: "light" as const, icon: Sun, label: "Chiaro" },
  { value: "system" as const, icon: Monitor, label: "Sistema" },
  { value: "dark" as const, icon: Moon, label: "Scuro" },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex items-center rounded-full bg-card/60 backdrop-blur-xl border border-border/40 p-1 gap-0.5">
      {options.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          aria-label={label}
          className={`relative rounded-full p-2 transition-all duration-200 ${
            theme === value
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Icon className="w-3.5 h-3.5" />
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
