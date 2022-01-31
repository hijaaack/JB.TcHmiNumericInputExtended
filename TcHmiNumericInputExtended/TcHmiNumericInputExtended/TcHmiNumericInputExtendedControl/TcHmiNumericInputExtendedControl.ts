/*
 * Generated 10/18/2021 11:21:42 AM
 * Copyright (C) 2021
 */

//References
///<reference path="../.hmipkgs/Beckhoff.TwinCAT.HMI.Controls/TcHmiNumericInput/TcHmiNumericInput.d.ts" />
///<reference path="../.hmiframework/TcHmi.d.ts" />

module TcHmi {
    export module Controls {
        export module TcHmiNumericInputExtended {
            export class TcHmiNumericInputExtendedControl extends TcHmi.Controls.Beckhoff.TcHmiNumericInput {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters.
                - The "changed detection" in the setter will result in processing the value only once while compile.
                - Attention: If we have a Server Binding on an Attribute the setter will be called once with null to initialize and later with the correct value.
                */

                protected __unitText: string | null;
                protected __unitTextFontSize: number | null;
                protected __elementUnitText!: JQuery;

                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }

				/**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                public __previnit() {
                    // Call __previnit of base class
                    super.__previnit();

                    this.__elementUnitText = this.__element.find('.TcHmi_Controls_Beckhoff_TcHmiNumericInput-template-unitbox');
                }
                /** 
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
                 * @returns {void}
                 */
                public __init() {
                    super.__init();
                }

                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __attach() {
                    super.__attach();

                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                    //reference to this for other scopes
                    var $this = this;

                    //add event listener for keydown
                    $(this.__elementInput).keydown(function (e) {
                        $this.__keyDownHandler(e, $this);
                    });
                }

                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __detach() {
                    super.__detach();

                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                }

                /**
                * Destroy the current control instance. 
                * Will be called automatically if system destroys control!
                */
                public destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }

                    super.destroy();

                    /**
                    * Free resources like child controls etc.
                    */
                }

                getUnitTextFontSize(): number | null {
                    return this.__unitTextFontSize;
                }

                public setUnitTextFontSize(valueNew: number | null) {
                    //convert the new value
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("UnitTextFontSize");
                    }

                    if (tchmi_equal(this.__unitTextFontSize, convertedValue))
                        return;

                    //save the new value
                    this.__unitTextFontSize = convertedValue;

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getUnitTextFontSize"]);

                    // @ts-ignore
                    $(this.__elementUnitText).css("font-size", this.__unitTextFontSize + "pt");
                }


                getUnitText(): string | null {
                    return this.__unitText;
                }

                public setUnitText(valueNew: string | null) {
                    //convert the new value
                    let convertedValue = TcHmi.ValueConverter.toString(valueNew);

                    //if converted value is null, get internal default
                    if (convertedValue === null) {
                        convertedValue = this.getAttributeDefaultValueInternal("UnitText");
                    }

                    if (tchmi_equal(this.__unitText, convertedValue))
                        return;

                    //save the new value
                    this.__unitText = convertedValue;

                    //Inform the system that the function has a changed result
                    TcHmi.EventProvider.raise(this.__id + ".onFunctionResultChanged", ["getUnitText"]);
                   
                    //@ts-ignore
                    $(this.__elementUnitText).attr("data-label", this.__unitText);
                }


                /**
                * Processes the Key down handler.
                * @function
                */
                protected __keyDownHandler(e: any, $this: this): void {
                    //check if the pressed key was the enter key
                    if (e.which === 13) {
                        //raise event
                        TcHmi.EventProvider.raise($this.getId() + '.onEnterPressed');
                        $(this.__elementInput).blur();
                    }
                }
            }
        }
    }
}
/**
* Register Control
*/
TcHmi.Controls.registerEx('TcHmiNumericInputExtended', 'TcHmi.Controls.TcHmiNumericInputExtended', TcHmi.Controls.TcHmiNumericInputExtended.TcHmiNumericInputExtendedControl);
