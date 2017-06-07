import {Component, Inject} from "@angular/core";
import {DOCUMENT} from "@angular/platform-browser";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    currentBuild: CurrentBuild;
    navCollapsed: boolean = true;

    constructor(@Inject(DOCUMENT) private document: any) {
        this.setCurrentBuildInfoFromDocumentHeadMeta();
    }

    private doesNotStartWith$(content: string): boolean {
        return !(content && content.indexOf('$') === 0);
    }

    getContentOfDocumentHeadMeta(metaName: string): string {
        if (metaName && this.document && this.document.head) {
            const metaElement = this.document.head.querySelector(`meta[name="${metaName}"]`);
            return metaElement && metaElement.content;
        }
    }

    setCurrentBuildInfoFromDocumentHeadMeta(): void {
        let version = this.getContentOfDocumentHeadMeta('version');
        let timestamp = this.getContentOfDocumentHeadMeta('timestamp');

        version = (version && this.doesNotStartWith$(version)) ? version : 'local';
        timestamp = (timestamp && this.doesNotStartWith$(timestamp)) ? timestamp : new Date().toUTCString();

        this.currentBuild = new CurrentBuild(version, timestamp);
    }

    toggleNavigation(): void {
        this.navCollapsed = !this.navCollapsed;
    };
}

class CurrentBuild {
    private _version: string;
    private _timestamp: string;

    constructor(version: string, timestamp: string) {
        this._version = version;
        this._timestamp = timestamp;
    }

    get version(): string {
        return this._version;
    }

    get timestamp(): string {
        return this._timestamp;
    }
}