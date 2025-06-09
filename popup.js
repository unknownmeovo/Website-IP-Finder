document.addEventListener("DOMContentLoaded", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab || !tab.url) {
        document.getElementById("ip").textContent = "No active tab found";
        document.getElementById("domain").textContent = "Unknown";
        return;
    }

    const url = new URL(tab.url);
    const domain = url.hostname;
    document.getElementById("domain").textContent = domain;

    fetch(`https://dns.google/resolve?name=${domain}&type=A`)
        .then(response => response.json())
        .then(data => {
            if (data.Answer) {
                document.getElementById("ip").textContent = data.Answer[0].data;
                document.getElementById("ip").classList.remove("loading");
            } else {
                document.getElementById("ip").textContent = "IP Not Found";
            }
        })
        .catch(() => {
            document.getElementById("ip").textContent = "Error fetching IP";
        });
});
