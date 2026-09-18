const KEYWORDS = new Set([
  'import', 'export', 'default', 'const', 'let', 'return', 'from', 'interface', 'type',
  'if', 'else', 'map', 'true', 'false', 'null', 'undefined', 'new', 'extends', 'as',
]);

const HOOKS = new Set(['useState', 'useEffect', 'useDesignMode', 'useActiveSection']);

// Splits a line into typed tokens for a small, hand-picked TSX/JSX subset.
// Not a general-purpose parser — just enough fidelity for the source snippets
// this portfolio shows about itself.
const TOKEN_PATTERN =
  /(\/\/.*$)|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|(<\/?[A-Za-z][\w.]*)|([A-Za-z_$][\w$]*(?==))|(\b[A-Za-z_$][\w$]*\b)/g;

type TokenType = 'comment' | 'string' | 'tag' | 'attr' | 'keyword' | 'hook' | 'plain';

interface Token {
  text: string;
  type: TokenType;
}

const tokenizeLine = (line: string): Token[] => {
  const tokens: Token[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  TOKEN_PATTERN.lastIndex = 0;

  while ((match = TOKEN_PATTERN.exec(line)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ text: line.slice(lastIndex, match.index), type: 'plain' });
    }
    const [full, comment, string, tag, attr, word] = match;
    if (comment) tokens.push({ text: comment, type: 'comment' });
    else if (string) tokens.push({ text: string, type: 'string' });
    else if (tag) tokens.push({ text: tag, type: 'tag' });
    else if (attr) tokens.push({ text: attr, type: 'attr' });
    else if (word && KEYWORDS.has(word)) tokens.push({ text: word, type: 'keyword' });
    else if (word && HOOKS.has(word)) tokens.push({ text: word, type: 'hook' });
    else tokens.push({ text: full, type: 'plain' });
    lastIndex = match.index + full.length;
  }
  if (lastIndex < line.length) {
    tokens.push({ text: line.slice(lastIndex), type: 'plain' });
  }
  return tokens;
};

const TOKEN_COLOR: Record<TokenType, string> = {
  comment: 'text-[#6a9955]',
  string: 'text-[#ce9178]',
  tag: 'text-[#4ec9b0]',
  attr: 'text-[#9cdcfe]',
  keyword: 'text-[#c586c0]',
  hook: 'text-[#dcdcaa]',
  plain: 'text-[#d4d4d4]',
};

interface CodeBlockProps {
  fileName: string;
  code: string;
}

const CodeBlock = ({ fileName, code }: CodeBlockProps) => {
  const lines = code.replace(/^\n/, '').split('\n');

  return (
    <div className="font-mono text-[13px] leading-[1.7]">
      <div className="sticky top-0 z-10 flex items-center gap-2 px-4 sm:px-6 py-2 bg-[#252526]/95 backdrop-blur-sm border-b border-[#3c3c3c] border-t-2 border-t-[#007acc] text-[#969696] text-xs">
        <span className="text-[#569cd6]">TS</span>
        <span className="text-white">{fileName}</span>
      </div>
      <div className="flex">
        <div className="select-none pl-4 sm:pl-6 pr-3 py-4 text-right text-[#5a5a5a]">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <pre className="pr-4 sm:pr-6 py-4 flex-1 overflow-x-auto code-hscroll">
          {lines.map((line, i) => (
            <div key={i}>
              {line.length === 0 ? (
                ' '
              ) : (
                tokenizeLine(line).map((token, j) => (
                  <span key={j} className={TOKEN_COLOR[token.type]}>
                    {token.text}
                  </span>
                ))
              )}
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
