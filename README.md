# trafikode
Simple [Traefik](https://docs.traefik.io/routing/providers/docker/) snippets and autocomplete for VS Code.

## Work in progress
**Help Needed** Please refer to the TODO section for help required.

## Usage
- [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=securisec.traefikode)
- The autocompleter will trigger when a `-` is followed by `--`, i.e cli options
- A `-` followed by the word traefik

## Intellisense
Intellisense works for the following:
- Cli and provider arguments that are passed to traefik cli
- Traefik labels for a container.

<p align="center">
    <img src="https://github.com/securisec/code-traefikode/raw/master/resources/%20cli.gif" width="65%">
</p>

## Snippets
Snippets are provided for traefik labels for a container. 

<p align="center">
    <img src="https://github.com/securisec/code-traefikode/raw/master/resources/snippet.gif" width="65%">
</p>