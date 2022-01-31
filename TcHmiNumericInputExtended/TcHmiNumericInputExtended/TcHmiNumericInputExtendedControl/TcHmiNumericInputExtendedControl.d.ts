/// <reference path="../.hmipkgs/Beckhoff.TwinCAT.HMI.Controls/TcHmiNumericInput/TcHmiNumericInput.d.ts" />
/// <reference path="../.hmiframework/TcHmi.d.ts" />
declare module TcHmi {
    module Controls {
        module TcHmiNumericInputExtended {
            class TcHmiNumericInputExtendedControl extends TcHmi.Controls.Beckhoff.TcHmiNumericInput {
                protected __unitText: string | null;
                protected __unitTextFontSize: number | null;
                protected __elementUnitText: JQuery;
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                getUnitTextFontSize(): number | null;
                setUnitTextFontSize(valueNew: number | null): void;
                getUnitText(): string | null;
                setUnitText(valueNew: string | null): void;
                /**
                * Processes the Key down handler.
                * @function
                */
                protected __keyDownHandler(e: any, $this: this): void;
            }
        }
    }
}
