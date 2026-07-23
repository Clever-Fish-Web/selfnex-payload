// Tell TypeScript that any standard .css file is safe to import
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Specifically tell TypeScript to ignore the Payload CSS module
declare module '@payloadcms/next/css';
