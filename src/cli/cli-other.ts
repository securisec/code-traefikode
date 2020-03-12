import * as vscode from 'vscode';
import { completeOptions, checkPrefix, isComposeFile } from '../helpers';
import { staticConfig } from '../completers/docker-keys';

let cliRegex = (key: string, regex: string, l: string) => {
	let r = `\\-\\-\\s?["']?${key}\\.${regex}\\.$`;
	return new RegExp(r).test(l);
};

let certresolverRegex = (regex: string, l: string) => {
	let r = `\\-\\-\\s?["']?certificatesresolvers\\.[\\w_-]+\\.${regex}\\.$`;
	return new RegExp(r).test(l);
};

const cliAccesslog = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?accesslog\.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.accesslog));
				}
				if (cliRegex('accesslog', 'fields', linePrefix)) {
					return completeOptions(Object.keys(staticConfig.accesslog.fields));
				}
				if (cliRegex('accesslog', 'fields.headers', linePrefix)) {
					return completeOptions(
						Object.keys(staticConfig.accesslog.fields.headers)
					);
				}
				if (cliRegex('accesslog', 'filters', linePrefix)) {
					return completeOptions(Object.keys(staticConfig.accesslog.filters));
				}
				return;
			}
		}
	},
	'.'
);

const cliCertificatesresolvers = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (isComposeFile(document)) {
				if (
					new RegExp(/--\s?["']?certificatesresolvers\.[\w_-]+\.$/).test(
						linePrefix
					)
				) {
					return completeOptions(
						Object.keys(staticConfig.certificatesresolvers)
					);
				}
				if (certresolverRegex('acme', linePrefix)) {
					return completeOptions(
						Object.keys(staticConfig.certificatesresolvers.acme)
					);
				}
				if (certresolverRegex('acme.dnschallenge', linePrefix)) {
					return completeOptions(
						Object.keys(staticConfig.certificatesresolvers.acme.dnschallenge)
					);
				}
				if (certresolverRegex('acme.httpchallenge', linePrefix)) {
					return completeOptions(
						Object.keys(staticConfig.certificatesresolvers.acme.httpchallenge)
					);
				}
				return;
			}
		}
	},
	'.'
);

const cliGlobal = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?global.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.global));
				}

				return;
			}
		}
	},
	'.'
);

const cliHostresolver = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?hostresolver.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.hostresolver));
				}

				return;
			}
		}
	},
	'.'
);

const cliLog = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?log.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.log));
				}

				return;
			}
		}
	},
	'.'
);

const cliPing = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?ping.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.ping));
				}

				return;
			}
		}
	},
	'.'
);

const cliMetrics = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?metrics.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.metrics));
				}
				if (cliRegex('metrics', 'datadog', linePrefix)) {
					return completeOptions(Object.keys(staticConfig.metrics.datadog));
				}
				if (cliRegex('metrics', 'influxdb', linePrefix)) {
					return completeOptions(Object.keys(staticConfig.metrics.influxdb));
				}
				if (cliRegex('metrics', 'statsd', linePrefix)) {
					return completeOptions(Object.keys(staticConfig.metrics.statsd));
				}
				if (cliRegex('metrics', 'prometheus', linePrefix)) {
					return completeOptions(Object.keys(staticConfig.metrics.prometheus));
				}

				return;
			}
		}
	},
	'.'
);

const cliServerstransport = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?serverstransport.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.serverstransport));
				}
				if (cliRegex('serverstransport', 'forwardingtimeouts', linePrefix)) {
					return completeOptions(
						Object.keys(staticConfig.serverstransport.forwardingtimeouts)
					);
				}

				return;
			}
		}
	},
	'.'
);

const cliTracing = vscode.languages.registerCompletionItemProvider(
	['yaml'],
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (isComposeFile(document)) {
				if (new RegExp(/--\s?["']?tracing.$/).test(linePrefix)) {
					return completeOptions(Object.keys(staticConfig.tracing));
				}
				if (cliRegex('tracing', 'datadog', linePrefix)) {
					return completeOptions(Object.keys(staticConfig.tracing.datadog));
				}
				if (cliRegex('tracing', 'haystack', linePrefix)) {
					return completeOptions(Object.keys(staticConfig.tracing.haystack));
				}
				if (cliRegex('tracing', 'instana', linePrefix)) {
					return completeOptions(Object.keys(staticConfig.tracing.instana));
				}
				if (cliRegex('tracing', 'jaeger', linePrefix)) {
					return completeOptions(Object.keys(staticConfig.tracing.jaeger));
				}
				if (cliRegex('tracing', 'jaeger.collector', linePrefix)) {
					return completeOptions(
						Object.keys(staticConfig.tracing.jaeger.collector)
					);
				}
				if (cliRegex('tracing', 'zipkin', linePrefix)) {
					return completeOptions(Object.keys(staticConfig.tracing.zipkin));
				}

				return;
			}
		}
	},
	'.'
);

export default [
	cliAccesslog,
	cliCertificatesresolvers,
	cliGlobal,
	cliHostresolver,
	cliLog,
	cliMetrics,
	cliPing,
	cliServerstransport,
	cliTracing
];
