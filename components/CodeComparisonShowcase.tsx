import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  FileCode2,
  Columns,
  Copy,
  Check,
  Download,
  Terminal,
  ArrowRight,
  KeyRound,
  Eye,
  Cpu,
  Boxes,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import { useLanguage } from "@/lib/i18n";

export const TRYCRACKME_ORIGINAL_CODE = `#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
TryCrackMe Challenge v1.0
Target: Find the valid license key to reveal the secret flag!
Can you decompile and reverse engineer this algorithm?
"""
import hashlib
import sys

SECRET_SALT = "MEOWT_SEC_2026"

def verify_license(license_key: str) -> bool:
    """Validate user license key using multi-round hashing and checksum."""
    parts = license_key.strip().split("-")
    if len(parts) != 4:
        return False
    
    prefix, user_id, tier, checksum = parts
    if prefix != "MEOW" or tier not in ("PRO", "VIP", "DEV"):
        return False
    
    # Calculate expected integrity checksum
    raw_payload = f"{user_id}:{tier}:{SECRET_SALT}".encode("utf-8")
    expected = hashlib.sha256(raw_payload).hexdigest()[:8].upper()
    return checksum == expected

def unlock_payload(license_key: str):
    """Decrypt the secret flag upon valid license."""
    print("\\n" + "=" * 50)
    print("  [+] LICENSE ACCEPTED! Access Granted.")
    print("  [+] Developer Flag: FLAG{m30wt_c4n_y0u_d3c0mp1l3_m3_2026}")
    print("=" * 50 + "\\n")

def main():
    print("=" * 50)
    print("   MEOWT V5.2 - SECURITY CRACKME CHALLENGE")
    print("=" * 50)
    key = input("Enter License Key (Format: MEOW-USER-TIER-HASH): ").strip()
    if verify_license(key):
        unlock_payload(key)
    else:
        print("\\n[-] ACCESS DENIED: Invalid license key or tampered binary!")
        sys.exit(1)

if __name__ == "__main__":
    main()
`;

export const TRYCRACKME_OBF_PREVIEW = `#!/usr/bin/env python3
# -*- coding: utf-8 -*-
__Author__ = ("Meow team", "Meowt")
__In4__ = ("Meowt v5.2", "Meowt::Meow team")
__VI__ = 'Vui lòng cẩn trọng trước khi run file này, có thể chứa mã độc, virus, hoặc botnet... nếu có vấn đề chủ obfuscate KHÔNG CHỊU TRÁCH NHIỆM'
__EN__ = 'Please use caution before running this file — it may contain malware, viruses, or a botnet... if anything goes wrong the obfuscate owner is NOT RESPONSIBLE'
__Obf__ = 'RESTRICTED FILE — INTELLECTUAL PROPERTY OF Meow team. Any reverse engineering, decompilation, or deobfuscation attempt is prohibited under 17 U.S.C. §1201 (DMCA anti-circumvention) and will be prosecuted. Intrusion detected. This incident has been recorded and escalated to the security response team.'
__user__ = "Meow team"
class Meowt(MemoryError):0
__a__, MeowTeam, obfnaydcelonemucksudung, MeowTeamPro = ("Meow team", "Meowt"), [['2', '4'], ['5', '6', '8', 'a', 'b'], ['c', 'd', 'e'], ['h', 'i', 'l', 'm'], ['n', 'o'], ['p', 'r', 's', 't'], ['u', 'x', 'z']], [['2', '4', '5', '6'], ['8', 'a', 'b', 'c'], ['d', 'e'], ['h', 'i', 'l', 'm', 'n'], ['o', 'p', 'r', 's', 't'], ['u', 'x', 'z']], [['2', '4', '5', '6', '8'], ['a', 'b', 'c'], ['d', 'e'], ['h', 'i', 'l'], ['m', 'n', 'o'], ['p', 'r', 's', 't', 'u'], ['x', 'z']]
globals()['mrbeatsnoiobfnay10m$'] = [['2', '4', '5'], ['6', '8', 'a', 'b'], ['c', 'd'], ['e', 'h', 'i', 'l', 'm'], ['n', 'o'], ['p', 'r', 's', 't', 'u'], ['x', 'z']]
_0x0 = __import__(MeowTeamPro[3][2]+MeowTeam[6][2]+globals()['mrbeatsnoiobfnay10m$'][3][4]+obfnaydcelonemucksudung[1][1])
_0x1 = __import__(globals()['mrbeatsnoiobfnay10m$'][3][4]+MeowTeamPro[1][0]+globals()['mrbeatsnoiobfnay10m$'][5][1]+obfnaydcelonemucksudung[4][3]+MeowTeam[3][0]+MeowTeam[1][3]+MeowTeamPro[3][2])
_0x2 = __import__(MeowTeamPro[3][0]+obfnaydcelonemucksudung[1][1]+MeowTeam[5][2]+MeowTeam[3][0]+globals()['mrbeatsnoiobfnay10m$'][3][3]+obfnaydcelonemucksudung[3][1]+MeowTeam[1][4])
_0x3 = __import__(obfnaydcelonemucksudung[1][2]+globals()['mrbeatsnoiobfnay10m$'][5][4]+globals()['mrbeatsnoiobfnay10m$'][3][2]+obfnaydcelonemucksudung[3][2]+MeowTeamPro[5][3]+globals()['mrbeatsnoiobfnay10m$'][3][2]+globals()['mrbeatsnoiobfnay10m$'][4][0]+MeowTeam[5][2])
_0x4 = __import__(globals()['mrbeatsnoiobfnay10m$'][4][1]+MeowTeam[5][2])
_0x5 = __import__(MeowTeamPro[1][1]+MeowTeamPro[1][0]+MeowTeam[5][2]+obfnaydcelonemucksudung[2][1]+obfnaydcelonemucksudung[3][1]+obfnaydcelonemucksudung[1][2]+MeowTeam[3][2])
_0xjgj = vars().copy()
for KO, BF in vars(_0x0).items():
    if callable(BF): _0xjgj["aispg" if KO == MeowTeam[2][1]+MeowTeam[2][2]+globals()['mrbeatsnoiobfnay10m$'][2][0]+MeowTeamPro[4][0]+globals()['mrbeatsnoiobfnay10m$'][4][0]+globals()['mrbeatsnoiobfnay10m$'][4][1]+MeowTeamPro[3][1]+MeowTeamPro[4][0] else KO] = BF
for KO, BF in vars(_0x1).items():
    if callable(BF): _0xjgj["ddto" if KO == MeowTeam[3][2]+globals()['mrbeatsnoiobfnay10m$'][4][1]+obfnaydcelonemucksudung[1][3]+globals()['mrbeatsnoiobfnay10m$'][5][1]+MeowTeamPro[3][1] else KO] = BF
for KO, BF in vars(_0x2).items():
    if callable(BF): _0xjgj["eghz" if KO == obfnaydcelonemucksudung[4][3]+obfnaydcelonemucksudung[3][0]+obfnaydcelonemucksudung[1][3]+globals()['mrbeatsnoiobfnay10m$'][5][1]+obfnaydcelonemucksudung[1][1]+globals()['mrbeatsnoiobfnay10m$'][5][1]+obfnaydcelonemucksudung[4][2] else KO] = BF
for KO, BF in vars(_0x3).items():
    if callable(BF): _0xjgj["nsvd" if KO == MeowTeam[2][2]+MeowTeam[6][1]+globals()['mrbeatsnoiobfnay10m$'][3][0]+globals()['mrbeatsnoiobfnay10m$'][2][1] else KO] = BF
for KO, BF in vars(_0x4).items():
    if callable(BF): _0xjgj["qobaj" if KO == globals()['mrbeatsnoiobfnay10m$'][5][4]+obfnaydcelonemucksudung[4][2]+MeowTeamPro[3][2]+globals()['mrbeatsnoiobfnay10m$'][4][1]+MeowTeamPro[5][0] else KO] = BF
for KO, BF in vars(_0x5).items():
    if callable(BF): _0xjgj["zuz" if KO == MeowTeamPro[1][1]+MeowTeam[1][2]+MeowTeam[1][0]+globals()['mrbeatsnoiobfnay10m$'][5][1]+MeowTeamPro[4][0]+globals()['mrbeatsnoiobfnay10m$'][4][1]+globals()['mrbeatsnoiobfnay10m$'][3][4]+MeowTeamPro[3][2]+globals()['mrbeatsnoiobfnay10m$'][5][3]+MeowTeamPro[3][2]+MeowTeam[4][0]+obfnaydcelonemucksudung[2][1] else KO] = BF
globals().update(_0xjgj)

# --- [MEOWT v5.2: 741 KB POLYMORPHIC BYTECODE KEYSTREAM & WASM RUNTIME] ---
ዔ揑矽纫跸X = '{Wp48S^xk9=GL@E0stWa5&!@IBe;hw0a}$yUj8gs^htj(UCRik!Rl^R78-lb!R=M#2yNk@?A+tOW)I?&W8r16{!5Vvv3fqT=MFsnO\`bl{?rBJ!...'
# ... [741,237 characters of encrypted WebAssembly memory & KVM 2.0 stack bytecode truncated for browser view] ...
# Full executable code is available for download as trycrackme_obf.py (741 KB)

# --- [RUNTIME DISPATCH & INTEGRITY VERIFICATION] ---
type(lambda:0)(ddto(__import__('io').BytesIO(ミ橬蹕槢鎂[:-8])), globals())()
`;

export const CodeComparisonShowcase: React.FC = () => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"original" | "protected" | "diff">("diff");
  const [copiedOriginal, setCopiedOriginal] = useState(false);
  const [copiedProtected, setCopiedProtected] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  const isVi = lang === "vi";

  // Highlight original code with Prism
  const highlightedOriginal = useMemo(() => {
    try {
      return Prism.highlight(TRYCRACKME_ORIGINAL_CODE, Prism.languages.python, "python");
    } catch {
      return TRYCRACKME_ORIGINAL_CODE;
    }
  }, []);

  // Highlight protected preview with Prism
  const highlightedProtected = useMemo(() => {
    try {
      return Prism.highlight(TRYCRACKME_OBF_PREVIEW, Prism.languages.python, "python");
    } catch {
      return TRYCRACKME_OBF_PREVIEW;
    }
  }, []);

  const handleCopyOriginal = async () => {
    try {
      await navigator.clipboard.writeText(TRYCRACKME_ORIGINAL_CODE);
      setCopiedOriginal(true);
      toast.success(isVi ? "Đã sao chép mã gốc trycrackme.py!" : "Copied original trycrackme.py!");
      setTimeout(() => setCopiedOriginal(false), 2000);
    } catch {
      toast.error(isVi ? "Không thể sao chép" : "Failed to copy");
    }
  };

  const handleCopyProtected = async () => {
    try {
      let codeToCopy = TRYCRACKME_OBF_PREVIEW;
      try {
        const res = await fetch("/trycrackme_obf.py");
        if (res.ok) {
          const text = await res.text();
          if (text.length > 1000) codeToCopy = text;
        }
      } catch {
        // use preview
      }
      await navigator.clipboard.writeText(codeToCopy);
      setCopiedProtected(true);
      toast.success(isVi ? "Đã sao chép mã đã bảo vệ đầy đủ!" : "Copied full protected code!");
      setTimeout(() => setCopiedProtected(false), 2000);
    } catch {
      toast.error(isVi ? "Không thể sao chép" : "Failed to copy");
    }
  };

  const handleCopyKey = async () => {
    try {
      await navigator.clipboard.writeText("MEOW-1337-PRO-26909F25");
      setCopiedKey(true);
      toast.success(isVi ? "Đã sao chép License Key thử nghiệm!" : "Copied test License Key!");
      setTimeout(() => setCopiedKey(false), 2000);
    } catch {
      toast.error(isVi ? "Không thể sao chép" : "Failed to copy");
    }
  };

  const originalLines = useMemo(() => TRYCRACKME_ORIGINAL_CODE.split("\n"), []);
  const protectedLines = useMemo(() => TRYCRACKME_OBF_PREVIEW.split("\n"), []);

  return (
    <section id="preview" className="py-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/30 text-xs font-semibold text-primary mb-2 shadow-[0_0_20px_hsl(187_100%_50%/0.2)]">
            <ShieldCheck className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span>
              {isVi
                ? "THỬ THÁCH BẢO MẬT & SO SÁNH TRỰC QUAN"
                : "SECURITY CHALLENGE & LIVE CODE COMPARISON"}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {isVi ? "Xem Trước Trực Quan:" : "Live Code Preview:"}{" "}
            <span className="gradient-text">TryCrackMe Challenge</span>
          </h2>

          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {isVi
              ? "So sánh trực tiếp sự khác biệt vượt trội giữa mã nguồn Python nguyên bản dễ bị đảo ngược và mã thực thi được Meowt v5.2 bọc bảo vệ bằng WebAssembly đa nền tảng kết hợp KVM 2.0 Custom Stack VM."
              : "Compare plaintext Python vulnerable to decompilation against Meowt v5.2 fortified binary bytecode secured by WebAssembly and KVM 2.0 Custom Stack VM."}
          </p>
        </div>

        {/* Toolbar & Tab Switcher */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-4 p-2 rounded-2xl bg-card/80 border border-border/60 glass shadow-lg">
          <div className="flex items-center gap-1 overflow-x-auto py-0.5">
            <button
              type="button"
              onClick={() => setActiveTab("diff")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all shrink-0 ${
                activeTab === "diff"
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(187_100%_50%/0.3)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span className="sm:hidden">{isVi ? "So sánh" : "Diff"}</span>
              <span className="hidden sm:inline">{isVi ? "So sánh trực quan (Side-by-Side)" : "Side-by-Side Comparison"}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("original")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs md:text-sm font-medium transition-all shrink-0 ${
                activeTab === "original"
                  ? "bg-secondary text-foreground border border-border/80 shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span className="sm:hidden">{isVi ? "Mã gốc" : "Original"}</span>
              <span className="hidden sm:inline">{isVi ? "Mã gốc (trycrackme.py)" : "Original (trycrackme.py)"}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("protected")}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs md:text-sm font-medium transition-all shrink-0 ${
                activeTab === "protected"
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span className="sm:hidden">{isVi ? "Mã bảo vệ" : "Fortified"}</span>
              <span className="hidden sm:inline">{isVi ? "Mã đã bảo vệ (Meowt v5.2)" : "Fortified (Meowt v5.2)"}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </button>
          </div>

          {/* Quick Action buttons */}
          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end shrink-0">
            <a
              href="/trycrackme.py"
              download="trycrackme.py"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium border border-border/60 bg-secondary/40 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              title="Tải mã nguồn gốc trycrackme.py"
            >
              <Download className="w-3.5 h-3.5" />
              <span>trycrackme.py</span>
            </a>

            <a
              href="/trycrackme_obf.py"
              download="trycrackme_obf.py"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 transition-colors shadow-[0_0_12px_hsl(187_100%_50%/0.15)]"
              title="Tải mã đã mã hóa trycrackme_obf.py (741 KB)"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">trycrackme_obf.py (741 KB)</span>
              <span className="sm:hidden">obf.py (741 KB)</span>
            </a>
          </div>
        </div>

        {/* VIEW 1: SIDE-BY-SIDE DIFF COMPARISON */}
        {activeTab === "diff" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid lg:grid-cols-2 gap-4">
              {/* Left Column: Original Code */}
              <div className="rounded-2xl border border-border/70 bg-card overflow-hidden shadow-md flex flex-col">
                <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/40 border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="font-mono-code text-xs text-foreground font-semibold ml-1">
                      trycrackme.py
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-[10px] font-mono-code flex items-center gap-1 font-semibold">
                      <ShieldAlert className="w-3 h-3" />
                      {isVi ? "Dễ bị dịch ngược 100%" : "100% Decompilable"}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyOriginal}
                    className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                    title="Copy code"
                  >
                    {copiedOriginal ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="relative flex-1 max-h-[350px] sm:max-h-[460px] overflow-auto bg-[#0a0f18] text-xs font-mono-code p-3">
                  <div className="flex min-w-full">
                    <div className="pr-3 text-muted-foreground/40 select-none text-right font-mono-code text-[11px] border-r border-border/30">
                      {originalLines.map((_, i) => (
                        <div key={i} className="leading-5 h-5">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    <pre
                      className="pl-3 flex-1 overflow-x-auto text-[11px] leading-5 font-mono-code text-[#e6edf3]"
                      dangerouslySetInnerHTML={{ __html: highlightedOriginal }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Fortified Code */}
              <div className="rounded-2xl border border-primary/40 bg-card overflow-hidden shadow-[0_0_30px_hsl(187_100%_50%/0.08)] flex flex-col">
                <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 border-b border-primary/30">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-accent/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    </div>
                    <span className="font-mono-code text-xs text-foreground font-semibold ml-1">
                      trycrackme_obf.py
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-[10px] font-mono-code flex items-center gap-1 font-semibold animate-pulse">
                      <ShieldCheck className="w-3 h-3" />
                      {isVi ? "Bảo vệ tối đa 99.9%" : "99.9% Anti-Reverse"}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyProtected}
                    className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                    title="Copy full code"
                  >
                    {copiedProtected ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="relative flex-1 max-h-[350px] sm:max-h-[460px] overflow-auto bg-[#070c14] text-xs font-mono-code p-3">
                  <div className="flex min-w-full">
                    <div className="pr-3 text-muted-foreground/40 select-none text-right font-mono-code text-[11px] border-r border-border/30">
                      {protectedLines.map((_, i) => (
                        <div key={i} className="leading-5 h-5">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                    <pre
                      className="pl-3 flex-1 overflow-x-auto text-[11px] leading-5 font-mono-code text-[#38bdf8]"
                      dangerouslySetInnerHTML={{ __html: highlightedProtected }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Security Metrics Comparison Table */}
            <div className="rounded-2xl border border-border/60 bg-card/60 p-4 sm:p-5 glass shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <h4 className="text-sm font-semibold tracking-wide uppercase text-primary">
                  {isVi ? "Bảng Đối Chiếu Chỉ Số An Toàn Thực Tế" : "Direct Security Metrics Comparison"}
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl border border-border/50 bg-background/50 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Eye className="w-3.5 h-3.5 text-accent" />
                    <span>{isVi ? "Khả năng dịch ngược" : "Decompilation Risk"}</span>
                  </div>
                  <div className="text-xs font-mono-code text-destructive line-through opacity-80">
                    {isVi ? "100% qua uncompyle6" : "100% via uncompyle6"}
                  </div>
                  <div className="text-xs font-mono-code text-primary font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    {isVi ? "Chống dịch ngược 99.9%" : "99.9% Anti-Decompilation"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-border/50 bg-background/50 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    <span>{isVi ? "Luồng điều khiển logic" : "Control Flow"}</span>
                  </div>
                  <div className="text-xs font-mono-code text-destructive line-through opacity-80">
                    {isVi ? "Tuần tự hở, lộ thuật toán" : "Plaintext sequential"}
                  </div>
                  <div className="text-xs font-mono-code text-primary font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    {isVi ? "Deep Flattening đa nhánh" : "Deep Flow Flattening"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-border/50 bg-background/50 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Boxes className="w-3.5 h-3.5 text-accent" />
                    <span>{isVi ? "Lớp nhị phân WebAssembly" : "Binary Shield"}</span>
                  </div>
                  <div className="text-xs font-mono-code text-muted-foreground line-through opacity-80">
                    {isVi ? "Không có" : "None"}
                  </div>
                  <div className="text-xs font-mono-code text-primary font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    {isVi ? "WebAssembly (WASM) Layer" : "WebAssembly Layer"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-border/50 bg-background/50 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Cpu className="w-3.5 h-3.5 text-primary" />
                    <span>{isVi ? "Môi trường thực thi" : "Execution VM"}</span>
                  </div>
                  <div className="text-xs font-mono-code text-muted-foreground line-through opacity-80">
                    {isVi ? "CPython Bytecode thông thường" : "CPython standard bytecode"}
                  </div>
                  <div className="text-xs font-mono-code text-primary font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    {isVi ? "KVM 2.0 Custom Stack VM" : "KVM 2.0 Custom Stack VM"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: ORIGINAL CODE ALONE */}
        {activeTab === "original" && (
          <div className="rounded-2xl border border-border/70 bg-card overflow-hidden shadow-lg animate-fadeIn">
            <div className="flex items-center justify-between px-4 py-3 bg-secondary/40 border-b border-border/60">
              <div className="flex items-center gap-2">
                <span className="font-mono-code text-xs text-foreground font-semibold">
                  trycrackme.py
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-xs font-mono-code font-semibold flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">{isVi ? "Chưa bảo vệ (Lộ logic keygen)" : "Unprotected Source"}</span>
                  <span className="xs:hidden">{isVi ? "Chưa bảo vệ" : "Unprotected"}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyOriginal}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-border/60 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copiedOriginal ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{isVi ? "Sao chép" : "Copy"}</span>
                </button>
                <a
                  href="/trycrackme.py"
                  download="trycrackme.py"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-border/60 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isVi ? "Tải file" : "Download"}</span>
                </a>
              </div>
            </div>

            <div className="max-h-[380px] sm:max-h-[500px] overflow-auto bg-[#0a0f18] p-3 sm:p-4 text-xs font-mono-code">
              <div className="flex min-w-full">
                <div className="pr-3 sm:pr-4 text-muted-foreground/40 select-none text-right font-mono-code border-r border-border/30">
                  {originalLines.map((_, i) => (
                    <div key={i} className="leading-5 h-5">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <pre
                  className="pl-3 sm:pl-4 flex-1 overflow-x-auto leading-5 font-mono-code text-[#e6edf3]"
                  dangerouslySetInnerHTML={{ __html: highlightedOriginal }}
                />
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: PROTECTED CODE ALONE */}
        {activeTab === "protected" && (
          <div className="rounded-2xl border border-primary/40 bg-card overflow-hidden shadow-[0_0_30px_hsl(187_100%_50%/0.1)] animate-fadeIn">
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5 border-b border-primary/30">
              <div className="flex items-center gap-2">
                <span className="font-mono-code text-xs text-foreground font-semibold">
                  trycrackme_obf.py
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-mono-code font-semibold flex items-center gap-1 animate-pulse">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">{isVi ? "Đã bảo vệ toàn diện (741 KB Binary)" : "Fortified Binary (741 KB)"}</span>
                  <span className="xs:hidden">741 KB</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyProtected}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {copiedProtected ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{isVi ? "Sao chép toàn bộ mã" : "Copy Full Code"}</span>
                  <span className="sm:hidden">{isVi ? "Sao chép" : "Copy"}</span>
                </button>
                <a
                  href="/trycrackme_obf.py"
                  download="trycrackme_obf.py"
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isVi ? "Tải .py" : "Download"}</span>
                </a>
              </div>
            </div>

            <div className="max-h-[380px] sm:max-h-[500px] overflow-auto bg-[#070c14] p-3 sm:p-4 text-xs font-mono-code">
              <div className="flex min-w-full">
                <div className="pr-3 sm:pr-4 text-muted-foreground/40 select-none text-right font-mono-code border-r border-border/30">
                  {protectedLines.map((_, i) => (
                    <div key={i} className="leading-5 h-5">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <pre
                  className="pl-3 sm:pl-4 flex-1 overflow-x-auto leading-5 font-mono-code text-[#38bdf8]"
                  dangerouslySetInnerHTML={{ __html: highlightedProtected }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Interactive TryCrackMe Challenge Terminal Box */}
        <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 border border-primary/30 shadow-xl glass relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>{isVi ? "Thử Thách Dành Cho Reverse Engineer" : "Reverse Engineering Challenge"}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold">
                {isVi ? "Bạn có thể bẻ khóa thuật toán này?" : "Can you crack this protected binary?"}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {isVi
                  ? "File trycrackme_obf.py đã được mã hóa thực tế bằng engine Meowt v5.2 và có thể chạy trực tiếp trên bất kỳ máy nào cài Python 3.8+. Hãy thử giải mã thuật toán hash hoặc tìm License Key để lấy Flag bí mật!"
                  : "The trycrackme_obf.py file is truly fortified with Meowt v5.2 and executes standalone on Python 3.8+. Challenge yourself to reverse-engineer the hash validation algorithm or find the key to unlock the flag!"}
              </p>

              {/* Terminal command snippet */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 text-xs w-full">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/60 border border-border/60 font-mono-code text-foreground overflow-x-auto">
                  <span className="text-primary select-none">$</span>
                  <span>python3 trycrackme_obf.py</span>
                </div>

                <div className="flex items-center justify-between sm:justify-start gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 font-mono-code text-xs">
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    <KeyRound className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="text-muted-foreground hidden sm:inline">
                      {isVi ? "Key mẫu:" : "Test Key:"}
                    </span>
                    <span className="font-bold text-primary truncate">MEOW-1337-PRO-26909F25</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyKey}
                    className="p-1 hover:text-primary transition-colors ml-1 shrink-0"
                    title="Copy test key"
                  >
                    {copiedKey ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => navigate(lang === "en" ? "/en/app" : "/app")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm shadow-[0_0_25px_hsl(187_100%_50%/0.3)] hover:shadow-[0_0_35px_hsl(187_100%_50%/0.5)] transition-all group"
              >
                <Shield className="w-4 h-4" />
                <span>{isVi ? "Bắt đầu Obfuscate code của bạn" : "Obfuscate Your Own Code"}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeComparisonShowcase;
