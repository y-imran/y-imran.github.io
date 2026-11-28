/**
 * Schemas of the n8n Data Tables used in the VOTD automation.
 *
 * Edit these lists to change what <SchemaTable /> renders:
 * - name: column name (rendered as-is, monospace)
 * - type: data type shown in the pill (INT, String, Number, DATETIME…)
 * - comment: optional note rendered under the row (small muted line)
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
}

export const tableSchemas = {
  viz_of_the_day: [
    { name: 'id', type: 'INT' },
    { name: 'author_profile', type: 'String' },
    { name: 'author_name', type: 'String' },
    { name: 'viz_url', type: 'String' },
    {
      name: 'engagement metrics',
      type: 'Number',
      comment:
        'Every reaction is stored twice — the count from when the viz was first tracked and the count from the latest check — so engagement growth can be compared.',
    },
    {
      name: 'curated_at',
      type: 'String',
      comment:
        'The date of the Viz of the Day. Our workflow filters on this column to tell whether a viz is new or already being tracked.',
    },
    { name: 'createdAt', type: 'DATETIME' },
    { name: 'updatedAt', type: 'DATETIME' },
  ],
  summary_posting: [
    { name: 'id', type: 'INT' },
    { name: 'summary', type: 'String' },
    { name: 'curated_at', type: 'String' },
    { name: 'createdAt', type: 'DATETIME' },
    { name: 'updatedAt', type: 'DATETIME' },
  ],
} satisfies Record<string, SchemaColumn[]>;

export type TableName = keyof typeof tableSchemas;
