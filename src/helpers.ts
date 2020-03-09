import * as vscode from 'vscode';

import {
	CompletionItem,
	CompletionItemKind,
	TextDocument,
	Position
} from 'vscode';

export const completeOptions = (options: Array<string>) => {
	return options.map(
		(option) => new CompletionItem(option, CompletionItemKind.Property)
	);
};

export const checkPrefix = (document: TextDocument, position: Position) => {
	return document.lineAt(position).text.substr(0, position.character);
};

export const checkIfTraefik = (
	document: vscode.TextDocument,
	position: vscode.Position
) => {
	let currentLine = document.lineAt(position).text;
	return new RegExp(/-\s?t(?<!=)$/).test(currentLine);
};
