// Monaco Editor
require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.31.1/min/vs' }});
require(['vs/editor/editor.main'], function () {
    const editor = monaco.editor.create(document.getElementById('editor'), {
        value: [
            '<!DOCTYPE html>',
            '<html>',
            '<head>',
            '    <title>Sample</title>',
            '</head>',
            '<body>',
            '    <h1>Hello, world!</h1>',
            '</body>',
            '</html>'
        ].join('\n'),
        language: 'html',
        theme: 'vs-dark',
        automaticLayout: true
    });

    document.getElementById('theme-select').addEventListener('change', (event) => {
        monaco.editor.setTheme(event.target.value);
    });
// Preview Update Function
    const updatePreview = () => {
        const htmlContent = editor.getValue();
        const previewFrame = document.getElementById('preview-frame');
        const previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
        previewDocument.open();
        previewDocument.write(htmlContent);
        previewDocument.close();
    };

    editor.onDidChangeModelContent(updatePreview);

    // Initial preview update
    updatePreview();
});
// Code by Abdul Codes