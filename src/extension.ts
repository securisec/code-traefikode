import * as vscode from 'vscode';
import traefikCompleter from './completers/completer';
import dockerHttpCompleter from './completers/docker-http';
import ProviderOptions from './cli/cli-providers';
import ApiOptions from './cli/cli-api';
import EntrypointOptions from './cli/cli-entrypoints';
import CliOther from './cli/cli-other';
import dockerTcpCompleter from './completers/docker-tcp';
import dockerHttpSnippets from './snippets/docker-http-snippets';
import dockerTcpSnippets from './snippets/docker-tcp-snippets';
import traefikEnvars from './snippets/traefik-envars';

const cliOptions = [
	...ProviderOptions,
	...ApiOptions,
	...EntrypointOptions,
	...CliOther
];
const snippets = [...dockerHttpSnippets, ...dockerTcpSnippets, ...traefikEnvars];
const completers = [
	...traefikCompleter,
	...dockerHttpCompleter,
	...dockerTcpCompleter
];

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(...cliOptions, ...snippets, ...completers);
}
