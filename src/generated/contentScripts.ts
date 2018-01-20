/**
 * Namespace: browser.contentScripts
 * Generated from Mozilla sources
 *
 * Comments found in source JSON schema files:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Manifest } from "./Manifest";
import { ExtensionTypes } from "./ExtensionTypes";

export namespace ContentScripts {
    export type ExtensionFileOrCode = ExtensionFileOrCodeC1Type | ExtensionFileOrCodeC2Type;

    /**
     * Details of a content script registered programmatically
     */
    export interface RegisteredContentScriptOptions {
        matches: [Manifest.MatchPattern];

        /**
         * Optional.
         */
        excludeMatches?: [Manifest.MatchPattern];

        /**
         * Optional.
         */
        includeGlobs?: string[];

        /**
         * Optional.
         */
        excludeGlobs?: string[];

        /**
         * The list of CSS files to inject
         * Optional.
         */
        css?: ExtensionFileOrCode[];

        /**
         * The list of JS files to inject
         * Optional.
         */
        js?: ExtensionFileOrCode[];

        /**
         * If allFrames is <code>true</code>, implies that the JavaScript or CSS should be injected into all frames of current page. By default, it's <code>false</code> and is only injected into the top frame.
         * Optional.
         */
        allFrames?: boolean;

        /**
         * If matchAboutBlank is true, then the code is also injected in about:blank and about:srcdoc frames if your extension has access to its parent document. Code cannot be inserted in top-level about:-frames. By default it is <code>false</code>.
         * Optional.
         */
        matchAboutBlank?: boolean;

        /**
         * The soonest that the JavaScript or CSS will be injected into the tab. Defaults to "document_idle".
         * Optional.
         */
        runAt?: ExtensionTypes.RunAt;
    }

    /**
     * An object that represents a content script registered programmatically
     */
    export interface RegisteredContentScript {

        /**
         * Unregister a content script registered programmatically
         */
        unregister(): void;
    }

    export interface ExtensionFileOrCodeC1Type {
        file: Manifest.ExtensionURL;
    }

    export interface ExtensionFileOrCodeC2Type {
        code: string;
    }

    export interface Static {

        /**
         * Register a content script programmatically
         *
         * @param contentScriptOptions
         */
        register(contentScriptOptions: RegisteredContentScriptOptions): void;
    }
}