import * as vscode from 'vscode';

const makeSnippet = (options: { label: string; text: string }) => {
	const item = new vscode.CompletionItem(options.label);
	item.insertText = new vscode.SnippetString(options.text);
	item.documentation = new vscode.MarkdownString('[Traefik docs](https://docs.traefik.io/routing/providers/docker/)');
	return item;
};

const snippetGeneric = vscode.languages.registerCompletionItemProvider('yaml', {
	provideCompletionItems() {
		let allItems = [];

		allItems.push(
			makeSnippet({
				label: 'traefikEnable',
				text: '"traefik.enable=${1|true,false|}"${0}'
			})
		);

		allItems.push(
			makeSnippet({
				label: 'traefikDockerNetwork',
				text: '"traefik.docker.network=${1:mynetwork}"${0}'
			})
		);

		allItems.push(
			makeSnippet({
				label: 'traefikHttpRouter',
				text:
					'"traefik.http.routers.${1:myrouter}.${2|rule,entrypoints,middlewares,service,tls,priority|}=${3}"${0}'
			})
		);

		allItems.push(
			makeSnippet({
				label: 'traefikServices',
				text:
					'"traefik.http.services.${1:myservice}.loadbalancer.${2|server,server,passhostheader,healthcheck,sticky,responseforwarding|}=${3:value}"${0}'
			})
		);

		allItems.push(
			makeSnippet({
				label: 'traefikMiddlewares',
				text:
					'"traefik.http.middlewares.${1:mymiddleware}.${2|addprefix,basicauth,buffering,chain,circuitbreaker,compress,digestauth,errors,forwardauth,headers,ipwhitelist,inflightreq,passtlsclientcert,ratelimit,redirectscheme,redirectregex,replacepath,replacepathregex,retry,stripprefix,stripprefixregex|}=${3:value}"${0}'
			})
		);

		return [...allItems];
	}
});

const routerSnippets = vscode.languages.registerCompletionItemProvider('yaml', {
	provideCompletionItems() {
		let allItems = [];

		allItems.push(
			makeSnippet({
				label: 'traefikHttpRouterRule',
				text:
					'"traefik.http.routers.${1:myrouter}.rule=${2|Host,HostRegexp,Headers,HeadersRegexp,Method,Path,PathPrefix,Qeury|}(`${3}`)"${0}'
			})
		);

		allItems.push(
			makeSnippet({
				label: 'traefikRouterEntrypoints',
				text:
					'"traefik.http.routers.${1:myrouter}.entrypoints=${2|web,websecure,http,https|}"${0}'
			})
		);

		allItems.push(
			makeSnippet({
				label: 'traefikRouterMiddlewares',
				text: '"traefik.http.routers.${1:myrouter}.middlewares=${2:value}"${0}'
			})
		);

		allItems.push(
			makeSnippet({
				label: 'traefikRouterTLSCertresolver',
				text:
					'"traefik.http.routers.${1:myrouter}.tls.certresolver=${2:value}"${0}'
			})
		);

		return [...allItems];
	}
});

const servicesSnippets = vscode.languages.registerCompletionItemProvider(
	'yaml',
	{
		provideCompletionItems() {
			let allItems = [];

			allItems.push(
				makeSnippet({
					label: 'traefikServicesServerPort',
					text:
						'"traefik.http.services.${1:myservice}.loadbalancer.server.port=${2:value}"${0}'
				})
			);

			return [...allItems];
		}
	}
);

const middlewareSnippets = vscode.languages.registerCompletionItemProvider(
	'yaml',
	{
		provideCompletionItems() {
			let allItems = [];

			allItems.push(
				makeSnippet({
					label: 'traefikRedirectToHTTPS',
					text:
						'"traefik.http.middlewares.${1:https_redirect}.redirectscheme.scheme=https"\n- "traefik.http.middlewares.${1:https_redirect}.redirectscheme.permanent=true"\n- "traefik.http.routers.${2:http_catchall}.rule=HostRegexp(`{any:.+}`)"\n- "traefik.http.routers.${2:http_catchall}.entrypoints=http"\n- "traefik.http.routers.${2:http_catchall}.middlewares=${:https_redirect}"'
				})
			);

			allItems.push(makeSnippet({
				label: 'traefikBasicAuth',
				text: '"traefik.http.routers.${1:myrouter}.middlewares=${2:mybasicauth}"\n- "traefik.http.middlewares.${2:mybasicauth}.basicauth.users=${3:value}"'
			}))

			allItems.push(makeSnippet({
				label: 'traefikRouterAddMiddleware',
				text: '"traefik.http.routers.${1:myrouter}.middlewares=${2:mymiddlewares}"'
			}))

			return [...allItems];
		}
	}
);

export default [snippetGeneric, routerSnippets, servicesSnippets, middlewareSnippets];
