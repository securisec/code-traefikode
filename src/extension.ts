import * as vscode from 'vscode';
import { traefikCompleter } from './completers/completer';
import dockerHttpCompleter from './completers/docker-http';
import dockerHttpSnippets from './snippets/docker-http-snippets';
import dockerTcpCompleter from './completers/docker-tcp';
import dockerTcpSnippets from './snippets/docker-tcp-snippets';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		traefikCompleter,
		...dockerHttpSnippets,
		...dockerHttpCompleter,
		...dockerTcpCompleter,
		...dockerTcpSnippets
	);
}
