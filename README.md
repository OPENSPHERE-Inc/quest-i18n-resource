# QUEST Internationalization Project

## Source Tree

- src/
  - backend/ - (Backend resource files)
    - definitions/ - (There are sub-directories which have 2 chars language id)
      - en/ - (English resources)
        - email.json - (email template)
        - localize.json - (string resources)
      - ja/ - (Japanese resources)
        - [Same files above]
  - frontend/ - (Frontend resource files)
    - definitions/ - (There are sub-directories which have 2 chars language id)
      - en/ - (English resources)
        - localize.json - (string resources)
      - ja/ - (Japanese resources)
        - [Same files above]
      - languages.json - (Language id list we can use) **\* DO NOT MODIFY**
    - components/ - (There are sub-directories which have 2 chars language id)
      - en/ - (English resources)
        - Instruction.tsx
        - Introduction.tsx
        - ListOfExchanges.tsx
      - ja/ - (Japanese resources)
        - [Same files above]
      - parameters.ts - (Template parameters definition) **\* DO NOT MODIFY**

**Please DO NOT MODIFY any files other than those listed above**

## How to add language

### 1. Clone repository and install packages

Clone this repository and cd root of source tree.

Then execute following command.

```
$ yarn
```

or

```
$ node install
```


### 2. Create directories and copy files

Create following directories

- src/backend/definitions/`[2 chars language id]`/
  - Copy files from `src/backend/definitions/en/*`

- src/frontend/definitions/`[2 chars language id]`/
  - Copy files from `src/frontend/definitions/en/*`

- src/frontend/pages/`[2 chars language id]`/
  - Copy files from `src/frontend/pages/en/*`

`[2 chars language id]` can be grabbed from `src/frontend/languages.json`


### 3. Translate files

- src/backend/definitions/`[2 chars language id]`/*
- src/frontend/definitions/`[2 chars language id]`/*
- src/frontend/pages/`[2 chars language id]`/*

**For contributors:** You can credit your name and url in `localize.json` located here:

- src/frontend/definitions/`[2 chars language id]`/`localize.json`
  - `translator_names` and `translator_urls` (These accept string array)

#### .json format

The value accepts string array.

Generally the value doesn't accept html code except properties which begin with `html_`.

`%d` or `%s` is a printf style placeholder, so it'll be replaced by parameters.
Don't remove them.


#### DON'T DO

- Change page layout/style
- Add medias (internal/external)
- Add external link (Except allowed)
- Add commercial of unrelated company.
- Add malicious code.
- Modify files that disallowed modification
- Add files to disallowed location

These contents will be revoked when marge.

### 4. Preview

```
$ yarn start
```

or

```
$ node run start
```

Now you can preview pages on http://localhost:3000

It doesn't have complete contents, so you can preview limited pages only.


### 5. Pull request and reviewed by official

Push voluntary branch (except 'master', 'staging' and 'preview') and create pull request.

Official member will possibly modify / delete your content without prior notice.

After the marge, your language will be enabled on the live site!
