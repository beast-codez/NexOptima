import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({theme , setTheme}) {
  



  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style={{
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: "50%",
          backgroundColor: theme === "dark" ? "#444" : "#eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        {theme === "dark" ? (
          <Sun color="#FFD700" size={24} />
        ) : (
          <Moon color="#333" size={24} />
        )}
      </button>
    </div>
  );
}
