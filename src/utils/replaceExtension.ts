import { extensions, Extensions } from 'consts';

const replaceFileExtension = (src: string, newExtension: Extensions) => {
  const regExps = extensions.map(extension => new RegExp(`(?<=[^/]+)(?<=.)(${extension})`));

  return (
    regExps.map(regExp => src.replace(regExp, newExtension)).find(newSrc => src !== newSrc) || src
  );
};

export default replaceFileExtension;
