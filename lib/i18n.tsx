import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "vi" | "en";

export const translations = {
  vi: {
    nav: {
      announcement: "Meowt v5.2: WebAssembly Layer & KVM 2.0 đã ra mắt.",
      tryNow: "Thử ngay →",
      features: "Tính năng",
      howItWorks: "Quy trình",
      faq: "FAQ",
      startObf: "Bắt đầu obf",
    },
    hero: {
      badge: "Bảo vệ Python thế hệ mới bởi Meow team",
      title1: "Meowt",
      title2: "Python Obfuscator",
      subtitleHighlight1: "Bảo vệ tối đa",
      subtitleHighlight2: "dễ dàng",
      subtitleEnd: "sử dụng",
      desc: "Bảo vệ mã nguồn Python đa nền tảng với WebAssembly Security & KVM 2.0. Ngăn chặn triệt để hành vi dịch ngược và sao chép mã trái phép.",
      btnStart: "Bắt đầu obf",
      btnDocs: "Xem tài liệu",
      statVer: "Phiên bản",
      statWasm: "Đa nền tảng",
      statVm: "Custom VM",
      terminalProcessing: "Đang xử lý",
      terminalProtected: "Đã bảo vệ",
      terminalEncrypting: "Đang mã hóa...",
    },
    trustedBy: {
      title: "Được tin dùng bởi các công ty & đội ngũ công nghệ hàng đầu",
    },
    features: {
      badge: "Tính năng bảo vệ",
      heading1: "Bảo vệ code với",
      heading2: "công nghệ tiên tiến",
      desc: "Bộ công cụ bảo vệ mã nguồn Python toàn diện, từ Deep Obfuscation đến WebAssembly binary",
      items: [
        {
          title: "Deep Control Flow Flattening",
          description: "Làm phẳng luồng điều khiển và ẩn lời gọi hàm, khiến việc phân tích logic trở nên cực kỳ khó khăn.",
          badge: "Deep",
        },
        {
          title: "WebAssembly Layer",
          description: "Lớp binary đa nền tảng WASM, biên dịch code Python sang WebAssembly để bảo vệ cấp độ binary.",
          badge: "WASM",
        },
        {
          title: "Custom Stack VM KVM 2.0",
          description: "Máy ảo stack tùy chỉnh KVM 2.0, chạy code trong môi trường ảo hóa độc quyền, chống debug hiệu quả.",
          badge: "KVM 2.0",
        },
        {
          title: "Watermarking độc nhất",
          description: "Nhúng watermark tác giả vào header file, giúp truy vết nguồn gốc nếu code bị rò rỉ trái phép.",
          badge: "Watermark",
        },
        {
          title: "Chống Reverse Engineering",
          description: "Làm rối code thông minh, xóa comment, đổi tên biến và hàm, khiến việc dịch ngược gần như bất khả thi.",
          badge: "Anti-RE",
        },
        {
          title: "Catbox Upload tự động",
          description: "File đã mã hóa được tự động tải lên Catbox, trả về link tải an toàn, sẵn sàng phân phối.",
          badge: "Catbox",
        },
      ],
    },
    howItWorks: {
      badge: "Quy trình",
      heading1: "Bảo vệ code trong",
      heading2: "4 bước đơn giản",
      desc: "Từ mã nguồn gốc đến file được bảo vệ hoàn toàn chỉ trong vài giây",
      steps: [
        {
          step: "01",
          title: "Dán code / Tải file",
          description: "Dán mã Python trực tiếp vào trình soạn thảo hoặc kéo thả file .py từ máy tính của bạn.",
        },
        {
          step: "02",
          title: "Kích hoạt tự động",
          description: "Hệ thống tự động kích hoạt Deep Control Flow, WebAssembly Layer và KVM 2.0 VM.",
        },
        {
          step: "03",
          title: "Nhấn Bắt đầu obf",
          description: "Hệ thống làm rối và ảo hóa mã nguồn trong vài giây với engine Meowt v5.2.",
        },
        {
          step: "04",
          title: "Tải file từ Catbox",
          description: "Nhận liên kết tải file .py đã được bảo vệ hoàn toàn từ Catbox, sẵn sàng phân phối.",
        },
      ],
    },
    stats: {
      s1: "Dòng code đã bảo vệ",
      s2: "Tỷ lệ thành công",
      s3: "Lập trình viên tin dùng",
      s4: "Thời gian xử lý TB",
    },
    faq: {
      badge: "Câu hỏi thường gặp",
      heading1: "Bạn có",
      heading2: "câu hỏi?",
      desc: "Chúng tôi có câu trả lời",
      items: [
        {
          question: "Meowt có ảnh hưởng đến hiệu năng code không?",
          answer: "Không đáng kể. Code đã obfuscate vẫn chạy với tốc độ gần như tương đương code gốc. Chúng tôi tối ưu hóa quá trình làm rối để đảm bảo hiệu năng tốt nhất, thường chỉ giảm 1-3% tốc độ thực thi.",
        },
        {
          question: "WebAssembly Layer hoạt động như thế nào?",
          answer: "WASM Layer biên dịch một phần code Python sang WebAssembly binary, tạo lớp bảo vệ đa nền tảng. Code được nhúng trong WASM khó dịch ngược hơn nhiều so với Python thuần, vì WASM là định dạng binary cấp thấp.",
        },
        {
          question: "KVM 2.0 (Custom Stack VM) là gì?",
          answer: "KVM 2.0 là máy ảo stack tùy chỉnh do Meow team phát triển. Nó chạy code trong môi trường ảo hóa độc quyền, khiến việc debug và phân tích runtime trở nên cực kỳ khó khăn. KVM 2.0 là lớp bảo vệ mạnh nhất của Meowt.",
        },
        {
          question: "File đã obfuscate được lưu ở đâu?",
          answer: "File .py đã mã hóa được tự động tải lên Catbox (catbox.moe) và trả về link tải trực tiếp. Bạn có thể chia sẻ link này an toàn - file đã được bảo vệ hoàn toàn và không thể đọc nội dung gốc.",
        },
        {
          question: "Có giới hạn số dòng code không?",
          answer: "Hệ thống hỗ trợ xử lý hàng nghìn dòng code trong vài giây nhờ backend FastAPI và Meowt v5.2 engine được tối ưu hóa cao.",
        },
        {
          question: "Dữ liệu code của tôi có được lưu trữ không?",
          answer: "Không. Chúng tôi xử lý obfuscate trực tiếp trong bộ nhớ và không lưu trữ mã nguồn gốc của bạn. File kết quả được tải lên Catbox với link ngẫu nhiên, không thể đoán. Lịch sử obfuscate chỉ lưu trong trình duyệt của bạn (localStorage).",
        },
      ],
    },
    cta: {
      badge: "Bảo vệ ngay hôm nay",
      heading1: "Bắt đầu bảo vệ",
      heading2: "mã nguồn ngay hôm nay",
      desc: "Tham gia cùng hàng nghìn lập trình viên đang sử dụng Meowt Obfuscator của Meow team.",
      btnStart: "Bắt đầu obf",
      btnDocs: "Xem tài liệu",
      note: "Miễn phí. Không cần đăng ký. Bảo vệ code ngay lập tức.",
    },
    footer: {
      desc: "Next-Generation Cross-Platform Python Protection & WebAssembly Security. Bảo vệ mã nguồn Python bởi Meow team.",
      colProducts: "Sản phẩm",
      colResources: "Tài nguyên",
      colCompany: "Meow team",
      toolObf: "Công cụ Obfuscate",
      features: "Tính năng",
      workflow: "Quy trình",
      apiDocs: "API Docs",
      openapi: "OpenAPI Schema",
      faq: "FAQ",
      guide: "Hướng dẫn",
      aboutUs: "Về chúng tôi",
      contact: "Liên hệ",
      terms: "Điều khoản",
      privacy: "Bảo mật",
      rights: "© 2024 Meow team. All rights reserved.",
    },
    app: {
      home: "Trang chủ",
      apiDocs: "API Docs",
      badgeTeam: "Meow team",
      title: "Meowt",
      titleSuffix: "Obfuscator",
      subtitle: "Next-Generation Cross-Platform Python Protection & WebAssembly Security",
      dragDrop: "Kéo thả file .py vào đây hoặc click để chọn",
      activeProtection: "Cơ chế bảo vệ (Tự động kích hoạt)",
      watermarkLabel: "Watermark tác giả",
      watermarkSub: "Nhúng tên bạn vào header file (tùy chọn)",
      watermarkPlaceholder: "vd: Meow team",
      btnObfuscate: "Bắt đầu obf",
      btnProcessing: "Đang mã hóa",
      successTitle: "Obfuscate thành công!",
      successSub: "File đã được bảo vệ và tải lên Catbox",
      copyLinkToast: "Đã sao chép link!",
      runDirectCommand: "Lệnh chạy trực tiếp qua Terminal:",
      copyCmdBtn: "Sao chép lệnh",
      copyCmdToast: "Đã sao chép lệnh!",
      tipSectionTitle: "Lưu ý khi bảo vệ mã nguồn",
      tips: [
        {
          title: "Kiểm tra tương thích môi trường",
          description: "File sau khi làm rối yêu cầu Python 3.8+ và giữ nguyên các thư viện import phụ thuộc của code gốc.",
        },
        {
          title: "Luôn sao lưu mã nguồn gốc",
          description: "Mã hóa qua WebAssembly và KVM 2.0 là một chiều, không thể dịch ngược lại mã ban đầu.",
        },
        {
          title: "Watermark tác giả truy vết",
          description: "Nhúng thông tin bản quyền định danh giúp bạn đối soát nguồn gốc mã khi phân phối cho khách hàng.",
        },
      ],
      sidebarHistory: "Lịch sử bảo vệ",
      clearHistoryTitle: "Xóa toàn bộ lịch sử",
      clearHistoryToast: "Đã xóa lịch sử",
      historyEmpty: "Chưa có lịch sử bảo vệ mã nguồn",
      historyChars: "ký tự",
      apiInfoTitle: "Thông tin API",
      apiPath: "Đường dẫn:",
      apiMethod: "Phương thức:",
      apiVersion: "Phiên bản:",
      apiStorage: "Lưu trữ:",
      viewApiDocs: "Xem tài liệu API",
      statsTitle: "Thống kê phiên",
      statsLines: "Dòng code",
      statsChars: "Ký tự",
      statsRuns: "Lần đã bảo vệ",
      statsLayers: "Lớp bảo vệ",
      serverLabel: "Máy chủ:",
      quickSteps: [
        { step: "1", label: "Dán mã hoặc tải file .py" },
        { step: "2", label: "Nhập watermark (tùy chọn)" },
        { step: "3", label: "Nhấn nút Bắt đầu obf" },
        { step: "4", label: "Nhận link tải từ Catbox" },
      ],
      openProtectedFile: "Mở file đã mã hóa",
      noSourceTitle: "Chưa có mã nguồn",
      noSourceDesc: "Vui lòng dán mã Python hoặc tải file .py lên trước khi bảo vệ.",
      onlyPyToast: "Chỉ hỗ trợ file .py",
      uploadedToast: "Đã tải lên:",
      copyToast: "Đã sao chép liên kết!",
      copyFailedToast: "Không thể sao chép",
      editor: {
        placeholder: "# Dán hoặc gõ mã Python vào đây...",
        lines: "dòng",
        chars: "ký tự",
        copy: "Sao chép",
        sample: "Mẫu",
        clear: "Xóa",
        copied: "Đã sao chép mã nguồn!",
        copyFailed: "Không thể sao chép",
        cleared: "Đã xóa mã nguồn",
        engineReady: "Meowt Engine Sẵn sàng",
      },
      stages: {
        s1: "Đang nạp mã nguồn & phân tích AST Python...",
        s2: "Đang làm phẳng luồng điều khiển (Deep Control Flow)...",
        s3: "Biên dịch sang WebAssembly & ảo hóa KVM 2.0 VM...",
        s4: "Đóng gói bảo vệ & tải lên Catbox Moe...",
        s5: "Mã hóa hoàn tất!",
      },
      codeExampleResetToast: "Đã khôi phục mã mẫu!",
    },
  },

  en: {
    nav: {
      announcement: "Meowt v5.2: WebAssembly Layer & KVM 2.0 is now live.",
      tryNow: "Try Now →",
      features: "Features",
      howItWorks: "Workflow",
      faq: "FAQ",
      startObf: "Start Obfuscating",
    },
    hero: {
      badge: "Next-Generation Python Protection by Meow team",
      title1: "Meowt",
      title2: "Python Obfuscator",
      subtitleHighlight1: "Maximum Protection",
      subtitleHighlight2: "effortless",
      subtitleEnd: "to use",
      desc: "Cross-platform Python source protection powered by WebAssembly Security & KVM 2.0. Completely prevent decompilation, reverse engineering, and piracy.",
      btnStart: "Start Obfuscating",
      btnDocs: "Documentation",
      statVer: "Version",
      statWasm: "Cross-platform",
      statVm: "Custom Stack VM",
      terminalProcessing: "Processing",
      terminalProtected: "Protected",
      terminalEncrypting: "Encrypting...",
    },
    trustedBy: {
      title: "Trusted by leading engineering & software security teams",
    },
    features: {
      badge: "Security Features",
      heading1: "Protect your code with",
      heading2: "cutting-edge security",
      desc: "Comprehensive Python security stack, from Deep Control Flow Obfuscation to WebAssembly binary virtualization",
      items: [
        {
          title: "Deep Control Flow Flattening",
          description: "Flattens control flow graphs and obscures function dispatch, rendering static and dynamic logic analysis virtually impossible.",
          badge: "Deep",
        },
        {
          title: "WebAssembly Layer",
          description: "Cross-platform binary layer compiling Python logic into WebAssembly to deliver true binary-level protection.",
          badge: "WASM",
        },
        {
          title: "Custom Stack VM KVM 2.0",
          description: "Proprietary virtual machine architecture developed by Meow team to execute bytecode in an isolated, anti-debugging runtime.",
          badge: "KVM 2.0",
        },
        {
          title: "Unique Watermarking",
          description: "Binds immutable author signatures into the binary header to trace leaks and prove copyright ownership.",
          badge: "Watermark",
        },
        {
          title: "Anti-Reverse Engineering",
          description: "Removes docstrings, strips metadata, renames symbols, and introduces polymorphic junk blocks against decompilers.",
          badge: "Anti-RE",
        },
        {
          title: "Automated Catbox Delivery",
          description: "Obfuscated files are instantly uploaded to Catbox, providing a high-speed, direct CDN link ready for deployment.",
          badge: "Catbox",
        },
      ],
    },
    howItWorks: {
      badge: "Workflow",
      heading1: "Secure your scripts in",
      heading2: "4 simple steps",
      desc: "Transform raw Python scripts into fortified, tamper-resistant binaries within seconds",
      steps: [
        {
          step: "01",
          title: "Paste or Upload",
          description: "Paste your Python script into the VSCode editor or drag and drop any .py file directly.",
        },
        {
          step: "02",
          title: "Automated Security",
          description: "Deep Control Flow, WebAssembly Layer, and KVM 2.0 VM are automatically pre-configured and active.",
        },
        {
          step: "03",
          title: "Click Obfuscate",
          description: "The engine virtualizes and scrambles your logic in seconds powered by the Meowt v5.2 backend.",
        },
        {
          step: "04",
          title: "Instant Download",
          description: "Receive your hardened .py link hosted on Catbox, immediately ready for production deployment.",
        },
      ],
    },
    stats: {
      s1: "Lines of Code Protected",
      s2: "Success Rate",
      s3: "Active Developers",
      s4: "Avg. Processing Time",
    },
    faq: {
      badge: "Frequently Asked Questions",
      heading1: "Have any",
      heading2: "questions?",
      desc: "Here are answers to the most common questions",
      items: [
        {
          question: "Does Meowt impact code execution performance?",
          answer: "Negligible. Obfuscated scripts execute at near-native Python speed. Transformations and stack virtualization are heavily optimized, typically causing under 1-3% runtime overhead.",
        },
        {
          question: "How does the WebAssembly Layer work?",
          answer: "The WASM layer compiles critical Python routines into a portable WebAssembly binary. Because WASM is a low-level format, traditional Python decompilers cannot reconstruct the original source logic.",
        },
        {
          question: "What is KVM 2.0 (Custom Stack Virtual Machine)?",
          answer: "KVM 2.0 is an encrypted stack-based virtual machine designed by Meow team. It executes code within an isolated custom architecture, effectively neutralizing debuggers and memory dumps.",
        },
        {
          question: "Where are obfuscated files stored?",
          answer: "Encrypted .py files are uploaded to Catbox (catbox.moe) with a unique direct link. You can safely distribute this link since original logic is fully virtualized and impossible to reverse.",
        },
        {
          question: "Is there a line count limit?",
          answer: "The server effortlessly processes thousands of lines of Python code within seconds thanks to our optimized FastAPI engine.",
        },
        {
          question: "Is my source code stored on your servers?",
          answer: "No. All code is processed purely in-memory and discarded immediately after compilation. Obfuscation history is stored exclusively in your local browser storage (localStorage).",
        },
      ],
    },
    cta: {
      badge: "Protect Today",
      heading1: "Start protecting your",
      heading2: "Python code today",
      desc: "Join thousands of developers and software teams relying on Meowt Obfuscator by Meow team.",
      btnStart: "Start Obfuscating",
      btnDocs: "Documentation",
      note: "100% Free. No account required. Instant cloud protection.",
    },
    footer: {
      desc: "Next-Generation Cross-Platform Python Protection & WebAssembly Security. Fortified by Meow team.",
      colProducts: "Products",
      colResources: "Resources",
      colCompany: "Meow team",
      toolObf: "Obfuscator Tool",
      features: "Features",
      workflow: "Workflow",
      apiDocs: "API Docs",
      openapi: "OpenAPI Schema",
      faq: "FAQ",
      guide: "Guide",
      aboutUs: "About Us",
      contact: "Contact",
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      rights: "© 2024 Meow team. All rights reserved.",
    },
    app: {
      home: "Home",
      apiDocs: "API Docs",
      badgeTeam: "Meow team",
      title: "Meowt",
      titleSuffix: "Obfuscator",
      subtitle: "Next-Generation Cross-Platform Python Protection & WebAssembly Security",
      dragDrop: "Drag & drop your .py script here or click to browse",
      activeProtection: "Active Protection (Auto-Enabled)",
      watermarkLabel: "Author Watermark",
      watermarkSub: "Embed your signature into file header (optional)",
      watermarkPlaceholder: "e.g., Meow team",
      btnObfuscate: "Start Obfuscation",
      btnProcessing: "Obfuscating",
      successTitle: "Obfuscation Complete!",
      successSub: "File protected and uploaded to Catbox",
      copyLinkToast: "Link copied to clipboard!",
      runDirectCommand: "Run directly in Terminal:",
      copyCmdBtn: "Copy CMD",
      copyCmdToast: "Command copied to clipboard!",
      tipSectionTitle: "Security & Distribution Notes",
      tips: [
        {
          title: "Environment Compatibility",
          description: "Protected files require Python 3.8+ and retain the exact same external third-party package dependencies.",
        },
        {
          title: "Keep Offline Source Backup",
          description: "WebAssembly compilation and KVM 2.0 virtualization are irreversible. Always keep an offline copy of original scripts.",
        },
        {
          title: "Watermark Attribution",
          description: "Embedded watermark signatures permanently bind your author ID inside bytecode to prove ownership upon distribution.",
        },
      ],
      sidebarHistory: "Protection History",
      clearHistoryTitle: "Clear All History",
      clearHistoryToast: "History cleared",
      historyEmpty: "No protection history yet",
      historyChars: "chars",
      apiInfoTitle: "API Specifications",
      apiPath: "Endpoint:",
      apiMethod: "Method:",
      apiVersion: "Version:",
      apiStorage: "Storage:",
      viewApiDocs: "View API Documentation",
      statsTitle: "Session Stats",
      statsLines: "Code Lines",
      statsChars: "Characters",
      statsRuns: "Protected Files",
      statsLayers: "Active Layers",
      serverLabel: "Server:",
      quickSteps: [
        { step: "1", label: "Paste code or upload .py file" },
        { step: "2", label: "Enter watermark (optional)" },
        { step: "3", label: "Click Start Obfuscating" },
        { step: "4", label: "Get download link from Catbox" },
      ],
      openProtectedFile: "Open protected file",
      noSourceTitle: "No source code",
      noSourceDesc: "Please paste Python code or upload a .py file before obfuscating.",
      onlyPyToast: "Only .py files are supported",
      uploadedToast: "Uploaded:",
      copyToast: "Link copied to clipboard!",
      copyFailedToast: "Failed to copy",
      editor: {
        placeholder: "# Paste or type Python code here...",
        lines: "lines",
        chars: "chars",
        copy: "Copy",
        sample: "Template",
        clear: "Clear",
        copied: "Source code copied!",
        copyFailed: "Failed to copy",
        cleared: "Source code cleared",
        engineReady: "Meowt Engine Ready",
      },
      stages: {
        s1: "Parsing source code & analyzing Python AST...",
        s2: "Flattening control flow (Deep Control Flow)...",
        s3: "Compiling WebAssembly layer & KVM 2.0 VM...",
        s4: "Packaging secure bundle & uploading to Catbox...",
        s5: "Obfuscation completed successfully!",
      },
      codeExampleResetToast: "Example code restored!",
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: typeof translations.vi;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANG_STORAGE_KEY = "meowt_lang";

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY) as Language;
      if (saved === "vi" || saved === "en") return saved;
      // Auto-detect browser language if not Vietnamese
      if (typeof navigator !== "undefined" && !navigator.language.startsWith("vi")) {
        return "en";
      }
      return "vi";
    } catch {
      return "vi";
    }
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
      document.documentElement.lang = newLang;
    } catch {}
  };

  const toggleLang = () => {
    setLang(lang === "vi" ? "en" : "vi");
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
