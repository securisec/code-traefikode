export const dockerKeys = {
	http: {
		routers: {
			rule: null,
			entrypoints: null,
			middlewares: null,
			service: null,
			tls: {
				certresolver: null,
				'domains[n]': { main: null, sans: null },
				options: null
			},
			priority: null
		},
		services: {
			loadbalancer: {
				server: { port: null, scheme: null },
				passhostheader: null,
				healthcheck: {
					headers: null,
					hostname: null,
					interval: null,
					path: null,
					port: null,
					scheme: null,
					timeout: null
				},
				sticky: {
					cookie: {
						httponly: null,
						secure: null,
						name: null
					}
				},
				responseforwarding: { flushinterval: null }
			}
		},
		middlewares: {
			addprefix: { prefix: null },
			basicauth: {
				users: null,
				usersfile: null,
				realm: null,
				headerField: null,
				removeheader: null
			},
			buffering: {
				maxRequestBodyBytes: null,
				memRequestBodyBytes: null,
				maxResponseBodyBytes: null,
				memResponseBodyBytes: null,
				retryExpression: null
			},
			chain: { middlewares: null },
			circuitbreaker: { expression: null },
			compress: { excludedcontenttypes: null },
			digestauth: {
				users: null,
				usersfile: null,
				realm: null,
				headerField: null,
				removeheader: null
			},
			errors: { status: null, service: null, query: null },
			forwardauth: {
				address: null,
				trustForwardHeader: null,
				authResponseHeaders: null,
				tls: {
					ca: null,
					caOptional: null,
					cert: null,
					key: null,
					insecureSkipVerify: null
				}
			},
			headers: {
				customRequestHeaders: null,
				customResponseHeaders: null,
				accessControlAllowCredentials: null,
				accessControlAllowHeaders: null,
				accessControlAllowMethods: null,
				accessControlAllowOrigin: null,
				accessControlExposeHeaders: null,
				accessControlMaxAge: null,
				addVaryHeader: null,
				allowedHosts: null,
				hostsProxyHeaders: null,
				sslRedirect: null,
				sslTemporaryRedirect: null,
				sslHost: null,
				sslProxyHeaders: null,
				sslForceHost: null,
				stsSeconds: null,
				stsIncludeSubdomains: null,
				stsPreload: null,
				forceSTSHeader: null,
				frameDeny: null,
				customFrameOptionsValue: null,
				contentTypeNosniff: null,
				browserXssFilter: null,
				customBrowserXSSValue: null,
				contentSecurityPolicy: null,
				publicKey: null,
				referrerPolicy: null,
				featurePolicy: null,
				isDevelopment: null
			},
			ipwhitelist: {
				sourcerange: null,
				ipstrategy: {
					depth: null,
					excludedips: null
				}
			},
			inflightreq: {
				amount: null,
				sourceCriterion: {
					ipStrategy: { depth: null, excludedIPs: null },
					requestHeaderName: null,
					requestHost: null
				}
			},
			passtlsclientcert: {
				pem: null,
				info: {
					notAfter: null,
					notBefore: null,
					sans: null,
					subject: {
						country: null,
						province: null,
						locality: null,
						organization: null,
						commonName: null,
						serialNumber: null,
						domainComponent: null
					},
					issuer: {
						country: null,
						province: null,
						locality: null,
						organization: null,
						commonName: null,
						serialNumber: null,
						domainComponent: null
					}
				}
			},
			ratelimit: {
				average: null,
				burst: null,
				sourceCriterion: {
					ipStrategy: {
						depth: null,
						excludedIPs: null
					},
					requestHost: null,
					requestHeaderName: null
				}
			},
			redirectscheme: {
				permanent: null,
				scheme: null,
				port: null
			},
			redirectregex: {
				regex: null,
				permanent: null,
				replacement: null
			},
			replacepath: { path: null },
			replacepathregex: {
				regex: null,
				replacement: null
			},
			retry: { attempts: null },
			stripprefix: {
				prefixes: null,
				forceslash: null
			},
			stripprefixregex: { regex: null }
		}
	},
	tcp: {
		routers: {
			entrypoints: null,
			rule: null,
			service: null,
			tls: {
				certresolver: null,
				'domains[n]': {
					main: null,
					sans: null
				},
				options: null,
				passthrough: null
			}
		},
		services: {
			server: { port: null },
			terminationdelay: null
		}
	},
	enable: null,
	docker: { lbswarm: null, network: null }
};

export const ruleOptions = [
	'Host(``)',
	'HostRegexp(`${1:here}`)',
	'Headers(``)',
	'HeadersRegexp(``)',
	'Method(``)',
	'Path(``)',
	'PathPrefix(``)',
	'Qeury(``)'
];
