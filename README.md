# 🌐 Website IP Finder Chrome Extension

A simple and lightweight Chrome extension that displays the IP address of the current website using DNS lookup.

## 📥 Installation

1. Clone or download this repo.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer Mode** (top right corner).
4. Click **"Load unpacked"**.
5. Select the `ip-finder-extension/` folder.

## 🛠 How It Works

- Uses `chrome.tabs` API to get the current tab's URL.
- Extracts the domain using the `URL` class.
- Sends a DNS query to `https://dns.google/resolve` with `type=A`.
- Displays the returned IPv4 address.

---

## 🛡️ Permissions

```json
"permissions": ["tabs"],
"host_permissions": ["<all_urls>"]
