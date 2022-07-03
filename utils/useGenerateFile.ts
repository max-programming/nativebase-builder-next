import { useComponentStore } from '@/store/useComponentsStore';
import { format } from 'prettier';
import jsParser from 'prettier/parser-babel';
import reactElementToJSXString from 'react-element-to-jsx-string';
import useCopyToClipboard from './useCopyToClipboard';

export const useGenerateFile = (filename: string) => {
  const { imports, components, clearComponents } = useComponentStore();
  const [, copy] = useCopyToClipboard();

  let customCode = components.map(txt => reactElementToJSXString(txt)).join('');
  customCode = `
  import React from "react";
  import { Box, ${imports.join(',')} } from "native-base"

  const ${filename} = () => {
    return (
      <Box>${customCode}</Box>
    )
  }

  export default ${filename};
  `;

  const formattedCode = format(customCode, {
    parser: 'babel',
    plugins: [jsParser],
    singleQuote: false,
  });

  return {
    copy,
    customCode: formattedCode,
    clearComponents,
  };
};
