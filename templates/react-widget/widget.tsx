import * as React from 'react';
import { injectable, postConstruct } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import <%= params.extensionPrefix %> from "./<%= params.extensionPath %>-app";


@injectable()
export class <%= params.extensionPrefix %>Widget extends ReactWidget {

    static readonly ID = '<%= params.extensionName %>:widget';
    static readonly LABEL = '<%= params.extensionPrefix %>';

    
    @postConstruct()
    protected async init(): Promise < void> {
        this.id = <%= params.extensionPrefix %>Widget.ID;
        this.title.label = <%= params.extensionPrefix %>Widget.LABEL;
        this.title.caption = <%= params.extensionPrefix %>Widget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'widget-icon';
        this.update();
    }

    protected render(): React.ReactNode {
        return <<%= params.extensionPrefix %> />
    }
}