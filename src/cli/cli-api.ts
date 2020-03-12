import * as vscode from 'vscode';
import { completeOptions, checkPrefix, isComposeFile } from '../helpers';
import { staticConfig } from '../completers/docker-keys';


const cliApiProviders = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?api\.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.api));
				}
				return;
			}
		}
	},
	'.'
);

export default [cliApiProviders];
