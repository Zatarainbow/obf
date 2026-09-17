import { useState, useCallback, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Lock,
  Upload,
  FileCode2,
  Terminal,
  Copy,
  Check,
  ExternalLink,
  Loader2,
  AlertCircle,
  X,
  History,
  Trash2,
  Zap,
  Cpu,
  Boxes,
  Sparkles,
  ArrowLeft,
  Download,
  Info,
  KeyRound,
  Eye,
  Code2,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CodeEditor } from "@/components/CodeEditor";
import {
  obfuscateCode,
  obfuscateFile,
  getHistory,
  addToHistory,
  clearHistory,
  type HistoryEntry,
  type ApiError,
} from "@/lib/api";

const DEFAULT_CODE = `# Meowt Obfuscator v5.2 - Ví dụ mẫu
import hashlib

def hash_password(password: str) -> str:
    """Băm mật khẩu bằng SHA-256."""
    return hashlib.sha256(password.encode()).hexdigest()

if __name__ == "__main__":
    pwd = input("Nhập mật khẩu: ")
    print(f"Mã băm: {hash_password(pwd)}")
`;

const protectionTips = [
  {
    icon: KeyRound,
    title: "Watermark độc nhất",
    description: "Nhúng tên tác giả vào header file để truy vết nguồn gốc khi bị rò rỉ.",
  },
  {
    icon: Eye,
    title: "Chống dịch ngược",
    description: "Đổi tên biến, xóa comment, làm rối luồng điều khiển — dịch ngược gần như bất khả thi.",
  },
  {
    icon: Code2,
    title: "Tương thích Python 3.x",
    description: "File đã mã hóa chạy được trên mọi môi trường Python 3, không cần thư viện phụ trợ.",
  },
];

const quickSteps = [
  { step: "1", label: "Dán mã hoặc tải file .py" },
  { step: "2", label: "Nhập watermark (tùy chọn)" },
  { step: "3", label: "Nhấn nút Bảo vệ mã nguồn" },
  { step: "4", label: "Nhận link tải từ Catbox" },
];

const ObfuscateDashboard = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(DEFAULT_CODE);
  const [watermark, setWatermark] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingStage, setLoadingStage] = useState("");
  const [error, setError] = useState<ApiError | null>(null);
  const [resultLink, setResultLink] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const handleObfuscate = useCallback(async () => {
    if (!code.trim() && !fileContent) {
      setError({
        message: "Chưa có mã nguồn",
        details: "Vui lòng dán mã Python hoặc tải file .py lên trước khi bảo vệ.",
      });
      return;
    }

    setIsLoading(true);
    setProgress(15);
    setLoadingStage("Đang phân tích cú pháp AST Python...");
    setError(null);
    setResultLink(null);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 35) {
          setLoadingStage("Đang làm phẳng luồng điều khiển (Deep Control Flow)...");
          return prev + 6;
        }
        if (prev < 68) {
          setLoadingStage("Đang biên dịch WebAssembly & ảo hóa KVM 2.0...");
          return prev + 4;
        }
        if (prev < 92) {
          setLoadingStage("Đang đóng gói & tải lên Catbox...");
          return prev + 2;
        }
        return prev;
      });
    }, 350);

    try {
      let response;
      if (fileContent && fileName) {
        response = await obfuscateFile(new File([fileContent], fileName), {
          deep: true,
          user: watermark,
          use_wasm: true,
          use_kvm2: true,
        });
      } else {
        response = await obfuscateCode({
          code,
          deep: true,
          user: watermark,
          use_wasm: true,
          use_kvm2: true,
        });
      }

      setProgress(100);
      setLoadingStage("Bảo vệ mã nguồn hoàn tất!");
      setResultLink(response.link);
      const updatedHistory = addToHistory({
        watermark: watermark || "(không có)",
        codeLength: fileContent?.length || code.length,
        link: response.link,
        timestamp: Date.now(),
      });
      setHistory(updatedHistory);
      toast.success("Bảo vệ mã nguồn thành công!", {
        description: "File đã được mã hóa và tải lên Catbox.",
      });
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError);
      toast.error(apiError.message, {
        description: apiError.details,
      });
    } finally {
      clearInterval(timer);
      setIsLoading(false);
    }
  }, [code, fileContent, fileName, watermark]);

  const handleCopyLink = useCallback(async () => {
    if (!resultLink) return;
    try {
      await navigator.clipboard.writeText(resultLink);
      setCopied(true);
      toast.success("Đã sao chép liên kết!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Không thể sao chép");
    }
  }, [resultLink]);

  const handleFileSelect = useCallback((file: File) => {
    if (!file.name.endsWith(".py")) {
      toast.error("Chỉ hỗ trợ file .py");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      setFileContent(content);
      setFileName(file.name);
      setCode(content);
      toast.success(`Đã tải lên: ${file.name}`);
    };
    reader.readAsText(file);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  }, [handleFileSelect]);

  const handleClearFile = useCallback(() => {
    setFileName(null);
    setFileContent(null);
    setCode(DEFAULT_CODE);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const handleClearHistory = useCallback(() => {
    clearHistory();
    setHistory([]);
    toast.success("Đã xóa lịch sử");
  }, []);

  const charCount = code.length;
  const lineCount = code.length > 0 ? code.split("\n").length : 0;

  return (
    <div className="min-h-screen bg-background noise">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm hidden md:inline">Về trang chủ</span>
              </button>
              <div className="w-px h-6 bg-border/50" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Shield className="text-white" style={{ width: "1.1rem", height: "1.1rem" }} />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-base">Meowt</span>
                  <span className="text-xs text-muted-foreground font-mono-code">v5.2</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs text-muted-foreground">Máy chủ: obfpy.vercel.app</span>
              </div>
              <a
                href="https://obfpy.vercel.app/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
              >
                <Terminal className="w-4 h-4" />
                <span className="hidden md:inline">Tài liệu API</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-14 container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          {/* Main content */}
          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-3 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-border/50 text-xs text-muted-foreground">
                <Sparkles className="w-3 h-3 text-primary" />
                <span>Công cụ bảo vệ mã nguồn Python bởi Meow team</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Meowt</span> Obfuscator
              </h1>
              <p className="text-muted-foreground text-sm max-w-2xl">
                Bảo vệ mã nguồn Python toàn diện với Deep Control Flow Flattening, WebAssembly Layer và máy ảo KVM 2.0.
                Dán code hoặc tải file .py, nhấn một nút — nhận link tải file đã mã hóa.
              </p>
            </div>

            {/* Quick guide */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fadeIn">
              {quickSteps.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 p-3 rounded-lg glass border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {s.step}
                  </div>
                  <span className="text-xs text-muted-foreground leading-tight">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Code editor / File upload */}
            <div className="space-y-3">
              {fileName ? (
                <div className="flex items-center justify-between p-3 rounded-lg glass border border-primary/30 neon-border">
                  <div className="flex items-center gap-3">
                    <FileCode2 className="w-5 h-5 text-primary" />
                    <div>
                      <div className="text-sm font-medium">{fileName}</div>
                      <div className="text-xs text-muted-foreground">{charCount} bytes • {lineCount} dòng</div>
                    </div>
                  </div>
                  <button
                    onClick={handleClearFile}
                    className="p-1.5 rounded-md hover:bg-secondary/50 transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              ) : (
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`relative rounded-lg border-2 border-dashed transition-all p-4 ${
                    isDragging
                      ? "border-primary bg-primary/5 neon-border"
                      : "border-border/50 hover:border-primary/30"
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".py"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileSelect(file);
                    }}
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Kéo thả file .py vào đây hoặc nhấn để chọn file</span>
                  </button>
                </div>
              )}

              {/* VSCode-style Code Editor */}
              <CodeEditor
                code={code}
                onChange={(newCode) => {
                  setCode(newCode);
                  if (fileName) {
                    setFileName(null);
                    setFileContent(null);
                  }
                }}
                fileName={fileName}
                onReset={() => {
                  setCode(DEFAULT_CODE);
                  setFileName(null);
                  setFileContent(null);
                  toast.info("Đã khôi phục mã mẫu!");
                }}
              />
            </div>

            {/* Active Protection & Watermark */}
            <div className="grid sm:grid-cols-[1fr_320px] gap-3">
              <div className="p-4 rounded-xl glass border border-border/50 neon-border flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Lớp bảo vệ (tự động bật)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono-code text-primary">
                    <Zap className="w-3 h-3" /> Deep Control Flow
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-xs font-mono-code text-accent">
                    <Boxes className="w-3 h-3" /> WebAssembly Layer
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono-code text-primary">
                    <Cpu className="w-3 h-3" /> KVM 2.0 VM
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl glass border border-border/50">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <Lock className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">Watermark tác giả</div>
                    <div className="text-xs text-muted-foreground mt-0.5 mb-2">Nhúng tên bạn vào header file (tùy chọn)</div>
                    <Input
                      value={watermark}
                      onChange={(e) => setWatermark(e.target.value)}
                      placeholder="vd: Meow team"
                      className="h-8 text-xs bg-background/50"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Loading Bar when Obfuscating */}
            {isLoading && (
              <div className="p-4 rounded-xl glass border border-primary/40 neon-border animate-fadeIn space-y-3 bg-gradient-to-r from-primary/10 via-background to-accent/10 shadow-[0_0_30px_hsl(187_100%_50%/0.15)]">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 font-mono-code text-foreground font-medium">
                    <Loader2 className="w-4 h-4 text-primary animate-spin" />
                    <span className="truncate">{loadingStage || "Đang xử lý mã nguồn..."}</span>
                  </div>
                  <span className="font-mono-code text-primary font-bold text-sm shrink-0 ml-2">
                    {Math.min(100, Math.round(progress))}%
                  </span>
                </div>

                <div className="relative h-2.5 w-full bg-secondary/80 rounded-full overflow-hidden border border-border/40 p-[1px]">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300 rounded-full shadow-[0_0_12px_hsl(187_100%_50%/0.7)]"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-muted-foreground font-mono-code">
                  <span className="text-primary/90 flex items-center gap-1.5">
                    <Shield className="w-3 h-3" /> Deep Control Flow • WASM • KVM 2.0
                  </span>
                  <span className="text-accent animate-pulse">obfpy.vercel.app</span>
                </div>
              </div>
            )}

            {/* Obfuscate button */}
            <Button
              onClick={handleObfuscate}
              disabled={isLoading || (!code.trim() && !fileContent)}
              size="lg"
              className="w-full relative bg-gradient-to-r from-primary to-accent text-white hover:shadow-[0_0_40px_hsl(187_100%_50%/0.4)] disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Đang bảo vệ mã nguồn ({Math.min(100, Math.round(progress))}%)
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Bảo vệ mã nguồn
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </span>
              )}
            </Button>

            {/* Error */}
            {error && (
              <div className="p-4 rounded-xl border border-destructive/30 bg-destructive/5 flex items-start gap-3 animate-fadeIn">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-sm text-destructive">{error.message}</div>
                  {error.details && (
                    <div className="text-xs text-muted-foreground mt-1">{error.details}</div>
                  )}
                </div>
                <button
                  onClick={() => setError(null)}
                  className="ml-auto p-1 rounded-md hover:bg-secondary/50 transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            )}

            {/* Result */}
            {resultLink && (
              <div className="p-5 rounded-xl glass border border-primary/30 neon-border animate-fadeIn space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Bảo vệ mã nguồn thành công!</div>
                    <div className="text-xs text-muted-foreground">File đã được mã hóa và tải lên Catbox</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border/50">
                  <FileCode2 className="w-4 h-4 text-primary shrink-0" />
                  <input
                    readOnly
                    value={resultLink}
                    className="flex-1 bg-transparent text-sm font-mono-code text-foreground/80 focus:outline-none truncate"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-md hover:bg-secondary/50 transition-colors shrink-0"
                    title="Sao chép liên kết"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                  <a
                    href={resultLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md hover:bg-secondary/50 transition-colors shrink-0"
                    title="Mở trong tab mới"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                  <a
                    href={resultLink}
                    download
                    className="p-2 rounded-md hover:bg-secondary/50 transition-colors shrink-0"
                    title="Tải file về máy"
                  >
                    <Download className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="text-xs text-muted-foreground flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-primary" />
                      Lệnh chạy trực tiếp qua Terminal:
                    </span>
                    <button
                      onClick={() => {
                        const cmd = `curl -sL "${resultLink}" -o obf.py && python3 obf.py`;
                        navigator.clipboard.writeText(cmd);
                        toast.success("Đã sao chép lệnh!");
                      }}
                      className="text-xs text-primary hover:underline flex items-center gap-1 font-mono-code"
                    >
                      <Copy className="w-3 h-3" />
                      Sao chép lệnh
                    </button>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/60 border border-border/50 font-mono-code text-xs text-green-400 select-all overflow-x-auto whitespace-pre">
                    curl -sL "{resultLink}" -o obf.py &amp;&amp; python3 obf.py
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <div className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono-code text-primary flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Deep Control Flow
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20 text-xs font-mono-code text-accent flex items-center gap-1">
                    <Boxes className="w-3 h-3" /> WebAssembly
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-xs font-mono-code text-primary flex items-center gap-1">
                    <Cpu className="w-3 h-3" /> KVM 2.0
                  </div>
                  {watermark && (
                    <div className="px-2.5 py-1 rounded-md bg-muted border border-border/50 text-xs font-mono-code text-muted-foreground">
                      WM: {watermark}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Protection tips */}
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold">Lưu ý khi bảo vệ mã nguồn</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                {protectionTips.map((tip, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl glass border border-border/50 hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <tip.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors">{tip.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - History & Info */}
          <aside className="space-y-4">
            {/* History */}
            <div className="rounded-xl glass border border-border/50 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <History className="w-4 h-4 text-primary" />
                  <span className="font-medium text-sm">Lịch sử bảo vệ</span>
                </div>
                {history.length > 0 && (
                  <button
                    onClick={handleClearHistory}
                    className="p-1.5 rounded-md hover:bg-secondary/50 transition-colors"
                    title="Xóa toàn bộ lịch sử"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                )}
              </div>

              {history.length === 0 ? (
                <div className="text-center py-8">
                  <History className="w-8 h-8 text-muted-foreground/30 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Chưa có lịch sử bảo vệ mã nguồn</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-[500px] overflow-y-auto">
                  {history.map((entry) => (
                    <div
                      key={entry.id}
                      className="p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-medium truncate max-w-[140px]">
                          {entry.watermark}
                        </span>
                        <span className="text-xs text-muted-foreground shrink-0">
                          {new Date(entry.timestamp).toLocaleTimeString("vi-VN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">
                        {entry.codeLength} bytes
                      </div>
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span className="truncate">Mở file đã mã hóa</span>
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* API Info */}
            <div className="rounded-xl glass border border-border/50 p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-accent" />
                <span className="font-medium text-sm">Thông tin API</span>
              </div>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Đường dẫn:</span>
                  <span className="font-mono-code text-foreground/70">/obfuscate</span>
                </div>
                <div className="flex justify-between">
                  <span>Phương thức:</span>
                  <span className="font-mono-code text-foreground/70">POST</span>
                </div>
                <div className="flex justify-between">
                  <span>Phiên bản:</span>
                  <span className="font-mono-code text-foreground/70">5.2</span>
                </div>
                <div className="flex justify-between">
                  <span>Lưu trữ:</span>
                  <span className="font-mono-code text-foreground/70">Catbox</span>
                </div>
              </div>
              <a
                href="https://obfpy.vercel.app/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-colors text-xs text-muted-foreground hover:text-foreground gap-1.5"
              >
                Xem tài liệu API
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>

            {/* Stats summary */}
            <div className="rounded-xl glass border border-border/50 p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="font-medium text-sm">Thống kê phiên</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-background/50 border border-border/50 text-center">
                  <div className="text-2xl font-bold gradient-text">{lineCount}</div>
                  <div className="text-xs text-muted-foreground mt-1">Dòng code</div>
                </div>
                <div className="p-3 rounded-lg bg-background/50 border border-border/50 text-center">
                  <div className="text-2xl font-bold gradient-text">{charCount}</div>
                  <div className="text-xs text-muted-foreground mt-1">Ký tự</div>
                </div>
                <div className="p-3 rounded-lg bg-background/50 border border-border/50 text-center">
                  <div className="text-2xl font-bold gradient-text">{history.length}</div>
                  <div className="text-xs text-muted-foreground mt-1">Lần đã bảo vệ</div>
                </div>
                <div className="p-3 rounded-lg bg-background/50 border border-border/50 text-center">
                  <div className="text-2xl font-bold gradient-text">3</div>
                  <div className="text-xs text-muted-foreground mt-1">Lớp bảo vệ</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ObfuscateDashboard;
