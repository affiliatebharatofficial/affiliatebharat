import { visit } from 'unist-util-visit';
import { affUrl, affiliateName } from '../data/affiliates.js';

// Remark plugin: rewrites {{aff:ID}} and {{aff:ID|Custom label}} shortcodes
// in markdown into affiliate CTA links.
//
//   {{aff:hostinger}}            -> link labeled "Hostinger"
//   {{aff:hostinger|Offer dekho}} -> link labeled "Offer dekho"
//
// URL resolution goes through the central registry (src/data/affiliates.ts),
// so filling in real affiliate links later updates every article at build.

const AFF_PATTERN = /\{\{aff:([a-z0-9-]+)(?:\|([^}]+))?\}\}/g;

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => {
    switch (c) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      default: return '&#39;';
    }
  });
}

export function remarkAffiliate() {
  return (tree: unknown) => {
    visit(tree as never, 'text', (node: any, index: number | undefined, parent: any) => {
      if (index === undefined || !parent || typeof node.value !== 'string') return;
      const text: string = node.value;

      AFF_PATTERN.lastIndex = 0;
      let match: RegExpExecArray | null;
      let lastIndex = 0;
      const replacement: any[] = [];

      while ((match = AFF_PATTERN.exec(text)) !== null) {
        const id = match[1];
        const customLabel = match[2];
        if (match.index > lastIndex) {
          replacement.push({ type: 'text', value: text.slice(lastIndex, match.index) });
        }
        const url = affUrl(id);
        const label = customLabel ?? affiliateName(id);
        replacement.push({
          type: 'html',
          value: `<a href="${escapeHtml(url)}" rel="sponsored nofollow noopener" class="aff-link">${escapeHtml(label)}</a>`,
        });
        lastIndex = match.index + match[0].length;
      }

      if (replacement.length === 0) return; // no shortcodes in this node
      if (lastIndex < text.length) {
        replacement.push({ type: 'text', value: text.slice(lastIndex) });
      }

      parent.children.splice(index, 1, ...replacement);
      return index + replacement.length; // skip the nodes we just inserted
    });
  };
}
