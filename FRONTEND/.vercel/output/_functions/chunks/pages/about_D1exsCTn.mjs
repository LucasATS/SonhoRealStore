import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_Bh3F3pDg.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { a as $$NavigationBar, $ as $$Layout } from './404_CCWvHRGa.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sonho Real \u{1F451} Store", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavigationBar", $$NavigationBar, { "data-astro-cid-kh7btl4r": true })} ${maybeRenderHead()}<p data-astro-cid-kh7btl4r>Sobre...</p> ` })} `;
}, "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/pages/about.astro", void 0);

const $$file = "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
