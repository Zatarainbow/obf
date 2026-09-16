const API_BASE_URL = "https://obfpy.vercel.app";
const OBFUSCATE_ENDPOINT = `${API_BASE_URL}/obfuscate`;

export interface ObfuscateOptions {
  code: string;
  deep?: boolean;
  user?: string;
  use_wasm?: boolean;
  use_kvm2?: boolean;
}

export interface ObfuscateResponse {
  status: string;
  link: string;
}

export interface ApiError {
  message: string;
  details?: string;
}

export async function obfuscateCode(options: ObfuscateOptions): Promise<ObfuscateResponse> {
  const { code, deep = true, user = "", use_wasm = true, use_kvm2 = true } = options;

  if (!code || code.trim().length === 0) {
    throw {
      message: "Mã nguồn không được để trống",
      details: "Vui lòng dán mã Python hoặc tải file .py lên trước khi obfuscate.",
    } as ApiError;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 60000);

  try {
    const response = await fetch(OBFUSCATE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        deep,
        user,
        use_wasm,
        use_kvm2,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      if (errorData?.error) {
        const isSyntax = typeof errorData.error === "string" && errorData.error.includes("SyntaxError");
        throw {
          message: isSyntax ? "Lỗi cú pháp Python (Syntax Error)" : "Lỗi xử lý mã nguồn",
          details: errorData.error,
        } as ApiError;
      }
      if (response.status === 422) {
        throw {
          message: "Dữ liệu không hợp lệ",
          details: errorData?.detail?.[0]?.msg || "Mã nguồn không đúng định dạng. Vui lòng kiểm tra lại.",
        } as ApiError;
      }
      throw {
        message: `Lỗi máy chủ (${response.status})`,
        details: "Hệ thống đang gặp sự cố. Vui lòng thử lại sau.",
      } as ApiError;
    }

    const data: ObfuscateResponse = await response.json();
    if (data.status === "error" || !data.link) {
      throw {
        message: "Không thể mã hóa code",
        details: (data as any).error || "Máy chủ không trả về liên kết tải mã nguồn đã mã hóa.",
      } as ApiError;
    }
    return data;
  } catch (err) {
    clearTimeout(timeoutId);
    if (err instanceof DOMException && err.name === "AbortError") {
      throw {
        message: "Hết thời gian chờ",
        details: "Yêu cầu mất quá lâu. Vui lòng thử lại với đoạn code ngắn hơn.",
      } as ApiError;
    }
    if ((err as ApiError).message) {
      throw err;
    }
    throw {
      message: "Lỗi kết nối mạng",
      details: "Không thể kết nối đến máy chủ Meowt. Vui lòng kiểm tra internet và thử lại.",
    } as ApiError;
  }
}

export async function obfuscateFile(
  file: File,
  options: Omit<ObfuscateOptions, "code"> = {}
): Promise<ObfuscateResponse> {
  const { deep = true, user = "", use_wasm = true, use_kvm2 = true } = options;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("deep", String(deep));
  formData.append("user", user);
  formData.append("use_wasm", String(use_wasm));
  formData.append("use_kvm2", String(use_kvm2));

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 60000);

  try {
    const response = await fetch(OBFUSCATE_ENDPOINT, {
      method: "POST",
      body: formData,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      if (errorData?.error) {
        const isSyntax = typeof errorData.error === "string" && errorData.error.includes("SyntaxError");
        throw {
          message: isSyntax ? "Lỗi cú pháp Python (Syntax Error)" : "Lỗi xử lý file",
          details: errorData.error,
        } as ApiError;
      }
      if (response.status === 422) {
        throw {
          message: "File không hợp lệ",
          details: errorData?.detail?.[0]?.msg || "File .py không đúng định dạng.",
        } as ApiError;
      }
      throw {
        message: `Lỗi máy chủ (${response.status})`,
        details: "Hệ thống đang gặp sự cố. Vui lòng thử lại sau.",
      } as ApiError;
    }

    const data: ObfuscateResponse = await response.json();
    if (data.status === "error" || !data.link) {
      throw {
        message: "Không thể mã hóa file",
        details: (data as any).error || "Máy chủ không trả về liên kết tải mã nguồn đã mã hóa.",
      } as ApiError;
    }
    return data;
  } catch (err) {
    clearTimeout(timeoutId);
    if (err instanceof DOMException && err.name === "AbortError") {
      throw {
        message: "Hết thời gian chờ",
        details: "Tải file mất quá lâu. Vui lòng thử lại với file nhỏ hơn.",
      } as ApiError;
    }
    if ((err as ApiError).message) {
      throw err;
    }
    throw {
      message: "Lỗi kết nối mạng",
      details: "Không thể kết nối đến máy chủ Meowt. Vui lòng kiểm tra internet và thử lại.",
    } as ApiError;
  }
}

export interface HistoryEntry {
  id: string;
  watermark: string;
  codeLength: number;
  link: string;
  timestamp: number;
}

const HISTORY_KEY = "meowt_history";
const MAX_HISTORY = 10;

export function getHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as HistoryEntry[];
  } catch {
    return [];
  }
}

export function addToHistory(entry: Omit<HistoryEntry, "id">): HistoryEntry[] {
  const history = getHistory();
  const newEntry: HistoryEntry = {
    ...entry,
    id: crypto.randomUUID(),
  };
  const updated = [newEntry, ...history].slice(0, MAX_HISTORY);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  return updated;
}

export function clearHistory(): void {
  localStorage.removeItem(HISTORY_KEY);
}
