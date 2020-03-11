import * as vscode from 'vscode';
import { checkIfEnvars, isComposeFile } from '../helpers';
import { envars } from './env-constants';

const makeSnippet = (options: {
	label: string;
	text: string;
	docs: string;
}) => {
	const item = new vscode.CompletionItem(options.label);
	item.insertText = new vscode.SnippetString(options.text);
	item.documentation = new vscode.MarkdownString(options.docs);
	return item;
};

const envSnippets = vscode.languages.registerCompletionItemProvider(['yaml'], {
	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position
	) {
		let defaultValue: string;
		let allItems: vscode.CompletionItem | any = [];

		if (isComposeFile(document)) {
			if (checkIfEnvars(document, position)) {
				Object.keys(envars).map((e) => {
					let docs = envars[e];
					if (docs) {
						let value = new RegExp(/Default:.+```(.+)```/g).exec(docs);
						if (value) {
							defaultValue = value[1];
						}
					} else {
						defaultValue = '';
					}
					allItems.push(
						makeSnippet({
							label: e.replace('<NAME>', '${1:name}'),
							text: `"${e.replace('<NAME>', '${1:name}')}=\${2:${
								defaultValue ? defaultValue : ''
							}}"\${0}`,
							docs: `${e} ${docs}`
						})
					);
				});
			}
		}

		return [...allItems];
	}
});

export default [envSnippets];
