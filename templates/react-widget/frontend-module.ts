/**
 * Generated using theia-extension-generator
 */
import { <%= params.extensionPrefix %>Contribution } from './<%= params.extensionPath %>-contribution';
import {
    CommandContribution,
    MenuContribution,
} from "@theia/core/lib/common";
import { FrontendApplicationContribution} from "@theia/core/lib/browser";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add the contribution bindings here
    bindViewContribution(bind, <%= params.extensionPrefix %>Contribution);
    bind(FrontendApplicationContribution).toService(<%= params.extensionPrefix %>Contribution); 
    bind(<%= params.extensionPrefix %>Widget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: <%= params.extensionPrefix %>Widget.ID,
        createWidget: () => ctx.container.get<<%= params.extensionPrefix %>Widget>(<%= params.extensionPrefix %>Widget)
    })).inSingletonScope();

    bind(CommandContribution).to(<%= params.extensionPrefix %>Contribution);
    bind(MenuContribution).to(<%= params.extensionPrefix %>Contribution);
});
