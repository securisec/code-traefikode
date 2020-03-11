import * as vscode from 'vscode';
import { checkPrefix, completeOptions, isComposeFile } from '../helpers';
import { staticConfig } from './docker-keys';

const traefikCompleter = vscode.languages.registerCompletionItemProvider(
	['yaml', 'dockerfile'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let completers: vscode.CompletionItem | any = [];
			let currentLine = document.lineAt(position).text;

			if (isComposeFile(document)) {
				if (new RegExp(/-\s?["']?.(?<!=)$/).test(currentLine)) {
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
