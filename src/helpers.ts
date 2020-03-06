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
