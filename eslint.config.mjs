import { builtinModules } from 'module';
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import js from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js'
import { globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import importAlias from "eslint-plugin-import-alias";
import simpleImportAlias from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";

const builtinsRegex = `^(${builtinModules.join('|')})(/|$)`;

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
        "unused-imports": unusedImports,
        import: importPlugin,
        "import-alias": importAlias,
        "simple-import-sort": simpleImportAlias,
        '@stylistic/js': stylisticJs
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
        "import/no-unresolved": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
        "import-alias/import-alias": [
            "error",
                {
                    relativeDepth: 0, // can use -1 for subdirectories
                    // rootDir: __dirname,
                    aliases: [
                        // { "alias": "@/", "matcher": "^(?!.*\\.module\\.scss$)^" }

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
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Node.js builtins
                    [builtinsRegex],

                    // Packages. `react` related packages come first.
                    ['^react', '^next', '^[^.]'],

                    // Internal packages '@/'
                    ['^@/'],
                    // can also split into groups
                    // ['^@/app'],
                    // ['^@/assets'],
                    // ['^@/components'],
                    // ['^@/data'],
                    // ['^@/lib'],
                    // ['^@/public'],
                    // ['^@/types'],

                    // Local imports without space between them and .scss files, SCSS files always at the end
                    ['^\\.\\/(?!.*\\.module\\.scss$)', '^\\.\\/.*\\.module\\.scss$']
                ]
            }
        ],
        // "no-multiple-empty-lines": [
        //     "error",
        //     {
        //         "max": 1,
        //         "maxBOF": 0,
        //         "maxEOF": 0
        //     }
        // ],
        // "import/order": [
        //     "error",
        //     {
        //         "groups": [
        //             "builtin",
        //             "external",
        //             "internal",
        //         ],
        //         "pathGroups": [
        //             {
        //                 "pattern": "@/**",
        //                 "group": "internal"
        //             }
        //         ],
        //         "newlines-between": "always",
        //         "alphabetize": {
        //           "order": 'asc',
        //           "caseInsensitive": true
        //         }
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