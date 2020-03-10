import * as vscode from 'vscode';
import { checkIfTraefik, isComposeFile } from '../helpers';

const makeSnippet = (options: { label: string; text: string }) => {
	const item = new vscode.CompletionItem(options.label);
	item.insertText = new vscode.SnippetString(options.text);
	item.documentation = new vscode.MarkdownString(
		'[Traefik docs](https://docs.traefik.io/routing/providers/docker/#tcp)'
	);
	return item;
};

const snippetGeneric = vscode.languages.registerCompletionItemProvider(
	['yaml', 'dockerfile'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let allItems = [];

			if (isComposeFile(document)) {
				if (checkIfTraefik(document, position)) {
					allItems.push(
						makeSnippet({
							label: 'traefikTcpRouters',
							text:
								'"traefik.tcp.routers.${1:myroute}.${2|rule,service,tls|}=${3:value}"${0}'
						})
					);

					allItems.push(
						makeSnippet({
							label: 'traefikTcpServices',
							text:
								'"traefik.tcp.services.${1:myroute}.loadbalancer.${2|server,terminationdelay|}=${3:value}"${0}'
						})
					);
				}
			}

			return [...allItems];
		}
	}
);

const routersSnippets = vscode.languages.registerCompletionItemProvider(
	'yaml',
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let allItems = [];

			if (isComposeFile(document)) {
				if (checkIfTraefik(document, position)) {
					allItems.push(
						makeSnippet({
							label: 'traefikTcpRouteRule',
							text:
								'"traefik.tcp.routers.${1:myrouter}.rule=HostSNI(`${2:host}`)"${0}'
						})
					);
				}
			}

			return [...allItems];
		}
	}
);

export default [snippetGeneric, routersSnippets];
