
import 'i-have-a-dir-and-main' // OK resolves via "main" in package.json
import 'i-have-a-dir-and-main/dist/dir' // Fails, unacceptable directory import

/*
Try `pnpm i && pnpm run dev`

tsconfig:
    "module": "Node16"
    "moduleResolution": "Node16" (via module setting)

package.json:
    "type": "module"
*/