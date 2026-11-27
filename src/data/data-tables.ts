/**
 * Schemas of the n8n Data Tables used in the VOTD automation.
 *
 * Edit these lists to change what <SchemaTable /> renders:
 * - name: column name (rendered as-is, monospace)
 * - type: data type shown in the pill (INT, String, Number, DATETIME…)
 * - desc: optional one-line explanation — not rendered by the table anymore
 *
 * Usage:
 *   <SchemaTable />                          → viz_of_the_day
 *   <SchemaTable table="summary_posting" />  → the other table
 */
export interface SchemaColumn {
  name: string;
  type: string;
  desc?: string;
}

export const tableSchemas = {
  viz_of_the_day: [
    { name: 'id', type: 'INT' },
    { name: 'author_profile', type: 'String' },
    { name: 'author_name', type: 'String' },
    { name: 'workbook_repo_url', type: 'String' },
    { name: 'viz_url', type: 'String' },
    { name: 'initial_view_count', type: 'String' },
    { name: 'last_view_count', type: 'Number' },
    { name: 'initial_favorites_count', type: 'Number' },
    { name: 'last_favorites_count', type: 'Number' },
    { name: 'initial_reactions_sad', type: 'Number' },
    { name: 'last_reactions_sad', type: 'Number' },
    { name: 'initial_reactions_insightful', type: 'Number' },
    { name: 'last_reactions_insightful', type: 'Number' },
    { name: 'initial_reactions_nominate', type: 'Number' },
    { name: 'last_reactions_nominate', type: 'Number' },
    { name: 'initial_reactions_love', type: 'Number' },
    { name: 'last_reaction_love', type: 'Number' },
    { name: 'thumbnail_url', type: 'String' },
    { name: 'curated_at', type: 'String' },
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
