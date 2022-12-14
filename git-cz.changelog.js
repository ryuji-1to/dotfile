module.exports = {
  disableEmoji: false,
  format: "{type}: {emoji}{subject}",
  list: [
    "fix",
    "feat",
    "refactor",
    "test",
    "style",
    "chore",
    "docs",
    "perf",
    "ci",
    "type",
    "hotflix",
    "begin",
    "improve",
    "package",
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ["type", "subject"],
  scopes: [],
  types: {
    chore: {
      emoji: "ð¤",
      description: "ãã­ã¥ã¡ã³ãã®çæããã«ããã­ã»ã¹ãã©ã¤ãã©ãªãªã©ã®å¤æ´",
      value: "chore",
    },
    ci: {
      emoji: "ð¡",
      description: "CIç¨ã®è¨­å®ãã¹ã¯ãªããã«é¢ããå¤æ´",
      value: "ci",
    },
    docs: {
      emoji: "ð",
      description: "ãã­ã¥ã¡ã³ãã®ã¿ã®å¤æ´",
      value: "docs",
    },
    feat: {
      emoji: "ð¸",
      description: "æ°æ©è½",
      value: "feat",
    },
    fix: {
      emoji: "ð",
      description: "ä¸å·åã®ä¿®æ­£",
      value: "fix",
    },
    perf: {
      emoji: "â¡ï¸",
      description: "ããã©ã¼ãã³ã¹æ¹åãè¡ãããã®ã³ã¼ãã®å¤æ´",
      value: "perf",
    },
    refactor: {
      emoji: "â»ï¸ ",
      description: "ãã°ä¿®æ­£ãæ©è½ã®è¿½å ãè¡ããªãã³ã¼ãã®å¤æ´",
      value: "refactor",
    },
    style: {
      emoji: "ð",
      description: "ã³ã¼ãã®å¦çã«å½±é¿ããªãå¤æ´ï¼ã¹ãã¼ã¹ãæ¸å¼è¨­å®ãªã©ï¼",
      value: "style",
    },
    test: {
      emoji: "ð§ª",
      description: "ãã¹ãã³ã¼ãã®å¤æ´",
      value: "test",
    },
    type: {
      emoji: "ð·ï¸",
      description: "åã®è¿½å ãæ´æ°",
      value: "type",
    },
    begin: {
      emoji: "ð",
      description: "ãã­ã¸ã§ã¯ãã¹ã¿ã¼ã",
      value: "begin",
    },
    hotflix: {
      emoji: "ðï¸",
      description: "è´å½çãªãã°ã®ä¿®æ­£",
      value: "hotflix",
    },
    improve: {
      emoji: "ð¨",
      description: "æ©è½ã®æ´æ°ããã©ã¼ããããªã©",
      value: "improve",
    },
    package: {
      emoji: "ð¦ï¸",
      description: "ããã±ã¼ã¸ã®è¿½å æ´æ°ãªã©",
      value: "package",
    },
  },
};
