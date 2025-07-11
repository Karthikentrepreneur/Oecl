[13:42:25.066] Running build in Washington, D.C., USA (East) – iad1
[13:42:25.067] Build machine configuration: 4 cores, 8 GB
[13:42:25.083] Cloning github.com/Karthikentrepreneur/Oecl (Branch: main, Commit: 120263f)
[13:42:29.015] Cloning completed: 3.932s
[13:42:29.100] Restored build cache from previous deployment (BWqgv3q9BQrCcfGB928Gdq4inPwX)
[13:42:29.788] Running "vercel build"
[13:42:30.223] Vercel CLI 44.3.0
[13:42:30.825] Installing dependencies...
[13:42:32.000] 
[13:42:32.001] up to date in 947ms
[13:42:32.001] 
[13:42:32.001] 74 packages are looking for funding
[13:42:32.001]   run `npm fund` for details
[13:42:32.035] Running "npm run build"
[13:42:32.150] 
[13:42:32.150] > vite_react_shadcn_ts@0.0.0 build
[13:42:32.150] > vite build
[13:42:32.150] 
[13:42:32.625] [36mvite v5.4.10 [32mbuilding for production...[36m[39m
[13:42:32.980] transforming...
[13:42:33.049] Browserslist: browsers data (caniuse-lite) is 9 months old. Please run:
[13:42:33.050]   npx update-browserslist-db@latest
[13:42:33.050]   Why you should do it regularly: https://github.com/browserslist/update-db#readme
[13:42:38.097] [32m✓[39m 3062 modules transformed.
[13:42:38.099] [31mx[39m Build failed in 5.15s
[13:42:38.100] [31merror during build:
[13:42:38.100] [31msrc/App.tsx (19:7): "default" is not exported by "src/pages/Services.tsx", imported by "src/App.tsx".[31m
[13:42:38.100] file: [36m/vercel/path0/src/App.tsx:19:7[31m
[13:42:38.100] [33m
[13:42:38.101] 17: import LiquidCargo from "./pages/services/LiquidCargo";
[13:42:38.101] 18: import ProjectCargo from "./pages/services/ProjectCargo";
[13:42:38.101] 19: import Services from "./pages/Services";
[13:42:38.101]            ^
[13:42:38.101] 20: import IndiaServices from "./pages/services/IndiaServices";
[13:42:38.101] 21: import ThailandServices from "./pages/services/ThailandServices";
[13:42:38.101] [31m
[13:42:38.101]     at getRollupError (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:395:41)
[13:42:38.101]     at error (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:391:42)
[13:42:38.102]     at Module.error (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:15535:16)
[13:42:38.102]     at Module.traceVariable (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:15984:29)
[13:42:38.102]     at ModuleScope.findVariable (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:13770:39)
[13:42:38.102]     at ReturnValueScope.findVariable (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:5252:38)
[13:42:38.102]     at FunctionBodyScope.findVariable (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:5252:38)
[13:42:38.102]     at Identifier.bind (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:5035:40)
[13:42:38.102]     at CallExpression.bind (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:2851:28)
[13:42:38.102]     at CallExpression.bind (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:11235:15)[39m
[13:42:38.135] Error: Command "npm run build" exited with 1
[13:42:38.398] 
[13:42:41.129] Exiting build container
