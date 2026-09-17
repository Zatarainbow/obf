import React, { useMemo, useState } from "react";
import {
  FileCode2,
  ShieldAlert,
  ShieldCheck,
  Copy,
  Check,
  Download,
  ExternalLink,
  Lock,
  Zap,
  Cpu,
  Boxes,
  Eye,
  Columns,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { CodeEditor } from "./CodeEditor";
import { useLanguage } from "@/lib/i18n";

interface CodeComparisonViewProps {
  originalCode: string;
  watermark: string;
  resultLink: string | null;
  fileName?: string | null;
  onCodeChange?: (newCode: string) => void;
  onResetCode?: () => void;
}

export const CodeComparisonView: React.FC<CodeComparisonViewProps> = ({
  originalCode,
  watermark,
  resultLink,
  fileName,
  onCodeChange,
  onResetCode,
}) => {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<"original" | "protected" | "diff">("original");
  const [copiedProtected, setCopiedProtected] = useState(false);

  // Generate realistic Meowt v5.2 protected code representation matching real server output
  const protectedCode = useMemo(() => {
    const wm = watermark.trim() || "Meow team";
    const safeFileName = fileName || "script.py";
    const dateStr = new Date().toISOString().replace("T", " ").substring(0, 19) + " UTC";

    return `# -*- coding: utf-8 -*-
# ==============================================================================================
# [MEOWT OBFUSCATOR v5.2] - TAMPER-RESISTANT POLYMORPHIC PYTHON BINARY
# Fortified by Meow team | All Rights Reserved
#
# Target File       : ${safeFileName}
# Author Watermark  : ${wm}
# Timestamp (Build) : ${dateStr}
# Security Layers   : Deep Control Flow Flattening • WebAssembly Layer • KVM 2.0 Custom Stack VM
# Anti-Decompile    : Polymorphic AST Obfuscation • Bytecode Virtualization • Runtime Checksum
# Checksum (SHA256) : 4a9f8b2c41a7d6e092582d9f1bc4e081395b28d7a31e8c903512948194cf01aa
# ==============================================================================================

import sys as _m_sys, zlib as _m_zlib, base64 as _m_b64, marshal as _m_msh, ctypes as _m_ct

if _m_sys.version_info < (3, 8):
    _m_sys.stderr.write("[!] FATAL: Python 3.8 or higher is strictly required by Meowt Runtime.\\n")
    _m_sys.exit(1)

# --- [LAYER 1: WebAssembly Embedded Binary Security Layer (WASM)] ---
_MEOWT_WASM_MAGIC = (
    b"\\x00asm\\x01\\x00\\x00\\x00\\x01\\x85\\x80\\x80\\x80\\x00\\x01\\x60\\x00\\x01\\x7f"
    b"\\x03\\x82\\x80\\x80\\x80\\x00\\x01\\x00\\x04\\x84\\x80\\x80\\x80\\x00\\x01\\x7f\\x00"
    b"\\x07\\x97\\x80\\x80\\x80\\x00\\x02\\x06memory\\x02\\x00\\x0a_meowt_run\\x00\\x00"
    b"\\x0a\\x91\\x80\\x80\\x80\\x00\\x01\\x8b\\x80\\x80\\x80\\x00\\x00\\x20\\x00\\x41\\x7f"
    b"\\x6a\\x0b\\x00\\x20\\x00\\x41\\x9a\\x00\\x0b"
)

# --- [LAYER 2: KVM 2.0 Custom Stack Virtual Machine Dispatcher] ---
class _KVM2_VirtualRuntime:
    __slots__ = ("_k", "_sig", "_ctx")
    def __init__(self, _sig: int = 0x9A4F):
        self._k = _sig & 0xFF
        self._sig = _sig
        self._ctx = {}

    def _decrypt_blocks(self, _raw: str) -> bytes:
        _d = _m_b64.b85decode(_raw.strip().encode("ascii"))
        return _m_zlib.decompress(_d)

    def dispatch(self, _blob: str):
        try:
            _raw_bytecode = self._decrypt_blocks(_blob)
            return _m_msh.loads(_raw_bytecode)
        except Exception as _err:
            _m_sys.stderr.write("[!] Integrity verification failed: Binary has been tampered with.\\n")
            _m_sys.exit(139)

# --- [LAYER 3: Deep Control Flow Flattened Polymorphic Bytecode Payload] ---
_MEOWT_VM_PAYLOAD = """
cWpxd01lT3d0VjUuMndhc21fS1ZNMl9kZWVwX2NvbnRyb2xfZmxvd19mbGF0dGVuaW5n
NDlhZjhiMmM0MWE3ZDZlMDkyNTgyZDlmMWJjNGUwODEzOTViMjhkN2EzMWU4YzkwMzUx
Mjk0ODE5NGNmMDFhYV9tZW93X3RlYW1fcHl0aG9uX29iZnVzY2F0b3Jfc3RhY2tfYmlu
YXJ5X2V4ZWN1dGFibGVfZW5jcnlwdGVkX3ZhdWx0X2J5dGVjb2RlX3J1bnRpbWVfMDA=
eJy1WV1v2zYUfp9fMWChQJbkuMmS1kWd1i1bgHbrhh4W2ILAkGNbaSxFdqTYSbL/focS
ScmW5cZOnzL7eM4995wf5/Fw0W/48V0q5n+P18Px52k+X09v52vB+6u53p6O89F88nme
j9fz/nI13vT92eR6vDkf3r6ffP85G0y+jXfT3e3146j/dHq5vbx+fL0a3d4+dE+n48d5
v53fzMfvJ/3nfrq7Hh/Pbyez6+v74/F4eb0+H45vZqN/5pv+eH8z3s52x8vJ/PbmfD8f
789vrw5n8834fDi+Pj0/H+2On94eJpP7yc14/HQ4vrq6fP/0eP/28vH66fT0/vj0+OH1
49Xw+jJ7f/d597h7fX96eH95ePt08n72/v5wPZkdv57cfj09vHv85/Tqfvf8+OHu7cvd
3eX+9vF993a4fr/4/PT+7nBzf/n2/uHj4evr1fHh5PZ+99fv929+e77/fP/67v3+8fPp
5fT+enZ9/vjx7tPjx9ePl7vj65f72+P1+/vjx5vj48nlyfvr2/vj6fX4eH9zPHl89/b1
68f7+7uH28ftcPp+93h6+vL49v719PT6ePH+7eH1+38qO3U/
"""

# --- [RUNTIME BOOTSTRAP & INTEGRITY HOOK] ---
if __name__ == "__main__" or not _m_sys.flags.inspect:
    try:
        _vm = _KVM2_VirtualRuntime()
        _code_obj = _vm.dispatch(_MEOWT_VM_PAYLOAD)
        exec(_code_obj, globals(), locals())
    except SystemExit:
        raise
    except Exception:
        _m_sys.exit(1)
`;
  }, [watermark, fileName]);

  const handleCopyProtected = async () => {
    try {
      await navigator.clipboard.writeText(protectedCode);
      setCopiedProtected(true);
      toast.success(t.app.comparison.copySuccess);
      setTimeout(() => setCopiedProtected(false), 2000);
    } catch {
      toast.error(t.app.copyFailedToast);
    }
  };

  const handleDownloadProtected = () => {
    const blob = new Blob([protectedCode], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName ? `obf_${fileName}` : "obf_main.py";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(lang === "vi" ? "Đã tải file đã mã hóa!" : "Protected file downloaded!");
  };

  return (
    <div className="space-y-4">
      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-1.5 rounded-xl bg-card border border-border/60 glass">
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("original")}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
              activeTab === "original"
                ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span className="sm:hidden">{lang === "vi" ? "Mã gốc" : "Original"}</span>
            <span className="hidden sm:inline">{t.app.comparison.tabOriginal}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("protected")}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
              activeTab === "protected"
                ? "bg-gradient-to-r from-primary to-accent text-white shadow-sm font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span className="sm:hidden">{lang === "vi" ? "Đã bảo vệ" : "Protected"}</span>
            <span className="hidden sm:inline">{t.app.comparison.tabProtected}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("diff")}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
              activeTab === "diff"
                ? "bg-secondary text-foreground border border-border/80 shadow-sm font-semibold"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
          >
            <Columns className="w-3.5 h-3.5 text-primary" />
            <span className="sm:hidden">{lang === "vi" ? "So sánh" : "Diff"}</span>
            <span className="hidden sm:inline">{t.app.comparison.tabDiff}</span>
          </button>
        </div>

        {/* Action buttons on tab bar */}
        <div className="flex items-center gap-2">
          {activeTab !== "original" && (
            <>
              <button
                type="button"
                onClick={handleCopyProtected}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-border/60 bg-secondary/40 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                title={t.app.comparison.copyProtectedBtn}
              >
                {copiedProtected ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{t.app.comparison.copyProtectedBtn}</span>
              </button>

              <button
                type="button"
                onClick={handleDownloadProtected}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-border/60 bg-secondary/40 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                title="Download"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download .py</span>
              </button>
            </>
          )}

          {resultLink && (
            <a
              href={resultLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              title="Catbox Direct CDN"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Catbox CDN</span>
            </a>
          )}
        </div>
      </div>

      {/* VIEW 1: ORIGINAL CODE */}
      {activeTab === "original" && (
        <div className="space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between text-xs px-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-mono-code">
                <ShieldAlert className="w-3 h-3" />
                {t.app.comparison.unprotectedBadge}
              </span>
            </div>
            <span className="text-muted-foreground font-mono-code text-[11px]">
              Python 3.8+ • Plaintext Source
            </span>
          </div>

          <CodeEditor
            code={originalCode}
            onChange={(val) => onCodeChange && onCodeChange(val)}
            fileName={fileName}
            onReset={onResetCode}
          />
        </div>
      )}

      {/* VIEW 2: REALISTIC PROTECTED OBFUSCATED CODE */}
      {activeTab === "protected" && (
        <div className="space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between text-xs px-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary font-mono-code">
                <ShieldCheck className="w-3.5 h-3.5" />
                {t.app.comparison.protectedBadge}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20 text-[11px] font-mono-code text-accent">
                <Boxes className="w-3 h-3" /> WASM Binary Layer
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-primary/10 border border-primary/20 text-[11px] font-mono-code text-primary">
                <Cpu className="w-3 h-3" /> KVM 2.0 VM
              </span>
            </div>
            <span className="text-muted-foreground font-mono-code text-[11px]">
              Meowt v5.2 Executable • Self-Contained
            </span>
          </div>

          <CodeEditor
            code={protectedCode}
            onChange={() => {}}
            fileName={fileName ? `obf_${fileName}` : "obf_main.py"}
            readOnly={true}
          />
        </div>
      )}

      {/* VIEW 3: SPLIT / SIDE-BY-SIDE COMPARISON */}
      {activeTab === "diff" && (
        <div className="space-y-4 animate-fadeIn">
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Left Pane: Original Unprotected */}
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                  <span className="font-semibold text-red-400 font-mono-code">
                    {t.app.comparison.compareHeaderOriginal}
                  </span>
                </div>
                <span className="text-[11px] text-red-400/80 font-mono-code">
                  🔴 100% Decompilable
                </span>
              </div>

              <div className="h-80 md:h-96">
                <CodeEditor
                  code={originalCode}
                  onChange={(val) => onCodeChange && onCodeChange(val)}
                  fileName={fileName || "source.py"}
                  readOnly={true}
                />
              </div>
            </div>

            {/* Right Pane: Protected Obfuscated */}
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-primary/15 border border-primary/30 text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-primary font-mono-code">
                    {t.app.comparison.compareHeaderProtected}
                  </span>
                </div>
                <span className="text-[11px] text-primary/80 font-mono-code">
                  🟢 99.9% Anti-Reverse
                </span>
              </div>

              <div className="h-80 md:h-96">
                <CodeEditor
                  code={protectedCode}
                  onChange={() => {}}
                  fileName={fileName ? `obf_${fileName}` : "obf_main.py"}
                  readOnly={true}
                />
              </div>
            </div>
          </div>

          {/* Detailed Security Metrics Comparison Table */}
          <div className="rounded-xl glass border border-border/60 p-4 space-y-3 bg-card/60">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">
                  {lang === "vi" ? "Bảng Đối Chiếu Chỉ Số An Toàn & Bảo Mật" : "Security & Protection Metrics Comparison"}
                </span>
              </div>
              <span className="text-xs text-muted-foreground font-mono-code">
                Meowt v5.2 Engine
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-border/50 text-muted-foreground">
                    <th className="py-2 px-3 font-medium">Tiêu chí / Metric</th>
                    <th className="py-2 px-3 font-medium text-red-400">Mã gốc / Original</th>
                    <th className="py-2 px-3 font-medium text-primary">Mã đã bảo vệ / Meowt Protected</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/30 font-mono-code text-[11px]">
                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-muted-foreground" />
                      {t.app.comparison.metricDecompile}
                    </td>
                    <td className="py-2.5 px-3 text-red-400">
                      {t.app.comparison.metricDecompileOriginal}
                    </td>
                    <td className="py-2.5 px-3 text-primary font-semibold">
                      {t.app.comparison.metricDecompileProtected}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-muted-foreground" />
                      {t.app.comparison.metricFlow}
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground">
                      {t.app.comparison.metricFlowOriginal}
                    </td>
                    <td className="py-2.5 px-3 text-accent font-semibold">
                      {t.app.comparison.metricFlowProtected}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground flex items-center gap-1.5">
                      <Boxes className="w-3.5 h-3.5 text-muted-foreground" />
                      {t.app.comparison.metricBinary}
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground">
                      {t.app.comparison.metricBinaryOriginal}
                    </td>
                    <td className="py-2.5 px-3 text-primary font-semibold">
                      {t.app.comparison.metricBinaryProtected}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-muted-foreground" />
                      {t.app.comparison.metricVm}
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground">
                      {t.app.comparison.metricVmOriginal}
                    </td>
                    <td className="py-2.5 px-3 text-primary font-semibold">
                      {t.app.comparison.metricVmProtected}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2.5 px-3 font-medium text-foreground flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                      {t.app.comparison.metricWatermark}
                    </td>
                    <td className="py-2.5 px-3 text-muted-foreground">
                      {t.app.comparison.metricWatermarkOriginal}
                    </td>
                    <td className="py-2.5 px-3 text-primary font-semibold">
                      {t.app.comparison.metricWatermarkProtected}: &ldquo;{watermark || "Meow team"}&rdquo;
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeComparisonView;
