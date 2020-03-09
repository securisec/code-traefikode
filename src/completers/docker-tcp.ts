import * as vscode from 'vscode';
import { completeOptions, checkPrefix } from '../helpers';
import { dockerKeys } from './docker-keys';

let servicesRegex = (regex: string, l: string) => {
	let r = `traefik.tcp.services.[\\w_-]+\\.${regex}\\.$`;
	return new RegExp(r).test(l);
};

let routersRegex = (regex: string, l: string) => {
	let r = `traefik.tcp.routers.[\\w_-]+\\.${regex}\\.$`;
	return new RegExp(r).test(l);
};

const tcpRouters = vscode.languages.registerCompletionItemProvider(
	['yaml', 'dockerfile'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (new RegExp(/traefik\.tcp\.routers\.[\w_-]+\.$/).test(linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.tcp.routers));
			}
			if (routersRegex('tls', linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.tcp.routers.tls));
			}
			if (routersRegex('tls.domains\\[n\\]', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.tcp.routers.tls['domains[n]'])
				);
			}
			return;
		}
	},
	'.'
);

const tcpServices = vscode.languages.registerCompletionItemProvider(
	'yaml',
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (new RegExp(/traefik\.tcp\.services\.[\w_-]+\.$/).test(linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.tcp.services));
			}
			if (routersRegex('server', linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.tcp.services.server));
			}

			return;
		}
	},
	'.'
);

export default [tcpRouters, tcpServices];
