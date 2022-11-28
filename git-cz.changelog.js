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
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ["type", "subject"],
  scopes: [],
  types: {
    chore: {
      emoji: "🤖",
      description: "ドキュメントの生成やビルドプロセス、ライブラリなどの変更",
      value: "chore",
    },
    ci: {
      emoji: "🎡",
      description: "CI用の設定やスクリプトに関する変更",
      value: "ci",
    },
    docs: {
      emoji: "📝",
      description: "ドキュメントのみの変更",
      value: "docs",
    },
    feat: {
      emoji: "🎸",
      description: "新機能",
      value: "feat",
    },
    fix: {
      emoji: "🐛",
      description: "不具合の修正",
      value: "fix",
    },
    perf: {
      emoji: "⚡️",
      description: "パフォーマンス改善を行うためのコードの変更",
      value: "perf",
    },
    refactor: {
      emoji: "♻️ ",
      description: "バグ修正や機能の追加を行わないコードの変更",
      value: "refactor",
    },
    style: {
      emoji: "💄",
      description: "コードの処理に影響しない変更（スペースや書式設定など）",
      value: "style",
    },
    test: {
      emoji: "🧪",
      description: "テストコードの変更",
      value: "test",
    },
  },
};
