import { injectable} from "inversify";
import { Command } from "@theia/core/lib/common";
import { AbstractViewContribution, FrontendApplicationContribution } from '@theia/core/lib/browser';
import { <%= params.extensionPrefix %>Widget  } from './<%= params.extensionPath %>-widget';


export const <%= params.extensionPrefix %>Command: Command = {
    id: '<%= params.extensionName %>:command', 
    label: "View <%= params.extensionPrefix %>"
};

@injectable()
export class <%= params.extensionPrefix %>Contribution 
extends AbstractViewContribution<<%= params.extensionPrefix %>Widget> 
implements FrontendApplicationContribution
{
    constructor() {
        super({
            widgetId: <%= params.extensionPrefix %>Widget.ID,
            widgetName: <%= params.extensionPrefix %>Widget.LABEL,
            defaultWidgetOptions: {
                area: 'right',
                rank: 100
            },
            toggleCommandId: <%= params.extensionPrefix %>Command.id
        });
    }

    // makes the widget icon visible on application start
    onDidInitializeLayout(): void {
        this.openView();
    }

    // register the command in the command registry
    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(<%= params.extensionPrefix %>Command, {
            execute: () => super.openView({ activate: false, reveal: true }) 
        });
    }

    // register the command in the application View menu
    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: <%= params.extensionPrefix %>Command.id,
            label: <%= params.extensionPrefix %>Command.label
        });
    }

}