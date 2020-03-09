import * as vscode from 'vscode';
import traefikCompleter from './completers/completer';
import dockerHttpCompleter from './completers/docker-http';
import ProviderOptions from './cli/cli-providers';
import ApiOptions from './cli/cli-api';
import EntrypointOptions from './cli/cli-entrypoints';
import dockerTcpCompleter from './completers/docker-tcp';
import dockerHttpSnippets from './snippets/docker-http-snippets';
import dockerTcpSnippets from './snippets/docker-tcp-snippets';

const cliOptions = [...ProviderOptions, ...ApiOptions, ...EntrypointOptions];
const snippets = [...dockerHttpSnippets, ...dockerTcpSnippets];
const completers = [
	...traefikCompleter,
	...dockerHttpCompleter,
	...dockerTcpCompleter
];

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(...cliOptions, ...snippets, ...completers);
}
