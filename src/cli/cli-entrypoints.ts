import * as vscode from 'vscode';
import { completeOptions, checkPrefix } from '../helpers';
import { dockerKeys } from '../completers/docker-keys';

let cliEntryRegex = (regex: string, l: string) => {
	let r = `["']?\\s?\\-\\-\\s?entryPoints.[\\w_-]+\\.${regex}\\.$`;
	return new RegExp(r).test(l);
};

const cliEntrypoints = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (new RegExp(/--\s?["']?entryPoints\.[\w_-]+\.$/).test(linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.entryPoints));
			}
			if (cliEntryRegex('transport', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.entryPoints.transport)
				);
			}
			return;
		}
	},
	'.'
);

export default [cliEntrypoints];
