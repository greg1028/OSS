function parse(txt) {
  // 공백제거
  parsed = txt.replace(/(\s*)/g, '');

  // 소문자 변환
  parsed = parsed.toLowerCase();
  return parsed;
}

module.exports = parse;
