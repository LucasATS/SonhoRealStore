import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, i as renderTransition } from '../astro_Bh3F3pDg.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$ListProductsCard } from './_id__CYtRMf-u.mjs';
import { $ as $$Layout, a as $$NavigationBar } from './404_CCWvHRGa.mjs';
/* empty css                         */
import 'cssesc';

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sonho Real \u{1F451} Store", "data-astro-transition-scope": renderTransition($$result, "rpl33o7b", "none", "") }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavigationBar", $$NavigationBar, {})} ${renderComponent($$result2, "ListaProdutos", $$ListProductsCard, { "category": "" })} ` })} `;
}, "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/pages/index.astro", "self");

const $$file$1 = "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return Astro2.redirect("/");
}, "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/pages/product/index.astro", void 0);

const $$file = "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/pages/product/index.astro";
const $$url = "/product";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
