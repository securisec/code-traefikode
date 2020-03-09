import * as vscode from 'vscode';
import { completeOptions, checkPrefix } from '../helpers';
import { dockerKeys } from '../completers/docker-keys';

let cliProviderRegex = (regex: string, l: string) => {
	let r = `\\-\\-\\s?["']?providers\\.${regex}\\.$`;
	return new RegExp(r).test(l);
};

const cliDockerProviders = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (new RegExp(/--\s?["']?providers\.$/).test(linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.providers));
			}
			if (new RegExp(/--\s?["']?providers\.docker\.$/).test(linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.providers.docker));
			}
			if (cliProviderRegex('docker.tls', linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.providers.docker.tls));
			}
			return;
		}
	},
	'.'
);

const cliKubernetescrdProviders = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (
				new RegExp(/--\s?["']?providers\.kubernetescrd\.$/).test(linePrefix)
			) {
				return completeOptions(Object.keys(dockerKeys.providers.kubernetescrd));
			}
			return;
		}
	},
	'.'
);

const cliKubernetesingressProviders = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (
				new RegExp(/--\s?["']?providers\.kubernetesingress\.$/).test(linePrefix)
			) {
				return completeOptions(
					Object.keys(dockerKeys.providers.kubernetesingress)
				);
			}
			if (cliProviderRegex('kubernetesingress.ingressendpoint', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.providers.kubernetesingress.ingressendpoint)
				);
			}
			return;
		}
	},
	'.'
);

const cliConsulcatalogProviders = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (
				new RegExp(/--\s?["']?providers\.consulcatalog\.$/).test(linePrefix)
			) {
				return completeOptions(Object.keys(dockerKeys.providers.consulcatalog));
			}
			if (cliProviderRegex('consulcatalog.endpoint', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.providers.consulcatalog.endpoint)
				);
			}
			if (cliProviderRegex('consulcatalog.endpoint.httpauth', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.providers.consulcatalog.endpoint.httpauth)
				);
			}
			if (cliProviderRegex('consulcatalog.endpoint.tls', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.providers.consulcatalog.endpoint.tls)
				);
			}
			return;
		}
	},
	'.'
);

const cliMarathonProviders = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (new RegExp(/--\s?["']?providers\.marathon\.$/).test(linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.providers.marathon));
			}
			if (cliProviderRegex('marathon.basic', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.providers.marathon.basic)
				);
			}
			if (cliProviderRegex('marathon.endpoint.tls', linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.providers.marathon.tls));
			}
			return;
		}
	},
	'.'
);

const cliRancherProviders = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (new RegExp(/--\s?["']?providers\.rancher\.$/).test(linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.providers.rancher));
			}
			return;
		}
	},
	'.'
);

const cliFileProviders = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (new RegExp(/--\s?["']?providers\.file\.$/).test(linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.providers.file));
			}
			return;
		}
	},
	'.'
);

export default [
	cliDockerProviders,
	cliKubernetescrdProviders,
	cliKubernetesingressProviders,
	cliConsulcatalogProviders,
	cliMarathonProviders,
	cliRancherProviders,
	cliFileProviders
];
