# Webové stránky KITTV

Stránky jsou postavené na generátoru [Zola](https://www.getzola.org/).

## Instalace generátoru

Instalaci generátoru lze provést z oficiálních repozitářů systému, nebo manuální kompilací. Ke kompilaci je třeba mít připravený rust toolchain, respektive nainstalované `cargo`.

```
git clone https://github.com/getzola/zola
cd zola
cargo build --release
cp target/release/zola /usr/local/bin/
```

## Vývoj a generování

Pro testování a vývoji na lokálním web serveru stačí spustit `zola serve`. Ke stránkám pak lze přistupovat na adrese `http://127.0.0.1:1111/` nebo `http://localhost:1111/`. Zola sleduje změny a automaticky provádí regeneraci obsahu.

Pro vygenerování statického obsahu (pro nasazení na web server) je třeba spustit `zola build`. Výsledný obsah je uložen do složky `public`.

## Dokumentace

- [Zola](https://www.getzola.org/documentation/) (generátor)
- [Tera](https://tera.netlify.app/docs/) (template engine)
- [CommonMark](https://commonmark.org/help/) (markdown syntax)

### Odkazy na použité technologie

- [Zola](https://github.com/getzola/zola/releases/) (releases in GitHub)
- [Remix Icon](https://remixicon.com)
- [Remix Icon](https://github.com/Remix-Design/RemixIcon) (GitHub)
