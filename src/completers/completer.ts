import * as vscode from 'vscode';
import { checkPrefix, completeOptions, isComposeFile } from '../helpers';

const traefikCompleter = vscode.languages.registerCompletionItemProvider(
	['yaml', 'dockerfile'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let completers = [];
			let currentLine = document.lineAt(position).text;

			if (isComposeFile(document)) {
				if (new RegExp(/-\s?["']?t(?<!=)$/).test(currentLine)) {
					const traefikCompleter = new vscode.CompletionItem('traefik');
					traefikCompleter.commitCharacters = ['.'];
					traefikCompleter.documentation = new vscode.MarkdownString(
						'Press `.` to get `traefik.`'
					);
					completers.push(traefikCompleter);
				}

				if (new RegExp(/--\s?["']?p(?<!=)$/).test(currentLine)) {
					const providersCompleter = new vscode.CompletionItem('providers');
					providersCompleter.commitCharacters = ['.'];
					providersCompleter.documentation = new vscode.MarkdownString(
						'Press `.` to get docker providers cli options. [Traefik Docs](https://docs.traefik.io/providers/docker/)'
					);
					completers.push(providersCompleter);
				}

				if (new RegExp(/--\s?["']?a(?<!=)$/).test(currentLine)) {
					const providersCompleter = new vscode.CompletionItem('api');
					providersCompleter.commitCharacters = ['.'];
					providersCompleter.documentation = new vscode.MarkdownString(
						'Press `.` to get docker providers cli options. [Traefik Docs](https://docs.traefik.io/operations/api/)'
					);
					completers.push(providersCompleter);
				}

				if (new RegExp(/--\s?["']?e(?<!=)$/).test(currentLine)) {
					const providersCompleter = new vscode.CompletionItem('entryPoints');
					providersCompleter.commitCharacters = ['.'];
					providersCompleter.documentation = new vscode.MarkdownString(
						'Press `.` to get docker providers cli options. [Traefik Docs](https://docs.traefik.io/operations/api/)'
					);
					completers.push(providersCompleter);
				}
			}

			return [...completers];
		}
	}
);

const dockerCompleter = vscode.languages.registerCompletionItemProvider(
	['yaml', 'dockerfile'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);
			if (!linePrefix.endsWith('traefik.')) {
				return undefined;
			}

			return completeOptions(['http', 'tcp', 'docker', 'enable', 'backend']);
		}
	},
	'.'
);

export default [traefikCompleter, dockerCompleter];
