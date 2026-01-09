import { useEffect, useState, useMemo } from "react";

interface MatrixChar {
  char: string;
  opacity: number;
  color: "purple" | "cyan" | "white";
}

const MatrixRain = () => {
  const [chars, setChars] = useState<MatrixChar[][]>([]);
  
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+=<>?";
  const rows = 15;
  const cols = 50;

  useEffect(() => {
    const generateMatrix = () => {
      const matrix: MatrixChar[][] = [];
      for (let i = 0; i < rows; i++) {
        const row: MatrixChar[] = [];
        for (let j = 0; j < cols; j++) {
          const randomColor = Math.random();
          row.push({
            char: characters[Math.floor(Math.random() * characters.length)],
            opacity: Math.random() * 0.8 + 0.2,
            color: randomColor < 0.1 ? "purple" : randomColor < 0.15 ? "cyan" : "white",
          });
        }
        matrix.push(row);
      }
      return matrix;
    };

    setChars(generateMatrix());

    const interval = setInterval(() => {
      setChars((prev) =>
        prev.map((row) =>
          row.map((cell) => ({
            ...cell,
            char: Math.random() > 0.9 
              ? characters[Math.floor(Math.random() * characters.length)] 
              : cell.char,
            opacity: Math.random() > 0.8 
              ? Math.random() * 0.8 + 0.2 
              : cell.opacity,
          }))
        )
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const getColorClass = (color: "purple" | "cyan" | "white") => {
    switch (color) {
      case "purple":
        return "text-primary";
      case "cyan":
        return "text-accent";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      
      {/* Matrix characters */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-xs leading-tight opacity-60">
        {chars.map((row, i) => (
          <div key={i} className="flex whitespace-nowrap">
            {row.map((cell, j) => (
              <span
                key={j}
                className={`w-4 inline-block text-center transition-opacity duration-300 ${getColorClass(cell.color)}`}
                style={{ opacity: cell.opacity }}
              >
                {cell.char}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatrixRain;
