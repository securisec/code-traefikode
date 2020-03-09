import * as vscode from 'vscode';
import { completeOptions, checkPrefix } from '../helpers';
import { dockerKeys, ruleOptions } from './docker-keys';

let servicesRegex = (regex: string, l: string) => {
	let r = `traefik.http.services.[\\w_-]+\\.${regex}\\.$`;
	return new RegExp(r).test(l);
};

let middlewaresRegex = (regex: string, l: string) => {
	let r = `traefik.http.middlewares.[\\w_-]+\\.${regex}\\.$`;
	return new RegExp(r).test(l);
};

const httpTcpCompleter = vscode.languages.registerCompletionItemProvider(
	'yaml',
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (linePrefix.endsWith('traefik.docker.')) {
				return completeOptions(Object.keys(dockerKeys['docker']));
			} else if (linePrefix.endsWith('traefik.http.')) {
				return completeOptions(Object.keys(dockerKeys['http']));
			} else if (linePrefix.endsWith('traefik.tcp.')) {
				return completeOptions(Object.keys(dockerKeys['tcp']));
			}
			return;
		}
	},
	'.'
);

const httpRouter = vscode.languages.registerCompletionItemProvider(
	'yaml',
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (new RegExp(/traefik\.http\.routers\.[\w_-]+\.$/).test(linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.http.routers));
			}
			if (
				new RegExp(/traefik\.http\.routers\.[\w_-]+\.tls\.$/).test(linePrefix)
			) {
				return completeOptions(Object.keys(dockerKeys.http.routers.tls));
			}
			if (
				new RegExp(/traefik\.http\.routers\.[\w_-]+\.tls.domains\[n\]\.$/).test(
					linePrefix
				)
			) {
				return completeOptions(
					Object.keys(dockerKeys.http.routers.tls['domains[n]'])
				);
			}
			if (
				new RegExp(/traefik\.http\.routers\.[\w_-]+\.rule=.+/).test(linePrefix)
			) {
				return completeOptions(ruleOptions);
			}
			return;
		}
	},
	'.'
);

const httpServices = vscode.languages.registerCompletionItemProvider(
	'yaml',
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (new RegExp(/traefik\.http\.services\.[\w_-]+\.$/).test(linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.http.services));
			}
			if (servicesRegex('loadbalancer', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.services.loadbalancer)
				);
			}
			if (servicesRegex('loadbalancer.server', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.services.loadbalancer.server)
				);
			}
			if (servicesRegex('loadbalancer.healthcheck', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.services.loadbalancer.healthcheck)
				);
			}
			if (servicesRegex('loadbalancer.sticky', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.services.loadbalancer.sticky)
				);
			}
			if (servicesRegex('loadbalancer.sticky.cookie', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.services.loadbalancer.sticky.cookie)
				);
			}
			if (servicesRegex('loadbalancer.responseforwarding', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.services.loadbalancer.responseforwarding)
				);
			}
			return;
		}
	},
	'.'
);

const httpMiddlewares = vscode.languages.registerCompletionItemProvider(
	'yaml',
	{
		provideCompletionItems(
			document: vscode.TextDocument,
			position: vscode.Position
		) {
			let linePrefix = checkPrefix(document, position);

			if (
				new RegExp(/traefik\.http\.middlewares\.[\w_-]+\.$/).test(linePrefix)
			) {
				return completeOptions(Object.keys(dockerKeys.http.middlewares));
			}
			if (middlewaresRegex('addprefix', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.addprefix)
				);
			}
			if (middlewaresRegex('basicauth', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.basicauth)
				);
			}
			if (middlewaresRegex('buffering', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.buffering)
				);
			}
			if (middlewaresRegex('chain', linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.http.middlewares.chain));
			}
			if (middlewaresRegex('circuitbreaker', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.circuitbreaker)
				);
			}
			if (middlewaresRegex('compress', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.compress)
				);
			}
			if (middlewaresRegex('digestauth', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.digestauth)
				);
			}
			if (middlewaresRegex('errors', linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.http.middlewares.errors));
			}
			if (middlewaresRegex('forwardauth', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.forwardauth)
				);
			}
			if (middlewaresRegex('forwardauth.tls', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.forwardauth.tls)
				);
			}
			if (middlewaresRegex('headers', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.headers)
				);
			}
			if (middlewaresRegex('ipwhitelist', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.ipwhitelist)
				);
			}
			if (middlewaresRegex('ipwhitelist.ipstrategy', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.ipwhitelist.ipstrategy)
				);
			}
			if (middlewaresRegex('passtlsclientcert', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.passtlsclientcert)
				);
			}
			if (middlewaresRegex('passtlsclientcert.info', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.passtlsclientcert.info)
				);
			}
			if (middlewaresRegex('passtlsclientcert.info.subject', linePrefix)) {
				return completeOptions(
					Object.keys(
						dockerKeys.http.middlewares.passtlsclientcert.info.subject
					)
				);
			}
			if (middlewaresRegex('passtlsclientcert.info.issuer', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.passtlsclientcert.info.issuer)
				);
			}
			if (middlewaresRegex('ratelimit', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.ratelimit)
				);
			}
			if (middlewaresRegex('ratelimit.sourceCriterion', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.ratelimit.sourceCriterion)
				);
			}
			if (
				middlewaresRegex('ratelimit.sourceCriterion.ipStrategy', linePrefix)
			) {
				return completeOptions(
					Object.keys(
						dockerKeys.http.middlewares.ratelimit.sourceCriterion.ipStrategy
					)
				);
			}
			if (middlewaresRegex('redirectscheme', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.redirectscheme)
				);
			}
			if (middlewaresRegex('redirectregex', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.redirectregex)
				);
			}
			if (middlewaresRegex('replacepath', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.replacepath)
				);
			}
			if (middlewaresRegex('replacepathregex', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.replacepathregex)
				);
			}
			if (middlewaresRegex('retry', linePrefix)) {
				return completeOptions(Object.keys(dockerKeys.http.middlewares.retry));
			}
			if (middlewaresRegex('stripprefix', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.stripprefix)
				);
			}
			if (middlewaresRegex('stripprefixregex', linePrefix)) {
				return completeOptions(
					Object.keys(dockerKeys.http.middlewares.stripprefixregex)
				);
			}

			return;
		}
	},
	'.'
);

export default [httpTcpCompleter, httpRouter, httpServices, httpMiddlewares];
