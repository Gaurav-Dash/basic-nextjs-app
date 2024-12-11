export const CODE_ERROR_INCORRECT_PARAMS = `> Build error occurred
Error: Page "/[...slug]" is missing "generateStaticParams()" so it cannot be used with "output: export" config.
    at /Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:1297:59
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Span.traceAsyncFn (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async Promise.all (index 4)
    at async /Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:1175:17
    at async Span.traceAsyncFn (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async /Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:1098:124
    at async Span.traceAsyncFn (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async build (/Users/siva.manyam/frontend/projects/basic-nextjs-app/node_modules/next/dist/build/index.js:368:9)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.`;

export const CMS_ERROR_INVALID_DATA = ``;

export const errorLog = `
  Creating an optimized production build ...
   ✓ Compiled successfully
   ✓ Linting and checking validity of types    
   ✓ Collecting page data    
     Generating static pages (0/7)  [=   ]/Users/rahul.bansal/Desktop/basic-nextjs-app/.next/server/app/[...slug]/page.js:7
        \`);return t}(null==i?void 0:i.host,o)&&(t.includeContentSourceMaps=!0,t.select)){let e=aA(t);e.add("sys"),t.select=Array.from(e).join(",")}return t}async function r({context:t,path:n,config:a}){let o=i(t);try{var r,s;return r=(await e.get(o+n,a)).data,(null===(s=null==a?void 0:a.params)||void 0===s?void 0:s.includeContentSourceMaps)?nY(r):r}catch(e){nL(e)}}async function s({context:t,path:n,data:a,config:o}){let r=i(t);try{return(await e.post(r+n,a,o)).data}catch(e){nL(e)}}async function c(e,t,n={withAllLocales:!1,withoutLinkResolution:!1,withoutUnresolvableLinks:!1}){let{withAllLocales:a}=n;return aL(t,a),aF(t),aN(t),aU(t),p(e,a?Object.assign(Object.assign({},t),{locale:"*"}):t,n)}async function p(e,t,n){if(!e)throw a(e);try{let i=await u(Object.assign({"sys.id":e},o(t)),n);if(i.items.length>0)return i.items[0];throw a(e)}catch(e){nL(e)}}async function l(e,t={withAllLocales:!1,withoutLinkResolution:!1,withoutUnresolvableLinks:!1}){let{withAllLocales:n}=t;return aL(e,n),aF(e),aN(e),aU(e),u(n?Object.assign(Object.assign({},e),{locale:"*"}):e,t)}async function u(e,t){let{withoutLinkResolution:n,withoutUnresolvableLinks:a}=t;try{let t=await r({context:"environment",path:"entries",config:nA({query:o(aR(aC(e)))})});return aT(t,{resolveLinks:!n,removeUnresolved:null!=a&&a})}catch(e){nL(e)}}async function d(e,t={withAllLocales:!1,withoutLinkResolution:!1,withoutUnresolvableLinks:!1}){let{withAllLocales:n}=t;return aL(e,n),aU(e),x(n?Object.assign(Object.assign({},e),{locale:"*"}):e)}async function
`
export const TIMEOUT_ERROR = `
  - Environments: .env
 
   Creating an optimized production build ...
✓ Compiled successfully
✓ Linting and checking validity of types    
⚠ Sending SIGTERM signal to static worker due to timeout of 10 seconds. Subsequent errors may be a result of the worker exiting.
⨯ Static worker exited with code: null and signal: SIGTERM
⚠ Restarted collecting page data for /[...slug] because it took more than 10 seconds
⚠ See more info here https://nextjs.org/docs/messages/static-page-generation-timeout
⚠ Sending SIGTERM signal to static worker due to timeout of 10 seconds. Subsequent errors may be a result of the worker exiting.
⨯ Static worker exited with code: null and signal: SIGTERM
 
> Build error occurred
Error: Collecting page data for /[...slug] is still timing out after 2 attempts. See more info here https://nextjs.org/docs/messages/page-data-collection-timeout
    at onRestart (/Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/build/index.js:299:27)
    at Worker.isPageStatic (/Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/lib/worker.js:99:40)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Span.traceAsyncFn (/Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async /Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/build/index.js:1243:56
    at async Span.traceAsyncFn (/Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async Promise.all (index 4)
    at async /Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/build/index.js:1175:17
    at async Span.traceAsyncFn (/Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async /Users/rahul.bansal/Desktop/basic-nextjs-app/node_modules/next/dist/build/index.js:1098:124
   Collecting page data  .%                                                          
   `
   
export const INFRA_ERROR_ENV_VARIABLE = `You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry
  ▲ Next.js 14.2.20
   Creating an optimized production build ...
 ✓ Compiled successfully
   Linting and checking validity of types ...
   Collecting page data ...
TypeError: Expected parameter accessToken
    at /codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:7:5765
    at 4762 (/codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:7:9969)
    at t (/codebuild/output/src2629725029/src/.next/server/webpack-runtime.js:1:127)
    at 2222 (/codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:1:1110)
    at t (/codebuild/output/src2629725029/src/.next/server/webpack-runtime.js:1:127)
    at a (/codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:7:159009)
    at /codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:7:159044
    at t.X (/codebuild/output/src2629725029/src/.next/server/webpack-runtime.js:1:1191)
    at /codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:7:159022
    at Object.<anonymous> (/codebuild/output/src2629725029/src/.next/server/app/[...slug]/page.js:7:159071)
> Build error occurred
Error: Failed to collect page data for /[...slug]
    at /codebuild/output/src2629725029/src/node_modules/next/dist/build/utils.js:1268:15
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  type: 'Error'
}
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.`;

export const INFRA_ERROR_SIGTERM = `
 ⚠ Sending SIGTERM signal to static worker due to timeout of 60 seconds. Subsequent errors may be a result of the worker exiting.
 ⨯ Static worker exited with code: null and signal: SIGTERM
 ⨯ Static worker exited with code: null and signal: SIGTERM
 ⚠ Restarted static page generation for /page/2 because it took more than 60 seconds
 ⚠ See more info here https://nextjs.org/docs/messages/static-page-generation-timeout
 ⚠ Restarted static page generation for /page/1 because it took more than 60 seconds
 ⚠ Sending SIGTERM signal to static worker due to timeout of 60 seconds. Subsequent errors may be a result of the worker exiting.
 ⨯ Static worker exited with code: null and signal: SIGTERM
 ⨯ Static worker exited with code: null and signal: SIGTERM
 ⚠ Restarted static page generation for /page/2 because it took more than 60 seconds
 ⚠ Restarted static page generation for /page/1 because it took more than 60 seconds
 ⚠ Sending SIGTERM signal to static worker due to timeout of 60 seconds. Subsequent errors may be a result of the worker exiting.
 ⨯ Static worker exited with code: null and signal: SIGTERM
 ⨯ Static worker exited with code: null and signal: SIGTERM

> Build error occurred
Error: Static page generation for /page/2 is still timing out after 3 attempts. See more info here https://nextjs.org/docs/messages/static-page-generation-timeout
    at onRestart (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/build/index.js:292:27)
    at /Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/lib/worker.js:99:40
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async /Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/export/index.js:450:20
    at async Span.traceAsyncFn (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
    at async /Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/export/index.js:448:24
    at async Promise.all (index 5)
    at async exportAppImpl (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/export/index.js:440:21)
    at async /Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/export/index.js:623:16
    at async Span.traceAsyncFn (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/node_modules/next/dist/trace/trace.js:154:20)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.`;

export const CODE_ERROR_NESTED_ERROR = `✓ Collecting page data    
   Generating static pages (5/7)  [=== ]TypeError: Cannot read properties of undefined (reading 'widgets')
    at a8 (/Users/siva.manyam/frontend/projects/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12907)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '2712394995'
}
TypeError: Cannot read properties of undefined (reading 'widgets')
    at a8 (/Users/siva.manyam/frontend/projects/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12907)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '2712394995'
}
TypeError: Cannot read properties of undefined (reading 'widgets')
    at a8 (/Users/siva.manyam/frontend/projects/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12907)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '2712394995'
}

Error occurred prerendering page "/page/2". Read more: https://nextjs.org/docs/messages/prerender-error

TypeError: Cannot read properties of undefined (reading 'widgets')
    at a8 (/Users/siva.manyam/frontend/projects/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12907)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
 ✓ Generating static pages (7/7)

> Export encountered errors on following paths:
        /[...slug]/page: /page/2
error Command failed with exit code 1.`;
