import { ensureFile, writeFile } from 'fs-extra';

import { ExportsTransformerConfig } from '../../../cli/commands/transform/TransformCommandConfig';
import { resolveRelativePath } from '../../../core/resolve';
import { dashToPascalCase } from '../../../utils/string';
import { Transformer } from '../../Transformer';

export const ExportsTransformer: Transformer<ExportsTransformerConfig> = {
  async transform(components, config) {
    const { exportsOutFile } = config;
    const output: string[] = [];

    components.forEach(component => {
      const { className, tagName } = component;

      const exportPath = resolveRelativePath(
        exportsOutFile,
        component.source.filePath,
      ).replace('.ts', '');

      const exportSpecifier =
        className === dashToPascalCase(tagName)
          ? className
          : `${className} as ${dashToPascalCase(tagName)}`;

      output.push(`export { ${exportSpecifier} } from '${exportPath}';`);
    });

    await ensureFile(exportsOutFile);
    await writeFile(exportsOutFile, `${output.join('\n')}\n`);
  },
};
