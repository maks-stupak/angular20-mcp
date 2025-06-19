#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { registerFolder } from './helpers/register-folder.js';
import { strictAngular20 } from './prompts/strict-angular20.js';
import path from 'node:path';

const root = path.dirname(new URL(import.meta.url).pathname);
const data = (...p) => path.join(root, '..', 'data', ...p);

const server = new McpServer({ name: 'local-angular-helper', version: '0.2.0' });

await registerFolder(server, 'angular-docs', data('angular-docs'));
await registerFolder(server, 'style-guides', data('style-guides'));
await registerFolder(server, 'component-examples', data('components'), 'text/plain');
await registerFolder(server, 'articles', data('articles'));

server.registerPrompt(
  'strict_angular20',
  {
    title: 'Strict Angular 20 rules',
    description: 'Standalone + signals + simple code',
    argsSchema: { task: z.string() }
  },
  strictAngular20
);

await server.connect(new StdioServerTransport());
