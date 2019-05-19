# eslint-prettier-starter
A starter kit that includes linting and reformatting JS files as a precommit hook.

## Install

### On a new project
You can do everything using your terminal :

```
git clone https://github.com/prettier/prettier.git my_new_project
cd my_new_project
rm -rf .git
git init
npm install
```

Or you can download an [archive](https://github.com/prettier/prettier/archive/master.zip), extract it and :

```
git init
npm install
```

## Precommit hook
[husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) are used to run linters in a precommit hook.

## Linting
It uses [ESLint](http://eslint.org/) to lint JS files. The [eslint-config-wandi](https://github.com/WandiParis/eslint-config-wandi), which is basically ESLint's recommended rules + [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) on error mode.

It also uses [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to automatically disable all stylistic ESLint rules.

## Formatting
It uses [prettier](https://github.com/prettier/prettier) to format files. All default options are used.