/**
 * Schemas of the n8n Data Tables used in the VOTD automation.
 *
 * Edit these lists to change what <SchemaTable /> renders:
 * - name: column name (rendered as-is, monospace)
 * - type: data type shown in the pill (INT, String, Number, DATETIME…)
 * - comment: optional note rendered inline, right after the column name
 * - ellipsis: renders a "…" placeholder row (use it to hide columns)
 *
 * Usage:
 *   <SchemaTable />                          → viz_of_the_day
 *   <SchemaTable table="summary_posting" />  → the other table
 */
export interface SchemaColumn {
  name?: string;
  type?: string;
  comment?: string;
  /** Render a "…" placeholder row instead of a field. */
  ellipsis?: boolean;
  /** Tint the row (accent wash + accent borders) to call the field out. */
  highlight?: boolean;
}

export const tableSchemas = {
  viz_of_the_day: [
    { name: 'id', type: 'INT' , comment:'# Auto managed by n8n'},
    { name: 'author_profile', type: 'String' },
    { name: 'author_name', type: 'String' },
    { name: 'viz_url', type: 'String' },
    {
      name: 'engagement metrics',
      type: 'Number',
      comment:
        '# The count from when the viz was first tracked and the count from the latest check — so engagement growth can be compared.',
    },
    {
      name: 'curated_at',
      type: 'String',
      highlight: true,
      comment:
        '# The date of the Viz of the Day. Our workflow filters on this column to tell whether a viz is new or already being tracked.',
    },
    { name: 'createdAt', type: 'DATETIME', comment:'# Auto managed by n8n'},
    { name: 'updatedAt', type: 'DATETIME', comment:'# Auto managed by n8n'},
  ],
  summary_posting: [
    { name: 'id', type: 'INT', comment:'# Auto managed by n8n'},
    { name: 'summary', type: 'String'},
    { name: 'curated_at', type: 'String', highlight: true, comment: "# The date of the Viz of the Day"},
    { name: 'createdAt', type: 'DATETIME', comment:'# Auto managed by n8n'},
    { name: 'updatedAt', type: 'DATETIME', comment:'# Auto managed by n8n'},
  ],
} satisfies Record<string, SchemaColumn[]>;

export type TableName = keyof typeof tableSchemas;
