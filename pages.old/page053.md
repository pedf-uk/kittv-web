## [Modul 4 --- Tabulkový program]{#domu}

\
[Řešený příklad 1\
](#priklad1)[Řešený příklad 2](#priklad2)\
[Náměty na cvičení](#namety)\
[Soubory ke stažení](download/prac4.zip)

**[Sylabus](index.php?menu=61#m4)**

**Modul 4** --- *Tabulkový kalkulátor* - požaduje, aby kandidát rozuměl
základní koncepci tabulkového kalkulátoru a byl schopen používat tuto
aplikaci na osobním počítači. Musí znát základní operace spojené
s tvorbou, formátováním a používáním tabulky a musí být schopen je
provádět. Kandidát by měl umět provést standardní matematické a logické
operace s použitím základních vzorců a funkcí. Dále má být schopen
předvést použití některých pokročilejších funkcí spojených s ovládáním
tabulkového kalkulátoru jako např. vkládání objektů a tvorbu grafů a
diagramů.

## [Řešený]{#priklad1} příklad 1 --- Jak pracovat s funkcemi SUMA, Průměr, Min a Max

**Úkol:**

V souboru **Cestovní kancelář** vypočtěte do buněk s otazníky výsledné
hodnoty pomocí vzorců či funkcí. Do buňky G11 vypočtěte pomocí funkce
**Průměr** průměrný roční příjem z poboček v Evropě a Africe, do buňky
G12 vypočtěte pomocí funkce **Max** maximální hodnotu ze všech
čtvrtletních příjmů v cestovní kanceláři, do buňky G13 vypočtěte pomocí
funkce **Min** minimální hodnotu ze všech čtvrtletních příjmů v cestovní
kanceláři.

**Řešení:**

1.  Otevřete soubor **Cestovní kancelář*.*** (soubor naleznete uvnitř
    archivu [prac4.zip](download/prac4.zip))
2.  Klikněte do buňky B8 a dvojitě klikněte na ikonu **Autosum**, která
    je na panelu **Formát**. V buňce B8 se objeví výsledná hodnota
    **148** a v **řádku vzorců** bude zapsán výraz **= SUMA(B5:B7).**
    Nastavte ukazatel myši na pravý dolní roh buňky **B8**. Bod je
    zvýrazněn malým obdélníkem.\
    ![](images/ecdl/mod4/image003.jpg){width="400" height="495"}\
    Ukazatel myši změní tvar. Pravý dolní roh aktivní buňky nebo
    vybraného úseku se nazývá **úchyt**. Uchopte levým tlačítkem myši
    tento úchyt a táhněte jej až do pozice buňky **I8.** Vzorec SUMA se
    kopíruje a zároveň logicky upravuje do všech buněk v úseku B8 až
    I8.\
    \
    ![](images/ecdl/mod4/image005.jpg){width="604" height="446"}\
    \
    Podobně vypočtěte roční příjmy ve sloupci F. Do sloupce H vypočtěte
    rozdíl mezi příjmy a výdaji. Použijte k tomu vzorec, který v buňce
    H5 bude mít tvar **= f5-g5.** Klikněte do buňky **H5**. Na
    klávesnici napište **=f5-g5**, stiskněte klávesu **Enter** a znovu
    klikněte do buňky **H5**. Do ostatních buněk sloupce H můžete vzorec
    kopírovat pomocí úchytu (pravý dolní roh aktivní buňky H5).
3.  Klikněte do buňky **G11**. Vypočteme průměrný roční příjem pro
    Evropu a Afriku. Na panelu Formát klikněte na ikonu **Vložit
    funkci** nebo z nabídky **Vložit** vyberte příkaz **Funkce**. Objeví
    se dialogové okno **Vložit funkci**.\
    ![](images/ecdl/mod4/image007.jpg){width="387" height="294"}\
    Pokud je funkce **Průměr** v naposledy použitých funkcích, dvojitým
    kliknutím nebo kliknutím a potvrzením OK funkci zvolte, jinak
    v levém okně dialogového okna klikněte na **statistické**, v pravém
    okně pomocí posuvníku najděte funkci **Průměr**, dvojitě klikněte
    nebo ji označte a vše potvrďte OK. Na pracovní ploše se objeví
    následující dialogové okno.\
    ![](images/ecdl/mod4/image009.jpg){width="526" height="198"}\
    V poli Číslo1 program nabídne úsek buněk, který je vybrán s ohledem
    na pozici aktivní buňky. V našem případě potřebujeme vypočítat
    funkci z jiného úseku buněk, proto zapište úsek buněk, který chcete
    vyhodnotit - **F5:F6**. Klikněte na **OK**. V buňce G11 se objeví
    výsledek **279,5.** V **Řádku vzorců** bude uveden zápis
    **=Průměr(F5:F6)**.\
    \
    ![](images/ecdl/mod4/image011.jpg){width="561" height="434"}
4.  Vypočteme maximální čtvrtletní příjem ze všech čtvrtletních příjmů
    cestovní kanceláře. Klikněte do buňky **G12**. Klikněte na **Vložit
    funkci**. Ze statistických funkcí vyberte funkci **Max**. Pokud si
    pamatujete, jaká je adresa vyhodnocovaného úseku, můžete ji přímo
    zapsat. Obvykle pomocí tlačítka s červenou šipkou minimalizujeme
    dialogové okno a pomocí **kliknu --- držím --- táhnu --- pustím**
    označíte úsek, který chcete vyhodnotit. V našem případě je to úsek
    **B5:E7**. Okno maximalizujte kliknutím na tlačítko se šipkou akci
    potvrďte OK. V buňce se objeví výsledná hodnota **154**, v řádku
    vzorců je výraz **= MAX(B5:E7)**.\
    \
    ![](images/ecdl/mod4/image013.jpg){width="561" height="434"}

```{=html}
<!-- -->
```
1.  Klikněte do buňky **G13** a pomocí funkce **Min** vypočtěte
    minimální čtvrtletní příjem ze všech čtvrtletních příjmů cestovní
    kanceláře.
2.  Do sloupce **H** vypočtěte zisk pro jednotlivé světadíly (příjmy ---
    výdaje).
3.  Do sloupce **I** vypočtěte podíl zisku jednotlivých světadílů na
    celkovém zisku cestovní kanceláře.
4.  Změny v souboru uložte. Z nabídky **Soubor** vyberte příkaz
    **Uložit** nebo klikněte na panelu Formát na ikonu **Uložit**.
    Soubor budeme používat i v příkladu 2.

[Zpět](#domu)

[]{style="font-size:18.0pt;font-family:Arial;
color:black;"}

## [Řešený]{#priklad2} příklad 2 --- Jak kopírovat vzorce na různé listy v dokumentu

**Úkol:**

V řešeném příkladu 1 jste na místa otazníku vypočetli výsledné hodnoty
pomocí vzorců či funkcí. Předpokládáme, že jste změny v dokumentu
uložili a že můžeme výsledné hodnoty použít v příkladu 2.

Kopírujte úsek buněk A8:E8 z Listu 1 na List 2 od pozice A4. Dále
kopírujte úsek buněk A8:E8 z Listu 1 na List 3 od pozice A3.

**Řešení:**

1.  Otevřete soubor **Cestovní kancelář**. Předpokládáme, že jsou v něm
    uloženy změny z řešeného příkladu č. 1.
2.  Vyberte úsek **A8:E8**. Výběr volíte myší metodou klepnu --- držím
    --- táhnu --- pustím. Jiná možnost je kliknout do buňky A8, podržet
    klávesu **SHIFT** a kliknout do buňky E8. Vybere se úsek od A8 do
    E8.\
    ![](images/ecdl/mod4/image015.jpg){width="561" height="434"}\
3.  Vybraný úsek nakopírujte do schránky. Klikněte na panelu Formát na
    ikonu **Kopírovat** nebo z nabídky **Úpravy** zvolte příkaz
    **Kopírovat** nebo zvolte klávesovou zkratku **CTRL+ C** nebo
    umístěte ukazatel myši do vybraného úseku a klikněte na pravé
    tlačítko myši a z místní nabídky vyberte **Kopírovat**. Úsek, který
    jste nakopírovali do schránky, je v programu označen čárkovanou
    čárou, která se "pohybuje" po obvodu úseku.
4.  Klikněte na záložku (ouško) **List2**, která je zobrazena v dolní
    levé oblasti pracovní plochy programu. Zvolte počáteční buňku (v
    našem případě je to buňka **A4** ) od které se budou do Listu 2
    vkládat buňky doposud uložené ve schránce. Klikněte na panelu Formát
    na ikonu **Vložit** nebo v nabídce **Úpravy** zvolte příkaz
    **Vložit** nebo zvolte klávesovou zkratku **CTRL+V**. Od buňky A4
    směrem doprava a dolů (v případě rozsáhlejšího úseku) se vloží obsah
    schránky.\
    ![](images/ecdl/mod4/image017.jpg){width="561" height="434"}\
    \
    Vzhledem k tomu, že v buňkách (kromě textu Celkem) byly funkce SUMA,
    překopírovaly se tyto funkce do nových buněk a vyhodnotily se podle
    nového umístění. Na Listě 1 byl v buňce B8 výraz =SUMA(B5:B7), jinak
    řečeno: sečti 3 buňky, které leží nad aktivní buňkou. Pokud tento
    výraz vložíte na jinou pozici (v našem případě na List 2 do pozice
    B4), vzorec se podle příkazu sečti 3 buňky, které leží nad buňkou
    B4, upraví do podoby =SUMA(B1:B3). Vzorec je věcně správný, protože
    3 buňky nad vyhodnocovanou buňkou existují. Mají ovšem nulový obsah,
    proto je výsledek v buňce B4 roven nule, podobně jako v dalších
    buňkách C4, D4, E4.
5.  Úsek A8:E8 z Listu 1 máme kopírovat ještě na List 3, ale nyní bude
    počáteční buňkou A3.\
    Úsek A8:E8 je stále ještě ve schránce (pokud snad ne, opakujte
    postup uvedený v úvodu bodu 3).
6.  Klikněte na záložku (ouško) **List3**, která je zobrazena v dolní
    levé oblasti pracovní plochy programu. Zvolte počáteční buňku (v
    našem případě je to buňka **A3**), od které se budou do Listu 3
    vkládat buňky doposud uložené ve schránce. Vložte obsah schránky.
    Tentokrát bude váš pokus neúspěšný. V úseku buněk se objeví chybové
    hlášky, které v našem případě vznikly proto, že potřebný počet
    prázdných buněk nad zvoleným počátkem byl menší než tři. Klikněte na
    panelu Formát na tlačítko **Zpět** nebo úsek A3:E3 smažte.\
    ![](images/ecdl/mod4/image019.jpg){width="561" height="434"}\
7.  V případech, kdy nepotřebujete do cílových buněk kopírovat vzorce,
    ale pouze jejich výsledné hodnoty, postupujte následovně. Kopírujte
    do schránky původní (zdrojový) úsek buněk. V našem případě z Listu1
    úsek A3:E8.
8.  Klikněte na List 3 a kliknutím zvolte počáteční buňku A3. Z nabídky
    **Úpravy** vyberte příkaz **Vložit jinak**.\
    ![](images/ecdl/mod4/image021.jpg){width="302" height="287"}\
    \
    V dialogovém okně Vložit jinak klikněte na přepínač **Hodnoty** a
    dále na **OK**.\
    ![](images/ecdl/mod4/image023.jpg){width="561" height="434"}\
    \
    Do buněk se nevloží rovnice (nebo chybová hlášení neúspěšně
    vložených rovnic), ale pouze výsledné hodnoty.

[Zpět](#domu)

## [Náměty]{#namety} na další příklady, které budou postupně řešeny v časopise Počítač pro každého

1.  Jak použít šablonu dokumentu.
2.  Jak vyhodnocovat data pomocí vzorců a funkcí z více dokumentů.
3.  Jak pojmenovat buňky či úseky buněk a jak pojmenované úseky použít
    ve vzorcích a funkcích.
4.  Jak vytvořit různé typy grafů.
5.  Jak překopírovat data z programu Excel do programu Word a jak je
    propojit.
6.  Jak pracovat s automatickými filtry.
7.  Jak pracovat se souhrny.
8.  Jak vytvořit kontingenční tabulku.
