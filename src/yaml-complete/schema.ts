import * as vscode from 'vscode';

export const TRAEFIK_YAML_SCHEMA = 'traefikode';

export const getYamlApi = async () => {
	const ext = vscode.extensions.getExtension('redhat.vscode-yaml');
	const currentFile = vscode.window.activeTextEditor;
	if (
		ext &&
		//@ts-ignore
		new RegExp(/compose\.ya?ml$/).test(currentFile.document.uri.fsPath)
	) {
		vscode.window.showWarningMessage(
			'Traefik Intellisense will not work while the Red Hat yaml extension is enabled.'
		);
	}

	if (!ext) {
		vscode.window.showWarningMessage(
			"You must have 'YAML Support by Red Hat' installed in order to use this extension. Enabling the yaml extension will disable intellisense in docker-compose.yaml files. The yaml linting only works in traefik.yaml files."
		);
		return undefined;
	}

	const yamlPlugin = await ext.activate();
	if (!yamlPlugin || !yamlPlugin.registerContributor) {
		vscode.window.showWarningMessage(
			"Please upgrade 'YAML Support by Red Hat' via the Extensions pane."
		);
		return undefined;
	}
	return yamlPlugin;
};

export function onRequestSchemaURI(resource: string): string | undefined {
	if (resource.endsWith('/traefik.yaml') || resource.endsWith('/traefik.yml')) {
		return `${TRAEFIK_YAML_SCHEMA}://schema/traefik`;
	}
	return undefined;
}

let responseCache = '';
export async function getSchemaContent() {
	if (responseCache !== '') {
		return responseCache;
	}
	const response = JSON.stringify(require('../../schemas/traefik-all.json'));
	responseCache = response;
	return responseCache;
}
