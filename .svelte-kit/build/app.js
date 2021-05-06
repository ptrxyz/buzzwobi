import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t" + head + "\n</head>\n\n<body>\n\t<div id=\"svelte\">" + body + "</div>\n</body>\n\n</html>";

let options = null;

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/buzzwobi/_app/start-df53cb28.js",
			css: ["/buzzwobi/_app/assets/start-a8cd1609.css"],
			js: ["/buzzwobi/_app/start-df53cb28.js","/buzzwobi/_app/chunks/vendor-0688f630.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/buzzwobi/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: error => {
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		read: settings.read,
		root,
		router: true,
		ssr: true,
		target: "#svelte",
		template
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [],
	layout: "src/routes/$layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/$layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, render }) => render(request))
});

const module_lookup = {
	"src/routes/$layout.svelte": () => import("../../src/routes/$layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte")
};

const metadata_lookup = {"src/routes/$layout.svelte":{"entry":"/buzzwobi/_app/pages/$layout.svelte-8cafdfa6.js","css":["/buzzwobi/_app/assets/pages/$layout.svelte-561d59c9.css"],"js":["/buzzwobi/_app/pages/$layout.svelte-8cafdfa6.js","/buzzwobi/_app/chunks/vendor-0688f630.js"],"styles":null},".svelte-kit/build/components/error.svelte":{"entry":"/buzzwobi/_app/error.svelte-4d37f4d7.js","css":[],"js":["/buzzwobi/_app/error.svelte-4d37f4d7.js","/buzzwobi/_app/chunks/vendor-0688f630.js"],"styles":null},"src/routes/index.svelte":{"entry":"/buzzwobi/_app/pages/index.svelte-326b7de8.js","css":["/buzzwobi/_app/assets/pages/index.svelte-741dc9e5.css"],"js":["/buzzwobi/_app/pages/index.svelte-326b7de8.js","/buzzwobi/_app/chunks/vendor-0688f630.js"],"styles":null}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

init({ paths: {"base":"/buzzwobi","assets":"/buzzwobi"} });

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}