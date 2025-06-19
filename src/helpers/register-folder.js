import glob from 'glob';
import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Register all files in folder as MCP-resource
 * @param {McpServer} server
 * @param {string} id
 * @param {string} folderAbs
 * @param {string} mime
 */
export async function registerFolder(server, id, folderAbs, mime = 'text/markdown') {
  const files = glob.sync('**/*.{md,markdown,html,ts}', { cwd: folderAbs });
  server.registerResource(
    id,
    `folder://${id}`,
    { title: id, mimeType: mime },
    async () => ({
      contents: await Promise.all(
        files.map(async f => ({
          uri: `folder://${id}/${f}`,
          text: await fs.readFile(path.join(folderAbs, f), 'utf8')
        }))
      )
    })
  );
}
