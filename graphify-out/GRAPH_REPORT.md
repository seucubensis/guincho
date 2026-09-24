# Graph Report - guincho  (2026-09-24)

## Corpus Check
- 20 files · ~3,836 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 147 nodes · 151 edges · 11 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- dependencies
- guincho
- development
- devDependencies
- app.config.server.ts
- package.json
- options
- AGENTS.md
- CLAUDE.md
- Guincho
- server.ts

## God Nodes (most connected - your core abstractions)
1. `options` - 9 edges
2. `guincho` - 7 edges
3. `scripts` - 7 edges
4. `Guincho` - 7 edges
5. `development` - 6 edges
6. `build` - 5 edges
7. `production` - 5 edges
8. `App` - 5 edges
9. `architect` - 4 edges
10. `serve` - 4 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (11 total, 0 thin omitted)

### Community 0 - "dependencies"
Cohesion: 0.09
Nodes (23): @angular/common, @angular/compiler, @angular/core, @angular/forms, @angular/platform-browser, @angular/platform-server, @angular/router, @angular/ssr (+15 more)

### Community 1 - "guincho"
Cohesion: 0.11
Nodes (17): test, packageManager, architect, prefix, projectType, root, schematics, sourceRoot (+9 more)

### Community 2 - "development"
Cohesion: 0.12
Nodes (17): build, serve, builder, configurations, defaultConfiguration, development, production, buildTarget (+9 more)

### Community 3 - "devDependencies"
Cohesion: 0.12
Nodes (17): @angular/build, @angular/compiler-cli, jsdom, devDependencies, @angular/build, @angular/cli, @angular/compiler-cli, jsdom (+9 more)

### Community 4 - "app.config.server.ts"
Cohesion: 0.20
Nodes (7): Component, App, appConfig, config, serverConfig, routes, serverRoutes

### Community 5 - "package.json"
Cohesion: 0.12
Nodes (15): name, packageManager, prettier, overrides, printWidth, singleQuote, private, scripts (+7 more)

### Community 6 - "options"
Cohesion: 0.18
Nodes (11): options, assets, browser, inlineStyleLanguage, outputMode, server, ssr, styles (+3 more)

### Community 7 - "AGENTS.md"
Cohesion: 0.25
Nodes (7): Accessibility Requirements, Angular Best Practices, Components, Services, State Management, Templates, TypeScript Best Practices

### Community 8 - "CLAUDE.md"
Cohesion: 0.25
Nodes (7): Accessibility Requirements, Angular Best Practices, Components, Services, State Management, Templates, TypeScript Best Practices

### Community 9 - "Guincho"
Cohesion: 0.25
Nodes (7): Additional Resources, Building, Code scaffolding, Development server, Guincho, Running end-to-end tests, Running unit tests

### Community 10 - "server.ts"
Cohesion: 0.40
Nodes (4): angularApp, app, browserDistFolder, reqHandler

## Knowledge Gaps
- **84 isolated node(s):** `$schema`, `version`, `packageManager`, `newProjectRoot`, `projectType` (+79 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 87 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Why does `architect` connect `guincho` to `development`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **What connects `$schema`, `version`, `packageManager` to the rest of the system?**
  _84 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `guincho` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `development` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._