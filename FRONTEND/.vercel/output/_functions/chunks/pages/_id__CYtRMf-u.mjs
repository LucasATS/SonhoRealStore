import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, i as renderTransition } from '../astro_Bh3F3pDg.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                          */
import { $ as $$Layout, a as $$NavigationBar } from './404_CCWvHRGa.mjs';
/* empty css                         */
/* empty css                         */

const getProduto = async (id = "") => {
  try {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await resp.json();
  } catch (error) {
    return null;
  }
};

const $$Astro$3 = createAstro();
const $$ProductCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { image, title, price, product_id, count } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute("/product/" + product_id, "href")} title="Acessar" class="product-card" data-astro-cid-tjdfhdqb> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} data-astro-cid-tjdfhdqb> <div class="details" data-astro-cid-tjdfhdqb> <h1 class="title" data-astro-cid-tjdfhdqb>${title}</h1> </div> <div class="details2" data-astro-cid-tjdfhdqb> <p class="price" data-astro-cid-tjdfhdqb>R$ ${price.toFixed(2)}</p> <p data-astro-cid-tjdfhdqb>${count} vendidos</p> </div> </a> `;
}, "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/components/ProductCard.astro", void 0);

const $$Astro$2 = createAstro();
const $$ListProductsCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ListProductsCard;
  const { category = "", remove_id = null } = Astro2.props;
  const TAG = `category/${category}`;
  let data = await getProduto(category === "" ? "" : TAG);
  let dataFiltro = [];
  if (remove_id === null) {
    dataFiltro = data;
  } else {
    data.map((item) => {
      if (item?.id !== remove_id)
        dataFiltro.push(item);
    });
  }
  return renderTemplate`${maybeRenderHead()}<span class="store" data-astro-cid-av2fbwfx> ${dataFiltro.map((item) => renderTemplate`${renderComponent($$result, "ProductCard", $$ProductCard, { "count": item?.rating?.count, "product_id": item?.id, "image": item?.image, "title": item?.title, "price": item?.price, "data-astro-cid-av2fbwfx": true })}`)} </span> `;
}, "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/components/ListProductsCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Product = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Product;
  const { produtoInfo } = Astro2.props;
  const jsonProdutoInfo = JSON.stringify(
    {
      id: produtoInfo?.id,
      amount: 1,
      price: produtoInfo?.price,
      title: produtoInfo?.title,
      image: produtoInfo?.image
    },
    null
  );
  return renderTemplate(_a || (_a = __template(["", ' <script src="/cookies.js"><\/script>  '])), renderComponent($$result, "span-produto", "span-produto", { "class": "container", "data-product": jsonProdutoInfo, "data-astro-cid-dh62ia34": true, "data-astro-transition-scope": renderTransition($$result, "66fr64nd", "fade", "") }, { "default": () => renderTemplate` ${maybeRenderHead()}<span class="product-container row" data-astro-cid-dh62ia34> <div class="image" data-astro-cid-dh62ia34> <img${addAttribute(produtoInfo?.image, "src")}${addAttribute(produtoInfo?.title, "alt")} data-astro-cid-dh62ia34> </div> <div class="col" data-astro-cid-dh62ia34> <span class="row gap-12" data-astro-cid-dh62ia34> <h1 class="title" data-astro-cid-dh62ia34>${produtoInfo?.title}</h1> <p class="label" data-astro-cid-dh62ia34>${produtoInfo?.category}</p> </span> <div class="details" data-astro-cid-dh62ia34> <p class="price" data-astro-cid-dh62ia34>R$ ${produtoInfo?.price.toFixed(2)}</p> <span class="row gap-12" data-astro-cid-dh62ia34> <p class="label" data-astro-cid-dh62ia34>${produtoInfo?.rating?.rate}⭐</p> <p class="label" data-astro-cid-dh62ia34>${produtoInfo?.rating?.count} vendas</p> </span> </div> <span class="row" style="justify-content: right;" data-astro-cid-dh62ia34> <button id="addCart" class="addCart" onclick="controle.open()" data-astro-cid-dh62ia34>Adicionar ao Carrinho</button> </span> <p class="description" data-astro-cid-dh62ia34>${produtoInfo?.description}</p> </div> </span> ` }));
}, "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/components/Product.astro", "self");

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let produtoInfo;
  produtoInfo = await getProduto(id);
  if (!produtoInfo)
    return Astro2.redirect("/404");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sonho Real - " + produtoInfo?.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavigationBar", $$NavigationBar, {})} ${renderComponent($$result2, "Product", $$Product, { "client:idle": true, "produtoInfo": produtoInfo, "client:component-hydration": "idle", "client:component-path": "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/components/Product.astro", "client:component-export": "default" })} ${renderComponent($$result2, "ListaProdutos", $$ListProductsCard, { "category": produtoInfo?.category, "remove_id": produtoInfo?.id })} ` })} `;
}, "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/pages/product/[id].astro", void 0);

const $$file = "C:/Users/lucas/Documents/GitHub/SonhoRealStore/FRONTEND/src/pages/product/[id].astro";
const $$url = "/product/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ListProductsCard as $, _id_ as _ };
