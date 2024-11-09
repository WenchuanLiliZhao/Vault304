import React, { useState, useRef } from 'react';

export const CodePlayground: React.FC = () => {
  const [html, setHtml] = useState<string>(`<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
    <p>This is a simple coding playground.</p>
  </body>
</html>`);

  const [css, setCss] = useState<string>(`body {
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #4CAF50;
}

p {
  color: #555;
}`);

  const [js, setJs] = useState<string>(`document.querySelector('h1').onclick = function() {
  alert('Hello, World!');
};`);

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Simple Coding Playground</h1>
      
      <div style={{ display: 'flex', flexDirection: 'row', margin: '10px 0' }}>
        <textarea 
          value={html} 
          onChange={(e) => setHtml(e.target.value)} 
          placeholder="Write HTML here..." 
          style={{ height: '200px', width: '300px', marginRight: '10px', fontFamily: 'monospace', resize: 'none' }}
        />
        <textarea 
          value={css} 
          onChange={(e) => setCss(e.target.value)} 
          placeholder="Write CSS here..." 
          style={{ height: '200px', width: '300px', marginRight: '10px', fontFamily: 'monospace', resize: 'none' }}
        />
        <textarea 
          value={js} 
          onChange={(e) => setJs(e.target.value)} 
          placeholder="Write JavaScript here..." 
          style={{ height: '200px', width: '300px', fontFamily: 'monospace', resize: 'none' }}
        />
      </div>
      
      <button 
        onClick={runCode} 
        style={{ padding: '10px 20px', marginTop: '10px', cursor: 'pointer' }}
      >
        Run Code
      </button>
      
      <iframe 
        ref={iframeRef} 
        style={{ width: '100%', height: '300px', border: '1px solid #ccc', marginTop: '20px' }}
      />
    </div>
  );
};
