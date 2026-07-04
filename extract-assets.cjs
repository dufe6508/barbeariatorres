// one-shot: pull base64 data-URIs out of ../torres.html into src/assets
const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'torres.html'), 'utf8');
const out = path.join(__dirname, 'src', 'assets');
fs.mkdirSync(out, { recursive: true });
const re = /data:(image\/png|image\/jpeg|font\/ttf);base64,([A-Za-z0-9+/=]+)/g;
const extMap = { 'image/png': 'png', 'image/jpeg': 'jpg', 'font/ttf': 'ttf' };
let m, i = 0;
while ((m = re.exec(src))) {
  const ctx = src.slice(Math.max(0, m.index - 120), m.index).replace(/\s+/g, ' ');
  const file = `a${String(i).padStart(2, '0')}.${extMap[m[1]]}`;
  fs.writeFileSync(path.join(out, file), Buffer.from(m[2], 'base64'));
  console.log(file, (m[2].length * 3 / 4 / 1024).toFixed(0) + 'KB', '<<', ctx.slice(-90));
  i++;
}
