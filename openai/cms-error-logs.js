export const CMS_ERROR_MISSING_DATA =  `
    Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types    
 ✓ Collecting page data    
   Generating static pages (5/7)  [=== ]TypeError: Cannot read properties of undefined (reading 'url')
    at t1 (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12234)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '2164582491'
}
TypeError: Cannot read properties of undefined (reading 'url')
    at t1 (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12234)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '2164582491'
}
   Generating static pages (5/7)  [  ==]TypeError: Cannot read properties of undefined (reading 'url')
    at t1 (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12234)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '2164582491'
}
TypeError: Cannot read properties of undefined (reading 'url')
    at t1 (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12234)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '2164582491'
}

Error occurred prerendering page "/page/1". Read more: https://nextjs.org/docs/messages/prerender-error

TypeError: Cannot read properties of undefined (reading 'url')
    at t1 (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12234)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
TypeError: Cannot read properties of undefined (reading 'url')
    at t1 (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12234)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '2164582491'
}
TypeError: Cannot read properties of undefined (reading 'url')
    at t1 (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12234)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '2164582491'
}

Error occurred prerendering page "/page/2". Read more: https://nextjs.org/docs/messages/prerender-error

TypeError: Cannot read properties of undefined (reading 'url')
    at t1 (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12234)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
 ✓ Generating static pages (7/7)

> Export encountered errors on following paths:
        /[...slug]/page: /page/1
        /[...slug]/page: /page/2
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

-------------------------------------------------------------------------------------------------------------
Generating static pages (5/7)  [=== ]TypeError: Cannot read properties of undefined (reading 'widgets')
    at a8 (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12907)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '822186316'
}
   Generating static pages (5/7)  [  ==]TypeError: Cannot read properties of undefined (reading 'widgets')
    at a8 (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12907)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '822186316'
}
TypeError: Cannot read properties of undefined (reading 'widgets')
    at a8 (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12907)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  digest: '822186316'
}

Error occurred prerendering page "/page/2". Read more: https://nextjs.org/docs/messages/prerender-error

TypeError: Cannot read properties of undefined (reading 'widgets')
    at a8 (/Users/gaurav.dash/Desktop/dev/basic-nextjs-app/.next/server/app/[...slug]/page.js:7:12907)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
 ✓ Generating static pages (7/7)

> Export encountered errors on following paths:
        /[...slug]/page: /page/2
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

-------------------------------------------------------------------------------------------------------------
`

export const CMS_ERROR_NESTED_DATA = `✓ Collecting page data    
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