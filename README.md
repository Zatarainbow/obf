<div align="center">

# 🐱 Meowt — Python Obfuscator v5.2

**Next-Generation Cross-Platform Python Source Protection & WebAssembly Security**

*Bảo vệ mã nguồn Python toàn diện với WebAssembly Layer, KVM 2.0 Stack VM & Deep Control Flow Flattening*

[![Python](https://img.shields.io/badge/Python-3.8%2B-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![WebAssembly](https://img.shields.io/badge/WebAssembly-WASM-654FF0?style=for-the-badge&logo=webassembly&logoColor=white)](https://webassembly.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://obfpy.vercel.app/docs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

[🌐 Live Demo](https://obfpy.vercel.app) • [📖 API Docs](https://obfpy.vercel.app/docs) • [🇬🇧 English Guide](#-english-overview)

---

</div>

## 📌 Giới Thiệu (Overview)

**Meowt** là bộ giải pháp bảo vệ mã nguồn Python thế hệ mới được nghiên cứu và phát triển độc quyền bởi **Meow team**. Kết hợp sức mạnh của công nghệ làm rối luồng điều khiển đa nhánh (**Deep Control Flow Flattening**), máy ảo stack tùy chỉnh (**KVM 2.0 Stack Virtual Machine**) và lớp thực thi nhị phân đa nền tảng (**WebAssembly Layer**), Meowt biến các đoạn mã Python thuần trở thành file thực thi tự bọc (Self-Contained Executable Bundle) có khả năng chống dịch ngược (Anti-Reverse Engineering) lên đến **99.9%**.

---

## 🛡️ Kiến Trúc Bảo Vệ Đa Tầng (Multi-Layer Architecture)

```
[ Mã nguồn Python gốc ]
         │
         ▼
┌──────────────────────────────────────────────────────────┐
│  TẦNG 1: Phân tích AST & Làm phẳng luồng điều khiển       │
│  (Deep Control Flow Flattening & Symbol Scrambling)      │
│  - Phá vỡ cấu trúc rẽ nhánh if/else, vòng lặp for/while   │
│  - Tạo bộ điều phối máy trạng thái giả lập (State Machine)│
└──────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────┐
│  TẦNG 2: Máy ảo Stack KVM 2.0 (Custom Virtual Machine)    │
│  - Chuyển đổi mã bytecode sang tập lệnh VM độc quyền     │
│  - Thực thi trong môi trường cách ly, vô hiệu hóa Debug   │
└──────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────┐
│  TẦNG 3: Lớp nhị phân WebAssembly (WASM Security Layer)   │
│  - Biên dịch lõi kiểm tra toàn vẹn sang WebAssembly binary│
│  - Chống đọc trộm bộ nhớ (Anti-Memory Dump)              │
└──────────────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────┐
│  TẦNG 4: Nhúng Watermark Tác Giả & Đóng gói Phân Phối    │
│  - Nhúng định danh bản quyền không thể chỉnh sửa         │
│  - Tự động upload Catbox CDN với link tải siêu tốc       │
└──────────────────────────────────────────────────────────┘
         │
         ▼
[ File .py tự thực thi hoàn chỉnh: python3 obf.py ]
```

---

## ✨ Tính Năng Nổi Bật (Key Features)

- **⚡ Deep Control Flow Flattening**: Làm phẳng toàn bộ sơ đồ khối logic, biến luồng mã tuần tự thành ma trận điều phối đa nhánh khiến các công cụ dịch ngược (decompiler) như `decompyle++`, `uncompyle6`, `pycdc` bị crash hoặc trả về bytecode vô nghĩa.
- **📦 WebAssembly Layer**: Đóng gói nhân giải mã dưới định dạng binary WebAssembly, mang lại độ bảo mật cấp độ nhị phân (Binary-level Security) trên mọi hệ điều hành (Windows, Linux, macOS).
- **⚙️ Custom Stack VM (KVM 2.0)**: Máy ảo stack tùy biến độc quyền do Meow team thiết kế, thực thi bytecode đã mã hóa trong runtime khép kín.
- **🏷️ Unique Watermarking**: Nhúng thông tin định danh tác giả trực tiếp vào header mã nhị phân, phục vụ đối soát và truy vết nguồn gốc mã nguồn khi bàn giao cho khách hàng.
- **🖥️ Trình Soạn Thảo VSCode Tích Hợp**: Giao diện soạn thảo hiện đại chuẩn VSCode Dark+ hỗ trợ tô màu cú pháp theo thời gian thực (PrismJS), căn lề tự động (Auto-indentation), chèn Tab 4 spaces, thống kê dòng/ký tự.
- **⚖️ Trình So sánh Mã Nguồn (Side-by-Side Comparison)**: Cho phép đối chiếu trực quan mã nguồn gốc và mã đã bảo vệ, kèm bảng phân tích chỉ số an toàn chi tiết.
- **🌐 Song Ngữ Toàn Diện (Bilingual VI / EN)**: Bộ chuyển đổi ngôn ngữ linh hoạt (`🇻🇳 Tiếng Việt` / `🇬🇧 English`) lưu trữ tùy chọn trên `localStorage` và hỗ trợ các route `/en`, `/en/app`.
- **🚀 Chạy Trực Tiếp Qua Terminal**: Nhận lệnh curl một dòng tiện lợi (`curl -sL "<link>" -o obf.py && python3 obf.py`) để chạy ngay trên server.

---

## 📊 Bảng So Sánh Chỉ Số Bảo Mật

| Tiêu Chí Đánh Giá | Mã Gốc (Original) | Mã Đã Bảo Vệ (Meowt v5.2) |
| :--- | :---: | :---: |
| **Nguy cơ dịch ngược** | 🔴 Rất cao (100% dịch được) | 🟢 Gần như bất khả thi (99.9% Anti-RE) |
| **Luồng điều khiển (Control Flow)** | Tuần tự, lộ toàn bộ cấu trúc | Làm phẳng ma trận đa nhánh (Deep Flattening) |
| **Lớp bảo vệ nhị phân** | ❌ Không có |  WebAssembly (WASM) Binary Layer |
| **Máy ảo thực thi** | CPython Bytecode thông thường |  KVM 2.0 Custom Stack VM |
| **Dấu ấn bản quyền** | ❌ Không có / Dễ bị xóa |  Nhúng chữ ký bất biến vào header |
| **Tương thích môi trường** | Python 3.8+ | Python 3.8+ (Giữ nguyên thư viện import) |

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Local (Quickstart)

### Yêu cầu môi trường
- **Node.js**: Phiên bản 18.0 trở lên
- **npm** hoặc **yarn** / **pnpm**

### Các bước cài đặt:

```bash
# 1. Clone repository về máy
git clone https://github.com/Zatarainbow/obf.git
cd obf

# 2. Cài đặt các thư viện phụ thuộc
npm install

# 3. Khởi động môi trường phát triển (Dev Server)
npm run dev

# 4. Truy cập website tại: http://localhost:5173
```

### Đóng gói ứng dụng (Production Build):

```bash
npm run build
npm run preview
```

---

## 🔌 Tài Liệu API RESTful (API Documentation)

Hệ thống cung cấp API duy nhất được xây dựng bằng FastAPI, hỗ trợ mã hóa code Python trực tiếp từ xa:

### Endpoint: `POST /obfuscate`

#### 1. Request Body (JSON)

| Trường | Kiểu dữ liệu | Bắt buộc | Mô tả |
| :--- | :--- | :---: | :--- |
| `code` | `string` | **Có** | Nội dung mã nguồn Python cần bảo vệ |
| `user` | `string` | Không | Tên tác giả nhúng watermark (mặc định: `Meow team`) |
| `deep` | `boolean` | Không | Kích hoạt Deep Control Flow (mặc định: `true`) |
| `use_wasm` | `boolean` | Không | Kích hoạt WebAssembly Layer (mặc định: `true`) |
| `use_kvm2` | `boolean` | Không | Kích hoạt KVM 2.0 VM (mặc định: `true`) |

#### 2. Response (JSON)

```json
{
  "status": "success",
  "link": "https://litter.catbox.moe/xxxxxx.py"
}
```

#### 3. Ví dụ gọi API (cURL):

```bash
curl -X POST https://obfpy.vercel.app/obfuscate \
  -H "Content-Type: application/json" \
  -d '{
    "code": "print(\"Hello from Meowt Protected Code!\")",
    "user": "Meow team",
    "deep": true,
    "use_wasm": true,
    "use_kvm2": true
  }'
```

#### 4. Ví dụ gọi API bằng Python:

```python
import requests

payload = {
    "code": """
def secret_logic(key: str) -> str:
    return f"Access granted for {key}"

if __name__ == '__main__':
    print(secret_logic('admin'))
""",
    "user": "MyCompany",
    "deep": True,
    "use_wasm": True,
    "use_kvm2": True
}

res = requests.post("https://obfpy.vercel.app/obfuscate", json=payload)
data = res.json()

if data.get("status") == "success":
    print(f"[+] Protected file ready: {data['link']}")
else:
    print(f"[-] Error: {data.get('error')}")
```

---

## 📂 Cấu Trúc Thư Mục Dự Án (Project Tree)

```text
obf/
├── components/                  # Các UI Components
│   ├── CodeComparisonView.tsx   # Trình so sánh code & xem trước mã hóa
│   ├── CodeEditor.tsx           # Trình soạn thảo VSCode tô màu PrismJS
│   ├── LanguageSwitcher.tsx     # Nút chuyển đổi ngôn ngữ 🇻🇳 / 🇬🇧
│   ├── Navbar.tsx               # Thanh điều hướng chính
│   ├── Hero.tsx                 # Banner giới thiệu hiệu ứng Matrix Rain
│   ├── Features.tsx             # 6 thẻ tính năng bảo mật
│   ├── HowItWorks.tsx           # 4 bước quy trình mã hóa
│   ├── Stats.tsx                # Bộ đếm thống kê thời gian thực
│   ├── FAQ.tsx                  # Câu hỏi thường gặp
│   ├── CTA.tsx                  # Kêu gọi hành động cuối trang
│   ├── Footer.tsx               # Chân trang & liên kết bản quyền
│   └── ui/                      # Các components cơ bản (Radix UI / Tailwind)
├── lib/
│   ├── api.ts                   # Client kết nối FastAPI Backend
│   ├── i18n.tsx                 # Từ điển dịch thuật song ngữ & Language Context
│   └── utils.ts                 # Tiện ích bổ trợ (clsx, tailwind-merge)
├── pages/
│   ├── Index.tsx                # Trang chủ Landing Page
│   ├── App.tsx                  # Trang công cụ Obfuscator Dashboard
│   └── NotFound.tsx             # Trang 404
├── public/                      # Static assets
├── App.tsx                      # Root component, router & route-language sync
├── index.html                   # HTML entry point
├── package.json                 # Cấu hình dự án & dependencies
├── tsconfig.json                # Cấu hình TypeScript
├── vite.config.ts               # Cấu hình Vite bundler
└── README.md                    # Tài liệu dự án
```

---

<div id="-english-overview"></div>

## 🇬🇧 English Overview

**Meowt** is an enterprise-grade Python code virtualization and obfuscation system developed by **Meow team**. It protects intellectual property against decompilation, reverse engineering, and dynamic memory tampering.

### Highlights:
- **Polymorphic Control Flow Flattening**: Eradicates call graphs and function signatures into an opaque state-machine dispatcher.
- **Cross-Platform WebAssembly Security**: Encapsulates runtime routines in a native WebAssembly binary layer.
- **KVM 2.0 Custom Stack VM**: Dedicated virtual architecture executing encrypted bytecode isolated from CPython debuggers.
- **Visual Code Comparison Suite**: In-browser side-by-side comparison with security metrics inspection.
- **Bilingual Interface**: Native support for both English (`/en`) and Vietnamese.
- **Instant CDN Deployment**: Direct uploads to Catbox with instant terminal execution commands.

---

## 👥 Tác Giả & Bản Quyền (Credits & License)

- **Engine & System Development**: **Meow team**
- **Website & Interface**: Built with React, TypeScript, Tailwind CSS, Vite & Lucide Icons.
- **License**: Released under the **[MIT License](LICENSE)**.

<div align="center">
  <sub>Developed with ❤️ by <b>Meow team</b>. Protect your Python source code today.</sub>
</div>
