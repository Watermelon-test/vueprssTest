export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/Project/vuePressTest/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"test"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/Project/vuePressTest/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
