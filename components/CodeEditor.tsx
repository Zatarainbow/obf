import React, { useState, useRef, useMemo } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import { FileCode2, Copy, Check, RotateCcw, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/lib/i18n";

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  fileName?: string | null;
  onReset?: () => void;
  placeholder?: string;
  readOnly?: boolean;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  onChange,
  fileName,
  onReset,
  placeholder,
  readOnly = false,
}) => {
  const { t } = useLanguage();
  const defaultPlaceholder = placeholder || t.app.editor.placeholder;
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const gutterRef = useRef<HTMLDivElement>(null);

  const lines = useMemo(() => {
    return code.length > 0 ? code.split("\n") : [""];
  }, [code]);

  const lineCount = lines.length;
  const charCount = code.length;

  const highlightedCode = useMemo(() => {
    if (!code) return "";
    try {
      return Prism.highlight(code, Prism.languages.python, "python");
    } catch {
      return code;
    }
  }, [code]);

  // Synchronize scroll between textarea, highlighted pre, and line numbers gutter
  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    const { scrollTop, scrollLeft } = e.currentTarget;
    if (preRef.current) {
      preRef.current.scrollTop = scrollTop;
      preRef.current.scrollLeft = scrollLeft;
    }
    if (gutterRef.current) {
      gutterRef.current.scrollTop = scrollTop;
    }
  };

  // Keyboard handling: Tab inserts 4 spaces, Enter preserves indentation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (readOnly) return;
    const textarea = e.currentTarget;
    const { selectionStart, selectionEnd, value } = textarea;

    if (e.key === "Tab") {
      e.preventDefault();
      const updated = value.substring(0, selectionStart) + "    " + value.substring(selectionEnd);
      onChange(updated);
      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd = selectionStart + 4;
      });
    } else if (e.key === "Enter") {
      const currentLine = value.substring(0, selectionStart).split("\n").pop() || "";
      const match = currentLine.match(/^(\s*)/);
      let indent = match ? match[1] : "";
      if (currentLine.trimEnd().endsWith(":")) {
        indent += "    ";
      }
      if (indent.length > 0) {
        e.preventDefault();
        const updated = value.substring(0, selectionStart) + "\n" + indent + value.substring(selectionEnd);
        onChange(updated);
        requestAnimationFrame(() => {
          textarea.selectionStart = textarea.selectionEnd = selectionStart + 1 + indent.length;
        });
      }
    }
  };

  const handleCopy = async () => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success(t.app.editor.copied);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(t.app.editor.copyFailed);
    }
  };

  const handleClear = () => {
    onChange("");
    toast.info(t.app.editor.cleared);
  };

  return (
    <div className="relative rounded-xl border border-border/70 bg-[#161822] shadow-2xl overflow-hidden group">
      {/* VSCode-style Header Window Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#12131c] border-b border-border/60 select-none">
        <div className="flex items-center gap-3">
          {/* macOS window controls */}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 hover:opacity-80 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50 hover:opacity-80 transition-opacity" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50 hover:opacity-80 transition-opacity" />
          </div>

          {/* Active Tab */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#1e202e] border border-border/40 text-xs font-mono-code text-foreground/90">
            <FileCode2 className="w-3.5 h-3.5 text-primary" />
            <span>{fileName || "main.py"}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse ml-1" />
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground/60 font-mono-code">
            <span>meowt</span>
            <span>/</span>
            <span>src</span>
            <span>/</span>
            <span className="text-muted-foreground">{fileName || "main.py"}</span>
          </div>
        </div>

        {/* Toolbar actions */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <div className="hidden md:flex items-center gap-3 mr-2 font-mono-code text-[11px] text-muted-foreground/70">
            <span>{lineCount} {t.app.editor.lines}</span>
            <span>•</span>
            <span>{charCount} {t.app.editor.chars}</span>
            <span>•</span>
            <span className="text-primary/90 font-semibold">Python 3.12</span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            title={t.app.editor.copy}
            className="p-1.5 rounded-md hover:bg-secondary/70 hover:text-foreground transition-colors flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline text-[11px]">{t.app.editor.copy}</span>
          </button>

          {onReset && (
            <button
              type="button"
              onClick={onReset}
              title={t.app.editor.sample}
              className="p-1.5 rounded-md hover:bg-secondary/70 hover:text-foreground transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">{t.app.editor.sample}</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleClear}
            title={t.app.editor.clear}
            className="p-1.5 rounded-md hover:bg-destructive/20 hover:text-destructive transition-colors flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">{t.app.editor.clear}</span>
          </button>
        </div>
      </div>

      {/* Code Editor Body (Gutter + Highlighted Code + Input Textarea) */}
      <div className="relative flex h-84 md:h-96 bg-[#141620] overflow-hidden">
        {/* Line Numbers Gutter */}
        <div
          ref={gutterRef}
          aria-hidden="true"
          className="shrink-0 w-12 md:w-14 select-none bg-[#11121a] border-r border-border/40 py-3 text-right pr-3 font-mono text-[13px] leading-[22px] text-[#4b5263] overflow-hidden"
        >
          {lines.map((_, index) => (
            <div key={index} className="h-[22px] leading-[22px]">
              {index + 1}
            </div>
          ))}
        </div>

        {/* Editor Area */}
        <div className="relative flex-1 h-full overflow-hidden">
          {/* Syntax Highlighted View */}
          <pre
            ref={preRef}
            aria-hidden="true"
            className="vscode-editor-token pointer-events-none absolute inset-0 m-0 p-3 font-mono text-[13px] leading-[22px] whitespace-pre overflow-auto z-0 text-[#abb2bf] select-none"
            style={{ tabSize: 4 }}
          >
            {highlightedCode ? (
              <code dangerouslySetInnerHTML={{ __html: highlightedCode + "\n" }} />
            ) : (
              <span className="text-muted-foreground/30 italic">{defaultPlaceholder}</span>
            )}
          </pre>

          {/* Transparent Input Textarea */}
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => onChange(e.target.value)}
            onScroll={handleScroll}
            onKeyDown={handleKeyDown}
            readOnly={readOnly}
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            placeholder={defaultPlaceholder}
            className="absolute inset-0 w-full h-full m-0 p-3 bg-transparent text-transparent caret-white font-mono text-[13px] leading-[22px] whitespace-pre resize-none outline-none overflow-auto z-10 selection:bg-primary/30 selection:text-transparent"
            style={{ tabSize: 4 }}
          />
        </div>
      </div>

      {/* VSCode Status Footer */}
      <div className="flex items-center justify-between px-3 py-1 bg-[#101118] border-t border-border/40 text-[11px] font-mono-code text-muted-foreground/60 select-none">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-primary/80">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {t.app.editor.engineReady}
          </span>
          <span className="hidden sm:inline">UTF-8</span>
          <span className="hidden sm:inline">Spaces: 4</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Ln {lineCount}, Col {code.split("\n").pop()?.length || 0}</span>
        </div>
      </div>
    </div>
  );
};
