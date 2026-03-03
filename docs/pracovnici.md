Každý pracovník má svůj profil definovaný ve vlastní složce v cestě `content/katedra/pracovnici`. Název této složky definuje URL, například `content/katedra/pracovnici/foobar` bude mít výslednou URL `https://it.pedf.cuni.cz/katedra/pracovnici/foobar/`. Součástí složky musí být soubor `index.md`:

```markdown
+++
title = "PhDr. Jiří Štípek, Ph.D."
weight = 1

[extra]
group = "vedeni"
color = "#896c84"
role = "Vedoucí katedry"
email = "jiri.stipek@pedf.cuni.cz"
phone = "+420 221 900 327"
sis = "02869"
homepage = "https://it.pedf.cuni.cz"
+++
```

## Hodnoty:

Povinné hodnoty jsou označeny hvězdičkou.

Základní hodnoty:

- *`title` Název stránky, tj. jméno pracovníka
- *`weight` Hodnota priority pořadí v přehledu. Nižší hodnoty mají vyšší prioritu, tj. 0 bude renderována před 1 atd. Výchozí hodnota je 0.

Další hodnoty se definují v kontextu `[extra]`:

- *`group` Skupina: `vedeni`, `ucitele`, `odborni-pracovnici`
- `color` Barva zdobení
- `role` Sub-text pod jménem (`title`)
- `email` E-mailová adresa; systém generuje dokaz `href="mailto:<>"`
- `phone` Telefonní číslo; systém generuje dokaz `href="tel:<>"`
- `sis` ID osoby ze SIS pro generování odkazu na rozvrh
- `homepage` Odkaz na externí webové stránky
