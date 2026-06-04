const fs = require('fs');
const path = require('path');
const en = JSON.parse(fs.readFileSync(path.join('src', 'messages', 'en.json'), 'utf8'));
const zhFile = path.join('src', 'messages', 'zh.json');
let zh = JSON.parse(fs.readFileSync(zhFile, 'utf8'));

zh.privacy = en.privacy;
zh.terms = en.terms;
zh.cookieSettings = en.cookieSettings;

// Translate the main titles just to be nice
zh.privacy.title = "隐私政策";
zh.terms.title = "服务条款";
zh.cookieSettings.title = "Cookie 设置";

fs.writeFileSync(zhFile, JSON.stringify(zh, null, 2));
