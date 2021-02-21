const { addHook } = require('pirates');

addHook((code, filename) => {
  if (!code.includes('css`')) return code;

  const [firstCodeBlock, ...codeBlocksStartingWithCss] = code.split('css`');
  return codeBlocksStartingWithCss.reduce(
    (result, codeBlock) => `${result}cssCollector('${filename}', \`${codeBlock.replace('`', '`)')}`,
    `import { cssCollector } from '~utils';\n${firstCodeBlock}`,
  );
});
