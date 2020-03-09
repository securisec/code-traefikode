import * as vscode from 'vscode';

export const traefikCompleter = vscode.languages.registerCompletionItemProvider(
	['yaml', 'dockerfile'],
	{
		provideCompletionItems() {
			const commit = new vscode.CompletionItem('traefik');
			commit.commitCharacters = ['.'];
			commit.documentation = new vscode.MarkdownString(
				'Press `.` to get `traefik.`'
			);

			return [commit];
		}
	}
);
