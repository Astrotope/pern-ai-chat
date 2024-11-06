# PERN (PostgreSQL, Express, React, Node) AI App

Based on [PERN Stack Project: Build a Chat App From Scratch | Postgres, TypeScript, Prisma, React](https://youtu.be/vL24eiwAG_g?feature=shared)

## Issues

- dev start-up script wouldn't work in node 22 LTS

```
  "scripts": {
    "dev": "nodemon --watch backend/src --exec ts-node backend/src/index.ts"
  },
```

- appears to be a known bug. Tried vite-node, but it dosen't restart properly. Ended up installing tsx and changed the script to...
[How to watch and reload ts-node when TypeScript files change](https://stackoverflow.com/questions/37979489/how-to-watch-and-reload-ts-node-when-typescript-files-change)


```
  "scripts": {
    "dev": "tsx watch backend/src/index.ts"
  },
```



