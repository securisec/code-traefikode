import * as vscode from 'vscode';
import { completeOptions, checkPrefix } from '../helpers';
import { dockerKeys } from '../completers/docker-keys';

let cliProviderRegex = (regex: string, l: string) => {
	let r = `\\-\\-\\s?["']?api\\.${regex}\\.$`;
	return new RegExp(r).test(l);
};

const cliApiProviders = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (new RegExp(/--\s?["']?api\.$/).test(linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.api));
			}
			return;
		}
	},
	'.'
);

export default [cliApiProviders];
