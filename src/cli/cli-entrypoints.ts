import * as vscode from 'vscode';
import { completeOptions, checkPrefix, isComposeFile } from '../helpers';
import { staticConfig } from '../completers/docker-keys';

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

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?entryPoints\.[\w_-]+\.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.entryPoints));
				}
				if (cliEntryRegex('transport', linePrefix)) {
					return completeOptions(
						Object.keys(staticConfig.entryPoints.transport)
					);
				}
				if (cliEntryRegex('http.redirections.entryPoint', linePrefix)) {
					return completeOptions(
						Object.keys(
							staticConfig.entryPoints['http.redirections.entryPoint']
						)
					);
				}
			}
			return;
		}
	},
	'.'
);

export default [cliEntrypoints];
