import React, { useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html as htmlLang } from '@codemirror/lang-html';
import { css as cssLang } from '@codemirror/lang-css';
import { javascript as jsLang } from '@codemirror/lang-javascript';
import { autocompletion } from '@codemirror/autocomplete';
import { oneDark } from '@codemirror/theme-one-dark';
import { EditorView } from '@codemirror/view';

interface HTMLPlaygroundProps {
  input: {
    html: string
    css: string
    js: string
  }
}

export const HTMLPlayground: React.FC<HTMLPlaygroundProps> = ({input}) => {
  const [html, setHtml] = useState<string>(input.html);

  const [css, setCss] = useState<string>(input.css);

  const [js, setJs] = useState<string>(input.js);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const runCode = () => {
    const document = iframeRef.current?.contentWindow?.document;
    if (document) {
      const fullCode = `
        ${html}
        <style>${css}</style>
        <script>${js}</script>
      `;
      document.open();
      document.write(fullCode);
      document.close();
    }
  };

  return (
    <div>
      <h1>Simple Coding Playground</h1>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CodeMirror
          value={html}
          onChange={(value) => setHtml(value)}
          extensions={[htmlLang(), autocompletion(), EditorView.lineWrapping]}
          placeholder="Write HTML here..."
          height="240px"
          style={{ width: '100%', marginBottom: '10px' }}
          theme={oneDark}
        />
        <CodeMirror
          value={css}
          onChange={(value) => setCss(value)}
          extensions={[cssLang(), autocompletion(), EditorView.lineWrapping]}
          placeholder="Write CSS here..."
          height="200px"
          style={{ width: '100%', marginBottom: '10px' }}
          theme={oneDark}
        />
        <CodeMirror
          value={js}
          onChange={(value) => setJs(value)}
          extensions={[jsLang(), autocompletion(), EditorView.lineWrapping]}
          placeholder="Write JavaScript here..."
          height="200px"
          style={{ width: '100%', marginBottom: '10px' }}
          theme={oneDark}
        />
      </div>

      <button onClick={runCode} style={{ margin: '10px', padding: '5px 10px' }}>
        Run Code
      </button>

      <iframe
        ref={iframeRef}
        style={{ width: '100%', height: '400px', border: '1px solid #ddd' }}
      />
    </div>
  );
};
