import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { globalIgnores } from "eslint/config";
import js from '@eslint/js';
import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";
import importAlias from "eslint-plugin-import-alias";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  globalIgnores(["node_modules/**", ".next/**", "**/*.d.ts", "watch-and-fix.js"]),
  {
    plugins: {
        import: importPlugin,
        "import-alias": importAlias,
    },
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
                project: "./tsconfig.json"
            },
            alias: {
                map: [
                    ["@", path.resolve(__dirname)]
                ],
                extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
            }
        },
        // react: {
        //     version: 'detect',
        // },
    },
    rules: {
        'import-alias/import-alias': [
        'error',
            {
                relativeDepth: 0,
                // rootDir: __dirname,
                aliases: [
                    { "alias": "@/", "matcher": "^" }
                    // { alias: '@/app', matcher: '^app' },
                    // { alias: '@/assets', matcher: '^assets' },
                    // { alias: '@/components', matcher: '^components' },
                    // { alias: '@/data', matcher: '^data' },
                    // { alias: '@/lib', matcher: '^lib' },
                    // { alias: '@/public', matcher: '^public' },
                    // { alias: '@/types', matcher: '^types' },
                ]
            }
        ],
        // "import/no-unresolved": "error",
        // "import/order": [
        //     "error",
        //     {
        //         "groups": ["builtin", "external", "internal"],
        //         "pathGroups": [
        //             {
        //                 "pattern": "@/**",
        //                 "group": "internal"
        //             }
        //         ],
        //         "alphabetize": { "order": "asc" }
        //     }
        // ],
        // "no-restricted-imports": ["error", {
        //     "patterns": [
        //         {
        //             "group": ["../**"],
        //             "message": "Please use absolute imports with '@/' prefix instead."
        //         }
        //     ]
        // }]
    }
  }
];

export default eslintConfig;