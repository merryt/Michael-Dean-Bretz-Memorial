var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_8c4d2a66 = require("../../chunks/index-8c4d2a66.js");
var import_supabase_js = require("@supabase/supabase-js");
const Tile = (0, import_index_8c4d2a66.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div${(0, import_index_8c4d2a66.a)("class", `py-4 bg-base-100 p-5 rounded-md ${$$props.class}`, 0)}>
    <h3 class="${"text-xl font-bold flex-wrap mb-5"}">${(0, import_index_8c4d2a66.e)(title)}</h3>
	${slots.default ? slots.default({}) : ``}</div>`;
});
var Photos_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".main_image.svelte-ynfosj{width:100%}")();
const css$1 = {
  code: ".main_image.svelte-ynfosj{width:100%}",
  map: null
};
const Photos = (0, import_index_8c4d2a66.c)(($$result, $$props, $$bindings, slots) => {
  const imgList = [
    { url: "/profile.jpg" },
    {
      url: "https://www.fillmurray.com/300/300"
    },
    {
      url: "https://www.fillmurray.com/g/300/300"
    }
  ];
  let activePicture = "/profile.jpg";
  $$result.css.add(css$1);
  return `<img${(0, import_index_8c4d2a66.a)("src", activePicture, 0)} alt="${""}" class="${"main_image svelte-ynfosj"}">
<div class="${"flex h-24 my-5 gap-2"}">${(0, import_index_8c4d2a66.b)(imgList, (img) => {
    return `<img${(0, import_index_8c4d2a66.a)("src", img.url, 0)} alt="${""}">`;
  })}
</div>`;
});
const SUPABASE_URL = "https://ktdkqjbzjtnojbfghiop.supabase.co";
const SUPABASE_PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0ZGtxamJ6anRub2piZmdoaW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc5MzgzMTMsImV4cCI6MTk3MzUxNDMxM30.UczcyfDFmgUe_vbDcdDr-KJtS-BTsiX4CsUL2dEage0";
const supabase = (0, import_supabase_js.createClient)(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
async function getAllPosts() {
  let { data, error } = await supabase.from("tributes").select().order("created_at", { ascending: false });
  if (error)
    return { data, error };
  return { data, error };
}
const Tribute = (0, import_index_8c4d2a66.c)(($$result, $$props, $$bindings, slots) => {
  let postsPromise = getAllPosts();
  (0, import_index_8c4d2a66.d)();
  let name = "";
  let createPostPromise = Promise.resolve({});
  return `<form><div class="${"form-control"}"><input type="${"text"}" placeholder="${"Name"}" class="${"input input-bordered w-full mb-5 textarea-primary"}"${(0, import_index_8c4d2a66.a)("value", name, 0)}>
        <textarea required class="${"textarea textarea-primary mb-4"}" placeholder="${"Condolence"}">${""}</textarea>
        ${function(__value) {
    if ((0, import_index_8c4d2a66.i)(__value)) {
      __value.then(null, import_index_8c4d2a66.n);
      return `
        <button class="${"btn btn-disabled text-xl"}">Submit</button>
        `;
    }
    return function({ data, error }) {
      return `
        <button class="${"btn btn-primary text-xl"}">Submit</button>
        `;
    }(__value);
  }(createPostPromise)}</div></form>

<div class="${"mt-5"}">${function(__value) {
    if ((0, import_index_8c4d2a66.i)(__value)) {
      __value.then(null, import_index_8c4d2a66.n);
      return `
    <h2 class="${"h-2 mb-10"}">getting posts</h2>
    <progress class="${"progress w-56"}"></progress>
    `;
    }
    return function({ data, error }) {
      return `
    ${data ? `<ul>${(0, import_index_8c4d2a66.b)(data, (post) => {
        return `<li><strong>${(0, import_index_8c4d2a66.e)(post.name)}:</strong> ${(0, import_index_8c4d2a66.e)(post.content)}</li>`;
      })}</ul>` : `error: ${(0, import_index_8c4d2a66.e)(error.message)}`}
    `;
    }(__value);
  }(postsPromise)}</div>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".hero.svelte-47krz7.svelte-47krz7{background:url(/hero.jpg) no-repeat center center;background-size:cover}.container.svelte-47krz7 p.svelte-47krz7{margin-bottom:6px}")();
const css = {
  code: ".hero.svelte-47krz7.svelte-47krz7{background:url(/hero.jpg) no-repeat center center;background-size:cover}.container.svelte-47krz7 p.svelte-47krz7{margin-bottom:6px}",
  map: null
};
const Routes = (0, import_index_8c4d2a66.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"hero h-96 svelte-47krz7"}"><div class="${"hero-overlay bg-opacity-60"}"></div>
	<div class="${"hero-content mx-auto max-w-5xl container text-neutral-content flex flex-col-reverse md:flex-row  svelte-47krz7"}"><div class="${"w-full text-center md:text-left"}"><h1 class="${"md:mb-5 text-5xl font-bold"}">Mike Bretz</h1>
			<p class="${"svelte-47krz7"}">Son, Father, Brother, and Friend</p>
			<p class="${"svelte-47krz7"}">May 4th 1958 - July 31 2022</p></div>
		<img class="${"rounded-full w-48 h-68"}" src="${"/profile.jpg"}" alt="${""}"></div></div>
<main class="${"container mx-auto w-full grid grid-cols-2 gap-5 justify-between p-5 md:px-0 svelte-47krz7"}">${(0, import_index_8c4d2a66.v)(Tile, "Tile").$$render($$result, {
    title: "Obituary",
    class: "col-span-full"
  }, {}, {
    default: () => {
      return `<p class="${"svelte-47krz7"}">Michael Dean Bretz passed on July 31st 2020 at age 64 after a long battle against cancer.</p>
		<p class="${"svelte-47krz7"}">Mike was born to Nicholas and Barbara Bretz in Arvada, Colorado. He was the oldest of four 4
			children. Mike graduated from Arvada High School, attained a Bachelor of Science from Regis
			University and a Masters Degree of Environmental Policy and Management from the University of
			Denver. Throughout his career, he managed environmental restoration and hazardous waste which
			took him to Boston, St. Louis, Kansas City, Leadville, and Eastern Washington. Throughout his
			life Mike was active in the Arvada community; he was an Arvada Volunteer Firefighter, a
			catcher in the Men&#39;s Senior Recreational Baseball Association, and spent many summers
			volunteering with the Arvada Farmers Market. Above all Mike was an immensely dedicated father
			to his two children Randi and Dylan. His children fondly remember Mike\u2019s unique and
			identifiable whistle, which could always be heard from the sidelines of their various sporting
			events. Additionally, Mike and his children built wood furnishings together (as Mike was a
			skilled wood craftsman), and enjoyed countless bike rides and camping trips across Colorado.
			He will be greatly missed by his friends and family.
		</p>
		<p class="${"svelte-47krz7"}">He is survived by his children, his parents, and his three sisters. In lieu of flowers, please
			consider a donation in Mike\u2019s name to the Lutheran Hospice facility as the family
		</p>
		<p class="${"svelte-47krz7"}">the family suggests donations be made in Mike\u2019s name to the charity of your choice.</p>
		<p class="${"svelte-47krz7"}">A memorial will be held in his honor at XXX on [DATE AND TIME].</p>`;
    }
  })}
	${(0, import_index_8c4d2a66.v)(Tile, "Tile").$$render($$result, {
    title: "Memorial",
    class: "col-span-full"
  }, {}, {
    default: () => {
      return `<p class="${"svelte-47krz7"}">A service will be held on ...</p>`;
    }
  })}
	${(0, import_index_8c4d2a66.v)(Tile, "Tile").$$render($$result, { title: "Photos" }, {}, {
    default: () => {
      return `${(0, import_index_8c4d2a66.v)(Photos, "Photos").$$render($$result, {}, {}, {})}`;
    }
  })}
	${(0, import_index_8c4d2a66.v)(Tile, "Tile").$$render($$result, { title: "Tribute Wall" }, {}, {
    default: () => {
      return `${(0, import_index_8c4d2a66.v)(Tribute, "Tribute").$$render($$result, {}, {}, {})}`;
    }
  })}
</main>`;
});
