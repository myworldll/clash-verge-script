//User-Agent
const User_Agent_lists = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.9688.98 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.6315.131 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.4252.66 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.2596.122 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.5761.168 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.1441.153 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.9732.51 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.6337.147 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.3641.182 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.8641.188 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.6048.135 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.9435.170 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.5098.157 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.7058.157 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.9228.141 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.9350.76 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.2267.103 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.7626.114 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.7033.186 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.9430.60 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.8295.184 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.6658.75 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.8463.61 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.4296.81 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.2714.92 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.6258.162 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.7743.105 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.2767.188 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.9234.194 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.6338.67 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.9270.184 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.5074.102 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6952.115 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.3851.73 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.9511.110 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.8570.142 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.8184.59 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.7942.124 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.9110.58 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.3116.185 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.3345.162 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.7095.98 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.1422.118 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.6983.109 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.4067.127 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.5305.86 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.5390.163 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.1315.140 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.5664.82 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.3388.79 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.5441.124 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.4064.50 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.1368.164 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.9966.52 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6191.190 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.7094.51 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.7782.68 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.5149.82 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.2379.138 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6638.60 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.2562.200 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.3003.63 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.2834.128 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.7873.151 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.9044.82 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.1964.77 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.9335.115 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.8769.155 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.1276.172 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.4787.132 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.8845.186 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.1272.130 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.3948.174 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.3615.58 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.2426.55 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6637.130 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.2820.138 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.9911.165 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.6399.168 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.1612.174 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.3859.102 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.2230.70 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.1116.80 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.7256.137 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.9044.120 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.7879.106 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.5204.197 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.7001.90 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.4629.75 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.3783.165 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.6333.176 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6378.186 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.4930.158 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.7071.163 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.9850.51 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.8131.75 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.8468.146 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.7119.77 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.6018.113 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.9105.93 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.3723.176 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.7398.156 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.9114.109 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.4500.149 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.9665.169 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.2803.110 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.2611.54 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.1012.72 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.3938.50 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.4995.64 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.7356.148 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.8428.81 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.5632.70 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.4378.177 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.4096.81 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.2336.160 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.9253.165 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.6405.197 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.6236.68 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.8543.199 Safari/537.36"
]
// 国内DNS服务器
const domesticNameservers = [
    "https://dns.alidns.com/dns-query", // 阿里DoH
    "https://doh.pub/dns-query" // 腾讯DoH
];
// 国外DNS服务器
const foreignNameservers = [
    "https://208.67.222.222/dns-query", // OpenDNS
    "https://77.88.8.8/dns-query", //YandexDNS
    "https://1.1.1.1/dns-query", // CloudflareDNS
    "https://8.8.4.4/dns-query", // GoogleDNS  
];
// DNS配置
const dnsConfig = {
    "enable": true,
    "listen": "0.0.0.0:1053",
    "ipv6": false,
    "prefer-h3": true,
    "respect-rules": true,
    "use-system-hosts": false,
    "cache-algorithm": "arc",
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": [
        // 本地主机/设备
        "+.lan",
        "+.local",
        // // Windows网络出现小地球图标
        "+.msftconnecttest.com",
        "+.msftncsi.com",
        // QQ快速登录检测失败
        "localhost.ptlogin2.qq.com",
        "localhost.sec.qq.com",
        // 追加以下条目
        "+.in-addr.arpa",
        "+.ip6.arpa",
        "time.*.com",
        "time.*.gov",
        "pool.ntp.org",
        // 微信快速登录检测失败
        "localhost.work.weixin.qq.com"
    ],
    "use-hosts": false,
    "default-nameserver": ["223.5.5.5", "103.27.24.1"],//可修改成自己ISP的DNS
    "nameserver-policy": {
        "geosite:private,cn": domesticNameservers,
        "geosite:gfw": foreignNameservers,
        "cloudflare-ech.com": ["https://dns.alidns.com/dns-query"]
    },
    "nameserver": domesticNameservers,
    "fallback": foreignNameservers,
    "fallback-filter": {
        "geoip": true,
        "geoip-code": 'CN',
        "ipcidr": ["240.0.0.0/4"],
        "domain": ['+.google.com', '+.facebook.com', '+.youtube.com']
    },
    "proxy-server-nameserver": foreignNameservers,
    "direct-nameserver": domesticNameservers
};
// 规则集配置
const ruleProviders = {
    "reject": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
        "path": "./ruleset/reject.yaml",
        "interval": 86400
    },
    "icloud": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
        "path": "./ruleset/icloud.yaml",
        "interval": 86400
    },
    "apple": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
        "path": "./ruleset/apple.yaml",
        "interval": 86400
    },
    "google": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
        "path": "./ruleset/google.yaml",
        "interval": 86400
    },
    "proxy": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
        "path": "./ruleset/proxy.yaml",
        "interval": 86400
    },
    "direct": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
        "path": "./ruleset/direct.yaml",
        "interval": 86400
    },
    "private": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
        "path": "./ruleset/private.yaml",
        "interval": 86400
    },
    "gfw": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
        "path": "./ruleset/gfw.yaml",
        "interval": 86400
    },
    "tld-not-cn": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
        "path": "./ruleset/tld-not-cn.yaml",
        "interval": 86400
    },
    "telegramcidr": {
        "type": "http",
        "behavior": "ipcidr",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
        "path": "./ruleset/telegramcidr.yaml",
        "interval": 86400
    },
    "cncidr": {
        "type": "http",
        "behavior": "ipcidr",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
        "path": "./ruleset/cncidr.yaml",
        "interval": 86400
    },
    "lancidr": {
        "type": "http",
        "behavior": "ipcidr",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
        "path": "./ruleset/lancidr.yaml",
        "interval": 86400
    },
    "applications": {
        "type": "http",
        "behavior": "classical",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
        "path": "./ruleset/applications.yaml",
        "interval": 86400
    },
};
// 规则
const rules = [
    /**
     * 黑名单
     */
    //拒绝出口443端口的UDP
    "AND,((NETWORK,UDP),(DST-PORT,443)),REJECT",
    //拒绝激活联网
    "DOMAIN-KEYWORD,adobe,REJECT",
    "DOMAIN-KEYWORD,wolfram,REJECT",
    "DOMAIN-KEYWORD,mathworks,REJECT",
    "DOMAIN-KEYWORD,ibm,REJECT",
    "DOMAIN-KEYWORD,clo3d,REJECT",
    "DOMAIN-KEYWORD,marvelousdesigner,REJECT",
    "DOMAIN-KEYWORD,autocad,REJECT",
    "DOMAIN-KEYWORD,pixologic,REJECT",
    "DOMAIN-KEYWORD,autodesk,REJECT",
    "DOMAIN-KEYWORD,solidworks,REJECT",
    "DOMAIN-KEYWORD,siemens,REJECT",
    "DOMAIN-KEYWORD,3ds,REJECT",
    "DOMAIN-KEYWORD,staruml,REJECT",
    "DOMAIN-KEYWORD,zbrush,REJECT",
    "DOMAIN-KEYWORD,maxon,REJECT",
    "DOMAIN-KEYWORD,navicat,REJECT",
    /**
     * 自定义规则
     */
    //YouTube
    "DOMAIN-KEYWORD,googlevideo,YouTube",
    "DOMAIN-KEYWORD,ytimg,YouTube",
    "DOMAIN-KEYWORD,youtube,YouTube",
    "DOMAIN-KEYWORD,doubleclick,REJECT",
    //Amazon
    "DOMAIN-KEYWORD,amazon,Amazon",
    //Apple
    "DOMAIN-KEYWORD,apple,Apple",
    //Bing
    "DOMAIN,www.bing.com,Bing",
    "DOMAIN,cn.bing.com,DIRECT",
    //ChatGPT
    "DOMAIN-KEYWORD,chatgpt,ChatGPT",
    //Claude
    "DOMAIN-KEYWORD,claude,Claude",
    "DOMAIN-KEYWORD,anthropic,Claude",
    //Cloudflare
    "DOMAIN-KEYWORD,cloudflare,Cloudflare",
    //Discord
    "DOMAIN-KEYWORD,discord,Discord",
    //Disney Plus
    "DOMAIN-KEYWORD,disney,Disney Plus",
    "DOMAIN,log.go.com,Disney Plus",
    "DOMAIN-KEYWORD,bamgrid,Disney Plus",
    //Epic
    "DOMAIN-KEYWORD,epic,Epic",
    "DOMAIN-KEYWORD,unrealengine,Epic",
    //Facebook
    "DOMAIN-KEYWORD,facebook,Facebook",
    "DOMAIN-KEYWORD,fbcdn,Facebook",
    //GitHub
    "DOMAIN-KEYWORD,github,GitHub",
    //Google
    "DOMAIN-KEYWORD,google,Google",
    "DOMAIN-KEYWORD,gstatic,Google",
    //Instagram
    "DOMAIN-KEYWORD,instagram,Instagram",
    //Microsoft
    "DOMAIN-KEYWORD,microsoft,Microsoft",
    //Netflix
    "DOMAIN-KEYWORD,netflix,Netflix",
    "DOMAIN-KEYWORD,nflxext,Netflix",
    "DOMAIN-KEYWORD,nflxso,Netflix",
    //OneDrive
    "DOMAIN-KEYWORD,onedrive,OneDrive",
    "DOMAIN-KEYWORD,onecdn,OneDrive",
    "DOMAIN-SUFFIX,live.com,OneDrive",
    //Reddit
    "DOMAIN-KEYWORD,reddit,Reddit",
    //Steam
    "DOMAIN-KEYWORD,steam,Steam",
    //Telegram
    "DOMAIN-KEYWORD,telegram,Telegram",
    //TikTok
    "DOMAIN-KEYWORD,tiktok,TikTok",
    //Twitter
    "DOMAIN-KEYWORD,twimg,Twitter",
    "DOMAIN-SUFFIX,x.com,Twitter",
    //WhatsApp
    "DOMAIN-KEYWORD,whatsapp,WhatsApp",
    //Xbox
    "DOMAIN-KEYWORD,xbox,Xbox",
    /**
     * Loyalsoldier
     */
    //需要直连的常见软件列表
    "RULE-SET,applications,DIRECT",
    //私有网络专用域名列表
    "RULE-SET,private,DIRECT",
    //广告域名列表
    "RULE-SET,reject,REJECT",
    //iCloud 域名列表
    "RULE-SET,icloud,DIRECT",
    //Apple 在中国大陆可直连的域名列表
    "RULE-SET,apple,DIRECT",
    //Google 在中国大陆可直连的域名列表
    "RULE-SET,google,Google",
    //代理域名列表
    "RULE-SET,proxy,Adjust",
    //直连域名列表
    "RULE-SET,direct,DIRECT",
    //局域网 IP 及保留 IP 地址列表
    "RULE-SET,lancidr,DIRECT,no-resolve",
    //中国大陆 IP 地址列表 
    "RULE-SET,cncidr,DIRECT,no-resolve",
    //Telegram 使用的 IP 地址列表
    "RULE-SET,telegramcidr,Telegram,no-resolve",
    //非中国大陆使用的顶级域名列表
    "RULE-SET,tld-not-cn,Adjust",
    //GFWList 域名列表
    "RULE-SET,gfw,Adjust",
    //直连大陆
    "DOMAIN,clash.razord.top,DIRECT",
    "DOMAIN,yacd.haishan.me,DIRECT",
    "GEOIP,LAN,DIRECT,no-resolve",
    "GEOIP,CN,DIRECT,no-resolve",
    //漏网之鱼
    "MATCH,Adjust"
];
// 代理组配置
let proxyGroups = [
    {
        "name": '♻️ 自动选择',
        "type": "url-test",
        "include-all": true,
        "url": "https://www.gstatic.com/generate_204",
        "tolerance": 50,
        "hidden": true
    },
    {
        "name": "Adjust",
        "interval": 300,
        "timeout": 2500,
        "lazy": false,
        "type": "select",
        "proxies": [],
        "url": "https://www.gstatic.com/generate_204",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
    },
    {
        "name": "Amazon",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.amazon.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/amazon.svg"
    },
    {
        "name": "Apple",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.apple.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg"
    },
    {
        "name": "Bing",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.bing.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bing.svg"
    },
    {
        "name": "ChatGPT",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.chatgpt.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
    },
    {
        "name": "Claude",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.claude.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/claude.svg"
    },
    {
        "name": "Cloudflare",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.cloudflare.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/cloudflare.svg"
    },
    {
        "name": "Discord",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.discord.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/discord.svg"
    },
    {
        "name": "Disney Plus",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.disneyplus.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/disney_plus.svg"
    },
    {
        "name": "Epic",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.epicgames.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/epic.svg"
    },
    {
        "name": "Facebook",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.facebook.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/facebook.svg"
    },
    {
        "name": "GitHub",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.github.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/github.svg"
    },
    {
        "name": "Google",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.google.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/google.svg"
    },
    {
        "name": "Instagram",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.instagram.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/instagram.svg"
    },
    {
        "name": "Microsoft",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.microsoft.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg"
    },
    {
        "name": "Netflix",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.netflix.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/netflix.svg"
    },
    {
        "name": "OneDrive",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.onedrive.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/onedrive.svg"
    },
    {
        "name": "Reddit",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.reddit.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/reddit.svg"
    },
    {
        "name": "Steam",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.steam.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/steam.svg"
    },
    {
        "name": "Telegram",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.telegram.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg"
    },
    {
        "name": "TikTok",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.tiktok.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/tiktok.svg"
    },
    {
        "name": "Twitter",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.twitter.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/twitter.svg"
    },
    {
        "name": "YouTube",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.youtube.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg"
    },
    {
        "name": "WhatsApp",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.whatsapp.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/whatsapp.svg"
    },
    {
        "name": "Xbox",
        "type": "select",
        "proxies": ["Adjust", "DIRECT"],
        "url": "https://www.xbox.com",
        "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/xbox.svg"
    }
]
// 程序入口
function main(config) {
    const proxyCount = config?.proxies?.length ?? 0;
    const proxyProviderCount =
        typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
    if (proxyCount === 0 && proxyProviderCount === 0) { throw new Error("配置文件中未找到任何代理"); }
    config["geodata-mode"] = true;
    config["geox-url"] = {
        "geoip": "https://cdn.jsdelivr.net/gh/Loyalsoldier/v2ray-rules-dat@release/geoip.dat",
        "geosite": "https://cdn.jsdelivr.net/gh/Loyalsoldier/v2ray-rules-dat@release/geosite.dat"
    }
    // 覆盖原配置中DNS配置
    config["dns"] = dnsConfig;
    // 覆盖原配置中的规则
    config["rule-providers"] = ruleProviders;
    config["rules"] = rules;
    // 覆盖原配置中的代理组
    config["proxy-groups"] = proxyGroups;
    //过滤
    // 默认不加密或不属于加密代理的类型
    const unencryptedTypes = ["socks5", "http", "direct", "reject", "dns"];
    config["proxies"] = config["proxies"].filter(item => {
        //过滤广告
        const x = item["name"].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        const a = x.match(/官网|官網|套餐|流量|异常|剩余|广告|廣告|机场|機場|网址|網址|域名|公告|客服|群组|群組|频道|頻道/g) === null
        // 过滤非加密节点
        const type = item.type?.toLowerCase();
        const b = !unencryptedTypes.includes(type) || (type === "http" && item.tls === true);
        return a && b
    })
    //优化节点
    let countryLocLis = []
    let countryLocdic = {}
    // 定义支持或需要 TLS / 指纹特征的现代协议集合
    const tlsSupportedTypes = new Set(["vless", "trojan", "hysteria", "hysteria2", "tuic", "anytls"]);
    // 支持 TLS 的代理协议
    const tlsRequiredTypes = ["trojan", "hysteria2", "tuic", "anytls"];
    // 支持按 tls 字段判断的协议
    const tlsOptionalTypes = ["vmess", "vless", "http", "socks5"];
    config['proxies'].forEach(proxy => {
        //优化分流
        const countryLoc = proxy['name']?.split("_")[0]
        if (countryLoc) {
            if (!countryLocLis.includes(countryLoc)) {
                countryLocLis.push(countryLoc)
                countryLocdic[countryLoc] = []
            }
            countryLocdic[countryLoc].push(proxy['name'])
        }
        //完善节点
        // 1. 基础通用参数：udp 几乎所有节点都支持，可以通用
        proxy["udp"] = true;
        // 获取并统一转为小写以防大小写不一致
        const proxyType = (proxy["type"] || "").toLowerCase();
        // 2. 针对 VMess 协议的特殊判断：
        // 只有当 VMess 使用了 ws (WebSocket) 或 gRPC 等传输层时才需要开启 TLS
        const isVmessWithTLS = (proxyType === "vmess" && ["ws", "grpc"].includes(proxy["network"]));
        // 3. 判断该节点是否需要配置 TLS 和指纹
        if (tlsSupportedTypes.has(proxyType) || isVmessWithTLS) {
            proxy["tls"] = true;
            proxy["skip-cert-verify"] = false;
            proxy["client-fingerprint"] = "chrome";
        }
        // 4. 针对支持 HTTP 伪装或 Header 的节点配置随机 User-Agent（改回普通的字符串）
        if (User_Agent_lists && User_Agent_lists.length > 0) {
            const randomUA = User_Agent_lists[Math.floor(Math.random() * User_Agent_lists.length)];
            if (proxy["ws-opts"]) {
                proxy["ws-opts"]["headers"] = proxy["ws-opts"]["headers"] || {};
                proxy["ws-opts"]["headers"]["User-Agent"] = randomUA;
            } else if (proxy["http-opts"]) {
                proxy["http-opts"]["headers"] = proxy["http-opts"]["headers"] || {};
                proxy["http-opts"]["headers"]["User-Agent"] = [randomUA];
            }
        }
        //开启ech
        const type = proxy.type?.toLowerCase();
        // 判断是否使用 TLS
        const tlsEnabled = tlsRequiredTypes.includes(type) || (tlsOptionalTypes.includes(type) && proxy.tls === true);
        // 排除 REALITY 配置，避免两种机制配置冲突
        const isReality = !!proxy["reality-opts"];
        if (tlsEnabled && !isReality) {
            proxy["ech-opts"] = {
                enable: true,
                "query-server-name": 'cloudflare-ech.com'
            };
        }
    })
    const iser = Object.values(countryLocdic).some(item => item.length > 1)
    if (countryLocdic && iser) {
        config["proxy-groups"].forEach(proxy => {
            if (proxy['name'].includes('Adjust')) { proxy['proxies'].push('♻️ 自动选择', 'Balance', 'Speed', 'DIRECT') }
            proxy['include-all'] = true
        })
        for (const key of Object.keys(countryLocdic)) {
            config["proxy-groups"].unshift({
                "name": key + '_并发',
                "type": "load-balance",
                "proxies": countryLocdic[key],
                "url": "https://www.gstatic.com/generate_204",
                "strategy": "consistent-hashing",
                "hidden": true
            }, {
                "name": key + '_优选',
                "type": "url-test",
                "proxies": countryLocdic[key],
                "url": "https://www.gstatic.com/generate_204",
                "tolerance": 50,
                "hidden": true
            })
        }
        config["proxy-groups"].unshift({
            "name": 'Balance',
            "interval": 300,
            "timeout": 2500,
            "lazy": true,
            "type": "select",
            "proxies": [...countryLocLis.map(item => item + '_并发')],
            "url": "https://www.gstatic.com/generate_204",
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/balance.svg"
        }, {
            "name": 'Speed',
            "interval": 300,
            "timeout": 2500,
            "lazy": true,
            "type": "select",
            "proxies": [...countryLocLis.map(item => item + '_优选')],
            "url": "https://www.gstatic.com/generate_204",
            "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
        })
    } else {
        config["proxy-groups"].forEach(proxy => {
            if (proxy['name'].includes('Adjust')) { proxy['proxies'] = ['♻️ 自动选择', 'DIRECT'] }
            proxy['include-all'] = true
        })
    }
    // 返回修改后的配置
    return config;
}
