import { SlotMeta } from '../../../../discover/ComponentMeta';
import { MarkdownTable } from './markdownUtils';

export const slotsToMarkdown = (slots: SlotMeta[]) => {
  const content: string[] = [];

  if (slots.length === 0) return content;

  content.push('## Slots');
  content.push('');

  const table = new MarkdownTable();
  table.addHeader(['Slot', 'Description']);

  slots.forEach((slot) => {
    table.addRow([
      slot.name === '' ? '' : `\`"${slot.name}"\``,
      slot.description ?? '',
    ]);
  });

  content.push(...table.toMarkdown());
  content.push('');
  content.push('');

  return content;
};