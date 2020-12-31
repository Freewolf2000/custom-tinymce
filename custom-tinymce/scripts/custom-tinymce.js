// The custom parent class that allows the various setting needed to have
// a choice of journals similar to what actor sheets get
class CustomTinyMCE extends JournalSheet {


	get journal(){
		return this.object;
	}

	static get defaultOptions() {
		const options = super.defaultOptions;
		options.baseApplication = "JournalSheet";
		options.classes.push('custom-tinymce');
		return options;
	}
	//Include the option for the Drop Cap style in the editor styles' menu
	activateEditor(name, options={}, ...args) {
		if (!options.style_formats)
		{
			options.style_formats = [
				{
					title: "Custom",
					items: [
						{
							title: "Secret",
							block: 'section',
							classes: 'secret',
							wrapper: true
						}
					]
				}
			];
		}
		options.style_formats.push(
			{
				title: game.i18n.localize("custom-tinymce.StyleSection"),
				items: [
					{
						title: game.i18n.localize("custom-tinymce.SWADECore"),
						inline: 'div',
						classes: 'swade-core'
						wrapper: true
					},
					{
						title: game.i18n.localize("custom-tinymce.SimpleBlock"),
						block: 'section',
						classes: 'simple-block',
						wrapper: true
					},
					{
						title: game.i18n.localize("custom-tinymce.SimpleBlockFloat"),
						block: 'section',
						classes: 'simple-block-float',
						wrapper: true
					},
					{
						title: game.i18n.localize("custom-tinymce.RidgedBlock"),
						block: 'section',
						classes: 'ridged-block',
						wrapper: true
					},
					{
						title: game.i18n.localize("custom-tinymce.RidgedBlockFloat"),
						block: 'section',
						classes: 'ridged-block-float',
						wrapper: true
					}
				]
			}
		);
		super.activateEditor(name, options, ...args);
	}
}

// Creating the structure in CONFIG for Journals to have different sheets
console.log("CustomTinyMCE | Creating the structure to allow multiple Journal Sheets.")
CONFIG["JournalEntry"]["sheetClasses"] = {};
CONFIG["JournalEntry"]["sheetClasses"][CONST.BASE_ENTITY_TYPE] = {};

console.log("CustomTinyMCE | Registering the module's sheets.")

/*CUSTOMIZE
 * Here, register your sheet so it shows up properly in the dropdown, just change
 * for your sheet name and you're good to go
 */
// The default Foundry journal
EntitySheetConfig.registerSheet(JournalEntry, "journals", CustomTinyMCE, {
	// label: game.i18n.localize("custom-tinymce.CustomJournalSheet"),
	types: [CONST.BASE_ENTITY_TYPE],
	makeDefault: true
});
