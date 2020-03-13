# slide-template
Master keynote templates with themes

## Description

This repo contains keynote themes, guidelines, and assets to create a presentation.

* Most text is defined as *text placeholder* in the master slide so they are easily editable.
* Most images are defined as *media placeholder* in the master slide so they are easily editable.
* The template uses a *[table with variables][table]* to globally update slide information.
* Both `.key` and `.kth (template files)` are provided.

## Template
* Turn on **guides and rulers** for better alignment and 'clear' space options.
* Turn on the **object list** for layers in the sidebar.
* **Customize the toolbar** with right clicking on it.

## Colors
Colors are saved as `txt` and converted to `clr` with [ColorTools][colortools] so they can be imported into Keynote.

```bash
./Html2Clr ./NAME_OF_THEME.txt 
```

`cmd + shift + c` to open the color picker and click on the gear icon to open the `clr` file.

## Icons
Icons used in the template are either self-made, from [Octicons][octi] or [The Noun Project][noun].

## Typography
The master template uses the [Inter Font Family][inter] and [Simplon Mono][simplon] (not included in the assets folder). The template uses *paragraphy styles* to set-up the type scale.

* Inter is used for heading and body copy.
* Simplon is used for code and labels/eyebrow text.

## Code Highlighting

## Inspiration
Slide templates and style inspired by [GitHub primer presentation][github], [The Verge][verge] and [Vox][vox].

## License
[MIT][license] © [Danny de Vries][author]


[colortools]: https://github.com/ramonpoca/ColorTools
[octi]: https://github.com/primer/octicons
[noun]: https://thenounproject.com/
[inter]: https://rsms.me/inter/
[simplon]: https://www.swisstypefaces.com/fonts/simplon/
[table]: https://primer.style/presentations/footer
[github]: https://primer.style/presentations
[verge]: https://www.youtube.com/user/TheVerge
[vox]: https://www.youtube.com/user/voxdotcom
[author]: https://github.com/dandevri
[license]: license
