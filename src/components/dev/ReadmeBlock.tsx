const README = `---
name: Shourya Mupparapu
role: Full-Stack Software Developer
status: open to opportunities
location: Grand Rapids, MI
---

# Hi, I'm Shourya.

This portfolio has two views of the same site: the source code
you're reading right now, and the page it actually renders to.

Flip the toggle in the corner to \`localhost:3000\` to see it live,
or keep scrolling to read through how each part is built.

---

Thanks for stopping by.
`;

const renderLine = (line: string, i: number) => {
  if (line === '---') {
    return <div key={i} className="text-[#5a5a5a]">{'---'}</div>;
  }
  if (line.startsWith('# ')) {
    return (
      <div key={i} className="text-white font-semibold text-base">
        {line}
      </div>
    );
  }

  const parts = line.split(/(`[^`]+`)/g);
  return (
    <div key={i} className="text-[#c9c9c9]">
      {parts.map((part, j) =>
        part.startsWith('`') ? (
          <span key={j} className="text-[#ce9178]">
            {part}
          </span>
        ) : (
          <span key={j}>{part}</span>
        ),
      )}
    </div>
  );
};

const ReadmeBlock = () => {
  const lines = README.replace(/^\n/, '').replace(/\n$/, '').split('\n');

  return (
    <div className="font-mono text-[13px] leading-[1.8]">
      <div className="sticky top-0 z-10 flex items-center gap-2 px-4 sm:px-6 py-2 bg-[#252526]/95 backdrop-blur-sm border-b border-[#3c3c3c] border-t-2 border-t-[#007acc] text-[#969696] text-xs">
        <span className="text-[#569cd6]">MD</span>
        <span className="text-white">README.md</span>
      </div>
      <div className="flex overflow-x-hidden">
        <div className="select-none pl-4 sm:pl-6 pr-3 py-6 text-right text-[#5a5a5a]">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <pre className="pr-4 sm:pr-6 py-6 flex-1 whitespace-pre-wrap break-words min-w-0">
          {lines.map((line, i) => renderLine(line, i))}
        </pre>
      </div>
    </div>
  );
};

export default ReadmeBlock;
