import * as vscode from 'vscode';
import { checkPrefix, completeOptions, isComposeFile } from '../helpers';
import { staticConfig } from './docker-keys';

const staticCompleter = vscode.languages.registerCompletionItemProvider(
	['yaml', 'dockerfile'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let completers: vscode.CompletionItem | any = [];
			let currentLine = document.lineAt(position).text;

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?.(?<!=)$/).test(currentLine)) {
					Object.keys(staticConfig).map((key) => {
						const traefikCompleter = new vscode.CompletionItem(key);
						traefikCompleter.commitCharacters = ['.'];
						completers.push(traefikCompleter);
					});
				} else {
					completers.push(...[]);
				}
			}

			return [...completers];
		}
	}
);

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

export default [traefikCompleter, dockerCompleter, staticCompleter];
