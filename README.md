# trafikode
Simple [Traefik](https://docs.traefik.io/routing/providers/docker/) snippets and autocomplete for VS Code.

Supports Traefik **version 2.1+**

## Work in progress
**Help Needed** Please refer to the TODO section for help required.

## Usage
- [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=securisec.traefikode)
- The autocompleter will trigger when a `-` is followed by `--`, i.e cli options
- A `-` followed by the word traefik

## Intellisense

#### Caveat

The Red Hat yaml plugin disables intellisense in docker compose files, so for intellisense to work, make sure to disable it in VSCode extensions. This yaml plugin on the other hand is used in the `traefik.yaml` file for dynamic config yaml intellisense. Pull requests are welcome to fix this. 

Intellisense works for the following:
- Cli and provider arguments that are passed to traefik cli
- Traefik labels for a container.
- Provide intellisense in `traeik.yaml` files for dynamic configuration. 

<p align="center">
    <img src="https://github.com/securisec/code-traefikode/raw/master/resources/%20cli.gif" width="65%">
</p>

## Snippets
Snippets are provided for traefik labels for a container. 

<p align="center">
    <img src="https://github.com/securisec/code-traefikode/raw/master/resources/snippet.gif" width="65%">
</p>

## Known issues
- Does not work when the Redhat yaml extension is installed