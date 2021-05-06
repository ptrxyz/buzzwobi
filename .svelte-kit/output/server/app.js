import {respond} from "@sveltejs/kit/ssr";
import {create_ssr_component, validate_component, missing_component, escape, each} from "svelte/internal";
import {setContext, afterUpdate, onMount, createEventDispatcher} from "svelte";
import "svelte/transition";
var root_svelte_svelte_type_style_lang = "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}";
const css$3 = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {stores} = $$props;
  let {page} = $$props;
  let {components} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  let {props_2 = null} = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$3);
  {
    stores.page.set(page);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1j55zn5"}">${navigated ? `${escape(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
const template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n	<meta charset="utf-8" />\n	<meta name="viewport" content="width=device-width, initial-scale=1" />\n	' + head + '\n</head>\n\n<body>\n	<div id="svelte">' + body + "</div>\n</body>\n\n</html>";
let options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/buzzwobi/_app/start-df53cb28.js",
      css: ["/buzzwobi/_app/assets/start-a8cd1609.css"],
      js: ["/buzzwobi/_app/start-df53cb28.js", "/buzzwobi/_app/chunks/vendor-0688f630.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => "/buzzwobi/_app/" + entry_lookup[id],
    get_stack: (error2) => String(error2),
    handle_error: (error2) => {
      console.error(error2.stack);
      error2.stack = options.get_stack(error2);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template
  };
}
const empty = () => ({});
const manifest = {
  assets: [],
  layout: "src/routes/$layout.svelte",
  error: ".svelte-kit/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/$layout.svelte", "src/routes/index.svelte"],
      b: [".svelte-kit/build/components/error.svelte"]
    }
  ]
};
const get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({request, render: render2}) => render2(request))
});
const module_lookup = {
  "src/routes/$layout.svelte": () => Promise.resolve().then(function() {
    return $layout$1;
  }),
  ".svelte-kit/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index;
  })
};
const metadata_lookup = {"src/routes/$layout.svelte": {entry: "/buzzwobi/_app/pages/$layout.svelte-8cafdfa6.js", css: ["/buzzwobi/_app/assets/pages/$layout.svelte-561d59c9.css"], js: ["/buzzwobi/_app/pages/$layout.svelte-8cafdfa6.js", "/buzzwobi/_app/chunks/vendor-0688f630.js"], styles: null}, ".svelte-kit/build/components/error.svelte": {entry: "/buzzwobi/_app/error.svelte-4d37f4d7.js", css: [], js: ["/buzzwobi/_app/error.svelte-4d37f4d7.js", "/buzzwobi/_app/chunks/vendor-0688f630.js"], styles: null}, "src/routes/index.svelte": {entry: "/buzzwobi/_app/pages/index.svelte-326b7de8.js", css: ["/buzzwobi/_app/assets/pages/index.svelte-741dc9e5.css"], js: ["/buzzwobi/_app/pages/index.svelte-326b7de8.js", "/buzzwobi/_app/chunks/vendor-0688f630.js"], styles: null}};
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({paths: {base: "/buzzwobi", assets: "/buzzwobi"}});
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({...request, host}, options, {prerender});
}
var style = "*,\n*::before,\n*::after {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh;\n}\n\nbody {\n  --cl-accent: #1ca07eff;\n  --cl-light-accent: #9bdb4dff;\n}";
var $layout_svelte_svelte_type_style_lang = 'pageview.svelte-1cek6d0{background-color:#f1f1f1;display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;overflow:hidden;position:relative;font-family:"Binance Plex", sans-serif}';
const css$2 = {
  code: 'pageview.svelte-1cek6d0{background-color:#f1f1f1;display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;overflow:hidden;position:relative;font-family:"Binance Plex", sans-serif}',
  map: `{"version":3,"file":"$layout.svelte","sources":["$layout.svelte"],"sourcesContent":["<script>\\n    import '$lib/style.scss'\\n</script>\\n\\n<pageview>\\n    <slot />\\n</pageview>\\n\\n<style lang=\\"scss\\">pageview {\\n  background-color: #f1f1f1;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 100vw;\\n  height: 100vh;\\n  overflow: hidden;\\n  position: relative;\\n  font-family: \\"Binance Plex\\", sans-serif;\\n}</style>\\n"],"names":[],"mappings":"AAQmB,QAAQ,eAAC,CAAC,AAC3B,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,MAAM,CAChB,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,cAAc,CAAC,CAAC,UAAU,AACzC,CAAC"}`
};
const $layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<pageview class="${"svelte-1cek6d0"}">${slots.default ? slots.default({}) : ``}
</pageview>`;
});
var $layout$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: $layout
});
function load({error: error2, status}) {
  return {props: {error: error2, status}};
}
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status} = $$props;
  let {error: error2} = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  return `<h1>${escape(status)}</h1>

<p>${escape(error2.message)}</p>


${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
});
var error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Error,
  load
});
var Cell_svelte_svelte_type_style_lang = ":root{--cl-white:white;--cl-blue:#4355fa}cell.svelte-7omw0l{flex-basis:calc(25% - 30px / 4);font-family:sans-serif;color:var(--cl-blue);background-color:var(--cl-white);display:flex;align-items:center;justify-content:center;width:150px;height:150px;border:3px solid var(--cl-blue);cursor:pointer;user-select:none;border-radius:10px}cell.done.svelte-7omw0l{--cl-white:#4355fa;--cl-blue:white}";
const css$1 = {
  code: ":root{--cl-white:white;--cl-blue:#4355fa}cell.svelte-7omw0l{flex-basis:calc(25% - 30px / 4);font-family:sans-serif;color:var(--cl-blue);background-color:var(--cl-white);display:flex;align-items:center;justify-content:center;width:150px;height:150px;border:3px solid var(--cl-blue);cursor:pointer;user-select:none;border-radius:10px}cell.done.svelte-7omw0l{--cl-white:#4355fa;--cl-blue:white}",
  map: `{"version":3,"file":"Cell.svelte","sources":["Cell.svelte"],"sourcesContent":["<script>\\n    import { createEventDispatcher } from 'svelte'\\n    const dispatch = createEventDispatcher()\\n\\n    export let done = false\\n\\n    function click(event) {\\n        done = !done\\n        dispatch('click', event.detail)\\n    }\\n</script>\\n\\n<cell class:done on:click={click}><slot /></cell>\\n\\n<style lang=\\"scss\\">:root {\\n  --cl-white: white;\\n  --cl-blue: #4355fa;\\n}\\n\\ncell {\\n  flex-basis: calc(25% - 30px / 4);\\n  font-family: sans-serif;\\n  color: var(--cl-blue);\\n  background-color: var(--cl-white);\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 150px;\\n  height: 150px;\\n  border: 3px solid var(--cl-blue);\\n  cursor: pointer;\\n  user-select: none;\\n  border-radius: 10px;\\n}\\ncell.done {\\n  --cl-white: #4355fa;\\n  --cl-blue: white;\\n}</style>\\n"],"names":[],"mappings":"AAcmB,KAAK,AAAC,CAAC,AACxB,UAAU,CAAE,KAAK,CACjB,SAAS,CAAE,OAAO,AACpB,CAAC,AAED,IAAI,cAAC,CAAC,AACJ,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CAChC,WAAW,CAAE,UAAU,CACvB,KAAK,CAAE,IAAI,SAAS,CAAC,CACrB,gBAAgB,CAAE,IAAI,UAAU,CAAC,CACjC,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,SAAS,CAAC,CAChC,MAAM,CAAE,OAAO,CACf,WAAW,CAAE,IAAI,CACjB,aAAa,CAAE,IAAI,AACrB,CAAC,AACD,IAAI,KAAK,cAAC,CAAC,AACT,UAAU,CAAE,OAAO,CACnB,SAAS,CAAE,KAAK,AAClB,CAAC"}`
};
const Cell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let {done = false} = $$props;
  if ($$props.done === void 0 && $$bindings.done && done !== void 0)
    $$bindings.done(done);
  $$result.css.add(css$1);
  return `<cell class="${["svelte-7omw0l", done ? "done" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</cell>`;
});
var index_svelte_svelte_type_style_lang = ".win.svelte-xcqsn5.svelte-xcqsn5{position:absolute;background-color:white;border-radius:10px;padding:20px;border:3px solid orange;box-shadow:0px 0px 40px 0px rgba(0, 0, 0, 0.3)}.win.svelte-xcqsn5 h1.svelte-xcqsn5{margin-bottom:20px}cellgrid.svelte-xcqsn5.svelte-xcqsn5{display:flex;width:calc(150px * 4 + 30px);height:calc(150px * 4 + 30px);flex-wrap:wrap;gap:10px;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.2);padding:10px;box-sizing:content-box}cellgrid.won.svelte-xcqsn5.svelte-xcqsn5{background-color:#a1a9f5;transition:all 300ms ease-in-out}";
const css = {
  code: ".win.svelte-xcqsn5.svelte-xcqsn5{position:absolute;background-color:white;border-radius:10px;padding:20px;border:3px solid orange;box-shadow:0px 0px 40px 0px rgba(0, 0, 0, 0.3)}.win.svelte-xcqsn5 h1.svelte-xcqsn5{margin-bottom:20px}cellgrid.svelte-xcqsn5.svelte-xcqsn5{display:flex;width:calc(150px * 4 + 30px);height:calc(150px * 4 + 30px);flex-wrap:wrap;gap:10px;box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.2);padding:10px;box-sizing:content-box}cellgrid.won.svelte-xcqsn5.svelte-xcqsn5{background-color:#a1a9f5;transition:all 300ms ease-in-out}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\n    import Cell from '$lib/Cell.svelte'\\n    import { fade } from 'svelte/transition'\\n\\n    Array.prototype.sample = function () {\\n        return this[Math.floor(Math.random() * this.length)]\\n    }\\n\\n    let won = false\\n    let wonby = 0\\n\\n    let wordlist = [\\n        'Ruby',\\n        'Rails',\\n        'Node',\\n        'NPM',\\n        'Bundler',\\n        'Rake',\\n        'Inkscape',\\n        '3rd Party',\\n        'ImageMagick',\\n        'Complexity',\\n        'Responsibility',\\n        'Docker',\\n        'Performance',\\n        'Isolation',\\n        'Processes',\\n        'Simplify',\\n        'Container',\\n        'Services',\\n        'Images',\\n        'DockerHub',\\n        'Docusaurus',\\n        'Chemotion',\\n        'Glue Code',\\n        'Command-Line',\\n        'Scale',\\n        'Improvement',\\n        'Upgrade',\\n        'Significant',\\n        'Kubernetes',\\n        'Scripts',\\n        'Deployment',\\n        'GitHub',\\n        'Production-Ready',\\n        'Setup',\\n        'Slack',\\n        'Environment',\\n        'ELN',\\n    ]\\n\\n    let cells = [...Array(16)].map((x, i) => {\\n        return { id: i, state: false, word: wordlist.sample() }\\n    })\\n\\n    function toggle(cell, e) {\\n        console.log(cell)\\n        cell = { ...cell, state: !cell.state }\\n        cells[cell.id] = cell\\n\\n        function checkWin(arr) {\\n            return arr.every((elem_id) => {\\n                return cells[elem_id].state == true\\n            })\\n        }\\n\\n        let tocheck = []\\n\\n        tocheck.push(\\n            [0, 1, 2, 3],\\n            [4, 5, 6, 7],\\n            [8, 9, 10, 11],\\n            [12, 13, 14, 15]\\n        )\\n        tocheck.push(\\n            [0, 4, 8, 12],\\n            [1, 5, 9, 13],\\n            [2, 6, 10, 14],\\n            [3, 7, 11, 15]\\n        )\\n\\n        tocheck.push([0, 5, 10, 15], [3, 6, 9, 12])\\n\\n        wonby = 0\\n        for (let i = 0; i < tocheck.length; i++) {\\n            let woncon = tocheck[i]\\n            if (checkWin(woncon)) {\\n                wonby += 1\\n            }\\n        }\\n        won = wonby > 0\\n    }\\n</script>\\n\\n{#if won}\\n    <div class=\\"win\\" transition:fade>\\n        <h1>Congratulations!</h1>\\n        You won! Please inform the speaker, he is using too many buzzwords... :)\\n        {#if wonby > 4}\\n            <p style=\\"color: orange\\">Oh my god... so many winnings...!</p>\\n        {/if}\\n    </div>\\n{/if}\\n<cellgrid class:won>\\n    {#each cells as cell (cell.id)}\\n        <Cell done={cell.state} on:click={(e) => toggle(cell, e)}\\n            >{cell.word}</Cell\\n        >\\n    {/each}\\n</cellgrid>\\n\\n<style lang=\\"scss\\">.win {\\n  position: absolute;\\n  background-color: white;\\n  border-radius: 10px;\\n  padding: 20px;\\n  border: 3px solid orange;\\n  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.3);\\n}\\n.win h1 {\\n  margin-bottom: 20px;\\n}\\n\\ncellgrid {\\n  display: flex;\\n  width: calc(150px * 4 + 30px);\\n  height: calc(150px * 4 + 30px);\\n  flex-wrap: wrap;\\n  gap: 10px;\\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\\n  padding: 10px;\\n  box-sizing: content-box;\\n}\\n\\ncellgrid.won {\\n  background-color: #a1a9f5;\\n  transition: all 300ms ease-in-out;\\n}</style>\\n"],"names":[],"mappings":"AA+GmB,IAAI,4BAAC,CAAC,AACvB,QAAQ,CAAE,QAAQ,CAClB,gBAAgB,CAAE,KAAK,CACvB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,MAAM,CACxB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,AACjD,CAAC,AACD,kBAAI,CAAC,EAAE,cAAC,CAAC,AACP,aAAa,CAAE,IAAI,AACrB,CAAC,AAED,QAAQ,4BAAC,CAAC,AACR,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC7B,MAAM,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9B,SAAS,CAAE,IAAI,CACf,GAAG,CAAE,IAAI,CACT,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC/C,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,WAAW,AACzB,CAAC,AAED,QAAQ,IAAI,4BAAC,CAAC,AACZ,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,AACnC,CAAC"}`
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Array.prototype.sample = function() {
    return this[Math.floor(Math.random() * this.length)];
  };
  let wordlist = [
    "Ruby",
    "Rails",
    "Node",
    "NPM",
    "Bundler",
    "Rake",
    "Inkscape",
    "3rd Party",
    "ImageMagick",
    "Complexity",
    "Responsibility",
    "Docker",
    "Performance",
    "Isolation",
    "Processes",
    "Simplify",
    "Container",
    "Services",
    "Images",
    "DockerHub",
    "Docusaurus",
    "Chemotion",
    "Glue Code",
    "Command-Line",
    "Scale",
    "Improvement",
    "Upgrade",
    "Significant",
    "Kubernetes",
    "Scripts",
    "Deployment",
    "GitHub",
    "Production-Ready",
    "Setup",
    "Slack",
    "Environment",
    "ELN"
  ];
  let cells = [...Array(16)].map((x, i) => {
    return {
      id: i,
      state: false,
      word: wordlist.sample()
    };
  });
  $$result.css.add(css);
  return `${``}
<cellgrid class="${["svelte-xcqsn5", ""].join(" ").trim()}">${each(cells, (cell) => `${validate_component(Cell, "Cell").$$render($$result, {done: cell.state}, {}, {default: () => `${escape(cell.word)}`})}`)}
</cellgrid>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Routes
});
export {init, render};
