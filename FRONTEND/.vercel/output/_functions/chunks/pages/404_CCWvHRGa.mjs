import 'html-escaper';
import 'cssesc';
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderSlot, h as renderHead } from '../astro_Bh3F3pDg.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
/* empty css                        */

const $$Astro$3 = createAstro();
const $$NavigationBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavigationBar;
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-xkrhstpm> <h1 data-astro-cid-xkrhstpm>Sonho Real 👑</h1> <nav class="nav" data-astro-cid-xkrhstpm> <ul class="pages" data-astro-cid-xkrhstpm> <li data-astro-cid-xkrhstpm> <a href="/" title="Ir para home" data-astro-cid-xkrhstpm>🏠 Home</a> </li> <li data-astro-cid-xkrhstpm> <a href="/about" title="Ir para a página sobre" data-astro-cid-xkrhstpm>📗 Sobre</a> </li> </ul> <ul class="menu" data-astro-cid-xkrhstpm> <li data-astro-cid-xkrhstpm> <a onclick="controle.open()" title="Abir carrinho" data-astro-cid-xkrhstpm>🛒 Carrinho</a> </li> </ul> </nav> </header> `;
}, "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/components/NavigationBar.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="pt-br"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="stylesheet" href="/global.css"><script src="/cookies.js"><\/script><script src="/index.js"><\/script><title>', "</title>", "", "</head> <body> ", " ", ` <!-- 		
			<span class="aviso">
			<p>
				Esse site \xE9 apenas uma demonstra\xE7\xE3o de loja, consulte o
				<a href="https://github.com/LucasATS/SonhoRealStore"
					>github do projeto</a
				>
			</p>
			<button
				onclick="document.querySelector('.aviso').style.display = 'none';"
				>\u274C</button
			>
		</span>

		<span class="aviso-cookies col">
			<p>Utilizamos cookies de terceiros para melhorar a experi\xEAncia</p>
			<button
				onclick="document.querySelector('.aviso-cookies').style.display = 'none';"
				>Ok</button
			>
		</span> 
	 --> </body></html>`])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Cart", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/components/Cart/index.jsx", "client:component-export": "Cart" }));
}, "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sonho Real \u{1F451} Store", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavigationBar", $$NavigationBar, { "data-astro-cid-zetdm5md": true })} ${maybeRenderHead()}<span class="not_found" data-astro-cid-zetdm5md> <span data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404</h1> <hr data-astro-cid-zetdm5md> <h2 data-astro-cid-zetdm5md>Página não encontrado</h2> </span> <span data-astro-cid-zetdm5md> <button class="goHome" onclick="window.location.href = '/'" data-astro-cid-zetdm5md>Voltar para loja</button> </span> </span> ` })} `;
}, "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/pages/404.astro", void 0);

const $$file = "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _, $$NavigationBar as a };
