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

// constatnts for static config
export const staticConfig = {
	providers: {
		docker: {
			endpoint: null,
			useBindPortIP: null,
			exposedByDefault: null,
			network: null,
			defaultRole: null,
			swarmMode: null,
			swarmModeRefreshSeconds: null,
			watch: null,
			constraints: null,
			tls: {
				ca: null,
				caOptional: null,
				cert: null,
				key: null,
				insecureSkipVerify: null
			}
		},
		kubernetescrd: {
			endpoint: null,
			token: null,
			certauthfilepath: null,
			namespaces: null,
			labelselector: null,
			ingressclass: null,
			throttleDuration: null
		},
		kubernetesingress: {
			endpoint: null,
			token: null,
			certauthfilepath: null,
			disablepasshostheaders: null,
			namespaces: null,
			labelselector: null,
			ingressclass: null,
			ingressendpoint: {
				hostname: null,
				ip: null,
				publishedservice: null
			},
			throttleDuration: null
		},
		consulcatalog: {
			refreshInternal: null,
			prefix: null,
			requireConsistent: null,
			stale: null,
			cache: null,
			endpoint: {
				address: null,
				scheme: null,
				datacenter: null,
				token: null,
				endpointwaittime: null,
				httpauth: {
					username: null,
					password: null
				},
				tls: {
					ca: null,
					caoptional: null,
					cert: null,
					key: null,
					insecureSkipVerify: null
				}
			},
			exposedByDefault: null,
			defaultRule: null,
			constraints: null
		},
		marathon: {
			basic: {
				httpbasicauthuser: null,
				httpbasicpassword: null
			},
			dcosToken: null,
			defaultRule: null,
			dialerTimeout: null,
			endpoint: null,
			exposedByDefault: null,
			constraints: null,
			forceTaskHostname: null,
			keepAlive: null,
			respectReadinessChecks: null,
			responseHeaderTimeout: null,
			tls: {
				ca: null,
				cert: null,
				caoptional: null,
				key: null,
				insecureSkipVerify: null
			},
			trace: null,
			watch: null
		},
		rancher: {
			exposedByDefault: null,
			defaultRule: null,
			enableServiceHealthFilter: null,
			refreshSeconds: null,
			intervalPoll: null,
			prefix: null,
			constraints: null
		},
		file: {
			filename: null,
			directory: null,
			watch: null
		},
		rest: {
			insecure: null
		},
		etcd: {
			endpoints: null,
			rootKey: null,
			username: null,
			password: null,
			tls: {
				ca: null,
				cert: null,
				caoptional: null,
				key: null,
				insecureSkipVerify: null
			},
		},
		consul: {
			endpoints: null,
			rootKey: null,
			username: null,
			password: null,
			tls: {
				ca: null,
				cert: null,
				caoptional: null,
				key: null,
				insecureSkipVerify: null
			},
		},
		zookeeper: {
			endpoints: null,
			rootKey: null,
			username: null,
			password: null,
			tls: {
				ca: null,
				cert: null,
				caoptional: null,
				key: null,
				insecureSkipVerify: null
			},
		},
		redis: {
			endpoints: null,
			rootKey: null,
			username: null,
			password: null,
			tls: {
				ca: null,
				cert: null,
				caoptional: null,
				key: null,
				insecureSkipVerify: null
			},
		},
	},
	api: {
		insecure: null,
		dashboard: null,
		debug: null
	},
	entryPoints: {
		address: null,
		'http.redirections.entryPoint': {
			to: null,
			scheme: null,
			permanent: null,
			priority: null,
		},
		transport: {
			lifeCycle: {
				requestAcceptGraceTimeout: null,
				graceTimeOut: null
			},
			respondingTimeouts: {
				readTimeout: null,
				writeTimeout: null,
				idleTimeout: null
			}
		},
		proxyProtocol: {
			insecure: null,
			trustedIPs: null
		},
		forwardedHeaders: {
			insecure: null,
			trustedIPs: null
		}
	},
	accesslog: {
		bufferingsize: null,
		fields: {
			defaultmode: null,
			headers: {
				defaultmode: null,
				names: null
			},
			names: null
		},
		filepath: null,
		filters: {
			minduration: null,
			retryattempts: null,
			statuscodes: null
		},
		format: null
	},
	certificatesresolvers: {
		acme: {
			caserver: null,
			dnschallenge: {
				delaybeforecheck: null,
				disablepropagationcheck: null,
				provider: null,
				resolvers: null
			},
			email: null,
			httpchallenge: { entrypoint: null },
			keytype: null,
			storage: null,
			tlschallenge: null
		}
	},
	global: {
		checknewversion: null,
		sendanonymoususage: null
	},
	hostresolver: {
		cnameflattening: null,
		resolvconfig: null,
		resolvdepth: null
	},
	log: {
		filepath: null,
		format: null,
		level: null
	},
	ping: {
		entrypoint: null,
		manualrouting: null
	},
	metrics: {
		datadog: {
			addentrypointslabels: null,
			address: null,
			addserviceslabels: null,
			pushinterval: null
		},
		influxdb: {
			addentrypointslabels: null,
			address: null,
			addserviceslabels: null,
			database: null,
			password: null,
			protocol: null,
			pushinterval: null,
			retentionpolicy: null,
			username: null
		},
		prometheus: {
			addentrypointslabels: null,
			addserviceslabels: null,
			buckets: null,
			entrypoint: null,
			manualrouting: null
		},
		statsd: {
			addentrypointslabels: null,
			address: null,
			addserviceslabels: null,
			prefix: null,
			pushinterval: null
		}
	},
	serverstransport: {
		forwardingtimeouts: {
			dialtimeout: null,
			idleconntimeout: null,
			responseheadertimeout: null
		},
		insecureskipverify: null,
		maxidleconnsperhost: null,
		rootcas: null
	},
	tracing: {
		spannamelimit: null,
		servicename: null,
		datadog: {
			bagageprefixheadername: null,
			debug: null,
			globaltag: null,
			localagenthostport: null,
			parentidheadername: null,
			prioritysampling: null,
			samplingpriorityheadername: null,
			traceidheadername: null
		},
		haystack: {
			baggageprefixheadername: null,
			globaltag: null,
			localagenthost: null,
			localagentport: null,
			parentidheadername: null,
			spanidheadername: null,
			traceidheadername: null
		},
		instana: {
			localagenthost: null,
			localagentport: null,
			loglevel: null
		},
		jaeger: {
			collector: {
				endpoint: null,
				password: null,
				user: null
			},
			gen128bit: null,
			localagenthostport: null,
			propagation: null,
			samplingparam: null,
			samplingserverurl: null,
			samplingtype: null,
			tracecontextheadername: null
		},
		zipkin: {
			httpendpoint: null,
			id128bit: null,
			samespan: null,
			samplerate: null
		}
	}
};

export const ruleOptions = [
	'Host(``)',
	'HostRegexp(``)',
	'Headers(``)',
	'HeadersRegexp(``)',
	'Method(``)',
	'Path(``)',
	'PathPrefix(``)',
	'Qeury(``)'
];
