import * as vscode from 'vscode';
import { completeOptions, checkPrefix, isComposeFile } from '../helpers';
import { staticConfig } from '../completers/docker-keys';

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

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?providers\.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.providers));
				}
				if (new RegExp(/--\s?["']?providers\.docker\.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.providers.docker));
				}
				if (cliProviderRegex('docker.tls', linePrefix)) {
					return completeOptions(
						Object.keys(staticConfig.providers.docker.tls)
					);
				}
				return;
			}
		}
	},
	'.'
);

const cliRestProviders = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?providers\.rest\.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.providers.rest));
				}
				return;
			}
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

			if (isComposeFile(document)) {
				if (
					new RegExp(/--\s?["']?providers\.kubernetescrd\.$/).test(linePrefix)
				) {
					return completeOptions(
						Object.keys(staticConfig.providers.kubernetescrd)
					);
				}
				return;
			}
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

			if (isComposeFile(document)) {
				if (
					new RegExp(/--\s?["']?providers\.kubernetesingress\.$/).test(
						linePrefix
					)
				) {
					return completeOptions(
						Object.keys(staticConfig.providers.kubernetesingress)
					);
				}
				if (cliProviderRegex('kubernetesingress.ingressendpoint', linePrefix)) {
					return completeOptions(
						Object.keys(
							staticConfig.providers.kubernetesingress.ingressendpoint
						)
					);
				}
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

			if (isComposeFile(document)) {
				if (
					new RegExp(/--\s?["']?providers\.consulcatalog\.$/).test(linePrefix)
				) {
					return completeOptions(
						Object.keys(staticConfig.providers.consulcatalog)
					);
				}
				if (cliProviderRegex('consulcatalog.endpoint', linePrefix)) {
					return completeOptions(
						Object.keys(staticConfig.providers.consulcatalog.endpoint)
					);
				}
				if (cliProviderRegex('consulcatalog.endpoint.httpauth', linePrefix)) {
					return completeOptions(
						Object.keys(staticConfig.providers.consulcatalog.endpoint.httpauth)
					);
				}
				if (cliProviderRegex('consulcatalog.endpoint.tls', linePrefix)) {
					return completeOptions(
						Object.keys(staticConfig.providers.consulcatalog.endpoint.tls)
					);
				}
				return;
			}
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

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?providers\.marathon\.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.providers.marathon));
				}
				if (cliProviderRegex('marathon.basic', linePrefix)) {
					return completeOptions(
						Object.keys(staticConfig.providers.marathon.basic)
					);
				}
				if (cliProviderRegex('marathon.endpoint.tls', linePrefix)) {
					return completeOptions(
						Object.keys(staticConfig.providers.marathon.tls)
					);
				}
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

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?providers\.rancher\.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.providers.rancher));
				}
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

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?providers\.file\.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.providers.file));
				}
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
	cliFileProviders,
	cliRestProviders
];
