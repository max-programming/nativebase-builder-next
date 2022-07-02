import { format } from 'prettier';
import jsParser from 'prettier/parser-babel';
import { useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success

function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copy: CopyFn = async text => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    const formattedText = format(text, {
      parser: 'babel',
      plugins: [jsParser],
      singleQuote: false,
    });

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(formattedText);
      setCopiedText(formattedText);
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return false;
    }
  };

  return [copiedText, copy];
}

export default useCopyToClipboard;
