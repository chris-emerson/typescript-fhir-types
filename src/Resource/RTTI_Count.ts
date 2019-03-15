
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';

export enum CountComparatorKind {
                lower = 'lower',
lowerOrEqual = 'lowerOrEqual',
greaterOrEqual = 'greaterOrEqual',
greater = 'greater'
            }
const CountComparatorKindKeys = t.keyof({
                [CountComparatorKind.lower]: null,
[CountComparatorKind.lowerOrEqual]: null,
[CountComparatorKind.greaterOrEqual]: null,
[CountComparatorKind.greater]: null
            });


            export interface ICount {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * The value of the measured amount. The value includes an implicit precision in the presentation of the value.
                     */
                    value? : number;
                    

                    /**
                     * Extensions for value
                     */
                    _value? : IElement;
                    

                    /**
                     * How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.
                     */
                    comparator? : CountComparatorKind;
                    

                    /**
                     * Extensions for comparator
                     */
                    _comparator? : IElement;
                    

                    /**
                     * A human-readable form of the unit.
                     */
                    unit? : string;
                    

                    /**
                     * Extensions for unit
                     */
                    _unit? : IElement;
                    

                    /**
                     * The identification of the system that provides the coded form of the unit.
                     */
                    system? : string;
                    

                    /**
                     * Extensions for system
                     */
                    _system? : IElement;
                    

                    /**
                     * A computer processable form of the unit in some unit representation system.
                     */
                    code? : string;
                    

                    /**
                     * Extensions for code
                     */
                    _code? : IElement;
                    
            }
        


        export const RTTI_Count: t.Type<ICount> = t.recursion( 'ICount', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
value: t.number,
_value: RTTI_Element,
comparator: CountComparatorKindKeys,
_comparator: RTTI_Element,
unit: t.string,
_unit: RTTI_Element,
system: t.string,
_system: RTTI_Element,
code: t.string,
_code: RTTI_Element
        })
        
        );
        

        